import type { AcademyGuide } from "@/lib/content/academy/types";

/**
 * Multifamily and Passive Investing guides — general education plus Natalie's
 * own perspective from the Sugar, Spice & Spirits podcast (episodes 42 and 45).
 * No personal portfolio figures are stated here; add them only once Natalie
 * confirms them. Facts checked Oct 5, 2026 against the cited sources.
 */

const DATE = "2026-10-05";

const EP42 = {
  label: "Sugar, Spice & Spirits episode 42: $100K Investment Without a Coach? Here's Why That Fails",
  href: "/podcast/transcripts/ep42-100k-investment-without-a-coach",
};

const EP45 = {
  label: "Sugar, Spice & Spirits episode 45: Is 10 Rental Properties Actually Enough to Retire?",
  href: "/podcast/transcripts/ep45-is-10-rental-properties-enough-to-retire",
};

const investorBooking = {
  title: "Want a Second Set of Eyes on a Deal?",
  description: "Book a free strategy session to talk through an apartment deal or a syndication you're considering.",
  label: "Book Investor Consultation →",
};

export const multifamilyGuide: AcademyGuide = {
  path: "/investors/multifamily",
  metaTitle: "Multifamily Investing in Houston: A Beginner's Guide",
  metaDescription:
    "How multifamily investing works in Houston: 2–4 units vs apartment buildings, how they're valued and financed, the numbers to check, Texas-specific risks and ways to invest.",
  h1: "How Does Multifamily Investing Work in Houston?",
  subheading: "From duplexes to apartment communities: how they're valued, financed and run",
  breadcrumbs: [
    { name: "Investors", path: "/investors" },
    { name: "Multifamily Investing", path: "/investors/multifamily" },
  ],
  datePublished: DATE,
  shortAnswer: [
    "Multifamily investing means owning buildings with more than one rental unit. Two to four units are financed and valued much like a house; five or more units are commercial property, valued by the income they produce and financed with commercial loans.",
    "You can invest by buying a small multifamily yourself, buying an apartment building with partners, or investing passively in a syndication run by an experienced operator.",
  ],
  sections: [
    {
      heading: "Small multifamily vs apartment buildings",
      table: {
        headers: ["", "2–4 units", "5+ units (apartments)"],
        rows: [
          ["Treated as", "Residential property", "Commercial property"],
          ["How value is set", "Mostly by comparable sales", "By net operating income ÷ cap rate"],
          ["Typical financing", "Residential loans, including owner-occupied options", "Commercial or agency multifamily loans"],
          ["Who runs it", "Often the owner or a small property manager", "Professional property management"],
        ],
      },
      paragraphs: [
        "If you'll live in one unit, a 2–4 unit property can be financed with owner-occupied loan programs, a strategy often called house hacking. Ask a lender which programs fit your situation.",
      ],
    },
    {
      heading: "How apartment buildings are valued",
      paragraphs: [
        "Larger multifamily is valued on income: value = net operating income (NOI) ÷ capitalization (cap) rate. NOI is the property's income after operating expenses, before the mortgage.",
        "That means raising NOI — through better management, renovations that support higher rents, or cutting waste — raises the value of the building. It also means a building is only worth what its real numbers support.",
      ],
    },
    {
      heading: "The numbers to check before you buy",
      bullets: [
        "Rent roll: every unit, its rent, lease dates and who lives there.",
        "Trailing 12-month operating statement (T-12): actual income and expenses, month by month.",
        "Occupancy: physical (units filled) and economic (rent actually collected).",
        "The use of each unit — long-term leases vs furnished short-term rentals change the income picture completely.",
        "Debt service coverage: whether NOI covers the loan payment with a cushion. See [DSCR loans](/investors/dscr-loans-texas).",
        "Capital needs: roofs, HVAC, plumbing, parking lots and deferred maintenance.",
      ],
    },
    {
      heading: "What's different in Texas",
      bullets: [
        "Property taxes are a large expense, and appraisal districts reassess after a sale. Underwrite taxes on the purchase price, not the seller's current bill.",
        "Texas is a non-disclosure state: sale prices aren't public record, so local market knowledge and broker data matter more for valuing deals.",
        "Insurance has risen sharply with hurricane and flood exposure along the Gulf Coast. Get a real quote before you commit.",
      ],
    },
    {
      heading: "Tax advantages",
      paragraphs: [
        "Residential rental buildings are depreciated over 27.5 years. A cost segregation study can accelerate part of that depreciation into the early years. If you invest with a partner or operator, ask whether they ran a cost segregation study and how the depreciation is passed through to you. Talk to a CPA who works with real estate investors.",
      ],
    },
    {
      heading: "Three ways to invest in multifamily",
      steps: [
        { title: "Buy a small multifamily yourself", body: "A duplex, triplex or fourplex — the closest step up from a single-family rental. See [how to start investing](/investors/beginner)." },
        { title: "Buy an apartment building with partners", body: "More capital, a commercial loan and professional management. Experience and a strong team matter more as the building gets bigger." },
        {
          title: "Invest passively",
          body: "Put money into a deal run by an experienced operator and let them manage it. See [passive investing](/investors/passive).",
        },
      ],
    },
  ],
  natalieTake: {
    heading: "The devil's in the details",
    paragraphs: [
      "I've seen apartment deals with solid operators go south on just one deal because they took their eye off the ball. They didn't do the detailed rent analysis and unit analysis, so they missed that units were set up as pre-furnished Airbnbs in a market that wasn't an Airbnb market — and they ended up with 20% vacancy they hadn't planned for.",
      "Inspect what you expect. And if you know you can't handle tenants or evictions yourself, invest in multifamily with a good, solid operator instead.",
    ],
    source: EP45,
  },
  faqs: [
    {
      question: "Is multifamily a good investment in Houston?",
      answer:
        "It can be, but it depends on the deal, not the asset class. Houston's job growth and population support rental demand, while property taxes and insurance are real costs that have to be underwritten carefully.",
    },
    {
      question: "How many units is multifamily?",
      answer:
        "Any building with two or more units. Two to four units are generally treated as residential property; five or more are commercial.",
    },
    {
      question: "Should I invest in multifamily or single-family rentals?",
      answer:
        "Single-family is simpler to buy, finance and sell, and it's where most investors start. Multifamily spreads vacancy risk across more units and can be managed more efficiently at scale, but it needs more capital, a stronger team and commercial-style underwriting.",
    },
    {
      question: "How are apartment buildings valued?",
      answer: "Mostly by income: net operating income divided by the market cap rate for similar properties.",
    },
    {
      question: "Can I invest in multifamily without buying a building?",
      answer:
        "Yes. Many people invest passively in multifamily syndications or funds. See [passive investing](/investors/passive) for how those work and what to check.",
    },
  ],
  related: [
    { label: "Passive investing", href: "/investors/passive", description: "Investing alongside an operator." },
    { label: "DSCR loans in Texas", href: "/investors/dscr-loans-texas", description: "How lenders measure income against debt." },
    { label: "How to analyze an investment property", href: "/blog/investing/analyze-investment-properties", description: "Cap rate, cash-on-cash and DSCR." },
    { label: "How to start investing", href: "/investors/beginner", description: "The fundamentals before your first deal." },
  ],
  sources: [
    { label: "IRS Publication 527: Residential rental property", url: "https://www.irs.gov/publications/p527" },
    { label: "Harris County tax blog: Non-disclosure states", url: "https://www.hctax.com/blog/non-disclosure-states-real-estate/" },
  ],
  disclaimer:
    "This guide is general education, not investment, tax or legal advice. Every deal is different; review it with your own CPA, attorney and lender.",
  showMeetup: true,
  cta: investorBooking,
};

