import type { AcademyGuide } from "@/lib/content/academy/types";
import { homeRockMortgageForBuyers, lenderDisclosure } from "@/lib/content/academy/providers";

/**
 * Home Buyer Academy guides.
 *
 * Natalie's perspective comes from her Home Buyer Masterclass (co-presented
 * with Brian Lupton) and the Sugar, Spice & Spirits podcast (episodes 35 and
 * 45). Lending, Texas contract and property-tax facts were checked against the
 * sources listed on each guide on Oct 6, 2026 — re-check them when updating.
 */

const DATE = "2026-10-06";

const EP35 = {
  label: "Sugar, Spice & Spirits episode 35: Stop Overpaying Your Mortgage: Insurance, Property Taxes & Escrow",
  href: "/podcast/transcripts/ep35-stop-overpaying-your-mortgage",
};

const EP45 = {
  label: "Sugar, Spice & Spirits episode 45: Is 10 Rental Properties Actually Enough to Retire?",
  href: "/podcast/transcripts/ep45-is-10-rental-properties-enough-to-retire",
};

const buyerBooking = {
  title: "Want Your Real Numbers?",
  description: "Book a free strategy session and Natalie will walk through your budget, your loan options and what you'll need at closing.",
  label: "Book a Free Strategy Session →",
};

const recommendedLender = {
  heading: "Who Natalie works with on financing",
  intro:
    "Natalie's buyers often start with Brian Lupton at HomeRock Mortgage, who co-presents her Home Buyer Masterclass. Compare his terms with any lender you're considering.",
  providers: [homeRockMortgageForBuyers],
  disclosure: lenderDisclosure,
};

const creditSources = [
  { label: "Orrick InfoBytes: Fannie Mae removes minimum credit score for DU loans (Nov 2025)", url: "https://infobytes.orrick.com/2025-11-14/fannie-mae-updates-selling-guide-removes-minimum-credit-score-for-loans-using-desktop-underwriter/" },
  { label: "NerdWallet: FHA loan requirements (Dec 2025)", url: "https://www.nerdwallet.com/mortgages/learn/fha-loan-requirements" },
  { label: "USDALoans.com: USDA eligibility (2026)", url: "https://www.usdaloans.com/program/eligibility/" },
  { label: "VA funding fee chart (2026)", url: "https://vaentitlement.com/va-funding-fee" },
];

const lendingDisclaimer =
  "This guide is education, not lending, legal or tax advice. Loan programs, credit requirements and fees change, and every lender sets its own rules; confirm with your lender before you make decisions.";

