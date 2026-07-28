export type BlogArticle = {
  slug: string;
  category: string;
  title: string;
  description: string;
  date: string;
};

export const blogCategories = ["buying", "selling", "investing", "realtor-growth", "market-news"] as const;

export type BlogCategory = (typeof blogCategories)[number];

export const categoryLabels: Record<BlogCategory, string> = {
  buying: "Home Buying",
  selling: "Home Selling",
  investing: "Investing",
  "realtor-growth": "Realtor Growth",
  "market-news": "Market News",
};

/**
 * No blog articles exist yet in the Natalie Knowledge Base. This is the
 * intended home for hundreds of future educational articles — populate it
 * as real, non-fabricated content becomes available.
 */
export const blogArticles: BlogArticle[] = [];
