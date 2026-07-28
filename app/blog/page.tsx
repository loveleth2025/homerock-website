import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { PlaceholderNotice } from "@/components/ui/PlaceholderNotice";
import { SearchBar } from "@/components/forms/SearchBar";
import { blogCategories, categoryLabels } from "@/lib/content/blog";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Blog",
  description: "Real estate education articles for Texas home buyers, sellers, investors, and realtors.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <Hero title="The HomeRock Blog" subheading="Real estate education for buyers, sellers, investors, and realtors" align="left" />

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
                className="px-md py-sm text-sm font-semibold border border-navy text-navy rounded-[2px] hover:bg-navy hover:text-white transition-colors"
              >
                {categoryLabels[category]}
              </Link>
            ))}
          </div>

          <PlaceholderNotice note="No articles have been published yet." />
        </Container>
      </Section>
    </>
  );
}
