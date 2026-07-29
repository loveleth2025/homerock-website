export const buyerJourney = [
  { title: "Get Pre-Approved", description: "Understand your budget and get mortgage pre-approval from lenders" },
  { title: "Find Your Home", description: "Search for properties that match your needs and budget" },
  { title: "Make an Offer", description: "Submit a competitive offer and negotiate terms" },
  { title: "Home Inspection", description: "Get a professional inspection and address any issues" },
  { title: "Final Walkthrough", description: "Verify all agreed-upon repairs and conditions" },
  { title: "Closing", description: "Sign documents and receive keys to your new home" },
];

/**
 * Sourced from Natalie Pilkinton's "Home Buyer Masterclass" webinar deck
 * (co-presented with mortgage lender Brian Lupton), built around the six
 * costliest mistakes buyers make. Answers are condensed from that material,
 * not invented — see the Natalie Knowledge Base for the full source deck.
 */
export const buyerFaq = [
  {
    question: "Why does my credit score matter more than I think?",
    answer:
      "Your credit score determines more than approval — it determines your options. A Conventional loan generally requires a minimum credit score of 620. FHA loans can go as low as 580, and USDA loans (for eligible rural/suburban properties) also allow scores as low as 580 with no down payment required. Knowing which programs you qualify for before you start house hunting can change your whole approach.",
  },
  {
    question: "Do I really need to get pre-approved before house hunting?",
    answer:
      "Yes. Pre-approval is based on three things: your credit (pulled from Experian, Equifax, and TransUnion), your income and employment (pay stubs from the last 30 days, W-2s from the last 2 years, and tax returns), and your assets (2 months of bank statements). During the process, you can still call with questions, keep living where you are, and keep paying your current rent or mortgage as normal.",
  },
  {
    question: "What's the difference between a bank and a mortgage broker or lender?",
    answer:
      "Big banks typically charge an origination or discount point and only operate 9–5. With thousands of clients, it's easy to feel like just a number, and large banks often have stricter guidelines that may not include down payment assistance options. A specialized mortgage lender can offer more flexibility — worth comparing before you commit.",
  },
  {
    question: "Should I buy directly from a builder without my own Realtor?",
    answer:
      "It's not recommended. A builder's on-site sales agent works for the builder, not for you. Builder-offered closing cost assistance can sometimes be tied to a loan or interest rate that costs more long-term, and even brand-new homes can have issues. Your own Realtor represents your interests and can guide you through inspections and the final walkthrough.",
  },
  {
    question: "Is a home inspection really necessary?",
    answer:
      "Skipping one is a real risk — you could purchase a home with issues you don't know about, lose negotiating power, risk safety concerns like mold, radon, or termite damage, lose leverage with your insurance, and miss illegal or non-permitted additions. Unless you have a licensed, insured inspector in the family, it's worth leaving to a professional.",
  },
  {
    question: "Does it matter if I use a full-time professional Realtor?",
    answer:
      "It does. A full-time Realtor helps the process go smoothly, and — with a buyer-broker agreement in place — is working in your best interest, not just to close a deal. They can also advise you on lenders, communities, insurance, surveys, and title companies, since they understand the full transaction from start to finish.",
  },
];

/**
 * Also sourced from the Home Buyer Masterclass deck — the loan-type,
 * Texas down payment assistance, and closing-cost details that aren't
 * already covered in buyerFaq above, so nothing here duplicates it.
 */
export const buyerModules = [
  {
    icon: "🏦",
    title: "Understanding Your Loan Options",
    summary:
      "Conventional, FHA, USDA, or VA — which mortgage loan type actually fits your credit score and budget?",
    sections: [
      {
        label: "Conventional Loan",
        text: "A non-government-insured loan backed by Fannie Mae and Freddie Mac, subject to financing limits set by the Federal Housing Finance Agency (FHFA). Minimum credit score: 620.",
      },
      {
        label: "FHA Loan",
        text: "A federal loan program created by the U.S. Department of Housing and Urban Development (HUD) for lower-income borrowers. Easier to qualify for than a conventional loan, insured by the Federal Housing Administration and issued by an FHA-approved lender.",
      },
      {
        label: "USDA Loan",
        text: "Created by the U.S. Department of Agriculture for borrowers purchasing in eligible rural and suburban areas. Features no down payment, credit scores as low as 580, and a guarantee fee (mortgage insurance) around 2%.",
      },
      {
        label: "VA Loan",
        text: "Created by HUD for veteran, active-duty, and reservist military personnel, and surviving spouses of veterans. Easier to qualify for than a conventional loan, with credit scores as low as 580 and higher allowable debt-to-income (DTI) ratios.",
      },
    ],
  },
  {
    icon: "🏠",
    title: "Texas Down Payment Assistance Programs",
    summary: "Several Texas down payment assistance programs can cover some — or all — of your down payment.",
    sections: [
      {
        label: "Available Programs",
        text: "Texas buyers may qualify for Home Sweet Texas, Hometown Heroes, County DPA, My First Texas Home, My Choice Texas Home, NHF, the Mortgage Credit Certificate (MCC), and Homes for Texas Heroes — plus county-specific programs such as Harris County DPA and Montgomery County DPA.",
      },
      {
        label: "Home Sweet Texas Program",
        text: "Available to both first-time and repeat buyers with low-to-moderate household income. Requires qualifying for an FHA, VA, or USDA loan.",
      },
      {
        label: "Example",
        text: "On a $300,000 purchase with a 3% down payment ($9,000) and FHA upfront mortgage insurance (1.75%, $5,250), the total loan amount comes to $314,250. A 5% down payment assistance grant ($15,000) can cover the entire down payment, potentially leaving $0 owed toward it at closing.",
      },
    ],
  },
  {
    icon: "💵",
    title: "Budgeting for Closing Costs & Fees",
    summary: "Earnest money, home inspection costs, and what you can (and can't) use to cover them.",
    sections: [
      {
        label: "Escrow / Earnest Money",
        text: "Typically about 1% of the purchase price — for example, $3,000 on a $300,000 home — though amounts of $1,000 or more can be acceptable.",
      },
      {
        label: "Home Inspection Costs",
        text: "Generally $400–$1,000, and can include the general home inspection, an optional WDO (wood-destroying organism) inspection, a 4-point inspection, and a wind mitigation inspection. These costs are typically non-refundable.",
      },
      {
        label: "Acceptable Down Payment & Closing Cost Sources",
        text: "401(k)/retirement accounts, gift funds from immediate family or friends, and liquid stocks, bonds, or cash. Credit cards and personal loans are not acceptable sources; secured loans are. Undocumented cash generally needs to be “seasoned” (sitting in your account) for 60 days.",
      },
    ],
  },
];
