import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { CTA } from "@/components/sections/CTA";
import { Button } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo/metadata";
import { dualLicensing } from "@/lib/content/realtors";

export const metadata: Metadata = buildMetadata({
  title: "Agent Attraction",
  description: "How HomeRock Realty's dual licensing and referral program helps agents grow, from Natalie Pilkinton.",
  path: "/realtors/agent-attraction",
});

export default function AgentAttractionPage() {
  return (
    <>
      <BreadcrumbBar
        items={[{ name: "Realtors", path: "/realtors" }, { name: "Agent Attraction", path: "/realtors/agent-attraction" }]}
      />

      <Hero
        title="Agent Attraction"
        subheading="Systems for attracting and growing a team of agents"
        align="left"
      />

      <Section>
        <Container className="max-w-[48rem]">
          <h2>{dualLicensing.title}</h2>
          <p className="text-base leading-relaxed text-gray-dark mb-md">{dualLicensing.description}</p>
        </Container>
      </Section>

      <CTA title="Scale Your Real Estate Business" description="Get personalized coaching and strategies to grow your real estate career.">
        <Button href="/booking">Book Your Strategy Session →</Button>
      </CTA>
    </>
  );
}
