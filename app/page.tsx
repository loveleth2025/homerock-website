import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Stats } from "@/components/sections/Stats";
import { CTA } from "@/components/sections/CTA";
import { Button } from "@/components/ui/Button";
import { SearchBar } from "@/components/forms/SearchBar";
import { LearningPathCard } from "@/components/cards/LearningPathCard";
import { ResourceCard } from "@/components/cards/ResourceCard";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { TiltCard } from "@/components/motion/TiltCard";
import { homeStats } from "@/lib/data/stats";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Natalie Pilkinton, Houston REALTOR® | Home Buyers, Sellers & Investors | Spring TX",
  description:
    "Houston REALTOR® Natalie Pilkinton guides buyers, sellers & investors through Texas real estate. Specializing in Spring, The Woodlands, Katy & more. Schedule your free consultation today. Call (832) 863-3468.",
  path: "/",
});

const learningPaths = [
  {
    icon: "🏠",
    title: "Home Buyer Academy",
    description: "Master the home buying process from pre-approval to closing",
    href: "/buyers",
  },
  {
    icon: "🔑",
    title: "Home Seller Academy",
    description: "Learn how to maximize your sale price and timeline",
    href: "/sellers",
  },
  {
    icon: "📈",
    title: "Investor Academy",
    description: "Build wealth through strategic real estate investments",
    href: "/investors",
  },
  {
    icon: "🚀",
    title: "Realtor Growth Academy",
    description: "Scale your real estate business with proven systems",
    href: "/realtors",
  },
];

const featuredResources = [
  {
    category: "Guide",
    title: "Home Buyer's Checklist",
    description: "Everything you need to know before making an offer.",
  },
  {
    category: "Article",
    title: "Improve Your Credit Before Buying",
    description: "Practical guide to raising your credit score.",
  },
  {
    category: "Webinar",
    title: "Passive Income Strategies",
    description: "Build passive income through rental properties.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero
        cinematic
        eyebrow="Texas Realtor · Investor · Educator"
        title="Master the Art of Real Estate"
        subheading="Actionable, no-fluff strategies for buying, selling, and investing — taught by someone who's actually built wealth doing it."
      >
        <Button href="/buyers" size="large">
          Start Learning
        </Button>
        <Button href="/booking" variant="outline-light" size="large">
          Book Free Strategy Session
        </Button>
      </Hero>

      <Section>
        <Container>
          <Reveal>
            <Stats stats={homeStats} />
          </Reveal>
        </Container>
      </Section>

      <Section tone="light">
        <Container className="text-center">
          <Reveal>
            <SectionTitle align="center">What Do You Want to Learn?</SectionTitle>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="my-2xl">
              <SearchBar />
            </div>
          </Reveal>

          <RevealGroup className="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-lg text-left">
            {learningPaths.map((path) => (
              <RevealItem key={path.href}>
                <TiltCard>
                  <LearningPathCard {...path} />
                </TiltCard>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal>
            <SectionTitle>Featured Resources</SectionTitle>
          </Reveal>
          <RevealGroup className="grid grid-cols-3 max-md:grid-cols-1 gap-lg">
            {featuredResources.map((resource) => (
              <RevealItem key={resource.title}>
                <TiltCard maxTilt={4}>
                  <ResourceCard {...resource} />
                </TiltCard>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      <Reveal>
        <CTA title="Ready to Master Real Estate?" description="Book a free 30-minute strategy session to discuss your real estate goals.">
          <Button href="/booking">Book Your FREE Strategy Session</Button>
        </CTA>
      </Reveal>
    </>
  );
}
