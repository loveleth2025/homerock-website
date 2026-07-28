"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { useState, type ReactNode, type MouseEvent } from "react";
import { cn } from "@/lib/utils/cn";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  /** Max rotation in degrees — keep subtle for a premium (not gimmicky) feel. */
  maxTilt?: number;
};

/**
 * Pointer-driven 3D tilt, the "depth" cue that makes a flat card feel like a
 * physical object. Desktop/mouse only — pointer-based tilt has no meaning on
 * touch, and prefers-reduced-motion disables it entirely.
 */
export function TiltCard({ children, className, maxTilt = 6 }: TiltCardProps) {
  // All hooks run unconditionally on every render — the reduced-motion
  // branch only affects what JSX we return, never how many hooks we call.
  const prefersReducedMotion = useReducedMotion();
  const [hovered, setHovered] = useState(false);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const springY = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(springY, [0, 1], [maxTilt, -maxTilt]);
  const rotateY = useTransform(springX, [0, 1], [-maxTilt, maxTilt]);
  const glareBackground = useTransform([springX, springY], ([gx, gy]: number[]) => {
    return `radial-gradient(circle at ${gx * 100}% ${gy * 100}%, rgba(255,255,255,0.16), transparent 55%)`;
  });

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width);
    y.set((event.clientY - rect.top) / rect.height);
  }

  function handleMouseEnter() {
    setHovered(true);
  }

  function handleMouseLeave() {
    x.set(0.5);
    y.set(0.5);
    setHovered(false);
  }

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn("relative", className)}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", transformPerspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] max-md:hidden"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ background: glareBackground }}
      />
    </motion.div>
  );
}
