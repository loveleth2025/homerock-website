"use client";

import { useState } from "react";
import { LeadMagnetForm } from "@/components/forms/LeadMagnetForm";
import type { ChecklistSection } from "@/lib/content/checklist";

type GatedChecklistProps = {
  resource: string;
  sections: ChecklistSection[];
};

export function GatedChecklist({ resource, sections }: GatedChecklistProps) {
  const [unlocked, setUnlocked] = useState(false);

  if (!unlocked) {
    return (
      <div className="max-w-[28rem] mx-auto bg-cream border border-gray-light rounded-xs p-xl text-center">
        <h3 className="mt-0 mb-sm">Get the Free Checklist</h3>
        <p className="text-sm text-gray-dark mb-lg">
          Enter your name and email and we&rsquo;ll unlock the full checklist below — plus send you a copy and add
          you to Natalie&rsquo;s newsletter.
        </p>
        <LeadMagnetForm resource={resource} onSuccess={() => setUnlocked(true)} />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-xl">
      <div className="bg-cream border-l-4 border-gold p-lg rounded-xs">
        <p className="mb-0">You&rsquo;re in! A copy of this checklist is on its way to your inbox.</p>
      </div>

      {sections.map((section) => (
        <div key={section.title}>
          <h3 className="mb-md">{section.title}</h3>
          <ul className="flex flex-col gap-sm pl-lg list-disc marker:text-gold">
            {section.items.map((item) => (
              <li key={item} className="text-base leading-relaxed text-gray-dark">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
