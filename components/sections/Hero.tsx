import { type ReactNode } from "react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils/cn";

type HeroProps = {
  title: string;
  subheading?: string;
  children?: ReactNode;
  /** "centered" matches the legacy homepage hero; "left" matches inner academy-page heroes. */
  align?: "centered" | "left";
};

export function Hero({ title, subheading, children, align = "centered" }: HeroProps) {
  return (
    <Section tone="hero">
      <Container>
        <div
          className={cn(
            align === "centered" && "max-w-3xl mx-auto text-center py-3xl",
          )}
        >
          <h1 className="mb-md text-[clamp(1.75rem,8vw,var(--text-5xl))]">{title}</h1>
          {subheading && (
            <p className="text-2xl font-normal leading-relaxed mb-2xl opacity-95 text-cream max-md:text-lg max-md:mb-xl">
              {subheading}
            </p>
          )}
          {children && (
            <div className="flex gap-md justify-center flex-wrap max-md:flex-col">{children}</div>
          )}
        </div>
      </Container>
    </Section>
  );
}
