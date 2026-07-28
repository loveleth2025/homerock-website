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
      aria-label="Toggle menu"
      onClick={onClick}
      className={cn(
        "hidden max-md:flex items-center justify-center bg-transparent border-0 text-xl text-navy cursor-pointer p-sm transition-colors hover:text-gold",
        active && "text-gold",
      )}
    >
      ☰
    </button>
  );
}
