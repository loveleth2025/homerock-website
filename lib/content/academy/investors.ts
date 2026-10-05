import type { AcademyGuide } from "@/lib/content/academy/types";

/**
 * Investor Academy guides.
 *
 * Natalie's perspective comes from her own teaching on the Sugar, Spice &
 * Spirits podcast (episode 45, "Is 10 Rental Properties Actually Enough to
 * Retire?"). Lending and tax facts were checked against the sources listed on
 * each guide on Oct 5, 2026 — re-check them when updating.
 */

const EP45 = {
  label: "Sugar, Spice & Spirits episode 45: Is 10 Rental Properties Actually Enough to Retire?",
  href: "/podcast/transcripts/ep45-is-10-rental-properties-enough-to-retire",
};

const EP56 = {
  label: "Sugar, Spice & Spirits episode 56: Hard Money Lending Explained, with Eddie Gant of Jet Lending",
  href: "/podcast/transcripts/ep56-hard-money-lending-explained",
};

/**
 * Natalie's recommended lender (confirmed by Love, Oct 5, 2026; details from HomeRock Mortgage's site).
 * Jet Lending is mentioned only through podcast episode 56, not as a formal recommendation.
 */
const homeRockMortgage = {
  company: "HomeRock Mortgage",
  person: "Brian Lupton, Mortgage Loan Originator",
  role: "Mortgage broker",
  description:
    "Long-term financing for investors and homebuyers, including DSCR loans for rentals and refinances out of short-term debt. Brian co-presents Natalie's Home Buyer Masterclass.",
  website: "https://www.homerockmortgage.com",
  license: "NMLS #2035744 · Company NMLS #1691956",
};

const lenderDisclosure =
  "HomeRock Mortgage is part of the HomeRock Group, the same group of companies as HomeRock Realty, Natalie's brokerage. You're free to choose any lender, and you should compare terms. Loan programs, rates and approval are set by the lender.";

const investorBooking = {
  title: "Ready to Run the Numbers on Your First Deal?",
  description: "Book a free strategy session and Natalie will walk through your goals, your budget and what a deal needs to look like.",
  label: "Book Investor Consultation →",
};

const DATE = "2026-10-05";

