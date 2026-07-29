import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { CTA } from "@/components/sections/CTA";
import { Button } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo/metadata";
import { buyerFaq, buyerModules } from "@/lib/content/buyers";

export const metadata: Metadata = buildMetadata({
  title: "Credit Score & Home Buying",
  description:
    "What your credit score means for your loan options — minimum scores for conventional, FHA, USDA, and VA loans, from Natalie Pilkinton.",
  path: "/buyers/credit",
});

const loanOptions = buyerModules[0];
const creditFaq = buyerFaq[0];

export default function CreditPage() {
  return (
    <>
      <BreadcrumbBar items={[{ name: "Home Buyers", path: "/buyers" }, { name: "Credit", path: "/buyers/credit" }]} />

      <Hero
        title="Credit Score & Home Buying"
        subheading="What your credit score means for your loan options, before you start house hunting"
        align="left"
      />

      <Section>
        <Container className="max-w-[48rem]">
          <h2>{creditFaq.question}</h2>
          <p className="text-base leading-relaxed text-gray-dark mb-xl">{creditFaq.answer}</p>

          <h3>Minimum Credit Scores by Loan Type</h3>
          {loanOptions.sections.map((section) => (
            <p key={section.label} className="text-base leading-relaxed text-gray-dark mb-md">
              <strong className="text-navy">{section.label}:</strong> {section.text}
            </p>
          ))}
        </Container>
      </Section>

      <CTA
        title="Not Sure Where You Stand?"
        description="Book a free consultation with Natalie's team to review your credit and financing options before you start house hunting."
      >
        <Button href="/booking">Schedule a Consultation →</Button>
      </CTA>
    </>
  );
}
