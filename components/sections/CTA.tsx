import { type ReactNode } from "react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

type CTAProps = {
  title: string;
  description?: string;
  children: ReactNode;
};

/** The recurring navy "accent" CTA band used at the bottom of most legacy pages. */
export function CTA({ title, description, children }: CTAProps) {
  return (
    <Section tone="accent">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-white">{title}</h2>
          {description && (
            <p className="text-cream text-lg mb-xl">{description}</p>
          )}
          {children}
        </div>
      </Container>
    </Section>
  );
}
