"use client";

import dynamic from "next/dynamic";
import { useSyncExternalStore } from "react";
import { useReducedMotion } from "framer-motion";

const HeroShowcaseScene = dynamic(
  () => import("@/components/three/HeroShowcaseScene").then((mod) => mod.HeroShowcaseScene),
  { ssr: false },
);

const QUERY = "(min-width: 768px)";

function subscribe(callback: () => void) {
  const mql = window.matchMedia(QUERY);
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getSnapshot() {
  return window.matchMedia(QUERY).matches;
}

function getServerSnapshot() {
  return false;
}

/**
 * Decorative 3D showcase for the homepage hero only — the one "key showcase
 * section" this site uses React Three Fiber for. Renders nothing (no canvas,
 * no bundle cost paid) on mobile viewports or when the user prefers reduced
 * motion; the hero reads fine without it either way, so this is a pure
 * enhancement with a safe fallback rather than a load-bearing element.
 */
export function HeroShowcase() {
  const prefersReducedMotion = useReducedMotion();
  const isDesktop = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  if (prefersReducedMotion || !isDesktop) return null;

  return (
    <div aria-hidden className="absolute inset-0 pointer-events-none opacity-45">
      <HeroShowcaseScene />
    </div>
  );
}
