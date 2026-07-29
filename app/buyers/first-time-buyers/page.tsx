import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { Timeline } from "@/components/sections/Timeline";
import { CTA } from "@/components/sections/CTA";
import { Button } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo/metadata";
import { buyerJourney, buyerModules } from "@/lib/content/buyers";

export const metadata: Metadata = buildMetadata({
  title: "First-Time Buyers",
  description:
    "An orientation guide for first-time home buyers in Texas: the buying process, loan options, and down payment assistance.",
  path: "/buyers/first-time-buyers",
});

const downPaymentAssistance = buyerModules[1];

export default function FirstTimeBuyersPage() {
  return (
    <>
      <BreadcrumbBar
        items={[{ name: "Home Buyers", path: "/buyers" }, { name: "First-Time Buyers", path: "/buyers/first-time-buyers" }]}
      />

      <Hero
        title="First-Time Buyers"
        subheading="Everything you need to know before starting your home search"
        align="left"
      />

      <Section>
        <Container className="max-w-[48rem]">
          <h2>The Buying Process</h2>
          <Timeline steps={buyerJourney} />
        </Container>
      </Section>

      <Section tone="light">
        <Container className="max-w-[48rem]">
          <h2>{downPaymentAssistance.title}</h2>
          <p className="text-lg text-gray-dark mb-xl">
            As a first-time buyer, you may qualify for programs that cover some — or all — of your down payment.
          </p>
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
