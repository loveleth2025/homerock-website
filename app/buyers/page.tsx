import type { Metadata } from "next";
import { AcademyLayout } from "@/layouts/AcademyLayout";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Timeline } from "@/components/sections/Timeline";
import { FAQ } from "@/components/sections/FAQ";
import { LearningModuleCard } from "@/components/cards/LearningModuleCard";
import { ResourceCard } from "@/components/cards/ResourceCard";
import { buildMetadata } from "@/lib/seo/metadata";
import { buyerJourney, buyerFaq, buyerModules } from "@/lib/content/buyers";

export const metadata: Metadata = buildMetadata({
  title: "Home Buyer Academy",
  description:
    "Learn conventional, FHA, USDA, and VA loan requirements, Texas down payment assistance programs, and closing cost budgeting with Natalie Pilkinton's Home Buyer Academy.",
  path: "/buyers",
});

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

      <Section>
        <Container className="max-w-[48rem]">
          <h2>Questions Buyers Ask Most</h2>
          <p className="text-sm text-gold-ink font-semibold uppercase tracking-[0.06em] mb-lg">
            Straight from Natalie&rsquo;s Home Buyer Masterclass
          </p>
          <FAQ items={buyerFaq} />
        </Container>
      </Section>

      <Section tone="light">
        <Container>
          <h2>Learning Modules</h2>
          <p className="text-sm text-gold-ink font-semibold uppercase tracking-[0.06em] mb-lg -mt-md">
            From Natalie&rsquo;s Home Buyer Masterclass — click a module to read it
          </p>
          <div className="grid grid-cols-1 gap-md">
            {buyerModules.map((module) => (
              <LearningModuleCard key={module.title} {...module} />
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
