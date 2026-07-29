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
