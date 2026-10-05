import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Vendor Sponsorship: Investor Meetup",
  description:
    "Sponsor Natalie Pilkinton's Spring/Woodlands real estate investor network. Listed vendor, event sponsor and exclusive category packages for investor-friendly businesses.",
  path: "/vendor-sponsorship",
});

export default function VendorSponsorshipPage() {
  const packages = [
    {
      name: "Listed Vendor",
      price: "$29/month",
      description:
        "A simple, affordable way to keep your business visible to our investor community throughout the year.",
      benefits: [
        "Ongoing directory listing",
        "Company name/category",
        "Contact info",
        "Website link",
        "Service description",
        "Optional special offer",
      ],
      button: "Get Listed",
      buttonClass: "bg-blue-600 hover:bg-blue-700",
    },
    {
      name: "Annual Listed Vendor",
      price: "$299/year",
      description:
        "Same ongoing vendor-directory exposure, paid annually at a discounted rate.",
      benefits: [
        "Everything in Listed Vendor",
        "One full year",
        "Save 2 months",
        "Annual commitment",
        "Stability",
      ],
      button: "Save with Annual",
      badge: "BEST VALUE",
      featured: true,
      buttonClass: "bg-blue-600 hover:bg-blue-700",
    },
    {
      name: "Event Sponsor",
      price: "$200/event",
      description:
        "Get your business directly in front of attendees at a live Meetup. Limited to 2 sponsors per event.",
      benefits: [
        "5 minutes speaking time",
        "Host introduction",
        "Table/display space",
        "Marketing materials",
        "Logo on event page",
        "Social media recognition",
        "Networking",
      ],
      button: "Sponsor an Event",
      badge: "Limited 2/event",
      buttonClass: "bg-blue-600 hover:bg-blue-700",
    },
    {
      name: "Premier Category Sponsor",
      price: "$1,000/year",
      description:
        "Exclusive top-tier sponsorship. Only 2 per category for 12 months.",
      benefits: [
        "Exclusive designation",
        "Only 2 per category",
        "Logo in directory header",
        "Official category sponsor",
        "Top placement",
        "2/year speaking opportunities",
        "Table/display at events",
        "Social media promotion",
        "Exclusive offers",
      ],
      button: "Claim Your Category",
      badge: "RECOMMENDED - EXCLUSIVE",
      featured: true,
      premier: true,
      buttonClass: "bg-yellow-500 text-blue-900 hover:bg-yellow-600",
    },
  ];

  const steps = ["Choose Your Level", "Apply", "Get Active", "Engage", "Grow"];

  const faqs = [
    {
      question: "What if my category already has a Premier Sponsor?",
      answer:
        "You can still choose another sponsorship level, or select a different available category for Premier sponsorship.",
    },
    {
      question: "How often are events held?",
      answer:
        "Our live Meetups are held throughout the year, giving sponsors regular opportunities to connect with the investor community.",
    },
    {
      question: "Do I need to attend events?",
      answer:
        "Event attendance is not required for directory listings. Event Sponsors receive the most value by attending their sponsored Meetup.",
    },
    {
      question: "Can I switch sponsorship levels?",
      answer:
        "Yes. Contact us to discuss changing your sponsorship level based on your goals and availability.",
    },
    {
      question: "What do attendees see in the directory?",
      answer:
        "Attendees see your company name, category, contact information, website link, service description, and optional special offer.",
    },
    {
      question: "How do I get attendee contact information?",
      answer:
        "Sponsors build connections directly through events and networking. Attendee contact information is shared only with permission.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <section className="bg-blue-900 px-4 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Partner With Our Investor Network
          </h1>
          <p className="mt-4 max-w-5xl text-base text-blue-100 sm:text-xl lg:text-2xl">
            Connect with active real estate investors and professionals
          </p>
        </div>
      </section>

      <main>
        <section className="bg-gray-50 px-4 py-12 sm:py-14 md:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900">
              Sponsorship Packages
            </h2>
            <div className="mt-8 sm:mt-10 grid gap-4 sm:gap-6 md:grid-cols-2">
              {packages.map((sponsorshipPackage) => (
                <article
                  key={sponsorshipPackage.name}
                  className={`relative flex h-full flex-col rounded-2xl bg-white p-5 sm:p-6 md:p-8 shadow-sm ${
                    sponsorshipPackage.premier
                      ? "bg-yellow-50 ring-2 ring-yellow-500"
                      : sponsorshipPackage.featured
                        ? "ring-2 ring-blue-500"
                        : ""
                  }`}
                >
                  {sponsorshipPackage.badge && (
                    <span
                      className={`absolute right-4 sm:right-6 top-5 sm:top-6 rounded-full px-2 sm:px-3 py-1 text-xs font-bold tracking-wide ${
                        sponsorshipPackage.premier
                          ? "bg-yellow-500 text-blue-900"
                          : "bg-blue-600 text-white"
                      }`}
                    >
                      {sponsorshipPackage.badge}
                    </span>
                  )}
                  <h3 className="pr-16 sm:pr-20 text-lg sm:text-xl md:text-2xl font-bold text-blue-900">
                    {sponsorshipPackage.name}
                  </h3>
                  <p className="mt-3 sm:mt-4 text-2xl sm:text-3xl font-bold text-gray-900">
                    {sponsorshipPackage.price}
                  </p>
                  <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600">
                    {sponsorshipPackage.description}
                  </p>
                  <ul className="mt-4 sm:mt-6 flex-1 space-y-2 sm:space-y-3 border-t border-gray-200 pt-4 sm:pt-6">
                    {sponsorshipPackage.benefits.map((benefit) => (
                      <li key={benefit} className="flex gap-2 sm:gap-3 text-xs sm:text-sm text-gray-700">
                        <span
                          className="font-bold text-blue-600 flex-shrink-0"
                          aria-hidden="true"
                        >
                          ✓
                        </span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#apply"
                    className={`mt-6 sm:mt-8 w-full inline-flex items-center justify-center rounded-lg px-4 sm:px-5 py-2.5 sm:py-3 font-semibold text-white transition-colors ${sponsorshipPackage.buttonClass}`}
                  >
                    {sponsorshipPackage.button}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-12 sm:py-14 md:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900">
              How It Works
            </h2>
            <div className="mt-8 sm:mt-10 grid gap-4 sm:gap-6 lg:gap-8 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
              {steps.map((step, index) => (
                <div key={step} className="text-center">
                  <div className="mx-auto flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-blue-600 text-sm sm:text-lg font-bold text-white">
                    {index + 1}
                  </div>
                  <h3 className="mt-2 sm:mt-4 text-xs sm:text-sm font-bold text-blue-900">{step}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-12 sm:pb-14 md:pb-20">
          <div className="mx-auto max-w-6xl border-l-4 border-blue-600 bg-blue-50 p-5 sm:p-6 md:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-blue-900">
              Category Exclusivity
            </h2>
            <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-700">
              Only 2 Premier Sponsors are available per category for each
              12-month period. Claim your category early to secure exclusive
              visibility and recognition within our investor network.
            </p>
          </div>
        </section>

        <section className="bg-gray-50 px-4 py-12 sm:py-14 md:py-20">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900">
              Frequently Asked Questions
            </h2>
            <div className="mt-8 sm:mt-10 space-y-3 sm:space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="rounded-lg border border-gray-200 bg-white p-4 sm:p-5"
                >
                  <summary className="cursor-pointer text-sm sm:text-base font-semibold text-blue-900">
                    {faq.question}
                  </summary>
                  <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-600">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section
          id="apply"
          className="bg-blue-900 px-4 py-12 sm:py-16 md:py-20 text-center text-white"
        >
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Ready to Connect With Our Investors?
            </h2>
            <a
              href="https://investsponsorship.nataliepilkinton.com/home--vendor--sponsorship-opportunities"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 sm:mt-8 inline-flex rounded-lg bg-yellow-500 px-5 sm:px-6 py-2.5 sm:py-3 font-bold text-blue-900 transition-colors hover:bg-yellow-400"
            >
              Apply for Sponsorship
            </a>
          </div>
        </section>
      </main>

      <footer className="px-4 py-10 sm:py-12 text-center">
        <h2 className="text-xl sm:text-2xl font-bold text-blue-900">
          Questions? Let&apos;s Talk!
        </h2>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base font-semibold">Natalie Pilkinton</p>
        <p className="mt-2 text-xs sm:text-sm text-gray-600">
          <a className="hover:text-blue-600" href="tel:+18328633468">
            (832) 863-3468
          </a>{" "}
          <span aria-hidden="true">•</span>{" "}
          <a
            className="hover:text-blue-600"
            href="mailto:natalie@nataliepilkinton.com"
          >
            natalie@nataliepilkinton.com
          </a>
        </p>
      </footer>

      {/* Vendor Directory CTA Section - Horizontal Layout */}
      <section className="px-4 py-12 sm:py-14 md:py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 sm:gap-8">
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-3 sm:mb-4">
                Need Trusted Vendors?
              </h2>
              <p className="text-base sm:text-lg text-gray-700">
                Browse our vetted directory of investor-friendly service providers in one place
              </p>
            </div>
            <div className="flex-shrink-0 w-full sm:w-auto">
              <a
                href="/investors/vendors"
                className="block sm:inline-block w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors transform hover:scale-105"
              >
                View Vendor Directory →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
