import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { CTA } from "@/components/sections/CTA";
import { Button } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo/metadata";
import { trainingModel, businessTools } from "@/lib/content/realtors";

export const metadata: Metadata = buildMetadata({
  title: "Realtor Training",
  description: "Structured real estate agent training and business tools from Natalie Pilkinton and HomeRock Realty.",
  path: "/realtors/training",
});

export default function TrainingPage() {
  return (
    <>
      <BreadcrumbBar items={[{ name: "Realtors", path: "/realtors" }, { name: "Training", path: "/realtors/training" }]} />

      <Hero title="Realtor Training" subheading="A structured curriculum to build real estate business skills" align="left" />

      <Section>
        <Container className="max-w-[48rem]">
          <h2>How Training Works</h2>
          {trainingModel.map((item) => (
            <p key={item.label} className="text-base leading-relaxed text-gray-dark mb-md">
              <strong className="text-navy">{item.label}:</strong> {item.text}
            </p>
          ))}
        </Container>
      </Section>

      <Section tone="light">
        <Container className="max-w-[48rem]">
          <h2>Business Tools You Get</h2>
          {businessTools.map((tool) => (
            <p key={tool.label} className="text-base leading-relaxed text-gray-dark mb-md">
              <strong className="text-navy">{tool.label}:</strong> {tool.text}
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
