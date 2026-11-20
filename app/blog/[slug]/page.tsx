import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allPosts, formatDate, getPost } from "@/lib/blog";

export function generateStaticParams() {
  return allPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.excerpt,
    openGraph: { title: p.title, description: p.excerpt, type: "article", images: p.cover ? [p.cover] : undefined },
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const i = allPosts.indexOf(post);
  const newer = allPosts[i - 1];
  const older = allPosts[i + 1];

  return (
    <article>
      <header className="wrap page-head centered">
        <p className="crumb">
          <Link href="/blog">Blog</Link>
        </p>
        <h1 className="post-title">{post.title}</h1>
        <p>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </p>
      </header>
      <div className="section wrap">
        <div className="prose" dangerouslySetInnerHTML={{ __html: post.html }} />
        <nav className="post-nav" aria-label="More posts">
          {older ? (
            <Link href={`/blog/${older.slug}`}>
              <span>Older post</span>
              {older.title}
            </Link>
          ) : (
            <span />
          )}
          {newer && (
            <Link href={`/blog/${newer.slug}`} className="newer">
              <span>Newer post</span>
              {newer.title}
            </Link>
          )}
        </nav>
      </div>
    </article>
  );
}
