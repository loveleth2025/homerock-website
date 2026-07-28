"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger delay in seconds — use for sequencing sibling Reveals. */
  delay?: number;
  /** Distance the element travels in from, in pixels. */
  distance?: number;
  direction?: "up" | "down" | "left" | "right";
  /** For grids/lists: wraps children with staggered child animation instead of a single block. */
  once?: boolean;
};

const directionOffset: Record<NonNullable<RevealProps["direction"]>, { x?: number; y?: number }> = {
  up: { y: 24 },
  down: { y: -24 },
  left: { x: 24 },
  right: { x: -24 },
};

/**
 * Fade + slide an element in once it scrolls into view. This is the site's
 * one scroll-reveal primitive — every "premium" section entrance reuses it
 * instead of hand-rolled animation code per section.
 */
export function Reveal({ children, className, delay = 0, distance, direction = "up", once = true }: RevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const offset = directionOffset[direction];
  const travel = distance ?? 24;
  const scaledOffset = {
    x: offset.x ? (offset.x > 0 ? travel : -travel) : 0,
    y: offset.y ? (offset.y > 0 ? travel : -travel) : 0,
  };

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...scaledOffset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Stagger-reveals a list of items (e.g. a card grid) — wrap the grid in
 * <RevealGroup>, each direct child in <RevealItem>.
 */
export function RevealGroup({ children, className }: { children: ReactNode; className?: string }) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ staggerChildren: 0.08 }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, className }: { children: ReactNode; className?: string }) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
      }}
    >
      {children}
    </motion.div>
  );
}
