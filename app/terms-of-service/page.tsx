import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { PlaceholderNotice } from "@/components/ui/PlaceholderNotice";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description: "HomeRock Realty terms of service.",
  path: "/terms-of-service",
});

export default function TermsOfServicePage() {
  return (
    <>
      <Hero title="Terms of Service" align="left" />
      <Section>
        <Container className="max-w-3xl">
          <PlaceholderNotice note="Legal copy must be supplied or reviewed by counsel before publishing." />
        </Container>
      </Section>
    </>
  );
}
