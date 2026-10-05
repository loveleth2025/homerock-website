import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/data/navigation";
import { blogCategories } from "@/lib/content/blog";
import { getAllBlogFilePosts } from "@/lib/content/blogFiles";
import { marketUpdates } from "@/lib/content/market-updates";
import { podcastTranscripts } from "@/lib/content/podcastTranscripts";
import { getListingSlugs } from "@/lib/listings";
import { isPlaceholderPath } from "@/lib/seo/placeholders";

const staticPaths = [
  "/",
  "/about",
  "/booking",
  "/contact",
  "/privacy-policy",
  "/terms-of-service",
  "/webinar",

  "/buyers",
  "/buyers/first-time-buyers",
  "/buyers/credit",
  "/buyers/financing",
  "/buyers/new-construction",
  "/buyers/relocation",
  "/buyers/process",
  "/buyers/faq",
  "/buyers/resources",

  "/sellers",
  "/sellers/process",
  "/sellers/pricing",
  "/sellers/marketing",
  "/sellers/home-value",
  "/sellers/staging",
  "/sellers/faq",

  "/investors",
  "/investors/beginner",
  "/investors/passive",
  "/investors/multifamily",
  "/investors/brrrr",
  "/investors/private-lending",
  "/investors/case-studies",
  "/investors/vendors",
  "/vendor-sponsorship",

  "/realtors",
  "/realtors/join",
  "/realtors/agent-attraction",
  "/realtors/coaching",
  "/realtors/training",

  "/podcast",
  "/market-updates",

  "/resources",
  "/resources/guides",
  "/resources/calculators",
  "/resources/downloads",
  "/resources/checklists",
  "/resources/checklists/home-buyer-checklist",
  "/resources/checklists/pre-sale-checklist",
  "/resources/templates",

  "/blog",
  "/listings",
];

/** "August 5, 2026" → Date, or undefined when the text isn't a date. */
function parseDate(value?: string): Date | undefined {
  if (!value) return undefined;
  const ms = Date.parse(value.length > 10 ? `${value} 12:00 UTC` : `${value}T12:00:00Z`);
  return Number.isNaN(ms) ? undefined : new Date(ms);
}

type Entry = { path: string; lastModified?: Date };

export default function sitemap(): MetadataRoute.Sitemap {
  // lastModified is only set where a real content date exists; a build timestamp
  // on every URL tells search engines nothing and gets ignored.
  const entries: Entry[] = [
    ...staticPaths.map((path) => ({ path })),
    ...blogCategories.map((category) => ({ path: `/blog/${category}` })),
    ...getAllBlogFilePosts().map((post) => ({
      path: `/blog/${post.category}/${post.slug}`,
      lastModified: parseDate(post.date),
    })),
    ...marketUpdates.map((update) => ({
      path: `/market-updates/${update.slug}`,
      lastModified: parseDate(update.date),
    })),
    ...podcastTranscripts.map((transcript) => ({ path: `/podcast/transcripts/${transcript.slug}` })),
    ...getListingSlugs().map((slug) => ({ path: `/listings/${slug}` })),
  ];

  return entries
    .filter((entry) => !isPlaceholderPath(entry.path))
    .map((entry) => ({
      url: `${siteConfig.siteUrl}${entry.path}`,
      ...(entry.lastModified ? { lastModified: entry.lastModified } : {}),
    }));
}
