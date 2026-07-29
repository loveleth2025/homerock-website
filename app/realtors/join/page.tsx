import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { CTA } from "@/components/sections/CTA";
import { Button } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo/metadata";
import { missionVision, commissionStructure, founders } from "@/lib/content/realtors";

export const metadata: Metadata = buildMetadata({
  title: "Join HomeRock Realty",
  description: "Why join HomeRock Realty as a licensed Texas real estate agent — our mission, commission structure, and founders.",
  path: "/realtors/join",
});

export default function JoinPage() {
  return (
    <>
      <BreadcrumbBar items={[{ name: "Realtors", path: "/realtors" }, { name: "Join HomeRock Realty", path: "/realtors/join" }]} />

      <Hero
        title="Join HomeRock Realty"
        subheading="What makes HomeRock Realty different for growth-minded agents"
        align="left"
      />

      <Section>
        <Container className="max-w-[48rem]">
          <h2>Our Vision &amp; Mission</h2>
          <p className="text-base leading-relaxed text-gray-dark mb-md">{missionVision.vision}</p>
          <p className="text-base leading-relaxed text-gray-dark mb-md">{missionVision.mission}</p>
        </Container>
      </Section>

      <Section tone="light">
        <Container className="max-w-[48rem]">
          <h2>Commission Structure</h2>
          <p className="text-base leading-relaxed text-gray-dark mb-md">
            <strong className="text-navy">{commissionStructure.split}</strong> with a{" "}
            <strong className="text-navy">{commissionStructure.cap}</strong>.
          </p>
          <ul className="flex flex-col gap-sm pl-lg list-disc marker:text-gold mb-md">
            {commissionStructure.fees.map((fee) => (
              <li key={fee} className="text-base leading-relaxed text-gray-dark">
                {fee}
              </li>
            ))}
          </ul>
          <p className="text-base leading-relaxed text-gray-dark mb-md">{commissionStructure.example}</p>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-[48rem]">
          <h2>Who You&rsquo;ll Be Working With</h2>
          {founders.map((founder) => (
            <div key={founder.name} className="mb-lg">
              <h3 className="mb-sm">{founder.name}</h3>
              <p className="text-base leading-relaxed text-gray-dark">{founder.bio}</p>
            </div>
          ))}
        </Container>
      </Section>

      <CTA title="Scale Your Real Estate Business" description="Get personalized coaching and strategies to grow your real estate career.">
        <Button href="/booking">Book Your Strategy Session →</Button>
      </CTA>
    </>
  );
}
