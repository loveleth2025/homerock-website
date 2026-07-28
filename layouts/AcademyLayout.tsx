import { type ReactNode } from "react";
import { Hero } from "@/components/sections/Hero";
import { CTA } from "@/components/sections/CTA";
import { Button } from "@/components/ui/Button";

type AcademyLayoutProps = {
  title: string;
  subheading: string;
  children: ReactNode;
  ctaTitle: string;
  ctaDescription: string;
  ctaLabel: string;
};

/**
 * Shared shell for the four hub pages (Buyers, Sellers, Investors, Realtors):
 * left-aligned hero + freeform body sections + closing booking CTA band.
 */
export function AcademyLayout({ title, subheading, children, ctaTitle, ctaDescription, ctaLabel }: AcademyLayoutProps) {
  return (
    <>
      <Hero title={title} subheading={subheading} align="left" />
      {children}
      <CTA title={ctaTitle} description={ctaDescription}>
        <Button href="/booking">{ctaLabel}</Button>
      </CTA>
    </>
  );
}