export const closingCostsGuide: AcademyGuide = {
  path: "/buyers/closing-costs-texas",
  metaTitle: "Closing Costs in Texas: What Home Buyers Pay",
  metaDescription:
    "What closing costs are in Texas, how much buyers typically pay (2–5% of the price), who pays the title policy, what's due before closing, and how to lower your costs.",
  h1: "What Are Closing Costs in Texas?",
  subheading: "What you'll pay at the closing table, who pays what, and how to bring it down",
  breadcrumbs: [
    { name: "Home Buyers", path: "/buyers" },
    { name: "Closing Costs in Texas", path: "/buyers/closing-costs-texas" },
  ],
  datePublished: DATE,
  shortAnswer: [
    "Texas home buyers typically pay about 2% to 5% of the purchase price in closing costs, on top of the down payment. On a $350,000 home, that's roughly $7,000 to $17,500.",
    "Closing costs cover lender fees, the appraisal, the lender's title policy, the escrow fee, a survey if one is needed, and prepaid items like your first year of homeowners insurance and escrow reserves for taxes. In Texas the seller customarily pays for the owner's title policy, and seller concessions or down payment assistance can cover some of the rest.",
  ],
  sections: [
    {
      heading: "What Texas buyers typically pay",
      table: {
        headers: ["Cost", "Typical range", "Notes"],
        rows: [
          ["Loan origination", "0%–2% of the loan", "Negotiable on conventional and FHA loans; capped at 1% on VA loans"],
          ["Underwriting and lender fees", "About $800", "Plus a credit report, usually $25–$75"],
          ["Appraisal", "$450–$900", "Ordered by your lender"],
          ["Lender's title policy", "$100–$300", "When issued together with the owner's policy"],
          ["Escrow / settlement fee", "$250–$750", "Often split between buyer and seller"],
          ["Survey", "$400–$700", "Only if the seller's existing survey can't be used"],
          ["Homeowners insurance", "First year, paid upfront", "Often $2,200–$4,500 a year in the Houston area"],
          ["Escrow reserves and prepaid interest", "Varies", "Usually 2–3 months of property taxes, 2 months of insurance, and interest to the end of the month"],
        ],
        note: "Ranges as published by Herring Bank in May 2026. Your lender's Loan Estimate shows your actual figures.",
      },
    },
    {
      heading: "Money due before closing",
      paragraphs: [
        "A few costs come out of pocket while you're under contract, before the closing table:",
      ],
      bullets: [
        "Earnest money: often about 1% of the price. It's held by the title company and credited toward your costs at closing.",
        "Option fee: a negotiated amount for the option period, when you can back out for any reason. It's usually credited at closing too.",
        "Home inspection: generally $400–$1,000, depending on the home and add-ons like a wood-destroying insect inspection. It isn't refundable.",
      ],
    },
    {
      heading: "What's different in Texas",
      bullets: [
        "Title insurance rates are set by the Texas Department of Insurance, so the premium is the same at every title company. Choose a title company for its service.",
        "The seller customarily pays for the buyer's owner's title policy. It's a negotiated item in the contract, not a law, so confirm it in your offer.",
        "Under the current Texas contract (TREC 20-19), your earnest money and option fee go to the title company within 3 days of the contract's effective date. If the option fee is late, you lose your right to back out during the option period.",
        "Property taxes are paid in arrears, so the seller credits you at closing for their share of this year's taxes.",
        "If the seller has a survey the title company will accept, signed with a T-47 affidavit that nothing has changed, you may not need to pay for a new one.",
      ],
    },
    {
      heading: "How to lower your closing costs",
      steps: [
        {
          title: "Negotiate seller concessions",
          body: "The seller can agree to pay part of your closing costs. Each loan type caps how much: commonly 3% to 9% on conventional loans depending on your down payment, 6% on FHA and USDA, and 4% plus normal closing costs on VA. Your lender confirms the limit.",
        },
        {
          title: "Look at new construction",
          body: "Builders trying to move finished inventory homes often offer thousands toward closing costs. Use your own Realtor so the incentive works for you, not just the builder. See [buying new construction](/buyers/new-construction).",
        },
        {
          title: "Apply for down payment assistance",
          body: "Texas programs can cover your down payment and sometimes part of your closing costs. See [financing and down payment assistance](/buyers/financing).",
        },
        {
          title: "Compare Loan Estimates",
          body: "Lenders must give you a Loan Estimate within 3 business days of your application. Compare lender fees and points line by line, and review your Closing Disclosure, which you'll receive at least 3 business days before closing.",
        },
        {
          title: "Shop your homeowners insurance",
          body: "Get three or four quotes from different agencies. The first year's premium is paid at closing, and it sets your monthly escrow afterward.",
        },
      ],
    },
    {
      heading: "After closing: file your homestead exemption",
      paragraphs: [
        "If the home is your primary residence, file a homestead exemption (Form 50-114) with your county appraisal district. It's free, you only file once, and the standard deadline is April 30. The exemption lowers the taxable value of your home and caps how fast it can rise on your homestead.",
        "Since 2025, the school district homestead exemption is $140,000, with an extra $60,000 for homeowners who are 65 or older or disabled. The title company won't file it for you.",
      ],
    },
  ],
  natalieTake: {
    heading: "Two things buyers forget",
    paragraphs: [
      "If you bought a home and never filed your homestead exemption, congratulations, you've been overpaying. It's not automatic; you have to apply. Title companies do not file this paperwork. It is up to the homeowner.",
      "And stop being loyal on insurance. I shopped my own homeowners insurance this year and shaved about $5,000 off the premium — almost $500 a month in my escrow. Get three or four quotes, from different people and different agencies.",
    ],
    source: EP35,
  },
  faqs: [
    {
      question: "How much are closing costs for a buyer in Texas?",
      answer: "Typically about 2% to 5% of the purchase price, not counting your down payment. Your lender's Loan Estimate gives you the actual figures for your loan.",
    },
    {
      question: "Who pays for title insurance in Texas?",
      answer:
        "By custom, the seller pays for the owner's title policy and the buyer pays for the lender's policy. It's negotiable and set in the contract. Premiums are set by the Texas Department of Insurance, so they're the same at every title company.",
    },
    {
      question: "Can the seller pay my closing costs?",
      answer:
        "Yes, through seller concessions, up to the limit your loan allows — commonly 3% to 9% on conventional loans, 6% on FHA and USDA, and 4% plus normal closing costs on VA.",
    },
    {
      question: "Can closing costs be rolled into my loan?",
      answer:
        "Generally not on a purchase, though some upfront fees can be, like FHA's upfront mortgage insurance or the VA funding fee. Seller concessions, lender credits and down payment assistance are the usual ways to reduce cash at closing.",
    },
    {
      question: "Is earnest money part of my closing costs?",
      answer: "No, but it's credited toward what you owe at closing. If the deal closes, it counts toward your down payment or costs.",
    },
  ],
  related: [
    { label: "How much money do you need?", href: "/buyers/how-much-money-to-buy-a-house-houston", description: "Your total cash to close, start to finish." },
    { label: "Financing and down payment assistance", href: "/buyers/financing", description: "Loan types and Texas assistance programs." },
    { label: "Houston property taxes", href: "/blog/market-news/houston-property-taxes", description: "Homestead exemptions and protests." },
    { label: "Free home buyer webinar", href: "/webinar", description: "Natalie's cash-to-close breakdown, live." },
  ],
  sources: [
    { label: "Herring Bank: Typical closing costs in Texas (May 2026)", url: "https://www.herringbank.com/learn/typical-closing-costs-in-texas-for-buyers-and-sellers/" },
    { label: "TREC One to Four Family Residential Contract (20-19) guide", url: "https://www.freedom-res.com/post/trec-one-to-four-family-residential-contract/" },
    { label: "Ballotpedia: Texas Proposition 13 (2025)", url: "https://ballotpedia.org/Texas_Proposition_13,_Increase_Homestead_Property_Tax_Exemption_Amendment_(2025)" },
    { label: "Ballotpedia: Texas Proposition 11 (2025)", url: "https://ballotpedia.org/Texas_Proposition_11,_Increase_Homestead_Tax_Exemption_for_Elderly_and_Disabled_Amendment_(2025)" },
    { label: "Texas Law Help: Property taxes and homestead exemptions", url: "https://texaslawhelp.org/article/property-taxes-and-homestead-exemptions" },
  ],
  disclaimer: lendingDisclaimer,
  showSeminar: true,
  cta: buyerBooking,
};

