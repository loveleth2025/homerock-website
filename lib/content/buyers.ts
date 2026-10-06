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
      "Your credit score determines more than approval — it determines your options. Most lenders look for about 620 on a conventional loan. FHA loans allow scores as low as 580 with 3.5% down (or 500–579 with 10% down). VA and USDA loans have no official program minimum, so each lender sets its own, and USDA requires no down payment on eligible properties. Knowing which programs you qualify for before you start house hunting can change your whole approach.",
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
        text: "A non-government-insured loan backed by Fannie Mae and Freddie Mac, subject to loan limits set by the Federal Housing Finance Agency (FHFA). As little as 3%–5% down. Most lenders look for a credit score of about 620; Fannie Mae removed its hard 620 minimum for automated underwriting in November 2025.",
      },
      {
        label: "FHA Loan",
        text: "Insured by the Federal Housing Administration, part of the U.S. Department of Housing and Urban Development (HUD), and issued by FHA-approved lenders. There's no income limit. Easier to qualify for than a conventional loan: 3.5% down with a 580+ credit score, or 10% down with 500–579.",
      },
      {
        label: "USDA Loan",
        text: "Backed by the U.S. Department of Agriculture for buyers in eligible rural and suburban areas, with household income limits. No down payment, no program minimum credit score (lenders set their own), and a guarantee fee of 1% upfront plus 0.35% a year.",
      },
      {
        label: "VA Loan",
        text: "Guaranteed by the U.S. Department of Veterans Affairs for eligible veterans, active-duty and reserve service members, and surviving spouses. No down payment and no monthly mortgage insurance; a one-time funding fee applies unless waived. No VA minimum credit score — lenders often look for 580–620.",
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
        text: "From the Texas State Affordable Housing Corporation (TSAHC). Available to both first-time and repeat buyers with low-to-moderate household income, and works with conventional, FHA and VA loans. Assistance is typically 3%–5% of the loan amount, as a grant or a 0% deferred second loan.",
      },
      {
        label: "Example",
        text: "On a $300,000 FHA purchase, 3.5% down is $10,500. The base loan is $289,500, and FHA's 1.75% upfront mortgage insurance brings it to about $294,566. A 5% assistance grant on that loan (about $14,700) covers the entire down payment, with roughly $4,200 left toward closing costs.",
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
