export type ResourceItem = {
  category: string;
  title: string;
  description: string;
  /** When present, the card links here instead of showing "Coming Soon". */
  href?: string;
};

/**
 * Every item below is named directly after a card that already exists in the
 * legacy site (as a "Coming Soon" tool or an unlinked checklist/worksheet
 * title) — nothing here is invented. Items without an `href` are not
 * functional yet.
 */
export const guides: ResourceItem[] = [
  {
    category: "Guide",
    title: "Home Buyer's Checklist",
    description: "Complete checklist of everything you need before making an offer.",
    href: "/resources/checklists/home-buyer-checklist",
  },
  {
    category: "Guide",
    title: "Pre-Sale Home Checklist",
    description: "Complete list of repairs and improvements to maximize sale price.",
    href: "/resources/checklists/pre-sale-checklist",
  },
];

export const calculators: ResourceItem[] = [
  { category: "Calculator", title: "Budget Calculator", description: "Calculate your maximum budget based on income and expenses." },
  { category: "Calculator", title: "ROI Calculator", description: "Calculate your return on investment for potential deals." },
  { category: "Calculator", title: "Cash Flow Analyzer", description: "Project monthly cash flow for rental properties." },
];

export const checklists: ResourceItem[] = [
  {
    category: "Checklist",
    title: "Home Buyer's Checklist",
    description: "Complete checklist of everything you need before making an offer.",
    href: "/resources/checklists/home-buyer-checklist",
  },
  { category: "Checklist", title: "Pre-Sale Home Checklist", description: "Complete list of repairs and improvements to maximize sale price." },
];

export const templates: ResourceItem[] = [
  { category: "Template", title: "Client Follow-Up System", description: "Email and SMS templates for consistent client communication." },
  { category: "Worksheet", title: "Business Plan Template", description: "Annual business plan and goal-setting worksheet for realtors." },
  { category: "Script", title: "Listing Presentation", description: "Complete listing presentation script to win more listings." },
];

export const downloads: ResourceItem[] = [
  { category: "Worksheet", title: "Comparative Market Analysis", description: "Analyze comparable homes to determine your home's value." },
  ...guides,
];
