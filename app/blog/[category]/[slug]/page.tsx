import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogArticles } from "@/lib/content/blog";
import { buildMetadata } from "@/lib/seo/metadata";

export function generateStaticParams() {
  return blogArticles.map((article) => ({ category: article.category, slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}): Promise<Metadata> {
  const { category, slug } = await params;
  const article = blogArticles.find((item) => item.category === category && item.slug === slug);
  if (!article) return buildMetadata({ title: "Article Not Found", description: "", path: "/blog" });
  return buildMetadata({ title: article.title, description: article.description, path: `/blog/${category}/${slug}` });
}

/** No articles are published yet — every article slug 404s until real content exists. */
export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  const article = blogArticles.find((item) => item.category === category && item.slug === slug);
  if (!article) notFound();
  return null;
}
