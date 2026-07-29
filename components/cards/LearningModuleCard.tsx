"use client";

import { useId, useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils/cn";

export type ModuleSection = {
  /** Bolded lead-in term (e.g. a loan type or program name) — helps both scanning and answer-engine extraction. */
  label: string;
  text: string;
};

export type LearningModuleProps = {
  icon: string;
  title: string;
  /** One-line teaser, always visible, shown whether the card is open or closed. */
  summary: string;
  sections: ModuleSection[];
};

/**
 * Click-to-expand module card. Closed by default so the page stays scannable;
 * expanding reveals the full factual content plus a strategy-call CTA. Each
 * card toggles independently (not an accordion) so a visitor can compare
 * more than one module open at a time.
 */
export function LearningModuleCard({ icon, title, summary, sections }: LearningModuleProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="bg-white border border-gray-light rounded-xs transition-all duration-200 hover:border-gold hover:shadow-brand-md">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((current) => !current)}
        className="w-full flex items-start gap-md p-lg text-left cursor-pointer bg-transparent border-0"
      >
        <span aria-hidden className="text-2xl shrink-0">
          {icon}
        </span>
        <span className="flex-1 min-w-0">
          <span className="block font-serif text-xl text-navy mb-xs">{title}</span>
          <span className="block text-sm text-gray-dark leading-relaxed">{summary}</span>
        </span>
        <span
          aria-hidden
          className={cn("text-lg text-navy shrink-0 transition-transform duration-200", open && "rotate-180")}
        >
          ⌄
        </span>
      </button>

      {open && (
        <div id={panelId} className="px-lg pb-lg">
          <div className="border-t border-gray-light pt-lg">
            {sections.map((section) => (
              <p key={section.label} className="text-sm leading-relaxed text-gray-dark mb-md">
                <strong className="text-navy">{section.label}:</strong> {section.text}
              </p>
            ))}
            <Button href="/booking" size="small" className="mt-sm">
              Book a Strategy Call →
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
