"use client";

import { cn } from "@/lib/utils/cn";

type MobileMenuToggleProps = {
  active: boolean;
  onClick: () => void;
};

export function MobileMenuToggle({ active, onClick }: MobileMenuToggleProps) {
  return (
    <button
      type="button"
      aria-label={active ? "Close menu" : "Open menu"}
      aria-expanded={active}
      aria-controls="primary-navigation"
      onClick={onClick}
      className={cn(
        "hidden max-md:flex items-center justify-center bg-transparent border-0 text-2xl leading-none text-navy cursor-pointer p-sm rounded-xs transition-colors hover:text-gold",
        active && "text-gold",
      )}
    >
      <span aria-hidden>{active ? "✕" : "☰"}</span>
    </button>
  );
}
