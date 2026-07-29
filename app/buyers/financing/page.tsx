import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { CTA } from "@/components/sections/CTA";
import { Button } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo/metadata";
import { buyerModules } from "@/lib/content/buyers";

export const metadata: Metadata = buildMetadata({
  title: "Financing Options for Buyers",
  description:
    "A guide to home buyer financing options in Texas: conventional, FHA, USDA, and VA loans, plus Texas down payment assistance programs.",
  path: "/buyers/financing",
});

const loanOptions = buyerModules[0];
const downPaymentAssistance = buyerModules[1];

export default function FinancingPage() {
  return (
    <>
      <BreadcrumbBar items={[{ name: "Home Buyers", path: "/buyers" }, { name: "Financing", path: "/buyers/financing" }]} />

      <Hero
        title="Financing Options for Buyers"
        subheading="Explaining financing paths so you arrive at pre-approval prepared — from Natalie's Home Buyer Masterclass"
        align="left"
      />

      <Section>
        <Container className="max-w-[48rem]">
          <h2>{loanOptions.title}</h2>
          <p className="text-lg text-gray-dark mb-xl">{loanOptions.summary}</p>
          {loanOptions.sections.map((section) => (
            <p key={section.label} className="text-base leading-relaxed text-gray-dark mb-md">
              <strong className="text-navy">{section.label}:</strong> {section.text}
            </p>
          ))}
        </Container>
      </Section>

      <Section tone="light">
        <Container className="max-w-[48rem]">
          <h2>{downPaymentAssistance.title}</h2>
          <p className="text-lg text-gray-dark mb-xl">{downPaymentAssistance.summary}</p>
          {downPaymentAssistance.sections.map((section) => (
            <p key={section.label} className="text-base leading-relaxed text-gray-dark mb-md">
              <strong className="text-navy">{section.label}:</strong> {section.text}
            </p>
          ))}
        </Container>
      </Section>

      <CTA title="Ready to Start Your Buying Journey?" description="Book a free consultation to discuss your home buying goals.">
        <Button href="/booking">Schedule a Consultation →</Button>
      </CTA>
    </>
  );
}
