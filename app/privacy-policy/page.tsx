import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Callout } from "@/components/ui/Callout";
import { siteConfig } from "@/lib/data/navigation";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "HomeRock Realty's privacy policy: what information we collect, how we use it, and your rights.",
  path: "/privacy-policy",
});

const EFFECTIVE_DATE = "July 28, 2026";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Hero title="Privacy Policy" subheading={`Effective ${EFFECTIVE_DATE}`} align="left" />

      <Section>
        <Container className="max-w-[48rem]">
          <Callout title="Template notice">
            <p className="mb-0">
              This is a standard-form privacy policy template for a real estate brokerage website. It has not
              been reviewed by an attorney and should be reviewed by HomeRock Realty&rsquo;s legal counsel before
              publishing, to confirm it accurately reflects actual data practices and complies with applicable
              state and federal law (including Texas Real Estate Commission requirements and, if collecting
              data from California residents, the CCPA).
            </p>
          </Callout>

          <h2>1. Information We Collect</h2>
          <p>When you visit {siteConfig.siteUrl.replace("https://", "")} or interact with our forms, we may collect:</p>
          <ul className="ml-lg list-disc mb-lg">
            <li className="mb-md">
              <strong>Information you provide directly</strong> &mdash; such as your name, email address, phone
              number, and message content when you submit a contact form, request a home valuation, or book a
              strategy session.
            </li>
            <li className="mb-md">
              <strong>Booking information</strong> &mdash; when you schedule a session through our Outlook booking
              link, that scheduling data is collected and processed by Microsoft/Outlook under their own privacy
              policy, not ours.
            </li>
            <li className="mb-md">
              <strong>Automatically collected information</strong> &mdash; such as IP address, browser type,
              device information, and pages visited, typically gathered through standard web server logs and any
              analytics tools we use.
            </li>
            <li className="mb-md">
              <strong>Cookies and similar technologies</strong> &mdash; used to remember preferences and
              understand site usage. You can disable cookies in your browser settings, though some site features
              may not function properly as a result.
            </li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="ml-lg list-disc mb-lg">
            <li className="mb-md">Respond to your inquiries and schedule requested consultations</li>
            <li className="mb-md">Provide the real estate services, resources, and content you request</li>
            <li className="mb-md">Send you requested materials, such as guides, checklists, or newsletter content</li>
            <li className="mb-md">Improve our website and better understand how visitors use it</li>
            <li className="mb-md">Comply with legal obligations applicable to licensed real estate professionals</li>
          </ul>

          <h2>3. How We Share Your Information</h2>
          <p>
            We do not sell your personal information. We may share information with:
          </p>
          <ul className="ml-lg list-disc mb-lg">
            <li className="mb-md">
              Service providers who help operate our website, scheduling, and communications (e.g., our booking
              platform, email provider, or hosting provider), bound to use your data only to provide those
              services.
            </li>
            <li className="mb-md">
              Other parties to a transaction (such as lenders, title companies, or other agents) when necessary
              to facilitate a real estate transaction you&rsquo;ve engaged us for.
            </li>
            <li className="mb-md">Legal or regulatory authorities, when required by law.</li>
          </ul>

          <h2>4. Third-Party Content</h2>
          <p>
            Pages on this site embed content from third parties, including YouTube video and podcast players. These
            providers may collect data about your interaction with embedded content according to their own
            privacy policies.
          </p>

          <h2>5. Your Choices &amp; Rights</h2>
          <p>
            You may request access to, correction of, or deletion of the personal information we hold about you by
            contacting us using the information below. Depending on your state of residence, you may have
            additional rights under applicable privacy law.
          </p>

          <h2>6. Data Security</h2>
          <p>
            We use reasonable administrative and technical safeguards to protect the information you share with us.
            No method of transmission or storage is completely secure, and we cannot guarantee absolute security.
          </p>

          <h2>7. Children&rsquo;s Privacy</h2>
          <p>
            Our website is not directed to children under 13, and we do not knowingly collect personal information
            from children.
          </p>

          <h2>8. Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. The &ldquo;Effective&rdquo; date above reflects
            the most recent revision.
          </p>

          <h2>9. Contact Us</h2>
          <p className="mb-0">
            {siteConfig.address.line1}
            <br />
            {siteConfig.address.line2}, {siteConfig.address.line3}
            <br />
            Phone: <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
            <br />
            Email: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          </p>
        </Container>
      </Section>
    </>
  );
}
