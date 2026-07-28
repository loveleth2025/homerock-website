import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { PlaceholderNotice } from "@/components/ui/PlaceholderNotice";
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
          {articles.length === 0 ? (
            <PlaceholderNotice note="No articles have been published in this category yet." />
          ) : null}
        </Container>
      </Section>
    </>
  );
}