export const howMuchMoneyGuide: AcademyGuide = {
  path: "/buyers/how-much-money-to-buy-a-house-houston",
  metaTitle: "How Much Money Do You Need to Buy a House in Houston?",
  metaDescription:
    "How much cash you need to buy a house in Houston: down payment by loan type, Texas closing costs, upfront costs, reserves, a worked example, and the monthly costs to plan for.",
  h1: "How Much Money Do You Need to Buy a House in Houston?",
  subheading: "Down payment, closing costs and the monthly costs to plan for",
  breadcrumbs: [
    { name: "Home Buyers", path: "/buyers" },
    { name: "How Much Money You Need", path: "/buyers/how-much-money-to-buy-a-house-houston" },
  ],
  datePublished: DATE,
  shortAnswer: [
    "Plan for four things: a down payment (from 0% with VA or USDA loans, 3.5% with FHA, or 3% to 5% with conventional loans), closing costs of about 2% to 5% of the price, upfront costs while you're under contract, and some reserves.",
    "On a $300,000 Houston home with an FHA loan, that often adds up to roughly $17,000 to $26,500 in total cash before any help. Down payment assistance, seller concessions and builder incentives can cut that substantially — sometimes close to zero.",
  ],
  sections: [
    {
      heading: "Minimum down payment by loan type",
      table: {
        headers: ["Loan", "Minimum down", "On a $300,000 home"],
        rows: [
          ["VA", "0% (eligible veterans and service members)", "$0"],
          ["USDA", "0% (eligible areas and incomes)", "$0"],
          ["FHA", "3.5% with a 580+ credit score", "$10,500"],
          ["Conventional", "3% for many first-time buyers; 5% is common otherwise", "$9,000–$15,000"],
        ],
        note: "Minimums as of October 2026. See [financing options](/buyers/financing) for how each loan works.",
      },
    },
    {
      heading: "A worked example",
      paragraphs: [
        "An illustration, not a quote: a $300,000 home bought with an FHA loan and 3.5% down.",
      ],
      table: {
        headers: ["Item", "Estimate", "When it's due"],
        rows: [
          ["Earnest money (about 1%)", "$3,000", "Within 3 days of contract; credited at closing"],
          ["Option fee", "A few hundred dollars", "Within 3 days of contract; usually credited at closing"],
          ["Home inspection", "$400–$1,000", "During the option period"],
          ["Down payment (3.5%)", "$10,500", "At closing"],
          ["Closing costs and prepaids (2%–5%)", "$6,000–$15,000", "At closing"],
          ["Total cash needed, before any help", "About $17,000–$26,500", ""],
        ],
        note: "Earnest money and the option fee are usually credited back at closing, so they count toward the total rather than adding to it.",
      },
    },
    {
      heading: "Ways to bring the number down",
      bullets: [
        "[Down payment assistance](/buyers/financing): Texas programs commonly provide 3% to 5% of the loan amount, which can cover an FHA down payment.",
        "[Seller concessions](/buyers/closing-costs-texas): the seller can pay part of your closing costs, up to your loan's limit.",
        "[New construction incentives](/buyers/new-construction): builders often contribute toward closing costs on homes they need to sell.",
        "Gift funds from family, documented with a gift letter, can be used for the down payment on most loan types.",
      ],
    },
    {
      heading: "Where the money can — and can't — come from",
      bullets: [
        "Acceptable: savings, gift funds from family, 401(k) or other retirement accounts, and liquid stocks or bonds.",
        "Not acceptable: credit cards or unsecured personal loans. Secured loans can be.",
        "Lenders review about two months of bank statements, so large undocumented deposits need an explanation. Money that has sat in your account for 60 days is easiest to use.",
      ],
    },
    {
      heading: "Monthly costs to plan for",
      paragraphs: [
        "Your monthly payment covers principal, interest, taxes and insurance (PITI). Your lender calculates the principal and interest; in the Houston area, taxes and insurance often add as much again.",
      ],
      bullets: [
        "Property taxes: Texas has no state income tax, so property taxes are high — commonly around 2% to 3% of your home's assessed value a year, and often more in communities with a municipal utility district (MUD).",
        "Homeowners insurance: often $2,200–$4,500 a year in the Houston area, plus flood insurance if the home is in a flood zone.",
        "Mortgage insurance: required on FHA loans and on conventional loans with less than 20% down.",
        "HOA dues: from a few hundred dollars a year to well over $1,000 in new communities with large amenity packages.",
        "Escrow changes: when taxes or insurance rise, your lender raises your payment and may ask you to cover a shortage. Budget for it.",
      ],
    },
  ],
  natalieTake: {
    heading: "Watch your escrow",
    paragraphs: [
      "I've seen people's escrow come back negative $3,000. Not only do they have to make up that $3,000 — about $250 a month — they also have to build in another $3,000 for next year. That's an extra $500 a month if you're not watching your escrow account.",
      "You can request an escrow review any time. Your mortgage company is a billing department, not your financial coach, so look at your balance yourself.",
    ],
    source: EP35,
  },
  recommended: recommendedLender,
  faqs: [
    {
      question: "How much do I need to buy a $300,000 house in Houston?",
      answer:
        "With an FHA loan, plan on roughly $17,000 to $26,500 in total cash before assistance: $10,500 down plus about $6,000 to $15,000 in closing costs and prepaids, and a few hundred dollars for the inspection. VA and USDA buyers may need much less, and down payment assistance or seller concessions can lower it further.",
    },
    {
      question: "Can I buy a house in Texas with no money down?",
      answer:
        "Sometimes. VA and USDA loans require no down payment, and Texas assistance programs can cover an FHA or conventional down payment. You'll usually still need money for the inspection, earnest money and some closing costs unless the seller or a program covers them.",
    },
    {
      question: "Do I need 20% down?",
      answer: "No. 20% down avoids mortgage insurance on a conventional loan, but most buyers put down far less.",
    },
    {
      question: "How much should I keep in reserves?",
      answer:
        "Some loans require reserves equal to a few months of payments, and it's wise to keep a cushion for repairs and escrow increases even when they don't. Your lender will tell you what your loan requires.",
    },
  ],
  related: [
    { label: "Closing costs in Texas", href: "/buyers/closing-costs-texas", description: "Every line item, explained." },
    { label: "What credit score do you need?", href: "/buyers/credit", description: "Minimums by loan type." },
    { label: "Financing and down payment assistance", href: "/buyers/financing", description: "Which loan and which program fits you." },
    { label: "First-time buyer guide", href: "/buyers/first-time-buyers", description: "The whole process, step by step." },
  ],
  sources: [
    { label: "Herring Bank: Typical closing costs in Texas (May 2026)", url: "https://www.herringbank.com/learn/typical-closing-costs-in-texas-for-buyers-and-sellers/" },
    { label: "NerdWallet: FHA loan requirements (Dec 2025)", url: "https://www.nerdwallet.com/mortgages/learn/fha-loan-requirements" },
    { label: "AD Mortgage: Conventional loan down payment (2026)", url: "https://admortgage.com/blog/conventional-loan-down-payment/" },
    { label: "Styer Mortgage: Texas down payment assistance programs (2026)", url: "https://styermortgage.com/blog/2026-03-27-down-payment-assistance-texas-2026.html" },
  ],
  disclaimer: lendingDisclaimer,
  showSeminar: true,
  cta: buyerBooking,
};