export const passiveGuide: AcademyGuide = {
  path: "/investors/passive",
  metaTitle: "Passive Real Estate Investing: Syndications Explained",
  metaDescription:
    "How passive real estate investing works: syndications, limited partners and sponsors, how returns and fees are paid, accredited investor rules, and how to vet an operator before you invest.",
  h1: "What Is Passive Real Estate Investing?",
  subheading: "How syndications work, and how to vet an operator before you invest",
  breadcrumbs: [
    { name: "Investors", path: "/investors" },
    { name: "Passive Investing", path: "/investors/passive" },
  ],
  datePublished: DATE,
  shortAnswer: [
    "Passive real estate investing means putting money into a property or fund that someone else finds, buys and manages. The most common form is a syndication: an experienced sponsor pools money from investors to buy a large property, often an apartment community, and investors share in the cash flow and profits.",
    "You give up control, and your money is usually tied up for several years. That makes choosing the right operator the most important decision you'll make.",
  ],
  sections: [
    {
      heading: "How a real estate syndication works",
      table: {
        headers: ["Role", "What they do"],
        rows: [
          ["Sponsor (general partner, GP)", "Finds the deal, arranges the loan, runs the business plan and reports to investors."],
          ["Passive investors (limited partners, LPs)", "Provide most of the equity, have limited liability and no day-to-day role."],
          ["Property manager", "Leases units, collects rent and handles maintenance — sometimes affiliated with the sponsor."],
        ],
      },
      paragraphs: [
        "Investors typically earn returns three ways: cash flow distributions while the property is held, proceeds if it's refinanced, and profit when it's sold. Many deals pay investors a preferred return before the sponsor shares in profits, then split the rest. Sponsors also charge fees, such as acquisition and asset management fees — read exactly what they are.",
      ],
    },
    {
      heading: "Syndications are securities",
      paragraphs: [
        "Because investors put money into a deal someone else manages, a syndication is a securities offering, usually under SEC Regulation D, Rule 506.",
      ],
      bullets: [
        "Rule 506(b): the sponsor can't advertise publicly, and may accept up to 35 non-accredited but sophisticated investors alongside accredited ones.",
        "Rule 506(c): the sponsor can advertise, but every investor must be accredited and the sponsor must take reasonable steps to verify it.",
        "An individual is generally accredited with income over $200,000 ($300,000 with a spouse or partner) in each of the last two years, or net worth over $1 million excluding their primary residence. Certain licensed professionals (Series 7, 65 or 82) also qualify.",
      ],
    },
    {
      heading: "How to vet an operator",
      steps: [
        { title: "Track record", body: "How many deals have they taken full cycle — bought, run and sold — and how did investors actually do?" },
        { title: "Reputation on the street", body: "Ask lenders, brokers and other investors, not just online reviews. Local reputation is often where the real story is." },
        { title: "Underwriting", body: "Are the rent, expense, vacancy and exit assumptions conservative? Ask to see the rent roll and T-12 behind them." },
        { title: "Skin in the game", body: "Does the sponsor invest their own money alongside yours?" },
        { title: "The documents", body: "Have your attorney and CPA review the private placement memorandum (PPM) and operating agreement before you sign." },
        { title: "Communication", body: "How often do they report, and what did they tell investors when a deal went wrong?" },
      ],
    },
    {
      heading: "Other ways to invest passively",
      bullets: [
        "Real estate investment trusts (REITs), which trade like stocks and can be sold quickly.",
        "Private real estate funds that hold several properties.",
        "Private lending secured by real estate. See [private lending](/investors/private-lending).",
        "Owning rentals with a property manager handling the day-to-day — less passive, but you keep control. See [how to start investing](/investors/beginner).",
        "Investing retirement money through a self-directed IRA, which must follow strict IRS rules. Work with a custodian and CPA.",
      ],
    },
    {
      heading: "Taxes",
      paragraphs: [
        "Syndication investors usually receive a Schedule K-1 each year showing their share of income, losses and depreciation. Depreciation, including any accelerated through a cost segregation study, can offset reported income. Ask the sponsor how it's passed through, and review it with your CPA.",
      ],
    },
  ],
  natalieTake: {
    heading: "Let me review the docs first",
    paragraphs: [
      "A client came to me about to invest $100,000 with a group. He was already investing in multifamily and very diligent with his money. I told him: before you put your money with any syndicator or owner-operator, let me help you review the documents and tell you what their reputation is on the street — because there's the street reputation, there's the online reputation, and you don't always know what's going on underneath.",
      "When I reviewed his documents, my jaw hit the ground. There was no way he could move forward with that opportunity. Get a second set of experienced eyes on any deal before you wire money.",
    ],
    source: EP42,
  },
  faqs: [
    {
      question: "How does passive real estate investing work?",
      answer:
        "You invest money in a property or fund that an experienced operator buys and manages. You receive a share of the cash flow and profits, but you don't make day-to-day decisions.",
    },
    {
      question: "Do I need to be an accredited investor?",
      answer:
        "For many syndications, yes. Rule 506(c) deals accept only accredited investors; Rule 506(b) deals can accept a limited number of sophisticated non-accredited investors. REITs and some funds are open to everyone.",
    },
    {
      question: "How long is my money tied up in a syndication?",
      answer:
        "Usually several years, until the property is refinanced or sold. Most syndications don't let you withdraw early, so only invest money you won't need.",
    },
    {
      question: "What are the risks of passive real estate investing?",
      answer:
        "You can lose some or all of your investment if the business plan fails, the market turns, the loan comes due at a bad time, or the operator makes mistakes or acts dishonestly. You also have little control and limited ability to sell your share.",
    },
    {
      question: "Can I invest my IRA in real estate?",
      answer:
        "Yes, through a self-directed IRA, which can invest in property, syndications or private loans. The IRS rules on prohibited transactions are strict, so work with a self-directed IRA custodian and CPA.",
    },
  ],
  related: [
    { label: "Multifamily investing", href: "/investors/multifamily", description: "How apartment deals are valued and run." },
    { label: "Private lending", href: "/investors/private-lending", description: "Another way to invest without managing property." },
    { label: "How to start investing", href: "/investors/beginner", description: "Owning rentals directly." },
    { label: "Podcast: $100K investment without a coach", href: EP42.href, description: "The syndication story in full." },
  ],
  sources: [
    { label: "Nasdaq: Accredited investor definition and qualifications", url: "https://www.nasdaq.com/articles/accredited-investor-definition-qualifications-rules" },
    { label: "Carta: Rule 506(b) vs Rule 506(c)", url: "https://carta.com/learn/private-funds/regulations/regulation-d/506b-vs-506c/" },
    { label: "IRS Publication 527: Residential rental property", url: "https://www.irs.gov/publications/p527" },
  ],
  disclaimer:
    "This guide is general education, not investment, tax or legal advice, and not an offer to buy or sell any security. Private investments are risky and illiquid; review any offering with your own attorney, CPA and financial adviser.",
  showMeetup: true,
  cta: investorBooking,
};
