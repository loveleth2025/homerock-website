import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { ResourceCard } from "@/components/cards/ResourceCard";
import { CTA } from "@/components/sections/CTA";
import { Button } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Buyer Resources",
  description: "Free guides and calculators for home buyers, from Natalie Pilkinton.",
  path: "/buyers/resources",
});

const resources = [
  {
    category: "Guide",
    title: "Home Buyer's Checklist",
    description: "Complete checklist of everything you need before making an offer.",
    cta: { label: "Get the Checklist →", href: "/resources/checklists/home-buyer-checklist" },
  },
  {
    category: "Calculator",
    title: "Should I Rent or Buy?",
    description: "Compare the real cost of renting versus buying over time, powered by HAR.com's mortgage calculator.",
    cta: {
      label: "Open Calculator →",
      href: "https://www.har.com/mortgage/time-value-calculators?CALCULATORID=HF05",
      external: true,
    },
  },
];

export default function BuyerResourcesPage() {
  return (
    <>
      <BreadcrumbBar items={[{ name: "Home Buyers", path: "/buyers" }, { name: "Buyer Resources", path: "/buyers/resources" }]} />

      <Hero title="Buyer Resources" subheading="Free guides and calculators, all in one place" align="left" />

      <Section>
        <Container>
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-lg">
            {resources.map((resource) => (
              <ResourceCard key={resource.title} {...resource} />
            ))}
          </div>
        </Container>
      </Section>

      <CTA title="Ready to Start Your Buying Journey?" description="Book a free consultation to discuss your home buying goals.">
        <Button href="/booking">Schedule a Consultation →</Button>
      </CTA>
    </>
  );
}
