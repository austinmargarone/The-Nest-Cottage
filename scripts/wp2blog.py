import sys, json, re, html, os, xml.etree.ElementTree as ET
ns={'wp':'http://wordpress.org/export/1.2/','content':'http://purl.org/rss/1.0/modules/content/'}
src, out_json, photo_dir, need_txt = sys.argv[1:5]
items=ET.parse(src).getroot().find('channel').findall('item')
def basename(url):
    f=url.split('?')[0].rsplit('/',1)[-1]
    return re.sub(r'-\d+x\d+(?=\.\w+$)','',f)
needed={}
def img_src(url):
    b=basename(url); full=re.sub(r'-\d+x\d+(?=\.\w+$)','',url.split('?')[0]).replace('http://','https://')
    needed[b]=full
    return f"/photos/blog/{b}" if os.path.exists(os.path.join(photo_dir,b)) else full
def link(url):
    u=url.strip()
    m=re.match(r'https?://(www\.)?thenest-?cottage\.com(/[^"]*)?$',u)
    if m:
        p=m.group(2) or '/'
        if '/wp-content/uploads/' in p: return u.replace('http://','https://')
        return p
    return u
posts=[]
slugs=[i.findtext('wp:post_name',namespaces=ns) for i in items if i.findtext('wp:status',namespaces=ns)=='publish']
for i in items:
    if i.findtext('wp:post_type',namespaces=ns)!='post' or i.findtext('wp:status',namespaces=ns)!='publish': continue
    slug=i.findtext('wp:post_name',namespaces=ns); title=re.sub(r'\s+',' ',html.unescape(i.findtext('title'))).strip()
    h=i.findtext('content:encoded',namespaces=ns) or ''
    h=re.sub(r'<!--.*?-->','',h,flags=re.S)
    # highlighted words -> span.hl
    h=re.sub(r'<mark[^>]*>',r'<span class="hl">',h); h=h.replace('</mark>','</span>')
    # images
    h=re.sub(r'<img([^>]*?)src="([^"]+)"([^>]*)>', lambda m: '<img src="%s" alt="%s" loading="lazy">'%(img_src(m.group(2)), html.escape(html.unescape((re.search(r'alt="([^"]*)"',m.group(1)+m.group(3)) or [None,''])[1]))), h)
    # links
    def fix_a(m):
        attrs=m.group(1); href=re.search(r'href="([^"]*)"',attrs)
        if not href: return '<a>'
        u=link(html.unescape(href.group(1)))
        for s in slugs:
            if u.rstrip('/')=='/'+s: u='/blog/'+s
        ext=u.startswith('http')
        return '<a href="%s"%s>'%(html.escape(u,quote=True),' target="_blank" rel="noopener"' if ext else '')
    h=re.sub(r'<a\b([^>]*)>',fix_a,h)
    # keep alignment, background callouts, galleries; drop other classes/styles
    def fix_cls(m):
        tag,attrs=m.group(1),m.group(2)
        if tag in('img','a'): return m.group(0)
        cls=re.search(r'class="([^"]*)"',attrs); keep=[]
        if cls:
            c=cls.group(1)
            if 'has-text-align-center' in c: keep.append('c')
            if 'has-text-align-right' in c: keep.append('r')
            if 'has-background' in c: keep.append('callout')
            if 'wp-block-gallery' in c: keep.append('gallery')
            if 'wp-block-columns' in c: keep.append('cols')
            if tag=='span' and 'hl' in c: keep.append('hl')
        return '<%s%s>'%(tag,' class="%s"'%' '.join(keep) if keep else '')
    h=re.sub(r'<(\w+)\b((?:\s[^>]*)?)>',fix_cls,h)
    h=re.sub(r'<(div|figure)>\s*(<(?:div|figure)[^>]*>)',r'\2',h)
    h=re.sub(r'<p( class="[^"]*")?>(\s|&nbsp;|<br>)*</p>','',h)
    h=re.sub(r'(<br>\s*){3,}','<br><br>',h)
    h=re.sub(r'<h1',"<h2",h).replace('</h1>','</h2>')
    h=re.sub(r'\n\s*\n+','\n',h).strip()
    text=re.sub(r'\s+',' ',html.unescape(re.sub(r'<[^>]+>',' ',h))).strip()
    first=re.search(r'<img src="([^"]+)"',h)
    posts.append({"slug":slug,"title":title,"date":i.findtext('wp:post_date',namespaces=ns)[:10],
      "excerpt":(text[:180].rsplit(' ',1)[0]+'…') if len(text)>180 else text,
      "cover":first.group(1) if first else None,"html":h})
posts.sort(key=lambda p:p['date'],reverse=True)
json.dump(posts,open(out_json,'w'),indent=1,ensure_ascii=False)
open(need_txt,'w').write("\n".join(f"{b}\t{u}" for b,u in sorted(needed.items())))
print(len(posts),"posts,",len(needed),"images;", sum(os.path.exists(os.path.join(photo_dir,b)) for b in needed),"local")
