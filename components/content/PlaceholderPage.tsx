import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { type Crumb } from "@/components/layout/Breadcrumbs";
import { PlaceholderNotice } from "@/components/ui/PlaceholderNotice";
import { CTA } from "@/components/sections/CTA";
import { Button } from "@/components/ui/Button";

type PlaceholderPageProps = {
  title: string;
  subheading: string;
  breadcrumbs: Crumb[];
  ctaTitle: string;
  ctaDescription: string;
  ctaLabel: string;
  ctaHref?: string;
};

/**
 * Shared shell for every net-new page defined in content-architecture.md.
 * Renders the real IA (hero, breadcrumbs, CTA) with a clearly labeled
 * placeholder body — no fabricated copy — until real content is supplied.
 */
export function PlaceholderPage({
  title,
  subheading,
  breadcrumbs,
  ctaTitle,
  ctaDescription,
  ctaLabel,
  ctaHref = "/booking",
}: PlaceholderPageProps) {
  return (
    <>
      <BreadcrumbBar items={breadcrumbs} />

      <Hero title={title} subheading={subheading} align="left" />

      <Section>
        <Container className="max-w-[48rem]">
          <PlaceholderNotice />
        </Container>
      </Section>

      <CTA title={ctaTitle} description={ctaDescription}>
        <Button href={ctaHref}>{ctaLabel}</Button>
      </CTA>
    </>
  );
}
