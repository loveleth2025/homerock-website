import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { CTA } from "@/components/sections/CTA";
import { Button } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo/metadata";
import { reasonsAgentsJoin } from "@/lib/content/realtors";

export const metadata: Metadata = buildMetadata({
  title: "Realtor Coaching",
  description: "Real estate agent coaching in Texas with Natalie Pilkinton — mentoring, accountability, and revenue share.",
  path: "/realtors/coaching",
});

export default function CoachingPage() {
  return (
    <>
      <BreadcrumbBar items={[{ name: "Realtors", path: "/realtors" }, { name: "Coaching", path: "/realtors/coaching" }]} />

      <Hero title="Realtor Coaching" subheading="What coaching with Natalie includes, and who it's for" align="left" />

      <Section>
        <Container className="max-w-[48rem]">
          <h2>Why Agents Choose Coaching Here</h2>
          {reasonsAgentsJoin.map((reason) => (
            <p key={reason.label} className="text-base leading-relaxed text-gray-dark mb-md">
              <strong className="text-navy">{reason.label}:</strong> {reason.text}
            </p>
          ))}
        </Container>
      </Section>

      <CTA title="Scale Your Real Estate Business" description="Get personalized coaching and strategies to grow your real estate career.">
        <Button href="/booking">Book Your Strategy Session →</Button>
      </CTA>
    </>
  );
}