export const creditGuide: AcademyGuide = {
  path: "/buyers/credit",
  metaTitle: "What Credit Score Do You Need to Buy a House in Texas?",
  metaDescription:
    "Credit score requirements to buy a house in Texas by loan type — conventional, FHA, VA and USDA — what else lenders look at, and how to raise your score before you apply.",
  h1: "What Credit Score Do I Need to Buy a House in Texas?",
  subheading: "Minimums by loan type, what else lenders look at, and how to get ready",
  breadcrumbs: [
    { name: "Home Buyers", path: "/buyers" },
    { name: "Credit Score", path: "/buyers/credit" },
  ],
  datePublished: DATE,
  shortAnswer: [
    "It depends on the loan program and the lender. FHA loans allow scores as low as 580 with 3.5% down, or 500 to 579 with 10% down. Most lenders look for about 620 on conventional loans. VA and USDA loans have no official program minimum, so each lender sets its own — often in the 580 to 640 range.",
    "A higher score doesn't just get you approved; it gets you a lower rate and cheaper mortgage insurance.",
  ],
  sections: [
    {
      heading: "Credit score by loan type",
      table: {
        headers: ["Loan", "Credit score", "Good to know"],
        rows: [
          [
            "Conventional",
            "Most lenders look for about 620",
            "Fannie Mae dropped its hard 620 minimum for loans run through its automated underwriting in November 2025, but lenders still set their own floors.",
          ],
          ["FHA", "580 with 3.5% down; 500–579 with 10% down", "Easier to qualify for; mortgage insurance applies."],
          ["VA", "No VA minimum; lenders often want 580–620", "For eligible veterans, service members and surviving spouses."],
          ["USDA", "No program minimum; set by the lender", "No down payment in eligible areas, with income limits."],
        ],
        note: "As of October 2026.",
      },
    },
    {
      heading: "What lenders look at besides your score",
      bullets: [
        "Debt-to-income ratio: your monthly debts, including the new house payment, compared with your gross income. Around 43% or below is a common target, with exceptions.",
        "Income and employment: usually two years of steady work history, with W-2s, 30 days of pay stubs and tax returns.",
        "Assets: about two months of bank statements showing your down payment and closing funds.",
        "Payment history: recent late payments, collections or a bankruptcy matter more than the number alone.",
      ],
    },
    {
      heading: "An example",
      paragraphs: [
        "A buyer with a 600 score and steady income may not fit most lenders' conventional guidelines, but can qualify for an FHA loan with 3.5% down. If they spend a few months paying down credit card balances and raise their score to the high 600s, they may qualify for a conventional loan, a lower rate or cheaper mortgage insurance. The right move depends on how soon they want to buy and what a few months of waiting would save.",
      ],
    },
    {
      heading: "Common mistakes during the loan process",
      bullets: [
        "Opening new credit — a car loan, furniture financing or a new card — before closing.",
        "Closing old credit card accounts, which can lower your score.",
        "Moving large sums between accounts or depositing cash you can't document.",
        "Changing jobs without talking to your lender first.",
        "Missing any payment, even a small one.",
        "Slow or incomplete answers to your lender's document requests.",
      ],
    },
    {
      heading: "How to improve your credit before you apply",
      steps: [
        { title: "Check your reports", body: "Get your free reports from Experian, Equifax and TransUnion at AnnualCreditReport.com and dispute any errors." },
        { title: "Pay down card balances", body: "Keeping balances low relative to your limits is one of the fastest ways to raise a score." },
        { title: "Pay everything on time", body: "Payment history is the biggest factor in your score." },
        { title: "Keep old accounts open", body: "Older accounts lengthen your credit history." },
        { title: "Talk to a lender early", body: "A lender can show you which changes would move your score the most before you start shopping." },
      ],
    },
    {
      heading: "When to talk to a Realtor",
      paragraphs: [
        "Talk to a lender and a Realtor before you start touring homes, not after you find one. Knowing which loan you qualify for decides your price range, your down payment and how strong your offer can be — and Natalie can connect you with a lender who'll tell you exactly what to work on.",
      ],
    },
  ],
  natalieTake: {
    heading: "Do what your lender asks, quickly",
    paragraphs: [
      "This is where the disconnect is. A lot of people don't qualify not because they weren't pre-qualified in the beginning, but because they don't do what the lenders are asking. They're not giving full document packages.",
      "Bank statements means page one through six — even page six that just has the FDIC logo on it. Do everything they ask, and do it with a quickness. You might even close quicker.",
    ],
    source: EP45,
  },
  recommended: recommendedLender,
  faqs: [
    {
      question: "Can I buy a house with a 580 credit score in Texas?",
      answer: "Often, yes — with an FHA loan and 3.5% down, if you meet the lender's other requirements. VA and some USDA lenders may also work with scores in that range.",
    },
    {
      question: "Is 620 still the minimum for a conventional loan?",
      answer:
        "Not officially. Fannie Mae removed its hard 620 minimum for loans run through its automated underwriting system in November 2025. Most lenders still look for about 620, and a higher score gets better pricing.",
    },
    {
      question: "Does checking my credit lower my score?",
      answer:
        "Checking your own credit doesn't. A lender's hard inquiry can lower it slightly, but mortgage inquiries made within a short shopping window are generally treated as one.",
    },
    {
      question: "How long does it take to raise my credit score?",
      answer:
        "Paying down card balances can show up within a month or two. Recovering from late payments or collections takes longer. A lender can tell you which changes would help most.",
    },
  ],
  related: [
    { label: "Financing and down payment assistance", href: "/buyers/financing", description: "Which loan fits your score." },
    { label: "How much money do you need?", href: "/buyers/how-much-money-to-buy-a-house-houston", description: "Your total cash to close." },
    { label: "Home buyer checklist", href: "/resources/checklists/home-buyer-checklist", description: "Documents to gather for pre-approval." },
    { label: "First-time buyer guide", href: "/buyers/first-time-buyers", description: "The whole process, step by step." },
  ],
  sources: [
    ...creditSources,
    { label: "AnnualCreditReport.com (free credit reports)", url: "https://www.annualcreditreport.com" },
  ],
  disclaimer: lendingDisclaimer,
  showSeminar: true,
  cta: buyerBooking,
};

