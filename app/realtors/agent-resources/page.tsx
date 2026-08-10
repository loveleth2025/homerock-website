import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { CTA } from "@/components/sections/CTA";
import { Button } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo/metadata";
import { podcastTranscripts } from "@/lib/content/realtors";

export const metadata: Metadata = buildMetadata({
  title: "Agent Resources",
  description: "Podcasts and resources for real estate agents joining HomeRock Realty.",
  path: "/realtors/agent-resources",
});

export default function AgentResourcesPage() {
  return (
    <>
      <BreadcrumbBar
        items={[{ name: "Realtors", path: "/realtors" }, { name: "Agent Resources", path: "/realtors/agent-resources" }]}
      />
      <Hero
        title="Agent Resources"
        subheading="Podcasts, insights, and strategies for growing your real estate career"
        align="left"
      />
      <Section>
        <Container className="max-w-3xl">
          {podcastTranscripts.map((podcast) => (
            <div key={podcast.slug} className="mb-3xl">
              <h2 className="text-3xl font-bold mb-lg">{podcast.title}</h2>
              <div className="flex gap-lg text-sm text-gray-600 mb-lg">
                <span>📻 {podcast.episode}</span>
                <span>👤 {podcast.guest}</span>
                <span>📅 {podcast.date}</span>
                <span>⏱️ {podcast.readTime} read</span>
              </div>
              <p className="text-lg text-gray-700 italic mb-2xl border-l-4 border-blue pl-lg">
                {podcast.excerpt}
              </p>
              <div className="prose prose-sm max-w-none text-gray-700 whitespace-pre-wrap leading-relaxed">
                {podcast.content}
              </div>
            </div>
          ))}
        </Container>
      </Section>
      <CTA title="Ready to Join HomeRock Realty?" description="Explore opportunities to grow your real estate career with us.">
        <Button href="/realtors/join">Learn More →</Button>
      </CTA>
    </>
  );
}