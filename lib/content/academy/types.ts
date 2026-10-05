/**
 * Content model for answer-first Academy guide pages (brief §10):
 * a short answer first, then sections, Natalie's own take, FAQs, sources.
 *
 * Inline links in any text field use markdown syntax: [label](/path) or
 * [label](https://…). Everything else is plain text.
 */

export type GuideSection = {
  heading: string;
  /** Paragraphs, rendered in order before bullets/table. */
  paragraphs?: string[];
  bullets?: string[];
  /** Numbered steps (rendered as an ordered list). */
  steps?: { title: string; body: string }[];
  table?: { caption?: string; headers: string[]; rows: string[][]; note?: string };
};

export type GuideFaq = { question: string; answer: string };

/** A provider Natalie personally recommends (lender, broker, vendor). */
export type RecommendedProvider = {
  company: string;
  person: string;
  role: string;
  description: string;
  website?: string;
  phone?: string;
  /** e.g. "NMLS #2035744" */
  license?: string;
};

export type AcademyGuide = {
  /** Route path, e.g. "/investors/brrrr". */
  path: string;
  /** <title> text before the sitewide suffix. */
  metaTitle: string;
  metaDescription: string;
  h1: string;
  subheading: string;
  breadcrumbs: { name: string; path: string }[];
  /** ISO dates for Article schema and the visible "Updated" line. */
  datePublished: string;
  dateModified?: string;
  /** 2–4 sentence direct answer shown first (answer engines quote this). */
  shortAnswer: string[];
  sections: GuideSection[];
  /** First-person perspective from Natalie, from her own podcast/teaching. */
  natalieTake?: { heading: string; paragraphs: string[]; source?: { label: string; href: string } };
  /** "Who Natalie works with" — always shown with its disclosure. */
  recommended?: { heading: string; intro: string; providers: RecommendedProvider[]; disclosure: string };
  faqs: GuideFaq[];
  related: { label: string; href: string; description: string }[];
  sources?: { label: string; url: string }[];
  /** Shown above sources; for lending, tax and legal topics. */
  disclaimer?: string;
  cta: { title: string; description: string; label: string };
};