export const beginnerGuide: AcademyGuide = {
  path: "/investors/beginner",
  metaTitle: "How to Start Investing in Real Estate in Houston",
  metaDescription:
    "How to buy your first Houston rental: make the rent cover PITI, the six ways real estate makes money, how much you need, and Natalie Pilkinton's one-house-a-year plan.",
  h1: "How to Start Investing in Real Estate in Houston",
  subheading: "Your first rental, the numbers it has to hit, and a plan you can actually follow",
  breadcrumbs: [
    { name: "Investors", path: "/investors" },
    { name: "Beginner Investing", path: "/investors/beginner" },
  ],
  datePublished: DATE,
  shortAnswer: [
    "Start with one rental property whose rent covers the full monthly payment — principal, interest, taxes and insurance (PITI) — with some cash flow left over. In the Houston area, property taxes and insurance are the costs that most often break a deal, so get real numbers for both before you make an offer.",
    "Most investment loans need 15–25% down, plus reserves for repairs and vacancies. Then add one property at a time instead of trying to scale fast.",
  ],
  sections: [
    {
      heading: "The six ways a rental property makes you money",
      paragraphs: [
        "When Natalie teaches new investors, she starts here, because cash flow is only one of the six and rarely the biggest:",
      ],
      steps: [
        { title: "Cash flow", body: "Rent left over after the mortgage, taxes, insurance and expenses." },
        { title: "Loan paydown", body: "Your tenant's rent pays down the mortgage, so your equity grows every month." },
        { title: "Appreciation", body: "Property values and rents tend to rise with inflation over time, which makes rentals a hedge against it." },
        { title: "Tax advantages", body: "Depreciation and other deductions can offset rental income. A CPA who works with investors can tell you whether strategies such as a cost segregation study make sense for you." },
        { title: "Leverage", body: "A loan lets you control a whole property with a fraction of its price in cash, which few other investments allow." },
        { title: "Equity access", body: "Later, a cash-out refinance lets you pull equity out as loan proceeds while you keep the property." },
      ],
    },
    {
      heading: "Make the rent cover PITI — especially in Texas",
      paragraphs: [
        "The first test of any rental is whether the rent covers principal, interest, taxes and insurance. Texas has no state income tax, but it makes up for it with high property taxes, and homeowners insurance near the coast has climbed with hurricane and flood risk.",
        "Watch the escrow. Your lender collects taxes and insurance monthly based on last year's bills. When both go up, the next escrow analysis can raise your payment and ask you to cover the shortage at the same time — a double hit if your margins were thin.",
        "Whoever brings you the deal — your agent, a wholesaler or a seller — should run rental comps and real tax and insurance figures before you commit. See [how to analyze an investment property](/blog/investing/analyze-investment-properties) for the core metrics.",
      ],
    },
    {
      heading: "How much money do you need?",
      paragraphs: [
        "Plan for a down payment, closing costs, any repairs, and reserves. Most investment-property loans, including DSCR loans, typically require 20–25% down, with some programs at 15% for strong credit. Lenders also want cash reserves measured in months of the payment.",
        "If you find a property at a deep enough discount, creative strategies like [BRRRR](/investors/brrrr) can get much of your cash back out after the rehab — but they need more experience and more cushion.",
      ],
    },
    {
      heading: "Set it up like a business from day one",
      bullets: [
        "Open a separate bank account for each property and run all its rent and repairs through it.",
        "Hold the tenant's security deposit separately; it isn't your money to spend. Texas requires you to refund it, minus itemized deductions, within 30 days after the tenant moves out and gives a forwarding address.",
        "Decide on your structure — an LLC, or a DBA under an umbrella entity — with your attorney and CPA. You don't need an LLC to buy your first rental.",
        "Build a vendor list before you need it: a plumber, an electrician, a handyman and an HVAC company who work for investors.",
        "Put everything in writing: leases, contractor bids and change orders. Never pay a contractor in full up front.",
      ],
    },
    {
      heading: "Your first rental might be the house you live in now",
      paragraphs: [
        "Before you sell your home to buy the next one, ask whether it could become your first rental. If the rent covers the payment and you're ready to be a landlord, keeping it can build more wealth than selling.",
        "If you do sell, you may be able to exclude up to $250,000 of gain ($500,000 for married couples filing jointly) if you owned and lived in the home for two of the last five years. Confirm with your CPA.",
      ],
    },
    {
      heading: "Natalie's one-house-a-year plan",
      paragraphs: [
        "Natalie's beginner framework is deliberately slow. Buy one rental a year for about 15 years, keep each one rented, and let tenants pay down the loans while the properties appreciate.",
        "When you're ready to retire, refinance one house a year and live on the cash-out proceeds while still owning the property. Then repeat with the next house. It isn't TV-flip exciting, but it's a plan an ordinary family can follow.",
        "This is an illustration of a strategy, not a projection. Real results depend on prices, rents, rates, taxes and the properties you buy.",
      ],
    },
  ],
  natalieTake: {
    heading: "Treat your tenants like customers",
    paragraphs: [
      "I've had tenants stay in a house 10 and 15 years. When I got one of those houses back it needed a full rehab — but that was 15 years of zero vacancy and 15 years of someone else paying down my loan. I'll take that trade.",
      "If something breaks and it isn't my tenant's fault, I pay for it, because I want them to renew. A vacancy can cost me $2,000 at the end of the year, and charging a good tenant $200 here and $200 there hurts them a lot more than it helps me.",
      "And if you know you can't have a hard conversation or handle an eviction, hire a property manager — or invest passively with a solid operator instead of owning rentals directly.",
    ],
    source: EP45,
  },
  faqs: [
    {
      question: "How much money do I need to buy my first investment property in Houston?",
      answer:
        "Plan on a down payment of roughly 15–25% of the price for most investment loans, plus closing costs, any repairs and several months of reserves. The exact amount depends on the loan program, your credit and the property.",
    },
    {
      question: "Should I buy my first rental in an LLC?",
      answer:
        "You don't have to. Many investors start in their own name or under a DBA and move to an LLC structure later. Ask your attorney and CPA, and check with your lender, since some loans can be closed in an LLC and others can't.",
    },
    {
      question: "What's the most important number when buying a rental?",
      answer:
        "Whether the rent covers principal, interest, taxes and insurance with cash flow left over. In Texas, use the actual property tax rate and a real insurance quote, not estimates.",
    },
    {
      question: "Can I invest in real estate with my IRA?",
      answer:
        "Yes, through a self-directed IRA, but the rules are strict about who can use the property and how income and expenses flow. Work with a self-directed IRA custodian and a CPA before you buy.",
    },
    {
      question: "Do I need a property manager?",
      answer:
        "Not necessarily. Many investors self-manage their first few rentals. If you can't handle repair calls, tenant screening or an eviction, a property manager is worth the fee.",
    },
  ],
  related: [
    { label: "BRRRR strategy in Texas", href: "/investors/brrrr", description: "Buy, rehab, rent, refinance and repeat." },
    { label: "DSCR loans in Texas", href: "/investors/dscr-loans-texas", description: "Qualify on the property's rent, not your W-2." },
    { label: "How to analyze an investment property", href: "/blog/investing/analyze-investment-properties", description: "Cap rate, cash-on-cash and DSCR." },
    { label: "Houston market update", href: "/market-updates", description: "What this month's numbers mean for investors." },
  ],
  sources: [
    { label: "Texas State Law Library: Security deposit refunds", url: "https://guides.sll.texas.gov/landlord-tenant-law/security-deposit-refunds" },
    { label: "IRS Topic 701: Sale of your home", url: "https://www.irs.gov/taxtopics/tc701" },
    { label: "IRS Publication 527: Residential rental property", url: "https://www.irs.gov/publications/p527" },
    { label: "Griffin Funding: DSCR loan requirements (2026)", url: "https://griffinfunding.com/blog/dscr-loans/dscr-loan-requirements/" },
  ],
  disclaimer:
    "This guide is education, not legal, tax or lending advice. Loan terms vary by lender and change over time; talk to your lender, CPA and attorney before you buy.",
  cta: investorBooking,
};

