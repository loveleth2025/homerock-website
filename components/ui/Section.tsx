import { type ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

type Tone = "default" | "light" | "accent" | "hero";

const toneClasses: Record<Tone, string> = {
  default: "",
  light: "bg-cream",
  accent: "bg-navy text-white [&_h2]:text-white [&_h3]:text-white",
  hero: "bg-navy text-white pt-[calc(var(--spacing-3xl)*1.5)] pb-[calc(var(--spacing-3xl)*1.5)] [&_h1]:text-white [&_h2]:text-cream",
};

type SectionProps = {
  children: ReactNode;
  tone?: Tone;
  className?: string;
};

export function Section({ children, tone = "default", className }: SectionProps) {
  return (
    <section className={cn("py-3xl", toneClasses[tone], className)}>{children}</section>
  );
}
