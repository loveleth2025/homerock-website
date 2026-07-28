import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SearchBar } from "@/components/forms/SearchBar";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Resources",
  description: "Free guides, calculators, downloads, checklists, and templates for buyers, sellers, investors, and realtors.",
  path: "/resources",
});

const categories = [
  { label: "Free Guides", href: "/resources/guides", icon: "📘" },
  { label: "Calculators", href: "/resources/calculators", icon: "🧮" },
  { label: "Downloads", href: "/resources/downloads", icon: "⬇️" },
  { label: "Checklists", href: "/resources/checklists", icon: "✅" },
  { label: "Templates", href: "/resources/templates", icon: "📝" },
];

export default function ResourcesPage() {
  return (
    <>
      <Hero title="Resources" subheading="Free guides, calculators, downloads, checklists, and templates" align="left" />

      <Section>
        <Container>
          <div className="mb-2xl">
            <SearchBar placeholder="Search resources..." />
          </div>

          <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-lg">
            {categories.map((category) => (
              <Link
                key={category.href}
                href={category.href}
                className="bg-cream p-lg rounded-xs text-center transition-all hover:bg-navy hover:text-white group"
              >
                <div className="text-3xl mb-md">{category.icon}</div>
                <h4 className="text-navy group-hover:text-gold mb-0">{category.label}</h4>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
