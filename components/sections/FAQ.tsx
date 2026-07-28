"use client";

import { useState } from "react";
import { cn } from "@/lib/utils/cn";
import { jsonLdScriptProps, faqSchema } from "@/lib/seo/schema";

export type FAQEntry = {
  question: string;
  answer: string;
};

export function FAQ({ items }: { items: FAQEntry[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      <script {...jsonLdScriptProps(faqSchema(items))} />
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question} className="border-b border-gray-light py-lg last:border-b-0">
            <button
              type="button"
              className="flex w-full justify-between items-center gap-md cursor-pointer font-semibold text-navy py-md bg-transparent border-0 text-left hover:text-gold-ink transition-colors"
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              {item.question}
              <span
                aria-hidden
                className={cn("text-lg transition-transform duration-200", isOpen && "rotate-180")}
              >
                ⌄
              </span>
            </button>
            {isOpen && <div className="pt-md leading-relaxed text-gray-dark">{item.answer}</div>}
          </div>
        );
      })}
    </div>
  );
}
