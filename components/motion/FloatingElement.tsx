"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";

type FloatingElementProps = {
  children?: ReactNode;
  className?: string;
  /** Vertical travel distance in pixels. */
  distance?: number;
  /** Full loop duration in seconds. */
  duration?: number;
  delay?: number;
};

/** A slow, subtle up-down drift — used for floating glass chips/badges over the hero. */
export function FloatingElement({ children, className, distance = 10, duration = 4, delay = 0 }: FloatingElementProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      animate={{ y: [0, -distance, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
