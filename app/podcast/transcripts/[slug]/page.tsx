import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { buildMetadata } from "@/lib/seo/metadata";
import { getTranscriptBySlug, podcastTranscripts } from "@/lib/content/podcastTranscripts";

type Params = { slug: string };

export function generateStaticParams() {
  return podcastTranscripts.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const transcript = getTranscriptBySlug(slug);

  if (!transcript) {
    return buildMetadata({
      title: "Transcript Not Found",
      description: "This podcast transcript could not be found.",
      path: `/podcast/transcripts/${slug}`,
    });
  }

  return buildMetadata({
    title: `${transcript.title} — Episode ${transcript.episodeNumber} Transcript`,
    description: transcript.excerpt,
    path: `/podcast/transcripts/${transcript.slug}`,
  });
}

export default async function TranscriptPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const transcript = getTranscriptBySlug(slug);

  if (!transcript) {
    notFound();
  }

  return (
    <>
      <BreadcrumbBar
        items={[
          { name: "Podcast", path: "/podcast" },
          { name: `Episode ${transcript.episodeNumber}`, path: `/podcast/transcripts/${transcript.slug}` },
        ]}
      />

      <Hero
        title={transcript.title}
        subheading={`Sugar, Spice & Spirits Podcast · Episode ${transcript.episodeNumber} · ${transcript.guest} · ${transcript.readTime}`}
        align="left"
      />

      <Section>
        <Container className="max-w-[48rem]">
          <p className="text-base leading-relaxed text-gray-dark mb-lg">{transcript.excerpt}</p>
          <div className="whitespace-pre-line text-base leading-relaxed text-gray-dark">
            {transcript.content}
          </div>
        </Container>
      </Section>
    </>
  );
}