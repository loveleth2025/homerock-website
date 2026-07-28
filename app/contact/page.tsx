import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig } from "@/lib/data/navigation";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description: "Have a question for Natalie Pilkinton or HomeRock Realty? Reach out by phone, email, or the contact form.",
  path: "/contact",
});

const socialLinks = [
  { label: "Facebook", href: siteConfig.social.facebook },
  { label: "Instagram", href: siteConfig.social.instagram },
  { label: "LinkedIn", href: siteConfig.social.linkedin },
  { label: "YouTube", href: siteConfig.social.youtube },
];

export default function ContactPage() {
  return (
    <>
      <Hero title="Get in Touch" subheading="Have a question? We'd love to hear from you." />

      <Section>
        <Container>
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-3xl items-start">
            <div>
              <h2>Contact Information</h2>

              <div className="mb-2xl">
                <h4 className="mb-md text-lg">Office Location</h4>
                <p className="mb-0">
                  {siteConfig.address.line1}
                  <br />
                  {siteConfig.address.line2}
                  <br />
                  {siteConfig.address.line3}
                </p>
              </div>

              <div className="mb-2xl">
                <h4 className="mb-md text-lg">Phone</h4>
                <p className="mb-0">
                  <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
                </p>
              </div>

              <div className="mb-2xl">
                <h4 className="mb-md text-lg">Email</h4>
                <p className="mb-0">
                  <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                </p>
              </div>

              <div>
                <h4 className="mb-md text-lg">Follow Us</h4>
                <div className="flex gap-md flex-wrap">
                  {socialLinks.map((link) => (
                    <Button key={link.label} href={link.href} external variant="secondary" size="small">
                      {link.label}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h2>Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
