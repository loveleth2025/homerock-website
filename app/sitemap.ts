import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/data/navigation";
import { blogCategories, blogArticles } from "@/lib/content/blog";
import { marketUpdates } from "@/lib/content/market-updates";
import { getListingSlugs } from "@/lib/listings";

const staticPaths = [
  "/",
  "/about",
  "/booking",
  "/contact",
  "/privacy-policy",
  "/terms-of-service",

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
  "/resources/templates",

  "/blog",

  "/listings",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const dynamicPaths = [
    ...blogCategories.map((category) => `/blog/${category}`),
    ...blogArticles.map((article) => `/blog/${article.category}/${article.slug}`),
    ...marketUpdates.map((update) => `/market-updates/${update.slug}`),
    ...getListingSlugs().map((slug) => `/listings/${slug}`),
  ];

  return [...staticPaths, ...dynamicPaths].map((path) => ({
    url: `${siteConfig.siteUrl}${path}`,
    lastModified: new Date(),
  }));
}
