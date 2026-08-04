import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { blogArticles, blogCategories, categoryLabels, type BlogCategory } from "@/lib/content/blog";
import { buildMetadata } from "@/lib/seo/metadata";

export function generateStaticParams() {
  return blogCategories.map((category) => ({ category }));
}

function isBlogCategory(value: string): value is BlogCategory {
  return (blogCategories as readonly string[]).includes(value);
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  if (!isBlogCategory(category)) return buildMetadata({ title: "Category Not Found", description: "", path: "/blog" });
  return buildMetadata({
    title: categoryLabels[category],
    description: `${categoryLabels[category]} articles from Natalie Pilkinton.`,
    path: `/blog/${category}`,
  });
}

export default async function BlogCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  if (!isBlogCategory(category)) notFound();

  const articles = blogArticles.filter((article) => article.category === category);

  return (
    <>
      <BreadcrumbBar items={[{ name: "Blog", path: "/blog" }, { name: categoryLabels[category], path: `/blog/${category}` }]} />
      <Hero title={categoryLabels[category]} subheading={`${categoryLabels[category]} articles and guides`} align="left" />
      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
            {articles.map((article) => (
              <Link
                key={article.id}
                href={`/blog/${article.category}/${article.slug}`}
                className="group border border-gray-200 rounded-lg p-lg hover:shadow-lg transition-shadow"
              >
                <div className="mb-sm">
                  <span className="text-xs font-semibold text-navy uppercase">{categoryLabels[article.category]}</span>
                </div>
                <h3 className="text-lg font-bold mb-sm group-hover:text-navy transition-colors">{article.title}</h3>
                <p className="text-sm text-gray-600 mb-md">{article.excerpt}</p>
                <div className="flex justify-between items-center text-xs text-gray-500">
                  <span>{article.date}</span>
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