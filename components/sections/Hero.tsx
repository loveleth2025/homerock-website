"use client";

import { type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { FloatingElement } from "@/components/motion/FloatingElement";
import { HeroShowcase } from "@/components/three/HeroShowcase";
import { cn } from "@/lib/utils/cn";

type HeroProps = {
  title: string;
  subheading?: string;
  /** Small uppercase label above the headline (e.g. a role/positioning line). Centered heroes only. */
  eyebrow?: string;
  children?: ReactNode;
  /** "centered" matches the legacy homepage hero; "left" matches inner academy-page heroes. */
  align?: "centered" | "left";
  /**
   * Renders the R3F showcase + decorative glass accents. Reserved for the
   * homepage — inner-page heroes stay lighter (no three.js bundle cost).
   */
  cinematic?: boolean;
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

export function Hero({ title, subheading, eyebrow, children, align = "centered", cinematic = false }: HeroProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Section tone="hero" className="relative overflow-hidden">
      {/* Subtle radial glow for depth — navy/gold only, no new brand colors. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(60rem 30rem at 50% -10%, rgba(201,162,39,0.16), transparent 60%)",
        }}
      />

      {cinematic && <HeroShowcase />}

      {cinematic && !prefersReducedMotion && (
        <>
          <FloatingElement
            className="hidden md:block absolute top-[18%] left-[8%] w-16 h-16 rounded-full bg-white/5 backdrop-blur-md border border-white/15"
            distance={14}
            duration={5}
          />
          <FloatingElement
            className="hidden md:block absolute bottom-[22%] left-[14%] w-10 h-10 rounded-xs rotate-12 bg-gold/10 backdrop-blur-md border border-gold/25"
            distance={10}
            duration={4.5}
            delay={0.6}
          />
          <FloatingElement
            className="hidden lg:block absolute top-[30%] right-[10%] w-8 h-8 rounded-full bg-gold/10 backdrop-blur-md border border-gold/20"
            distance={12}
            duration={6}
            delay={1.1}
          />
        </>
      )}

      <Container className="relative">
        <motion.div
          initial={prefersReducedMotion ? undefined : "hidden"}
          animate={prefersReducedMotion ? undefined : "visible"}
          variants={stagger}
          className={cn(align === "centered" && "max-w-4xl mx-auto text-center py-xl")}
        >
          {eyebrow && (
            <motion.p variants={item} className="text-gold text-sm font-semibold uppercase tracking-[0.18em] mb-md">
              {eyebrow}
            </motion.p>
          )}

          <motion.h1
            variants={item}
            className={cn(
              "text-balance mb-lg leading-[1.05] tracking-[-0.02em]",
              "text-[clamp(2.25rem,1.25rem+3.5vw,4.25rem)]",
            )}
          >
            {title}
          </motion.h1>

          {subheading && (
            <motion.p
              variants={item}
              className={cn(
                "text-pretty text-xl font-normal leading-relaxed opacity-95 text-cream max-md:text-lg",
                align === "centered" ? "max-w-[42rem] mx-auto mb-2xl" : "max-w-[42rem] mb-2xl",
              )}
            >
              {subheading}
            </motion.p>
          )}

          {children && (
            <motion.div
              variants={item}
              className={cn(
                "flex gap-md flex-wrap max-md:flex-col",
                align === "centered" ? "justify-center" : "justify-start",
              )}
            >
              {children}
            </motion.div>
          )}
        </motion.div>
      </Container>
    </Section>
  );
}
