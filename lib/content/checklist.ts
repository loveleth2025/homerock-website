/**
 * Sourced from Natalie Pilkinton's "Home Buyer Masterclass" webinar deck
 * (co-presented with mortgage lender Brian Lupton). Condensed from that
 * material, not invented.
 */
export type ChecklistSection = {
  title: string;
  items: string[];
};

export const homeBuyerChecklist: ChecklistSection[] = [
  {
    title: "Get Pre-Approved",
    items: [
      "2 years of W-2s",
      "30 days of pay stubs",
      "2 months of bank statements",
      "2 years of tax returns",
      "Credit pulled from Experian, Equifax, and TransUnion",
    ],
  },
  {
    title: "Understand Your Loan Options",
    items: [
      "Conventional — minimum credit score 620, backed by Fannie Mae/Freddie Mac",
      "FHA — easier to qualify, minimum credit score as low as 580, HUD-insured",
      "USDA — no down payment, minimum credit score as low as 580, eligible rural/suburban properties only",
      "VA — for veterans, active-duty, and reservist military personnel and surviving spouses, minimum credit score as low as 580",
    ],
  },
  {
    title: "During the Loan Process, Do's",
    items: [
      "Keep living at your current residence",
      "Keep paying your rent or mortgage as normal",
      "Keep using credit normally — don't close accounts",
      "Keep your current job",
      "Stay current on all accounts",
      "Expect and promptly respond to documentation requests",
      "Call your lender or Realtor with questions",
    ],
  },
  {
    title: "Budget for These Costs",
    items: [
      "Escrow / earnest money — typically about 1% of purchase price, minimum around $1,000",
      "Home inspection — generally $400–$1,000, may include optional WDO, 4-point, and wind mitigation inspections; non-refundable",
      "Acceptable down payment / closing cost sources: 401(k)/retirement accounts, gift funds from immediate family or friends, liquid stocks, bonds, or cash",
      "Not acceptable: credit cards or personal loans (secured loans are acceptable)",
      "Undocumented cash generally needs to be \"seasoned\" (sitting in your account) for 60 days",
    ],
  },
  {
    title: "Choose Your Team",
    items: [
      "Work with a full-time Realtor under a buyer-broker agreement",
      "Bring your own Realtor even when buying new construction — a builder's on-site agent represents the builder, not you",
      "Compare a specialized mortgage lender against a big bank before committing",
    ],
  },
  {
    title: "Before You Close",
    items: [
      "Get a professional home inspection",
      "Review inspection findings and negotiate repairs",
      "Complete the final walkthrough",
      "Review and sign your closing documents",
    ],
  },
];

/**
 * DRAFT — general seller best-practices, not yet sourced from a Natalie-specific
 * deck or document (unlike homeBuyerChecklist above). The "Prepare Your Home"
 * section is grounded in HAR.com's published seller-prep checklists
 * (har.com/blog_127615_the-ultimate-checklist-for-preparing-your-home-for-sale
 * and har.com/blog_82861_before-listing-your-home-for-sale-__-your-pre-listing-checklist).
 * Remaining sections are general industry practice. Flagged for Natalie's
 * review; update/replace with her own material once provided.
 */
export const preSaleChecklist: ChecklistSection[] = [
  {
    title: "Prepare Your Home",
    items: [
      "Declutter and depersonalize — stagers often recommend removing about half your belongings",
      "Deep clean the whole home, including deodorizing and steam-cleaning carpets",
      "Handle minor repairs — leaky faucets, chipped paint, squeaky doors",
      "Confirm major systems work and are leak-free: HVAC, water heater, smoke detectors, and the electrical panel/breakers",
      "Boost curb appeal — mow the lawn, trim bushes, add fresh mulch or flowers",
      "Consider a pre-listing inspection to catch issues before buyers do",
    ],
  },
  {
    title: "Price Strategy",
    items: [
      "Request a comparative market analysis (CMA) from your Realtor",
      "Understand how recent, comparable sales in your area affect your price",
      "Avoid overpricing — homes that sit too long can lose buyer interest",
      "Discuss pricing strategy for your specific market conditions with your Realtor",
    ],
  },
  {
    title: "Market Your Home",
    items: [
      "Professional photography and, where appropriate, video or a virtual tour",
      "A written property description that highlights key features",
      "Listing syndication to major real estate search sites",
      "A showing schedule that works with your routine",
    ],
  },
  {
    title: "During Showings & Negotiations",
    items: [
      "Keep the home show-ready — clean and staged for last-minute showings",
      "Review every offer with your Realtor before responding",
      "Understand contingencies (inspection, financing, appraisal) in any offer",
      "Negotiate repairs or credits based on inspection findings",
    ],
  },
  {
    title: "Before You Close",
    items: [
      "Complete any agreed-upon repairs",
      "Keep documentation/receipts for completed repairs",
      "Schedule the buyer's final walkthrough",
      "Review and sign your closing documents",
    ],
  },
  {
    title: "Why Work With a Realtor",
    items: [
      "The CMA, professional photography, and listing syndication above are typically handled for you as part of a full-service Realtor's listing package — not extra tasks you take on alone",
      "A Realtor reviews and negotiates offers on your behalf, so you're not evaluating contingencies or counteroffers by yourself",
      "A Realtor coordinates showings, repair negotiations, and closing paperwork, keeping the process on track from listing to close",
    ],
  },
];
