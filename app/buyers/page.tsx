import type { Metadata } from "next";
import { AcademyLayout } from "@/layouts/AcademyLayout";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Timeline } from "@/components/sections/Timeline";
import { FAQ } from "@/components/sections/FAQ";
import { LearningModuleCard } from "@/components/cards/LearningModuleCard";
import { ResourceCard } from "@/components/cards/ResourceCard";
import Link from "next/link";
import { Card, CardCategory, CardTitle, CardDescription } from "@/components/ui/Card";
import { buildMetadata } from "@/lib/seo/metadata";
import { BuyerSeminarCallout } from "@/components/content/BuyerSeminarCallout";
import { buyerJourney, buyerFaq, buyerModules } from "@/lib/content/buyers";

export const metadata: Metadata = buildMetadata({
  title: "Home Buyer Academy",
  description:
    "Learn conventional, FHA, USDA, and VA loan requirements, Texas down payment assistance programs, and closing cost budgeting with Natalie Pilkinton's Home Buyer Academy.",
  path: "/buyers",
});

/** Answer-first guides, in the order most buyers need them. */
const guides = [
  { title: "First-Time Home Buyer Guide", description: "The eight steps, from credit check to keys.", href: "/buyers/first-time-buyers" },
  { title: "How Much Money Do You Need?", description: "Down payment, closing costs and a worked Houston example.", href: "/buyers/how-much-money-to-buy-a-house-houston" },
  { title: "What Credit Score Do You Need?", description: "Minimums for conventional, FHA, VA and USDA loans.", href: "/buyers/credit" },
  { title: "Loan Options & Down Payment Assistance", description: "Compare loans and Texas assistance programs.", href: "/buyers/financing" },
  { title: "Closing Costs in Texas", description: "What you'll pay, who pays the title policy, how to lower it.", href: "/buyers/closing-costs-texas" },
  { title: "Buying New Construction", description: "Builders, incentives and why you need your own Realtor.", href: "/buyers/new-construction" },
];

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
          <h2>Start Here</h2>
          <p className="max-w-[48rem] text-gray-dark mb-xl">
            Natalie&rsquo;s step-by-step guides for buying a home in Houston and across Texas, built from her Home
            Buyer Masterclass with lender Brian Lupton.
          </p>
          <div className="grid grid-cols-3 max-md:grid-cols-1 gap-lg">
            {guides.map((guide) => (
              <Link key={guide.href} href={guide.href} className="block h-full">
                <Card featured>
                  <CardCategory>Guide</CardCategory>
                  <CardTitle>{guide.title}</CardTitle>
                  <CardDescription>{guide.description}</CardDescription>
                  <span className="text-sm font-semibold text-gold-ink">Read →</span>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="light">
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
      <Section>
        <Container className="max-w-[52rem]">
          <BuyerSeminarCallout withSchema />
        </Container>
      </Section>
    </AcademyLayout>
  );
}
