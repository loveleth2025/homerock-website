import type { Metadata } from "next";
import Image from "next/image";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CTA } from "@/components/sections/CTA";
import { siteConfig } from "@/lib/data/navigation";
import { buildMetadata } from "@/lib/seo/metadata";
import { jsonLdScriptProps, personSchema } from "@/lib/seo/schema";

export const metadata: Metadata = buildMetadata({
  title: "About Natalie Pilkinton",
  description:
    "Texas Realtor, real estate investor, and educator Natalie Pilkinton of HomeRock Realty has helped hundreds of families buy homes and build real estate wealth.",
  path: "/about",
});

const socialLinks = [
  { label: "Facebook", href: siteConfig.social.facebook },
  { label: "Instagram", href: siteConfig.social.instagram },
  { label: "LinkedIn", href: siteConfig.social.linkedin },
  { label: "YouTube", href: siteConfig.social.youtube },
];

export default function AboutPage() {
  return (
    <>
      <script {...jsonLdScriptProps(personSchema())} />

      <Hero title="About Natalie Pilkinton" subheading="Realtor | Investor | Educator | Podcast Host" />

      <Section>
        <Container>
          <div className="grid grid-cols-2 max-md:grid-cols-1 items-center gap-3xl">
            <Image
              src={siteConfig.headshotUrl}
              alt="Natalie Pilkinton Professional Headshot"
              width={640}
              height={640}
              className="w-full h-auto rounded-[4px]"
              unoptimized
            />
            <div>
              <h2>My Story</h2>
              <p>
                For over 15 years, I&rsquo;ve been deeply immersed in Houston&rsquo;s real estate market.
                I&rsquo;ve helped over 500 families buy their dream homes, negotiated 50+ investment
                properties, and educated thousands about real estate wealth building.
              </p>
              <p>
                Today, I&rsquo;m passionate about making real estate education accessible to
                everyone&mdash;whether you&rsquo;re a first-time buyer, investor, or agent looking to scale
                your business.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-3xl text-center">
          <h2>Follow &amp; Stay Connected</h2>
          <p className="mb-xl">Join my community for real estate insights, market updates, and educational content</p>
          <div className="flex gap-md justify-center flex-wrap">
            {socialLinks.map((link) => (
              <Button key={link.label} href={link.href} external variant="secondary">
                {link.label}
              </Button>
            ))}
          </div>
        </Container>
      </Section>

      <CTA title="Let's Connect" description="Ready to discuss your real estate goals? I'd love to help you on your journey.">
        <Button href="/booking">Book A Strategy Session</Button>
      </CTA>
    </>
  );
}
