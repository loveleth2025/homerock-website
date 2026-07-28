import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PlaceholderNotice } from "@/components/ui/PlaceholderNotice";
import { CTA } from "@/components/sections/CTA";
import { Button } from "@/components/ui/Button";
import { episodes } from "@/lib/content/podcast";
import { buildMetadata } from "@/lib/seo/metadata";

export function generateStaticParams() {
  return episodes.map((episode) => ({ episode: episode.slug }));
}

function getEpisode(slug: string) {
  return episodes.find((episode) => episode.slug === slug);
}

export async function generateMetadata({ params }: { params: Promise<{ episode: string }> }): Promise<Metadata> {
  const { episode: slug } = await params;
  const episode = getEpisode(slug);
  if (!episode) return buildMetadata({ title: "Episode Not Found", description: "", path: "/podcast" });
  return buildMetadata({
    title: episode.title,
    description: `Show notes for ${episode.title} from the Sugar Spice & Spirits podcast with Natalie Pilkinton.`,
    path: `/podcast/${episode.slug}`,
  });
}

export default async function EpisodePage({ params }: { params: Promise<{ episode: string }> }) {
  const { episode: slug } = await params;
  const episode = getEpisode(slug);
  if (!episode) notFound();

  return (
    <>
      <div className="bg-cream border-b border-gray-light py-md">
        <Container>
          <Breadcrumbs items={[{ name: "Podcast", path: "/podcast" }, { name: episode.title, path: `/podcast/${episode.slug}` }]} />
        </Container>
      </div>

      <Hero title={episode.title} subheading="Sugar Spice & Spirits with Natalie Pilkinton" align="left" />

      <Section>
        <Container className="max-w-3xl">
          <PlaceholderNotice note="Episode audio/video embed and show notes are pending." />
        </Container>
      </Section>

      <CTA title="Ready to Take Action?" description="Book a personalized strategy session to discuss your real estate goals.">
        <Button href="/booking">Schedule Your Session Today →</Button>
      </CTA>
    </>
  );
}
