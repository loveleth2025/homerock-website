import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CTA } from "@/components/sections/CTA";
import { Timeline } from "@/components/sections/Timeline";
import { FAQ } from "@/components/sections/FAQ";
import { VideoPlaceholder } from "@/components/content/VideoPlaceholder";
import { MythRealityCard } from "@/components/content/MythRealityCard";
import { siteConfig } from "@/lib/data/navigation";
import { buildMetadata } from "@/lib/seo/metadata";
import {
  webinarRegistrationUrl,
  mythsVsReality,
  whatYoullLearn,
  roadmapSteps,
  webinarTestimonials,
  webinarFaq,
} from "@/lib/content/webinar";

export const metadata: Metadata = buildMetadata({
  title: "Free Home Buyer Webinar",
  description:
    "Join Natalie Pilkinton's free live Home Buyer Webinar, held every 2nd and 4th Tuesday, to learn financing strategies and down payment assistance options.",
  path: "/webinar",
});

export default function WebinarPage() {
  return (
    <>
      <Hero
        eyebrow="Free Live Webinar · Houston Home Buyers · Every 2nd & 4th Tuesday"
        title="Could You Buy a Home With Less Cash Than You Think?"
        subheading="Discover financing strategies that many first-time buyers don't know about — explained simply, live, by a Houston-area Realtor."
        align="centered"
      >
        <Button href={webinarRegistrationUrl} external size="large">
          Save My Free Webinar Seat
        </Button>
        <Button href={siteConfig.bookingUrl} external variant="outline-light" size="large">
          Book a Free Strategy Call
        </Button>
      </Hero>

      <Section>
        <Container className="max-w-[48rem] text-center">
          <p className="text-sm text-gray-dark mb-0">
            ● 100% Free to Attend &nbsp; ● Live Q&amp;A Included &nbsp; ● No Obligation
          </p>
        </Container>
      </Section>

      <Section tone="light">
        <Container className="max-w-[42rem]">
          <h2 className="text-center">Watch a Personal Welcome From Natalie</h2>
          <p className="text-center text-gray-dark mb-xl">
            A 2-minute introduction to what you&rsquo;ll walk away with from this free webinar.
          </p>
          <VideoPlaceholder label="Personal Welcome From Natalie" />
        </Container>
      </Section>

      <Section>
        <Container className="max-w-[42rem]">
          <h2 className="text-center">Watch the Real Cash-to-Close Story Unfold</h2>
          <p className="text-center text-gray-dark mb-xl">
            A simple, honest look at how assistance programs and negotiation can reshape what buyers actually bring to
            closing.
          </p>
          <VideoPlaceholder label="Cash-to-Close Story" />
          <p className="text-center text-2xl font-serif text-navy mt-xl mb-0">
            Could your cash needed be <span className="text-gold-ink">less than $3,500*</span>
          </p>
          <p className="text-center text-xs text-gray-dark mt-sm mb-0">
            *Illustrative example only. Actual cash-to-close varies by buyer qualifications, loan program, property,
            lender requirements, negotiations, and available assistance.
          </p>
        </Container>
      </Section>

      <Section tone="light">
        <Container>
          <h2 className="text-center">What Most Buyers Get Wrong</h2>
          <p className="text-center text-gray-dark mb-xl">Tap each card to see the reality behind the myth.</p>
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-lg">
            {mythsVsReality.map((item) => (
              <MythRealityCard key={item.myth} {...item} />
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="text-center">What You&rsquo;ll Learn Live</h2>
          <div className="grid grid-cols-3 max-md:grid-cols-1 gap-lg">
            {whatYoullLearn.map((item) => (
              <Card key={item.title}>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="light">
        <Container className="max-w-[42rem] text-center">
          <h2>Meet Your Host</h2>
          <p className="text-lg text-gray-dark leading-relaxed mb-0">
            Hi, I&rsquo;m Natalie Pilkinton. As a Houston Realtor, my passion is helping buyers understand their
            options and confidently navigate the home-buying process. In this free webinar, I&rsquo;ll explain
            financing strategies, loan programs, and practical steps that may help qualified buyers become
            homeowners.
          </p>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-[42rem]">
          <h2 className="text-center">The Home Buyer Roadmap</h2>
          <Timeline steps={roadmapSteps} />
        </Container>
      </Section>

      <Section tone="light">
        <Container className="max-w-[48rem]">
          <h2 className="text-center">What Past Attendees Say</h2>
          <div className="flex flex-col gap-lg">
            {webinarTestimonials.map((item) => (
              <div key={item.name} className="bg-white border border-gray-light border-l-4 border-l-gold rounded-xs p-lg">
                <div className="text-gold mb-sm" aria-hidden>
                  ★★★★★
                </div>
                <p className="text-base italic leading-relaxed text-ink mb-md">&ldquo;{item.quote}&rdquo;</p>
                <div className="flex items-center gap-sm">
                  <span className="w-9 h-9 rounded-full bg-navy text-white text-xs font-semibold flex items-center justify-center shrink-0">
                    {item.initials}
                  </span>
                  <div>
                    <div className="font-semibold text-navy text-sm">{item.name}</div>
                    <div className="text-xs text-gray-dark">{item.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-[48rem]">
          <h2 className="text-center">Frequently Asked Questions</h2>
          <FAQ items={webinarFaq} />
        </Container>
      </Section>

      <Section tone="light">
        <Container>
          <h2 className="text-center">What Would You Like to Do Next?</h2>
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-lg">
            <Card featured>
              <CardTitle>Option One: Attend the Free Webinar</CardTitle>
              <CardDescription>
                Join Natalie live to learn financing strategies, loan programs, and next steps for buying a home.
              </CardDescription>
              <Button href={webinarRegistrationUrl} external>
                Save My Free Seat
              </Button>
            </Card>
            <Card featured>
              <CardTitle>Option Two: Book a One-on-One Strategy Call</CardTitle>
              <CardDescription>Prefer a private conversation? Schedule time to talk through your specific situation directly.</CardDescription>
              <Button href={siteConfig.bookingUrl} external>
                Book My Strategy Call
              </Button>
            </Card>
          </div>
        </Container>
      </Section>

      <CTA title="Ready to Learn Your Home Buying Options?" description="Reserve your free seat now — space is limited for each live session.">
        <Button href={webinarRegistrationUrl} external>
          Save My Free Webinar Seat
        </Button>
      </CTA>

      <Section>
        <Container className="max-w-[48rem]">
          <p className="text-xs text-gray-dark leading-relaxed mb-0">
            This webinar is for educational purposes only and does not constitute financial, legal, or lending
            advice. Loan program availability, down payment assistance, seller concessions, and estimated
            cash-to-close figures vary by buyer qualifications, lender, property, and market conditions. Consult a
            licensed lender and Realtor for guidance specific to your situation. Equal Housing Opportunity.
          </p>
        </Container>
      </Section>
    </>
  );
}
