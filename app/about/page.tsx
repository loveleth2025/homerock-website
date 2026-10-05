import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CTA } from "@/components/sections/CTA";
import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { siteConfig } from "@/lib/data/navigation";
import { buildMetadata } from "@/lib/seo/metadata";
import { faqSchema, jsonLdScriptProps } from "@/lib/seo/schema";

export const metadata: Metadata = buildMetadata({
  title: "Natalie Pilkinton | Houston Realtor, Investor & Educator | HomeRock Realty",
  absoluteTitle: true,
  description:
    "Natalie Pilkinton is a Houston-area REALTOR® with HomeRock Realty, a real estate investor and an educator with 20+ years of experience serving buyers, sellers and investors.",
  path: "/about",
});

/**
 * Every statement on this page is a confirmed fact (Oct 2026) or a claim the site
 * already publishes elsewhere. Don't add numbers or credentials here until
 * Natalie has confirmed them.
 */

const audiences = [
  {
    title: "Home buyers",
    body: "First-time buyers, relocation buyers and new construction buyers, from pre-approval through closing. Her Home Buyer Masterclass and free webinar walk buyers through cash-to-close before they shop.",
    href: "/buyers",
    link: "Home Buyer Academy",
  },
  {
    title: "Home sellers",
    body: "Pricing, marketing, negotiation and a plan built around the seller's timeline.",
    href: "/sellers",
    link: "Home Seller Academy",
  },
  {
    title: "Real estate investors",
    body: "Natalie invests in real estate herself, including wholesaling and multifamily syndication. She helps investors analyze properties, cash flow and financing, and hosts a monthly Spring/Woodlands meetup where investors and Realtors talk through the Texas market.",
    href: "/investors",
    link: "Investor Academy",
  },
  {
    title: "Realtors",
    body: "Coaching, training and business systems for agents, and a path to join HomeRock Realty.",
    href: "/realtors",
    link: "Realtor Growth Academy",
  },
];

const marketsServed = ["Spring", "Houston", "The Woodlands", "Tomball", "Conroe", "Cypress", "Magnolia", "Montgomery"];

const faqs = [
  {
    question: "Who is Natalie Pilkinton?",
    answer:
      "Natalie Pilkinton is a Houston-area REALTOR® with HomeRock Realty, a real estate investor and a real estate educator. She has more than 20 years of experience and has helped 500+ families buy homes.",
  },
  {
    question: "Where does Natalie Pilkinton work?",
    answer:
      "Natalie is a REALTOR® with HomeRock Realty, a full-service brokerage. Her business address is 6046 FM 2920, Ste 326, Spring, TX 77379, and she can be reached at (832) 863-3468.",
  },
  {
    question: "What areas does Natalie Pilkinton serve?",
    answer:
      "Spring, Houston, The Woodlands, Tomball, Conroe, Cypress, Magnolia, Montgomery and the surrounding greater Houston area.",
  },
  {
    question: "Is Natalie Pilkinton a licensed Realtor?",
    answer:
      "Yes. Natalie is a licensed Texas real estate sales agent (TREC License #744998) and a REALTOR® with HomeRock Realty.",
  },
  {
    question: "Does Natalie Pilkinton work with first-time home buyers?",
    answer:
      "Yes. First-time buyers are a core part of her business. She teaches a Home Buyer Masterclass and a free home buyer webinar, and her Home Buyer Academy covers credit, financing and Texas down payment assistance.",
  },
  {
    question: "Does Natalie Pilkinton work with real estate investors?",
    answer:
      "Yes. Natalie is an active real estate investor herself, with experience in wholesaling and multifamily syndication, and she organizes a monthly Spring/Woodlands investor meetup with 360+ members.",
  },
  {
    question: "Does Natalie Pilkinton have multifamily investment experience?",
    answer:
      "Yes. Her background includes multifamily syndication, and multifamily investing is part of the education she offers through her Investor Academy.",
  },
  {
    question: "What makes Natalie Pilkinton different from a traditional Realtor?",
    answer:
      "She combines three roles: a REALTOR® who represents buyers and sellers, an investor who buys real estate herself, and an educator who teaches buyers, investors and other agents. Clients get advice from someone who has made the same decisions with her own money.",
  },
];

const socialLinks = [
  { label: "Facebook", href: siteConfig.social.facebook },
  { label: "Instagram", href: siteConfig.social.instagram },
  { label: "LinkedIn", href: siteConfig.social.linkedin },
  { label: "YouTube", href: siteConfig.social.youtube },
  { label: "HAR.com", href: siteConfig.harProfileUrl },
];

