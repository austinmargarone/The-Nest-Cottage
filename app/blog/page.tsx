/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { allPosts, formatDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Where to eat, what to see and where to shop in Webster, Rochester, the Erie Canal and the Finger Lakes, plus news from The Nest Cottage.",
};

export default function BlogIndex() {
  return (
    <>
      <header className="wrap page-head centered">
        <h1>Blog</h1>
        <p className="lede">
          This blog is all about Webster, Rochester, the Erie Canal and the Finger Lakes, and all there
          is to eat, see and shop while visiting this beautiful part of Upstate New York. We provide
          this information for our guests, as well as anyone visiting or living in the area.
        </p>
      </header>
      <section className="section wrap">
        <ul className="post-list">
          {allPosts.map((p) => (
            <li key={p.slug}>
              <Link href={`/blog/${p.slug}`}>
                {p.cover ? (
                  <img src={p.cover} alt="" loading="lazy" />
                ) : (
                  <span className="post-noimg" aria-hidden="true">
                    <img src="/brand/logo-light.png" alt="" />
                  </span>
                )}
                <time dateTime={p.date}>{formatDate(p.date)}</time>
                <h2>{p.title}</h2>
                <p>{p.excerpt}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