export const brrrrGuide: AcademyGuide = {
  path: "/investors/brrrr",
  metaTitle: "BRRRR Strategy in Texas, Step by Step",
  metaDescription:
    "How the BRRRR strategy works in Texas: buying below value, rehabbing for a rental, cash-out refinance seasoning rules for conventional and DSCR loans, and the risks.",
  h1: "What Is the BRRRR Strategy in Texas?",
  subheading: "Buy, Rehab, Rent, Refinance, Repeat — explained stage by stage",
  breadcrumbs: [
    { name: "Investors", path: "/investors" },
    { name: "BRRRR", path: "/investors/brrrr" },
  ],
  datePublished: DATE,
  shortAnswer: [
    "BRRRR means Buy, Rehab, Rent, Refinance, Repeat. You buy a property below its after-repair value, fix it up, rent it, then refinance based on the new value to pull most of your cash back out and do it again.",
    "It only works if you buy at a real discount, keep the rehab on budget and wait out the lender's seasoning period — usually 3 to 12 months depending on the loan.",
  ],
  sections: [
    {
      heading: "The five steps",
      steps: [
        {
          title: "Buy below value",
          body: "The profit is made at purchase. Look for distressed properties — pre-foreclosures, estate sales, county foreclosure auctions, wholesaler deals or homes that need work most buyers won't take on. You often can't see inside until you write an offer.",
        },
        {
          title: "Rehab for a rental, not a flip",
          body: "A rental rehab is built for durability and low maintenance, not designer finishes. Decide the exit before you budget the work; a rental and a flip are two different projects.",
        },
        {
          title: "Rent",
          body: "Screen carefully, sign a written lease and set rent from real comps. A documented lease and rent roll help the refinance appraisal and your DSCR.",
        },
        {
          title: "Refinance",
          body: "Replace your purchase or hard-money loan with long-term financing based on the property's new value. Seasoning rules decide when you can do this and how much you can take out (below).",
        },
        { title: "Repeat", body: "Use the cash you pulled out as the down payment on the next property." },
      ],
    },
    {
      heading: "Refinance seasoning: how long you'll wait",
      paragraphs: [
        "Seasoning is the time a lender wants you to own the property before a cash-out refinance. It's the step that trips up most first-time BRRRR investors.",
      ],
      table: {
        headers: ["Loan type", "Typical seasoning", "What it means for BRRRR"],
        rows: [
          [
            "Conventional (Fannie Mae) cash-out",
            "6 months on title; any existing first-lien loan being paid off must be 12 months old",
            "If you bought with a hard-money loan, the 12-month rule can apply to paying it off.",
          ],
          [
            "Fannie Mae delayed financing",
            "No wait if you bought with cash",
            "Loan is limited to your documented purchase price plus closing costs, not the new appraised value.",
          ],
          [
            "DSCR loan cash-out",
            "Commonly 3–6 months; some lenders want 12",
            "Before full seasoning, some lenders cap the loan at purchase price plus documented rehab costs.",
          ],
        ],
        note: "Rules as of October 2026. Lenders change guidelines; confirm before you buy.",
      },
    },
    {
      heading: "An illustration of the math",
      paragraphs: [
        "Hypothetical numbers to show how the pieces fit — not a real deal or a promise of results.",
      ],
      table: {
        headers: ["Item", "Amount"],
        rows: [
          ["Purchase price", "$180,000"],
          ["Rehab", "$40,000"],
          ["Total cash and short-term loans in the deal (before closing costs)", "$220,000"],
          ["After-repair appraised value", "$280,000"],
          ["New loan at 75% of value", "$210,000"],
          ["Left in the deal before closing and holding costs", "$10,000"],
        ],
        note: "Closing costs, holding costs during the rehab and the lender's actual loan-to-value limit change the result.",
      },
    },
    {
      heading: "The risks to plan for",
      bullets: [
        "The appraisal comes in low, so you can't pull out as much cash as planned.",
        "The rehab runs over budget or over time, and you carry the payments longer.",
        "Rates rise between purchase and refinance, so the new payment no longer cash-flows.",
        "Over-leverage: pulling every dollar out leaves no cushion for vacancies, big repairs or a market dip.",
        "Contractor problems. Get everything in writing, pay by draw as work is completed, and keep change orders on paper.",
      ],
    },
  ],
  natalieTake: {
    heading: "Don't strap yourself",
    paragraphs: [
      "You can get into properties with very little down today, even with DSCR loans. But you have to be able to absorb the backslide when rents soften or values dip.",
      "I've watched people walk away from houses in a down market when two more years of holding on would have saved them. Make sure you're not over-leveraged, and keep reserves so a bad month doesn't become a foreclosure.",
    ],
    source: EP45,
  },
  faqs: [
    {
      question: "How long do I have to wait to refinance a BRRRR property?",
      answer:
        "For a conventional Fannie Mae cash-out refinance, at least six months on title, and any first-lien loan being paid off must be at least 12 months old. Many DSCR lenders allow a cash-out after 3–6 months, though some cap the loan at your purchase price plus documented rehab until the property is fully seasoned.",
    },
    {
      question: "Can I do BRRRR with no money?",
      answer:
        "Rarely. You usually need cash or a short-term loan for the purchase and rehab, plus reserves. If you buy at a steep enough discount, the refinance can return most of it — but plan for some money to stay in the deal.",
    },
    {
      question: "What loan do investors use for the refinance step?",
      answer:
        "Usually either a conventional cash-out refinance or a [DSCR loan](/investors/dscr-loans-texas), which qualifies the property on its rent instead of your personal income.",
    },
    {
      question: "Is BRRRR different in Texas?",
      answer:
        "The steps are the same, but Texas property taxes and insurance are higher than in many states, which raises the monthly payment after the refinance. Run the numbers with real tax and insurance figures before you buy.",
    },
  ],
  related: [
    { label: "DSCR loans in Texas", href: "/investors/dscr-loans-texas", description: "The loan most BRRRR investors refinance into." },
    { label: "Private lending", href: "/investors/private-lending", description: "How private money funds purchases and rehabs." },
    { label: "How to start investing", href: "/investors/beginner", description: "The fundamentals before your first deal." },
    { label: "How to analyze an investment property", href: "/blog/investing/analyze-investment-properties", description: "Cap rate, cash-on-cash and DSCR." },
  ],
  sources: [
    { label: "Fannie Mae Selling Guide B2-1.3-03: Cash-out refinance transactions", url: "https://selling-guide.fanniemae.com/sel/b2-1.3-03/cash-out-refinance-transactions" },
    { label: "Munoz Ghezlan: DSCR loan seasoning requirements (May 2026)", url: "https://www.munozghezlan.com/blog/dscr-loan-seasoning-requirements" },
  ],
  disclaimer:
    "This guide is education, not lending, tax or legal advice. Seasoning and loan-to-value limits vary by lender and change over time; confirm with your lender before you buy.",
  cta: investorBooking,
};

