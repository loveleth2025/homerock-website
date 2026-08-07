import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { categoryLabels, blogCategories, type BlogCategory } from "@/lib/content/blog";
import { buildMetadata } from "@/lib/seo/metadata";
import { getArticles } from "@/lib/sanity/client";

export async function generateStaticParams() {
  return blogCategories.map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const label = categoryLabels[category as BlogCategory] || "Articles";
  return buildMetadata({
    title: `${label} - Blog`,
    description: `Browse our collection of ${label.toLowerCase()} articles.`,
    path: `/blog/${category}`,
  });
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const articles = await getArticles();
  const typedArticles = articles as any[];
  const categoryArticles = typedArticles?.filter((article: any) => article.category === category) || [];

  return (
    <>
      <Hero
        title={categoryLabels[category as BlogCategory] || "Articles"}
        subheading={`Explore our ${categoryLabels[category as BlogCategory]?.toLowerCase()} guides and resources`}
        align="left"
      />
      <Section>
        <Container>
          <div className="mb-2xl">
            <Link
              href="/blog"
              className="text-navy hover:underline text-sm font-semibold"
            >
              ← Back to All Articles
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
            {categoryArticles.map((article: any) => (
              <Link
                key={article._id}
                href={`/blog/${article.category}/${article.slug.current}`}
                className="group border border-gray-200 rounded-lg p-lg hover:shadow-lg transition-shadow"
              >
                <div className="mb-sm">
                  <span className="text-xs font-semibold text-navy uppercase">
                    {categoryLabels[article.category as keyof typeof categoryLabels]}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-sm group-hover:text-navy transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-600 mb-md">{article.excerpt}</p>
                <div className="flex justify-between items-center text-xs text-gray-500">
                  <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
                  <span>{article.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}