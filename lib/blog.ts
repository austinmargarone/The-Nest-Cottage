import fs from "node:fs";
import path from "node:path";
import posts from "@/content/blog.json";

// Blog posts imported from the old WordPress site (content/blog.json).
// To re-import, see scripts/wp2blog.py.
export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  cover: string | null;
  html: string;
};

// Photos dropped into public/photos/blog (same file name as on the old site) replace the
// old WordPress links automatically. Anything not uploaded yet still loads from the old site.
const localDir = path.join(process.cwd(), "public", "photos", "blog");
const local = new Set(fs.existsSync(localDir) ? fs.readdirSync(localDir) : []);
const toLocal = (url: string) => {
  const name = decodeURIComponent(url.split("?")[0].split("/").pop() || "");
  return local.has(name) ? `/photos/blog/${encodeURIComponent(name)}` : url;
};
const fixHtml = (html: string) =>
  html.replace(/https:\/\/thenest-cottage\.com\/wp-content\/uploads\/[^"']+/g, (u) => toLocal(u));

export const allPosts = (posts as Post[]).map((p) => ({
  ...p,
  cover: p.cover ? toLocal(p.cover) : null,
  html: fixHtml(p.html),
}));

export const getPost = (slug: string) => allPosts.find((p) => p.slug === slug);

export const formatDate = (d: string) =>
  new Date(`${d}T12:00:00`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
