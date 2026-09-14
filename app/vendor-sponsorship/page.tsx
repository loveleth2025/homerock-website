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
            Connect with 327+ active real estate investors and professionals
          </p>
        </div>
      </section>

      <main>
        <section className="bg-gray-50 px-4 py-14 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-blue-900 sm:text-4xl">
              Sponsorship Packages
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {packages.map((sponsorshipPackage) => (
                <article
                  key={sponsorshipPackage.name}
                  className={`relative flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm sm:p-8 ${
                    sponsorshipPackage.premier
                      ? "bg-yellow-50 ring-2 ring-yellow-500"
                      : sponsorshipPackage.featured
                        ? "ring-2 ring-blue-500"
                        : ""
                  }`}
                >
                  {sponsorshipPackage.badge && (
                    <span
                      className={`absolute right-6 top-6 rounded-full px-3 py-1 text-xs font-bold tracking-wide ${
                        sponsorshipPackage.premier
                          ? "bg-yellow-500 text-blue-900"
                          : "bg-blue-600 text-white"
                      }`}
                    >
                      {sponsorshipPackage.badge}
                    </span>
                  )}
                  <h3 className="pr-28 text-2xl font-bold text-blue-900">
                    {sponsorshipPackage.name}
                  </h3>
                  <p className="mt-4 text-3xl font-bold text-gray-900">
                    {sponsorshipPackage.price}
                  </p>
                  <p className="mt-4 min-h-20 text-gray-600">
                    {sponsorshipPackage.description}
                  </p>
                  <ul className="mt-6 flex-1 space-y-3 border-t border-gray-200 pt-6">
                    {sponsorshipPackage.benefits.map((benefit) => (
                      <li key={benefit} className="flex gap-3 text-gray-700">
                        <span
                          className="font-bold text-blue-600"
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
                    className={`mt-8 inline-flex items-center justify-center rounded-lg px-5 py-3 font-semibold text-white transition-colors ${sponsorshipPackage.buttonClass}`}
                  >
                    {sponsorshipPackage.button}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-14 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center text-3xl font-bold text-blue-900 sm:text-4xl">
              How It Works
            </h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
              {steps.map((step, index) => (
                <div key={step} className="text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
                    {index + 1}
                  </div>
                  <h3 className="mt-4 font-bold text-blue-900">{step}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-14 sm:pb-20">
          <div className="mx-auto max-w-6xl border-l-4 border-blue-600 bg-blue-50 p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-blue-900">
              Category Exclusivity
            </h2>
            <p className="mt-3 text-gray-700">
              Only 2 Premier Sponsors are available per category for each
              12-month period. Claim your category early to secure exclusive
              visibility and recognition within our investor network.
            </p>
          </div>
        </section>

        <section className="bg-gray-50 px-4 py-14 sm:py-20">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center text-3xl font-bold text-blue-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <div className="mt-10 space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="rounded-lg border border-gray-200 bg-white p-5"
                >
                  <summary className="cursor-pointer font-semibold text-blue-900">
                    {faq.question}
                  </summary>
                  <p className="mt-3 text-gray-600">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section
          id="apply"
          className="bg-blue-900 px-4 py-16 text-center text-white sm:py-20"
        >
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Ready to Connect With 327+ Investors?
            </h2>
            <a
              href="https://investsponsorship.nataliepilkinton.com/home--vendor--sponsorship-opportunities"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-lg bg-yellow-500 px-6 py-3 font-bold text-blue-900 transition-colors hover:bg-yellow-400"
            >
              Apply for Sponsorship
            </a>
          </div>
        </section>
      </main>

      <footer className="px-4 py-12 text-center">
        <h2 className="text-2xl font-bold text-blue-900">
          Questions? Let&apos;s Talk!
        </h2>
        <p className="mt-4 font-semibold">Natalie Pilkinton</p>
        <p className="mt-2 text-gray-600">
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
    </div>
  );
}
