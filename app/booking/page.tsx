import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Callout } from "@/components/ui/Callout";
import { TestimonialGrid } from "@/components/sections/Testimonial";
import { siteConfig } from "@/lib/data/navigation";
import { bookingTestimonials } from "@/lib/data/testimonials";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Book Your Free Strategy Session",
  description:
    "Book a free 30-minute strategy session with Natalie Pilkinton to discuss your real estate goals and create an action plan.",
  path: "/booking",
});

const expectations = [
  "Personal one-on-one conversation",
  "Understanding your real estate goals",
  "Assessment of your current situation",
  "Customized action plan",
  "Next steps and timeline",
];

export default function BookingPage() {
  return (
    <>
      <Hero
        title="Book Your FREE Strategy Session"
        subheading="30 minutes to discuss your real estate goals and create an action plan"
      />

      <Section>
        <Container>
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-3xl">
            <div>
              <h2>What to Expect</h2>
              <Callout title="Your Strategy Session Includes:">
                <ul className="ml-lg list-disc">
                  {expectations.map((item) => (
                    <li key={item} className="mb-md">
                      {item}
                    </li>
                  ))}
                </ul>
              </Callout>
            </div>

            <div>
              <h2>Schedule Your Session</h2>
              <div className="bg-white border border-gray-light rounded-xs p-lg">
                <p className="mb-lg">
                  Choose your preferred date and time. Sessions are conducted via Zoom or phone.
                </p>

                <div className="bg-gradient-to-br from-navy to-[#1a2d4a] rounded-xs p-xl mb-lg text-center">
                  <p className="text-white mb-lg text-lg font-medium">
                    Book Your Free 30-Minute Strategy Session
                  </p>
                  <a
                    href={siteConfig.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-lg py-md rounded-xs font-semibold bg-navy text-white hover:bg-gold hover:text-navy transition-all"
                  >
                    Open Calendar &amp; Book Now →
                  </a>
                </div>

                <p className="text-center text-gray-dark text-sm mb-0">
                  Calendar opens in a new tab. Confirmation email with meeting details sent immediately.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="light">
        <Container className="max-w-3xl">
          <h2 className="text-center">Client Testimonials</h2>
          <TestimonialGrid items={bookingTestimonials} onWhite />
        </Container>
      </Section>
    </>
  );
}
