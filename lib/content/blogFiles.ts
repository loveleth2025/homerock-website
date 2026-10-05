import fs from "fs";
import path from "path";

/**
 * Reads blog articles straight from public/blog-content/*.txt at build time.
 * Each file is a block of `key: value` metadata lines, a separator line
 * containing "===", then the plain-text body.
 */

export type BlogFilePost = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  image?: string;
  /** ISO date (YYYY-MM-DD) parsed from the file's DATE line. */
  date?: string;
  readTime: number;
  body: string;
};

const CONTENT_DIR = path.join(process.cwd(), "public", "blog-content");

function toIsoDate(value: string | undefined): string | undefined {
  if (!value) return undefined;
  const ms = Date.parse(`${value} 12:00 UTC`);
  return Number.isNaN(ms) ? undefined : new Date(ms).toISOString().slice(0, 10);
}

function parseFile(raw: string): BlogFilePost | null {
  const lines = raw.split(/\r?\n/);
  const meta: Record<string, string> = {};
  let bodyStart = -1;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.includes("===")) {
      bodyStart = i + 1;
      break;
    }
    const colon = line.indexOf(":");
    if (colon > 0 && !line.startsWith("![")) {
      meta[line.slice(0, colon).trim().toLowerCase()] = line.slice(colon + 1).trim();
    }
  }

  if (bodyStart < 0 || !meta.slug || !meta.title || !meta.category) return null;

  return {
    slug: meta.slug,
    title: meta.title,
    category: meta.category,
    excerpt: meta.excerpt ?? "",
    image: meta.image || undefined,
    date: toIsoDate(meta.date),
    readTime: parseInt(meta["read time"], 10) || 5,
    body: lines.slice(bodyStart).join("\n").trim(),
  };
}

let cache: BlogFilePost[] | null = null;

export function getAllBlogFilePosts(): BlogFilePost[] {
  if (cache) return cache;
  const posts = fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith(".txt"))
    .map((file) => parseFile(fs.readFileSync(path.join(CONTENT_DIR, file), "utf-8")))
    .filter((post): post is BlogFilePost => post !== null);
  cache = posts;
  return posts;
}

export function getBlogFilePost(slug: string): BlogFilePost | undefined {
  return getAllBlogFilePosts().find((post) => post.slug === slug);
}

/** Same shape the Sanity article queries return, so list pages can merge both sources. */
export function toArticleListItem(post: BlogFilePost): ArticleListItem {
  return {
    _id: `file-${post.slug}`,
    title: post.title,
    slug: { current: post.slug },
    category: post.category,
    excerpt: post.excerpt,
    publishedAt: post.date,
    readTime: `${post.readTime} min`,
  };
}

/**
 * Turns the plain-text body into markdown. Bodies were written as plain text:
 * a short line on its own that doesn't end like a sentence is a section heading,
 * and lines starting with -, • or * are list items.
 */
export function bodyToMarkdown(body: string): string {
  const blocks = body.split(/\n\s*\n/).map((block) => block.trim()).filter(Boolean);

  return blocks
    .map((block, index) => {
      const lines = block.split("\n").map((line) => line.trim());

      // Already markdown (images, headings) — leave untouched.
      if (/^(!\[|#{1,6}\s)/.test(lines[0])) return block;

      // A heading line followed directly by text in the same block (older posts: "WHY SPRING?\nSpring offers…").
      if (lines.length > 1 && isHeading(lines[0], index)) {
        return `## ${headingCase(lines[0])}\n\n${lines.slice(1).join("\n")}`;
      }

      if (lines.length === 1 && isHeading(lines[0], index)) {
        return `## ${headingCase(lines[0])}`;
      }

      if (lines.every((line) => /^[-•*]\s+/.test(line))) {
        return lines.map((line) => `- ${line.replace(/^[-•*]\s+/, "")}`).join("\n");
      }

      return block;
    })
    .join("\n\n");
}

function isHeading(line: string, blockIndex: number): boolean {
  if (blockIndex === 0) return false;
  if (line.length > 90 || line.length < 3) return false;
  if (/^[-•*]\s/.test(line)) return false;
  if (/[.,;:!]$/.test(line)) return false;
  if (!/^[A-Z0-9$]/.test(line)) return false;
  const words = line.split(/\s+/).length;
  // A one-word line is only a heading when it was written in caps ("TIMELINE"), not a rhetorical aside ("Translation?").
  if (words === 1 && line !== line.toUpperCase()) return false;
  return words <= 14;
}

function headingCase(line: string): string {
  // ALL-CAPS headings from older posts read better in title case.
  if (line === line.toUpperCase() && /[A-Z]/.test(line)) {
    return line
      .toLowerCase()
      .replace(/(^|[\s\-(/&])([a-z])/g, (_match, lead: string, letter: string) => lead + letter.toUpperCase())
      .replace(/\b(Tx|Isd|Roi|Dscr|Hoa|Fha|Va|Usda|Mls|Dpa|Ltv|Arv|Brrrr|Pmi)\b/g, (word) => word.toUpperCase());
  }
  return line;
}

/** Shape shared by Sanity article queries and file posts on the blog list pages. */
export type ArticleListItem = {
  _id: string;
  title: string;
  slug: { current: string };
  category: string;
  excerpt?: string;
  publishedAt?: string;
  readTime?: string | number;
};

/**
 * Adds file-only posts (published as files but never entered in Sanity) to a
 * Sanity article list, newest first, so they are linked from the blog pages.
 */
export function mergeWithFilePosts(articles: ArticleListItem[] | null | undefined): ArticleListItem[] {
  const list: ArticleListItem[] = [...(articles ?? [])];
  const known = new Set(list.map((article) => article.slug?.current));
  for (const post of getAllBlogFilePosts()) {
    if (!known.has(post.slug)) list.push(toArticleListItem(post));
  }
  const time = (value?: string) => (value ? Date.parse(value) || 0 : 0);
  return list.sort((a, b) => time(b.publishedAt) - time(a.publishedAt));
}
