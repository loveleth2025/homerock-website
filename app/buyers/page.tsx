import type { Metadata } from "next";
import { AcademyLayout } from "@/layouts/AcademyLayout";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Timeline } from "@/components/sections/Timeline";
import { Card, CardTitle } from "@/components/ui/Card";
import { ResourceCard } from "@/components/cards/ResourceCard";
import { buildMetadata } from "@/lib/seo/metadata";
import { buyerJourney } from "@/lib/content/buyers";

export const metadata: Metadata = buildMetadata({
  title: "Home Buyer Academy",
  description: "Master the home buying process from pre-approval to closing with Natalie Pilkinton's Home Buyer Academy.",
  path: "/buyers",
});

const modules = [
  { icon: "📋", title: "Pre-Approval Essentials", description: "What you need to know before getting pre-approved for a mortgage" },
  { icon: "🔍", title: "Finding the Right Home", description: "Tips and strategies for finding a property that meets your needs" },
  { icon: "💰", title: "Offer Strategy", description: "How to make a competitive offer in any market" },
];

const resources = [
  { category: "Guide", title: "Home Buyer's Checklist", description: "Complete checklist of everything you need before making an offer" },
  { category: "Worksheet", title: "Budget Calculator", description: "Calculate your maximum budget based on income and expenses" },
];

export default function BuyersPage() {
  return (
    <AcademyLayout
      title="Home Buyer Academy"
      subheading="Master the home buying process from pre-approval to closing"
      ctaTitle="Ready to Start Your Buying Journey?"
      ctaDescription="Book a free consultation to discuss your home buying goals."
      ctaLabel="Schedule a Consultation →"
    >
      <Section>
        <Container>
          <h2>The Buyer&rsquo;s Journey</h2>
          <Timeline steps={buyerJourney} />
        </Container>
      </Section>

      <Section tone="light">
        <Container>
          <h2>Learning Modules</h2>
          <div className="grid grid-cols-3 max-md:grid-cols-1 gap-lg">
            {modules.map((module) => (
              <Card key={module.title}>
                <CardTitle>
                  {module.icon} {module.title}
                </CardTitle>
                <p>{module.description}</p>
                <button
                  type="button"
                  disabled
                  className="px-md py-sm text-sm font-semibold border border-navy text-navy rounded-[2px] opacity-60 cursor-not-allowed"
                >
                  Coming Soon
                </button>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2>Key Resources</h2>
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-lg">
            {resources.map((resource) => (
              <ResourceCard key={resource.title} {...resource} />
            ))}
          </div>
        </Container>
      </Section>
    </AcademyLayout>
  );
}
