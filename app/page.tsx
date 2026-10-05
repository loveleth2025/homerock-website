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
    "Houston REALTOR®, real estate investor and educator Natalie Pilkinton helps buyers, sellers and investors across Spring, The Woodlands and greater Houston. 20+ years of experience.",
  path: "/",
});

/** The four audiences Natalie serves, each linking into its Academy. */
const audiences = [
  {
    icon: "🏠",
    title: "Home Buyers",
    description: "First-time, relocation and new construction buyers, and anyone working through financing.",
    href: "/buyers",
  },
  {
    icon: "🔑",
    title: "Home Sellers",
    description: "Pricing, marketing, negotiation and a selling strategy built around your timeline.",
    href: "/sellers",
  },
  {
    icon: "📈",
    title: "Real Estate Investors",
    description: "Property analysis, cash flow, financing and rental strategy from a Realtor who invests herself.",
    href: "/investors",
  },
  {
    icon: "🚀",
    title: "Realtors",
    description: "Business growth, systems, coaching and training for agents ready to scale.",
    href: "/realtors",
  },
];

const marketsServed = ["Spring", "Houston", "The Woodlands", "Tomball", "Conroe", "Cypress", "Magnolia", "Montgomery"];

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
        eyebrow="Master the Art of Real Estate"
        title="Houston Realtor, Real Estate Investor & Educator"
        subheading="Helping buyers, sellers and investors make smarter real estate decisions across Houston, Spring, The Woodlands and surrounding Texas markets, with no-fluff strategies from someone who has built wealth doing it."
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
            <SectionTitle align="center">Who I Help</SectionTitle>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="max-w-[42rem] mx-auto text-gray-dark">
              I&rsquo;m Natalie Pilkinton, a REALTOR® with HomeRock Realty and a real estate investor with 20+ years in
              the Houston market. Pick where you are and start learning.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="my-2xl">
              <SearchBar />
            </div>
          </Reveal>

          <RevealGroup className="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-lg text-left">
            {audiences.map((path) => (
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
        <Container className="text-center">
          <Reveal>
            <SectionTitle align="center">Areas I Serve</SectionTitle>
            <p className="max-w-[42rem] mx-auto text-gray-dark mb-lg">
              Based in Spring and working across greater Houston and Montgomery County.
            </p>
            <ul className="flex flex-wrap justify-center gap-sm list-none p-0 mb-lg">
              {marketsServed.map((market) => (
                <li key={market} className="px-md py-xs rounded-full border border-gray-light text-navy text-sm font-semibold">
                  {market}
                </li>
              ))}
            </ul>
            <Button href="/market-updates" variant="secondary">
              See the latest Houston market update →
            </Button>
          </Reveal>
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
