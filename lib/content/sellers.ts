export const sellerJourney = [
  { title: "Prepare Your Home", description: "Get your home ready for market with staging and repairs" },
  { title: "Price Strategy", description: "Determine the optimal price based on market analysis" },
  { title: "List & Market", description: "List your home and execute a strategic marketing plan" },
  { title: "Show & Negotiate", description: "Manage showings and negotiate with potential buyers" },
  { title: "Inspection Period", description: "Address inspection findings and finalize repairs" },
  { title: "Closing", description: "Complete final paperwork and hand off your home" },
];

/**
 * DRAFT — grounded in HAR.com's published seller FAQ content
 * (har.com/blog_84695_home-seller-frequently-asked-questions and
 * har.com/blog_85064_home-sellers---frequently-asked-questions), not a
 * Natalie-specific source (unlike buyerFaq in lib/content/buyers.ts).
 * Flagged for Natalie's review before treating as final.
 */
export const sellerFaq = [
  {
    question: "How long does it typically take to sell a home?",
    answer:
      "On average, a home priced correctly goes under contract in two to three months. Homes priced too high tend to sit on the market much longer and often end up selling for less after price cuts.",
  },
  {
    question: "Should I trust online estimates like Zillow when pricing my home?",
    answer:
      "Not on their own. Automated estimates only factor in general data and aren't reliable for pricing a specific home. A comparative market analysis (CMA) from your Realtor, based on recent comparable sales in your exact neighborhood, gives a far more accurate number.",
  },
  {
    question: "Do I need to be home during showings?",
    answer:
      "No — homes typically show best when the seller isn't present. Most agents use an electronic lockbox so buyers' agents can access the property; the box also logs every time it's opened, so you always know who came through.",
  },
  {
    question: "Is selling For Sale By Owner (FSBO) or through a flat-fee service a good way to save money?",
    answer:
      "Usually not. Buyers know that a FSBO or flat-fee seller is paying little or no commission, so they tend to offer less. It can end up costing more in a lower sale price than what you'd save on commission.",
  },
  {
    question: "How does my home actually get marketed to buyers?",
    answer:
      "Primarily through the Multiple Listing Service (MLS) — the database every real estate agent uses to search for properties on behalf of buyers. It's the single most effective marketing tool for reaching serious, represented buyers.",
  },
  {
    question: "What happens if I receive multiple offers?",
    answer:
      "Your Realtor helps you evaluate and negotiate between them — not just comparing the highest number, but weighing offer strength, whether it's cash or financed, the loan type, and the buyer's likelihood of closing.",
  },
];
