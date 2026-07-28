import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { Timeline } from "@/components/sections/Timeline";
import { CTA } from "@/components/sections/CTA";
import { Button } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo/metadata";
import { buyerJourney } from "@/lib/content/buyers";

export const metadata: Metadata = buildMetadata({
  title: "The Home Buying Process",
  description: "A step-by-step walkthrough of the home buying process, from pre-approval to closing.",
  path: "/buyers/process",
});

export default function BuyerProcessPage() {
  return (
    <>
      <BreadcrumbBar items={[{ name: "Home Buyers", path: "/buyers" }, { name: "Home Buying Process", path: "/buyers/process" }]} />

      <Hero title="The Home Buying Process" subheading="Six steps from pre-approval to the day you get your keys" align="left" />

      <Section>
        <Container className="max-w-[48rem]">
          <Timeline steps={buyerJourney} />
        </Container>
      </Section>

      <CTA title="Ready to Start Your Buying Journey?" description="Book a free consultation to discuss your home buying goals.">
        <Button href="/booking">Schedule a Consultation →</Button>
      </CTA>
    </>
  );
}
