import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SearchBar } from "@/components/forms/SearchBar";
import { categoryLabels, blogCategories } from "@/lib/content/blog";
import { buildMetadata } from "@/lib/seo/metadata";
import { getArticles } from "@/lib/sanity/client";

export const metadata: Metadata = buildMetadata({
  title: "Blog",
  description: "Real estate education articles for Texas home buyers, sellers, investors, and realtors.",
  path: "/blog",
});

export default async function BlogPage() {
  const articles = await getArticles();

  return (
    <>
      <Hero
        title="The HomeRock Blog"
        subheading="Real estate education for buyers, sellers, investors, and realtors"
        align="left"
      />
      <Section>
        <Container>
          <div className="mb-2xl">
            <SearchBar placeholder="Search articles..." />
          </div>
          <div className="flex gap-md flex-wrap mb-2xl">
            {blogCategories.map((category) => (
              <Link
                key={category}
                href={`/blog/${category}`}
                className="px-md py-sm text-sm font-semibold border border-navy text-navy rounded-xs hover:bg-navy hover:text-white transition-colors"
              >
                {categoryLabels[category]}
              </Link>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
            {articles?.map((article: any) => (
              <Link
                key={article._id}
                href={`/blog/${article.category}/${article.slug.current}`}
                className="group border border-gray-200 rounded-lg p-lg hover:shadow-lg transition-shadow"
              >
                <div className="mb-sm">
                  <span className="text-xs font-semibold text-navy uppercase">
                    {categoryLabels[article.category]}
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