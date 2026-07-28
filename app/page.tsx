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
import { homeStats } from "@/lib/data/stats";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Natalie Pilkinton | Educational Authority for Home Buyers, Sellers & Investors",
  description:
    "Learn from a Texas Realtor, investor, and educator who's built wealth through real estate. Get actionable strategies for buying, selling, and investing.",
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
        title="Master the Art of Real Estate"
        subheading="Learn from a Texas Realtor, investor, and educator who's built wealth through real estate. Get actionable strategies for buying, selling, and investing."
      >
        <Button href="/buyers">Start Learning</Button>
        <Button href="/booking" variant="outline-light">
          Book Free Strategy Session
        </Button>
      </Hero>

      <Section>
        <Container>
          <Stats stats={homeStats} />
        </Container>
      </Section>

      <Section tone="light">
        <Container className="text-center">
          <SectionTitle align="center">What Do You Want to Learn?</SectionTitle>
          <div className="my-2xl">
            <SearchBar />
          </div>

          <div className="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-lg text-left">
            {learningPaths.map((path) => (
              <LearningPathCard key={path.href} {...path} />
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle>Featured Resources</SectionTitle>
          <div className="grid grid-cols-3 max-md:grid-cols-1 gap-lg">
            {featuredResources.map((resource) => (
              <ResourceCard key={resource.title} {...resource} />
            ))}
          </div>
        </Container>
      </Section>

      <CTA title="Ready to Master Real Estate?" description="Book a free 30-minute strategy session to discuss your real estate goals.">
        <Button href="/booking">Book Your FREE Strategy Session</Button>
      </CTA>
    </>
  );
}