export const dscrGuide: AcademyGuide = {
  path: "/investors/dscr-loans-texas",
  metaTitle: "DSCR Loans in Texas: How They Work for Rental Investors",
  metaDescription:
    "How DSCR loans work in Texas: the debt service coverage ratio formula, typical credit, down payment and reserve requirements, and how Texas taxes and insurance affect qualifying.",
  h1: "How Do DSCR Loans Work in Texas?",
  subheading: "Qualify on the property's rent instead of your personal income",
  breadcrumbs: [
    { name: "Investors", path: "/investors" },
    { name: "DSCR Loans", path: "/investors/dscr-loans-texas" },
  ],
  datePublished: DATE,
  shortAnswer: [
    "A DSCR (debt service coverage ratio) loan is an investment-property mortgage that qualifies you based on the property's rent instead of your W-2 income or tax returns. The lender divides the monthly rent by the monthly payment; a ratio of 1.0 or higher means the rent covers it.",
    "Typical requirements are a credit score of about 620 or higher, 20–25% down and several months of reserves. Texas property taxes and insurance raise the payment, so they're often what makes or breaks the ratio.",
  ],
  sections: [
    {
      heading: "The DSCR formula",
      paragraphs: [
        "DSCR = monthly rent ÷ monthly PITIA (principal, interest, taxes, insurance and any HOA dues).",
        "Example: rent of $2,400 and a total payment of $2,000 gives a DSCR of 1.2. A ratio of 1.0 means the rent exactly covers the payment; lenders usually price better at 1.2–1.25 or above, and some offer programs below 1.0 with stronger compensating factors.",
      ],
    },
    {
      heading: "Typical DSCR loan requirements",
      table: {
        headers: ["Requirement", "Typical range"],
        rows: [
          ["Minimum DSCR", "1.0 is the common benchmark; varies by lender"],
          ["Credit score", "About 620 minimum; 740+ gets better pricing and lower down payments"],
          ["Down payment", "20–25% (75–80% loan-to-value); some programs 15% for strong borrowers"],
          ["Reserves", "Several months of the property's payment, in cash or eligible accounts"],
          ["Income documents", "Usually no tax returns, W-2s or pay stubs; no personal debt-to-income ratio"],
          ["Ownership", "Can usually close in an LLC or other entity, often with a personal guarantee"],
          ["Property types", "Single-family, 2–4 units, condos and townhomes; short-term rentals at some lenders"],
          ["Prepayment penalty", "Common; a longer penalty period can buy a lower rate"],
        ],
        note: "Requirements as published by DSCR lenders in 2026. Programs differ — compare several lenders.",
      },
    },
    {
      heading: "Why Texas taxes and insurance matter so much",
      paragraphs: [
        "Because DSCR divides rent by the full payment including taxes and insurance, a high tax rate or an expensive insurance quote can push a property below 1.0 even when the purchase price looks good.",
        "Before you write an offer, get the property's actual tax rate (including MUD or special districts in many Houston suburbs) and a real insurance quote, especially in flood-prone areas. Don't rely on the seller's current tax bill if it includes a homestead exemption you won't get.",
      ],
    },
    {
      heading: "When a DSCR loan fits — and when it doesn't",
      bullets: [
        "Fits: self-employed investors, buyers with several rentals already, investors who want to close in an LLC, and BRRRR investors refinancing out of short-term debt.",
        "Fits: buyers whose tax returns show low income because of depreciation and write-offs.",
        "Less ideal: buyers who qualify easily for a conventional loan, which may offer a lower rate and no prepayment penalty.",
        "Not for: a home you plan to live in — DSCR loans are for investment properties only.",
      ],
    },
  ],
  natalieTake: {
    heading: "Low down payment, high responsibility",
    paragraphs: [
      "DSCR loans make it possible to get into properties with very minimal down. That's an opportunity, but you have to be able to absorb a backslide in rents.",
      "Run your numbers with today's taxes and insurance, keep your reserves, and make sure the rent covers your PITI with something left over before you count on appreciation.",
    ],
    source: EP45,
  },
  recommended: {
    heading: "Where Natalie sends investors for DSCR loans",
    intro: "Natalie works with Brian Lupton at HomeRock Mortgage on investor financing. Compare his terms with any lender you're considering.",
    providers: [homeRockMortgage],
    disclosure: lenderDisclosure,
  },
  faqs: [
    {
      question: "What is a good DSCR for a rental property?",
      answer:
        "1.0 means the rent exactly covers the payment and is a common minimum. Most lenders give better pricing at 1.2–1.25 or higher, which also leaves you a cushion for vacancies and repairs.",
    },
    {
      question: "Do DSCR loans require tax returns?",
      answer: "Usually not. DSCR lenders qualify the property on its rent and don't calculate a personal debt-to-income ratio, though they still check credit, reserves and the property.",
    },
    {
      question: "How much down payment does a DSCR loan need?",
      answer: "Typically 20–25%. Some lenders offer 15% down for borrowers with strong credit.",
    },
    {
      question: "Can I get a DSCR loan in an LLC in Texas?",
      answer: "Generally yes. Most DSCR lenders allow closing in an LLC or other entity, usually with a personal guarantee.",
    },
    {
      question: "Can I use a DSCR loan for a BRRRR refinance?",
      answer:
        "Yes, it's one of the most common uses. Many DSCR lenders allow a cash-out refinance after 3–6 months of ownership. See [the BRRRR guide](/investors/brrrr) for seasoning details.",
    },
  ],
  related: [
    { label: "BRRRR strategy in Texas", href: "/investors/brrrr", description: "Where DSCR refinances fit in the cycle." },
    { label: "How to start investing", href: "/investors/beginner", description: "How much you need for your first rental." },
    { label: "Houston property taxes", href: "/blog/market-news/houston-property-taxes", description: "Why taxes drive the payment." },
    { label: "Financing options for buyers", href: "/buyers/financing", description: "Loan programs if you'll live in the home." },
  ],
  sources: [
    { label: "Griffin Funding: DSCR loan requirements (2026)", url: "https://griffinfunding.com/blog/dscr-loans/dscr-loan-requirements/" },
    { label: "Munoz Ghezlan: DSCR loan seasoning requirements (May 2026)", url: "https://www.munozghezlan.com/blog/dscr-loan-seasoning-requirements" },
    { label: "HomeRock Mortgage: Loan officers", url: "https://www.homerockmortgage.com/loan-officer" },
  ],
  disclaimer:
    "This guide is education, not lending advice. DSCR programs vary by lender and change often; compare offers and read the prepayment terms before you commit.",
  cta: investorBooking,
};

