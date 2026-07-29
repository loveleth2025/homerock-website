import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { CTA } from "@/components/sections/CTA";
import { Button } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo/metadata";
import { buyerFaq } from "@/lib/content/buyers";

export const metadata: Metadata = buildMetadata({
  title: "New Construction Buying Guide",
  description: "What to know before buying a new construction home in Texas, and why representation still matters.",
  path: "/buyers/new-construction",
});

const newConstructionFaq = buyerFaq.find((item) => item.question.includes("builder"))!;

export default function NewConstructionPage() {
  return (
    <>
      <BreadcrumbBar
        items={[{ name: "Home Buyers", path: "/buyers" }, { name: "New Construction", path: "/buyers/new-construction" }]}
      />

      <Hero
        title="New Construction Buying Guide"
        subheading="How buying new construction differs from resale, and why you still need a Realtor"
        align="left"
      />

      <Section>
        <Container className="max-w-[48rem]">
          <h2>{newConstructionFaq.question}</h2>
          <p className="text-base leading-relaxed text-gray-dark mb-md">{newConstructionFaq.answer}</p>
        </Container>
      </Section>

      <CTA
        title="Touring a Model Home Soon?"
        description="Bring your own representation before you sign anything — book a free consultation with Natalie's team first."
      >
        <Button href="/booking">Schedule a Consultation →</Button>
      </CTA>
    </>
  );
}