export const financingGuide: AcademyGuide = {
  path: "/buyers/financing",
  metaTitle: "Home Loan Options and Down Payment Assistance in Texas",
  metaDescription:
    "Compare conventional, FHA, VA and USDA loans in Texas, see how Texas down payment assistance programs work, and learn what you need for pre-approval.",
  h1: "What Are My Home Loan Options in Texas?",
  subheading: "Conventional, FHA, VA and USDA loans, plus Texas down payment assistance",
  breadcrumbs: [
    { name: "Home Buyers", path: "/buyers" },
    { name: "Financing", path: "/buyers/financing" },
  ],
  datePublished: DATE,
  shortAnswer: [
    "Most Texas buyers use one of four loan types: conventional, FHA, VA or USDA. The right one depends on your credit, your down payment, your military service and where you're buying.",
    "Texas down payment assistance programs, from the state and from counties like Harris and Montgomery, can cover some or all of your down payment. Getting pre-approved first tells you which programs you qualify for.",
  ],
  sections: [
    {
      heading: "The four main loan types",
      table: {
        headers: ["", "Conventional", "FHA", "VA", "USDA"],
        rows: [
          ["Backed by", "Fannie Mae / Freddie Mac", "Federal Housing Administration (HUD)", "Department of Veterans Affairs", "U.S. Department of Agriculture"],
          ["Minimum down", "3%–5%", "3.5%", "0%", "0%"],
          ["Credit score", "Most lenders ~620", "580 (500 with 10% down)", "Set by lender", "Set by lender"],
          ["Mortgage insurance", "PMI if under 20% down; removable", "1.75% upfront plus annual MIP", "None; one-time funding fee", "1% upfront plus 0.35% a year"],
          ["Best for", "Good credit, flexible", "Lower scores or smaller savings", "Eligible veterans and service members", "Eligible areas and incomes"],
        ],
        note: "As of October 2026. The VA funding fee is 2.15% for first use with under 5% down, and is waived for many veterans with a service-connected disability.",
      },
    },
    {
      heading: "How each loan works",
      bullets: [
        "Conventional: not government-insured. Private mortgage insurance applies with less than 20% down and can be removed once you reach 20% equity; it drops off automatically at 22%.",
        "FHA: insured by the Federal Housing Administration and easier to qualify for. There's no income limit. With less than 10% down, the annual mortgage insurance lasts for the life of the loan.",
        "VA: for eligible veterans, active-duty service members, reservists and surviving spouses. No down payment and no monthly mortgage insurance.",
        "USDA: for homes in USDA-eligible areas, which include many communities on the edges of the Houston area. Household income must be under the area limit.",
      ],
    },
    {
      heading: "Texas down payment assistance",
      paragraphs: [
        "Texas assistance usually comes as either a grant you never repay or a 0% second loan you repay when you sell or refinance. Programs commonly provide 3% to 5% of the loan amount, have income and purchase-price limits, require a minimum credit score (often 620, sometimes 580 on FHA) and require a homebuyer education course.",
      ],
      table: {
        headers: ["Program", "Who it's for"],
        rows: [
          ["TSAHC Home Sweet Texas", "First-time and repeat buyers with low-to-moderate income"],
          ["TSAHC Homes for Texas Heroes", "Teachers, firefighters, police and corrections officers, EMS, nurses and veterans. See [our Texas Heroes guide](/blog/buying/texas-heroes-home-loan-program)"],
          ["TDHCA My First Texas Home", "Buyers who haven't owned a primary residence in the past 3 years"],
          ["TDHCA My Choice Texas Home", "Repeat buyers who meet the program's limits"],
          ["Mortgage Credit Certificate (MCC)", "A federal tax credit on part of your mortgage interest each year"],
          ["County programs", "Harris County and Montgomery County run their own assistance with local rules"],
        ],
        note: "Limits and amounts change; your lender confirms eligibility.",
      },
    },
    {
      heading: "How assistance can cover an FHA down payment",
      paragraphs: [
        "An illustration: on a $300,000 home, 3.5% down is $10,500. The base loan is $289,500, and FHA's 1.75% upfront mortgage insurance brings it to about $294,566. A 5% assistance grant on that loan is about $14,700 — enough to cover the full down payment, with roughly $4,200 left toward closing costs.",
      ],
    },
    {
      heading: "What you need for pre-approval",
      bullets: [
        "Your credit, pulled from Experian, Equifax and TransUnion.",
        "Pay stubs from the last 30 days.",
        "W-2s and tax returns from the last 2 years.",
        "Bank statements from the last 2 months — every page.",
        "During the process, keep living where you are, keep paying your rent or mortgage, and don't open or close credit.",
      ],
    },
    {
      heading: "Bank or mortgage broker?",
      paragraphs: [
        "Big banks often charge an origination fee or discount point, keep 9-to-5 hours and may not offer down payment assistance. A mortgage broker or specialized lender can compare programs across many lenders. Either way, get Loan Estimates from more than one and compare them line by line.",
      ],
    },
  ],
  recommended: recommendedLender,
  faqs: [
    {
      question: "Which loan is best for a first-time buyer in Texas?",
      answer:
        "It depends on your credit and savings. FHA is common for buyers with lower scores or small down payments; conventional loans with 3% down can be cheaper for buyers with good credit; VA and USDA offer 0% down to those who qualify. Pairing any of them with down payment assistance can lower your cash to close.",
    },
    {
      question: "Do I have to be a first-time buyer to get down payment assistance in Texas?",
      answer: "Not always. Home Sweet Texas, Homes for Texas Heroes and My Choice Texas Home are open to repeat buyers who meet the income and price limits.",
    },
    {
      question: "Do I have to pay down payment assistance back?",
      answer: "It depends on the program and option you choose. Some assistance is a grant you never repay; other assistance is a 0% second loan you repay when you sell or refinance.",
    },
    {
      question: "Is FHA only for low-income buyers?",
      answer: "No. FHA loans have no income limit. They have flexible credit requirements, which is why many first-time buyers use them.",
    },
  ],
  related: [
    { label: "What credit score do you need?", href: "/buyers/credit", description: "Minimums by loan type." },
    { label: "How much money do you need?", href: "/buyers/how-much-money-to-buy-a-house-houston", description: "Your total cash to close." },
    { label: "Closing costs in Texas", href: "/buyers/closing-costs-texas", description: "What you'll pay at closing." },
    { label: "Homes for Texas Heroes", href: "/blog/buying/texas-heroes-home-loan-program", description: "Assistance for teachers, first responders and veterans." },
  ],
  sources: [
    ...creditSources,
    { label: "Styer Mortgage: Texas down payment assistance programs (2026)", url: "https://styermortgage.com/blog/2026-03-27-down-payment-assistance-texas-2026.html" },
    { label: "TSAHC income and purchase price limits (June 2026)", url: "https://www.tsahc.org/public/upload/files/general/TSAHC_Combined_Income_Purchase_Price_Limits.pdf" },
    { label: "AD Mortgage: Conventional loan down payment (2026)", url: "https://admortgage.com/blog/conventional-loan-down-payment/" },
  ],
  disclaimer: lendingDisclaimer,
  showSeminar: true,
  cta: buyerBooking,
};