export default function AboutPage() {
  return (
    <>
      <script {...jsonLdScriptProps(faqSchema(faqs))} />

      <BreadcrumbBar items={[{ name: "About Natalie", path: "/about" }]} />

      <Hero
        title="Natalie Pilkinton"
        subheading="Houston Texas Realtor, Real Estate Investor & Educator"
        eyebrow="REALTOR® · Investor · Educator · Podcast Host"
      />

      <Section>
        <Container>
          <div className="grid grid-cols-2 max-md:grid-cols-1 items-center gap-3xl">
            <Image
              src={siteConfig.headshotUrl}
              alt="Natalie Pilkinton, Houston REALTOR® with HomeRock Realty"
              width={640}
              height={640}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="w-full h-auto rounded-sm"
              priority
            />
            <div>
              <h2>Who is Natalie Pilkinton?</h2>
              <p className="text-lg">
                Natalie Pilkinton is a Houston-area REALTOR® with HomeRock Realty, a real estate investor and an
                educator with more than 20 years of experience helping buyers, sellers and investors across Spring,
                Houston and The Woodlands.
              </p>
              <p>
                For over 20 years, I&rsquo;ve been deeply immersed in Houston&rsquo;s real estate market. I&rsquo;ve
                helped over 500 families buy their homes, negotiated 50+ investment properties, and educated thousands
                about real estate wealth building.
              </p>
              <p>
                Today, I&rsquo;m passionate about making real estate education accessible to everyone&mdash;whether
                you&rsquo;re a first-time buyer, investor, or agent looking to scale your business.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="light">
        <Container>
          <h2>Real estate experience</h2>
          <ul className="grid grid-cols-3 max-md:grid-cols-1 gap-lg list-none p-0 mt-xl">
            <li className="bg-white rounded-xs p-lg border border-gray-light">
              <p className="text-3xl font-bold text-navy mb-xs">20+ years</p>
              <p className="text-gray-dark mb-0">in Houston-area real estate</p>
            </li>
            <li className="bg-white rounded-xs p-lg border border-gray-light">
              <p className="text-3xl font-bold text-navy mb-xs">500+ families</p>
              <p className="text-gray-dark mb-0">helped to buy a home, across brokerages and her own investing</p>
            </li>
            <li className="bg-white rounded-xs p-lg border border-gray-light">
              <p className="text-3xl font-bold text-navy mb-xs">Residential + investment</p>
              <p className="text-gray-dark mb-0">resale, new construction, wholesaling and multifamily syndication</p>
            </li>
          </ul>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2>Who Natalie helps</h2>
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-xl mt-xl">
            {audiences.map((audience) => (
              <div key={audience.href}>
                <h3>{audience.title}</h3>
                <p className="text-gray-dark">{audience.body}</p>
                <Link href={audience.href} className="font-semibold text-gold-ink underline underline-offset-2 hover:text-navy">
                  {audience.link} →
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="light">
        <Container>
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-3xl">
            <div>
              <h2>Education &amp; community</h2>
              <ul className="space-y-sm">
                <li>
                  Teaches the Home Buyer Masterclass and a{" "}
                  <Link href="/webinar" className="text-gold-ink underline underline-offset-2 hover:text-navy">
                    free home buyer webinar
                  </Link>
                  .
                </li>
                <li>
                  Organizes{" "}
                  <a href={siteConfig.meetup.url} target="_blank" rel="noopener noreferrer" className="text-gold-ink underline underline-offset-2 hover:text-navy">
                    {siteConfig.meetup.name}
                  </a>
                  , a monthly meetup in Spring/The Woodlands where investors and Realtors discuss the Texas market, with a network of{" "}
                  <Link href="/investors/vendors" className="text-gold-ink underline underline-offset-2 hover:text-navy">
                    investor-friendly vendors
                  </Link>
                  .
                </li>
                <li>
                  Co-hosts the{" "}
                  <Link href="/podcast" className="text-gold-ink underline underline-offset-2 hover:text-navy">
                    Sugar, Spice &amp; Spirits podcast
                  </Link>
                  .
                </li>
                <li>Volunteers with the Houston Livestock Show &amp; Rodeo Speakers Committee.</li>
                <li>
                  Publishes a monthly{" "}
                  <Link href="/market-updates" className="text-gold-ink underline underline-offset-2 hover:text-navy">
                    Houston market update
                  </Link>{" "}
                  explaining what the numbers mean for buyers, sellers and investors.
                </li>
              </ul>
            </div>
            <div>
              <h2>Markets served</h2>
              <p>Based in Spring and working across greater Houston and Montgomery County:</p>
              <ul className="flex flex-wrap gap-sm list-none p-0">
                {marketsServed.map((market) => (
                  <li key={market} className="px-md py-xs rounded-full border border-gray-light bg-white text-navy text-sm font-semibold">
                    {market}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2>Credentials &amp; brokerage</h2>
          <dl className="grid grid-cols-[12rem_1fr] max-md:grid-cols-1 gap-x-xl gap-y-sm mt-lg">
            <dt className="font-semibold text-navy">License</dt>
            <dd className="m-0">Texas real estate sales agent, TREC License #{siteConfig.licenseNumber}</dd>
            <dt className="font-semibold text-navy">Brokerage</dt>
            <dd className="m-0">
              {siteConfig.brand}, {siteConfig.brokerage.street}, {siteConfig.brokerage.city}, {siteConfig.brokerage.region}{" "}
              {siteConfig.brokerage.postalCode}
            </dd>
            <dt className="font-semibold text-navy">Business address</dt>
            <dd className="m-0">
              {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.region} {siteConfig.address.postalCode}
            </dd>
            <dt className="font-semibold text-navy">Phone</dt>
            <dd className="m-0">
              <a href={siteConfig.phoneHref} className="text-gold-ink underline underline-offset-2 hover:text-navy">
                {siteConfig.phone}
              </a>
            </dd>
            <dt className="font-semibold text-navy">Profiles</dt>
            <dd className="m-0 flex flex-wrap gap-sm">
              {socialLinks.map((link) => (
                <Button key={link.label} href={link.href} external variant="secondary" size="small">
                  {link.label}
                </Button>
              ))}
            </dd>
          </dl>
        </Container>
      </Section>

      <Section tone="light">
        <Container className="max-w-[48rem]">
          <h2>Frequently asked questions about Natalie Pilkinton</h2>
          <div className="mt-xl">
            {faqs.map((faq) => (
              <div key={faq.question} className="border-b border-gray-light py-lg last:border-b-0">
                <h3 className="text-lg mb-sm">{faq.question}</h3>
                <p className="text-gray-dark mb-0">{faq.answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CTA title="Let's Connect" description="Ready to discuss your real estate goals? I'd love to help you on your journey.">
        <Button href="/booking">Book A Strategy Session</Button>
      </CTA>
    </>
  );
}
