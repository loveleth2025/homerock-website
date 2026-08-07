import type { Metadata } from "next";
import { Suspense } from "react";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { CTA } from "@/components/sections/CTA";
import { Button } from "@/components/ui/Button";
import { VideoCard } from "@/components/cards/VideoCard";
import { WebinarCard } from "@/components/cards/WebinarCard";
import { PodcastFeed } from "@/components/content/PodcastFeed";
import { EpisodeList } from "@/components/podcast/EpisodeList";
import { EpisodeListSkeleton } from "@/components/podcast/EpisodeListSkeleton";
import { subscribeLinks } from "@/lib/content/podcast";
import { buildMetadata } from "@/lib/seo/metadata";
import { jsonLdScriptProps } from "@/lib/seo/schema";
import { siteConfig } from "@/lib/data/navigation";

export const metadata: Metadata = buildMetadata({
  title: "Watch & Listen",
  description: "Videos, webinars, and the Sugar Spice & Spirits podcast, hosted by Natalie Pilkinton, Mindy Price and Kelly Williams.",
  path: "/podcast",
});

const videoCourses = [
  { category: "Video Series", title: "First-Time Home Buyer Masterclass", description: "A complete video series walking through the entire home buying process, from pre-approval to closing." },
  { category: "Video Series", title: "Real Estate Investment Fundamentals", description: "Learn the core strategies and tactics used by successful real estate investors." },
  { category: "Video Series", title: "Realtor Productivity Blueprint", description: "Systems and tools to scale your real estate business and increase your income." },
];

const webinars = [
  {
    status: "Upcoming",
    title: "Houston Real Estate Market Update",
    description: "Join us for an exclusive look at current market trends, pricing, and opportunities in the Houston area.",
    schedule: "Next: Every 2nd Wednesday @ 6 PM CT",
    cta: { label: "Register Now", href: "/booking" },
  },
  {
    status: "Upcoming",
    title: "Investment Strategy Q&A Session",
    description: "Ask your real estate investment questions directly to Natalie in this interactive live session.",
    schedule: "Next: Every 4th Thursday @ 7 PM CT",
    cta: { label: "Register Now", href: "/booking" },
  },
];

const recentlyReleased = [
  { category: "New Video", title: "5 Mistakes First-Time Buyers Make", description: "The most common costly mistakes I see first-time home buyers make, and how to avoid them." },
  { category: "New Podcast", title: "Episode 151: Market Predictions 2025", description: "Industry experts share their predictions for the real estate market in the coming year." },
  { category: "New Webinar", title: "Investment Property Analysis Deep Dive", description: "Learn the exact formulas and metrics I use to evaluate investment properties." },
];

const playlistId = process.env.YOUTUBE_PLAYLIST_ID;

const podcastSeriesSchema = {
  "@context": "https://schema.org",
  "@type": "PodcastSeries",
  name: "Sugar Spice & Spirits",
  url: `${siteConfig.siteUrl}/podcast`,
  ...(playlistId && {
    webFeed: `https://www.youtube.com/feeds/videos.xml?playlist_id=${playlistId}`,
  }),
  author: { "@type": "Person", name: siteConfig.name },
};

export default function PodcastPage() {
  return (
    <>
      <script {...jsonLdScriptProps(podcastSeriesSchema)} />

      <Hero title="Watch & Listen" subheading="Videos, Webinars & Podcasts to Level Up Your Real Estate Knowledge" align="left" />

      <Section>
        <Container>
          <h2>Video Courses</h2>
          <div className="grid grid-cols-3 max-md:grid-cols-1 gap-lg">
            {videoCourses.map((video) => (
              <VideoCard key={video.title} {...video} />
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="light">
        <Container>
          <h2>Live Webinars</h2>
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-lg">
            {webinars.map((webinar) => (
              <WebinarCard key={webinar.title} {...webinar} />
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2>Sugar Spice &amp; Spirits Podcast</h2>
          <Suspense fallback={<div className="bg-cream p-lg rounded-sm mb-lg animate-pulse h-[280px] md:h-[400px]" aria-hidden="true" />}>
            <PodcastFeed />
          </Suspense>

          <h3 className="mb-lg border-b-2 border-gold pb-md">All Episodes</h3>
          <Suspense fallback={<EpisodeListSkeleton />}>
            <EpisodeList />
          </Suspense>

          <div className="mt-2xl p-lg bg-cream rounded-sm text-center">
            <p className="text-navy font-semibold mb-md">📱 Subscribe &amp; Listen Everywhere</p>
            <div className="flex gap-md justify-center flex-wrap">
              {subscribeLinks.map((link) => (
                <a key={link.label} href={link.href} className="text-gold-ink font-semibold text-sm">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="light">
        <Container>
          <h2>Recently Released</h2>
          <div className="grid grid-cols-3 max-md:grid-cols-1 gap-lg">
            {recentlyReleased.map((item) => (
              <VideoCard key={item.title} {...item} />
            ))}
          </div>
        </Container>
      </Section>

      <CTA title="Ready to Take Action?" description="Book a personalized strategy session to discuss your real estate goals.">
        <Button href="/booking">Schedule Your Session Today →</Button>
      </CTA>
    </>
  );
}