export const firstTimeBuyerGuide: AcademyGuide = {
  path: "/buyers/first-time-buyers",
  metaTitle: "First-Time Home Buyer Guide for Texas",
  metaDescription:
    "A step-by-step guide for first-time home buyers in Texas and Houston: budget and credit, pre-approval, down payment assistance, the Texas contract, inspections and closing.",
  h1: "First-Time Home Buyer Guide for Texas",
  subheading: "Everything you need to know before you start your home search",
  breadcrumbs: [
    { name: "Home Buyers", path: "/buyers" },
    { name: "First-Time Buyers", path: "/buyers/first-time-buyers" },
  ],
  datePublished: DATE,
  shortAnswer: [
    "Buying your first home in Texas comes down to eight steps: check your credit and budget, get pre-approved, look into down payment assistance, choose a Realtor, find your home, make an offer, get inspections and the appraisal done, and close.",
    "Most first-time buyers put down far less than 20%, and many qualify for Texas programs that cover some or all of the down payment.",
  ],
  sections: [
    {
      heading: "The eight steps",
      steps: [
        {
          title: "Check your credit and your budget",
          body: "Pull your credit reports and decide what monthly payment you're comfortable with, including taxes, insurance and HOA dues. See [what credit score you need](/buyers/credit) and [how much money you need](/buyers/how-much-money-to-buy-a-house-houston).",
        },
        {
          title: "Get pre-approved",
          body: "A lender reviews your credit, income and assets and tells you how much you can borrow. Sellers expect a pre-approval letter with your offer.",
        },
        {
          title: "Look into down payment assistance",
          body: "Texas programs and county programs can cover your down payment. Ask your lender which ones you qualify for before you shop. See [financing and assistance](/buyers/financing).",
        },
        {
          title: "Choose your Realtor",
          body: "Before you tour homes, you'll sign a written buyer representation agreement that spells out what your agent does and how they're paid. A full-time Realtor works in your interest and can recommend lenders, inspectors, insurance agents and title companies.",
        },
        {
          title: "Find your home",
          body: "Compare neighborhoods, commutes, schools, flood risk, HOA rules and total monthly cost, not just the price.",
        },
        {
          title: "Make an offer",
          body: "In Texas, your offer uses the state's standard contract. Within 3 days of acceptance, you deliver earnest money (often about 1% of the price) and an option fee to the title company. The option fee buys you a short option period when you can back out for any reason.",
        },
        {
          title: "Inspect and appraise",
          body: "Get a professional inspection during the option period and negotiate repairs or credits. Your lender orders the appraisal to confirm the home's value.",
        },
        {
          title: "Close — then file your homestead exemption",
          body: "Do a final walkthrough, sign at the title company and get your keys. Afterward, file your homestead exemption with your county appraisal district; nobody files it for you. See [closing costs in Texas](/buyers/closing-costs-texas).",
        },
      ],
    },
    {
      heading: "Buying new construction as a first-time buyer",
      bullets: [
        "Bring your own Realtor. The builder's on-site agent represents the builder, not you.",
        "Finished \"inventory\" homes can come with price reductions and incentives toward closing costs, especially when a builder is closing out a section.",
        "Builder incentives tied to the builder's preferred lender can be worth less than they look; compare the full loan cost.",
        "Get an inspection even on a brand-new home.",
        "Plan to stay at least three to five years. While the builder is still selling new homes nearby, a resale can be hard to price.",
      ],
    },
    {
      heading: "Mistakes first-time buyers make",
      bullets: [
        "Shopping before getting pre-approved.",
        "Opening new credit or changing jobs during the loan process.",
        "Skipping the inspection to make an offer more attractive.",
        "Budgeting only for principal and interest and forgetting Texas property taxes, insurance, HOA and MUD taxes.",
        "Forgetting to file the homestead exemption after closing.",
      ],
    },
  ],
  natalieTake: {
    heading: "A first home with built-in equity",
    paragraphs: [
      "I had a buyer reach out on TikTok who was moving from Colorado for a new job, with a hiccup on his credit. I went to four or five builders in his price point and found an inventory home in Waller, off the Grand Parkway — already the cheapest three-bed, two-bath in the area. We tied it up under contract and the builder came down another $5,000.",
      "He's moving in with roughly $50,000 in equity compared with similar homes nearby, and we worked on his financing at the same time. Builders want to keep their crews working, so inventory homes can be a real opportunity — you just have to know who you're working with.",
    ],
    source: EP45,
  },
  faqs: [
    {
      question: "Who counts as a first-time home buyer in Texas?",
      answer:
        "For most assistance programs, it's anyone who hasn't owned a primary residence in the past three years. Some programs, like Home Sweet Texas, don't require you to be a first-time buyer at all.",
    },
    {
      question: "How much do I need to save for my first home?",
      answer:
        "Enough for your down payment, closing costs and upfront costs like the inspection. On a $300,000 FHA purchase that's often $17,000 to $26,500 before assistance; programs and seller concessions can lower it. See [how much money you need](/buyers/how-much-money-to-buy-a-house-houston).",
    },
    {
      question: "What is the option period in Texas?",
      answer:
        "A short, negotiated period after your contract is accepted when you can back out for any reason, as long as you paid the option fee on time. It's when you do your inspections and negotiate repairs.",
    },
    {
      question: "Do I need a Realtor to buy a new construction home?",
      answer:
        "It's strongly recommended. The builder's sales agent represents the builder. Your own Realtor represents you on price, incentives, inspections and the final walkthrough.",
    },
  ],
  related: [
    { label: "How much money do you need?", href: "/buyers/how-much-money-to-buy-a-house-houston", description: "Your total cash to close." },
    { label: "What credit score do you need?", href: "/buyers/credit", description: "Minimums by loan type." },
    { label: "Financing and down payment assistance", href: "/buyers/financing", description: "Loans and Texas programs." },
    { label: "Free home buyer webinar", href: "/webinar", description: "Natalie walks through cash to close, live." },
  ],
  sources: [
    { label: "Styer Mortgage: Texas down payment assistance programs (2026)", url: "https://styermortgage.com/blog/2026-03-27-down-payment-assistance-texas-2026.html" },
    { label: "TREC One to Four Family Residential Contract (20-19) guide", url: "https://www.freedom-res.com/post/trec-one-to-four-family-residential-contract/" },
    { label: "Texas Law Help: Property taxes and homestead exemptions", url: "https://texaslawhelp.org/article/property-taxes-and-homestead-exemptions" },
  ],
  disclaimer: lendingDisclaimer,
  showSeminar: true,
  cta: buyerBooking,
};

export const buyerGuides = [firstTimeBuyerGuide, howMuchMoneyGuide, closingCostsGuide, creditGuide, financingGuide];