export const privateLendingGuide: AcademyGuide = {
  path: "/investors/private-lending",
  metaTitle: "Private Lending for Real Estate Investors in Texas",
  metaDescription:
    "How private money loans work for Texas real estate investors: what they fund, how they're documented, the risks for lenders and borrowers, and questions to ask first.",
  h1: "How Does Private Lending Work in Real Estate?",
  subheading: "What borrowers and private lenders should understand before money changes hands",
  breadcrumbs: [
    { name: "Investors", path: "/investors" },
    { name: "Private Lending", path: "/investors/private-lending" },
  ],
  datePublished: DATE,
  shortAnswer: [
    "Private lending is when an individual or small company — not a bank — lends money to a real estate investor, secured by the property. Investors use it to buy and rehab properties quickly, then pay it off by selling or refinancing into a long-term loan.",
    "In Texas the loan is usually documented with a promissory note and a recorded deed of trust. Both sides should use a Texas real estate attorney, because usury, licensing and homestead rules all apply.",
  ],
  sections: [
    {
      heading: "What private money is used for",
      bullets: [
        "Buying a distressed property fast, often for cash, before a bank would close.",
        "Funding the rehab on a flip or a [BRRRR](/investors/brrrr) project.",
        "Bridging the gap until the property is seasoned for a long-term refinance, such as a [DSCR loan](/investors/dscr-loans-texas).",
      ],
    },
    {
      heading: "How a private loan is usually documented",
      bullets: [
        "A promissory note setting out the amount, rate, term, payments and default terms.",
        "A deed of trust recorded in the county, giving the lender a lien on the property.",
        "A lender's title insurance policy confirming the lien position, usually first lien.",
        "Hazard insurance naming the lender, and a clear draw schedule if rehab funds are held back.",
        "A loan amount sized to a conservative share of the property's value, so there's a cushion if the borrower can't finish.",
      ],
    },
    {
      heading: "Risks to understand",
      paragraphs: ["For lenders:"],
      bullets: [
        "The borrower defaults or the rehab stalls, and the property is worth less than expected.",
        "Usury: Texas caps the interest that can be charged, and how the cap is calculated is technical — the Texas Supreme Court addressed it again in 2025.",
        "Licensing and consumer rules can apply depending on the borrower and how the property is used.",
        "Texas homestead protections strictly limit loans against a borrower's own home; private loans should be on investment property.",
        "Pooling money from several people into one fund can turn the arrangement into a securities offering.",
      ],
    },
    {
      heading: "Questions to ask before you lend or borrow",
      bullets: [
        "What is the exit — a sale, or a refinance with a lender who has already reviewed the deal?",
        "What is the as-is value and the after-repair value, and who determined them?",
        "What happens if the rehab runs 60 days late or 20% over budget?",
        "Who holds the rehab funds, and what triggers each draw?",
        "Has a Texas real estate attorney drafted the note and deed of trust?",
      ],
    },
  ],
  natalieTake: {
    heading: "Trust, but verify",
    paragraphs: [
      "Be very careful who you work with, how you pay them and what you give them access to. Don't trust everybody right away.",
      "Do your diligence. Check that the payment is going to the name you expect, get everything in writing, keep copies of IDs, and put every change on paper.",
    ],
    source: EP45,
  },
  recommended: {
    heading: "Who Natalie works with on financing",
    intro:
      "For the long-term loan you refinance into, including DSCR loans, Natalie works with Brian Lupton at HomeRock Mortgage. To hear how short-term hard money works from a Houston lender's side, listen to Natalie's conversation with Eddie Gant of Jet Lending on [podcast episode 56](/podcast/transcripts/ep56-hard-money-lending-explained).",
    providers: [homeRockMortgage],
    disclosure: lenderDisclosure,
  },
  faqs: [
    {
      question: "What's the difference between private money and hard money?",
      answer:
        "Both are non-bank loans secured by real estate. \"Hard money\" usually means a company that lends to investors as a business, with set rates and points. \"Private money\" often means an individual lender, with terms negotiated deal by deal.",
    },
    {
      question: "Is private lending legal in Texas?",
      answer:
        "Yes, but it's regulated. Texas usury law caps interest, and licensing and homestead rules can apply. Have a Texas real estate attorney draft and review the loan documents.",
    },
    {
      question: "How do private lenders protect themselves?",
      answer:
        "With a recorded deed of trust in first-lien position, a lender's title policy, insurance naming the lender, a conservative loan-to-value and rehab funds released in draws as work is completed.",
    },
    {
      question: "Does Natalie offer private lending?",
      answer:
        "No. For long-term and DSCR financing, Natalie works with Brian Lupton at HomeRock Mortgage. This page is education only and isn't an offer to lend or invest. To talk through a specific deal, [book a strategy session](/booking).",
    },
  ],
  related: [
    { label: "BRRRR strategy in Texas", href: "/investors/brrrr", description: "Where short-term money fits in the cycle." },
    { label: "DSCR loans in Texas", href: "/investors/dscr-loans-texas", description: "The long-term refinance after private money." },
    { label: "Podcast: Hard money lending explained", href: EP56.href, description: "Natalie's episode with Eddie Gant of Jet Lending." },
    { label: "Investor-friendly vendors", href: "/investors/vendors", description: "Lenders, title and contractors who work with investors." },
  ],
  sources: [
    { label: "HomeRock Mortgage: Loan officers", url: "https://www.homerockmortgage.com/loan-officer" },
    { label: "Barsalou Law: Hard money loans in Texas", url: "https://www.barsalou-law.com/what-is-a-hard-money-loan-in-texas-understanding-private-real-estate-financing-high-interest-rates-and-the-law" },
    { label: "Supreme Court of Texas: American Pearl Group v. National Payment Systems, No. 24-0759 (May 23, 2025)", url: "https://www.txcourts.gov/media/1460588/240759.pdf" },
  ],
  disclaimer:
    "This guide is general education, not legal or financial advice, and not an offer to lend, borrow or invest. Private loans in Texas involve usury, licensing, homestead and securities rules; work with a Texas real estate attorney.",
  cta: investorBooking,
};

export const investorGuides = [beginnerGuide, brrrrGuide, dscrGuide, privateLendingGuide];
