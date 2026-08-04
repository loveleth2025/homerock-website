export const blogCategories = ["buying", "selling", "investing", "realtor-growth", "market-news"] as const;
export type BlogCategory = (typeof blogCategories)[number];

export const categoryLabels: Record<BlogCategory, string> = {
  buying: "Home Buying",
  selling: "Home Selling",
  investing: "Investing",
  "realtor-growth": "Realtor Growth",
  "market-news": "Market News",
};

export interface BlogArticle {
  id: string;
  title: string;
  category: BlogCategory;
  slug: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string;
}

export const blogArticles: BlogArticle[] = [
  {
    id: "1",
    title: "Houston Real Estate Market Trends",
    category: "market-news",
    slug: "houston-market-trends",
    date: "August 4, 2026",
    readTime: "7 min",
    excerpt: "The Houston real estate market shows resilience.",
    content: "Houston market resilience with steady appreciation. Average prices up 3-5% YoY. Inventory balanced at 3.5-4 months. Buyer activity strongest in $250K-$450K range. Key metrics: $380K average home price, 28-35 days on market, 6.5% mortgage rates, 3-5% appreciation. Houston benefits from population growth, corporate relocations, and affordability."
  },
  {
    id: "2",
    title: "5 Critical Mistakes First-Time Home Buyers Make",
    category: "buying",
    slug: "5-mistakes-first-time-buyers",
    date: "July 28, 2026",
    readTime: "10 min",
    excerpt: "Avoid these five costly mistakes.",
    content: "Mistake #1: Not Getting Pre-Approved. Mistake #2: Making Large Purchases. Mistake #3: Skipping Home Inspection. Mistake #4: Making Emotional Offers. Mistake #5: Ignoring Closing Costs."
  },
  {
    id: "3",
    title: "Professional Home Staging Secrets",
    category: "selling",
    slug: "home-staging-secrets",
    date: "July 21, 2026",
    readTime: "8 min",
    excerpt: "Staged homes sell faster for more money.",
    content: "Staging helps buyers envision themselves. Curb Appeal, Declutter, Lighting & Cleanliness, Space Perception. ROI typically 300-500%."
  },
  {
    id: "4",
    title: "How to Analyze Investment Properties",
    category: "investing",
    slug: "analyze-investment-properties",
    date: "July 14, 2026",
    readTime: "11 min",
    excerpt: "Master the key metrics.",
    content: "Cap Rate, Cash-on-Cash Return, DSCR, Price-to-Rent Ratio, 70% Rule. All formulas explained."
  },
  {
    id: "5",
    title: "Best Houston Investment Neighborhoods",
    category: "investing",
    slug: "best-investment-neighborhoods",
    date: "July 7, 2026",
    readTime: "9 min",
    excerpt: "Where smart investors are buying.",
    content: "Spring/Woodlands, Cy-Fair/Katy, East Houston, Sugar Land, Pearland. Each with pricing and cap rates."
  },
  {
    id: "6",
    title: "Building a 6-Figure Real Estate Career",
    category: "realtor-growth",
    slug: "6-figure-real-estate-career",
    date: "June 30, 2026",
    readTime: "12 min",
    excerpt: "Proven systems to scale.",
    content: "Lead Generation, Conversion, Service, Optimization, Authority building."
  },
  {
    id: "7",
    title: "Best Neighborhoods in Spring, TX",
    category: "buying",
    slug: "spring-tx-neighborhoods",
    date: "June 25, 2026",
    readTime: "8 min",
    excerpt: "One of Houston's most desirable suburbs.",
    content: "Spring offers top-rated schools, $250K-$500K homes, 3-5% appreciation."
  },
  {
    id: "8",
    title: "The Woodlands: Luxury Homes",
    category: "buying",
    slug: "the-woodlands-houston",
    date: "June 20, 2026",
    readTime: "7 min",
    excerpt: "Premier master-planned community.",
    content: "28,000 acres, $300K-$1M+ homes, 5.5-6.5% cap rates, Woodlands ISD."
  },
  {
    id: "9",
    title: "Katy, Texas Real Estate Growth",
    category: "buying",
    slug: "katy-texas-real-estate",
    date: "June 18, 2026",
    readTime: "6 min",
    excerpt: "Fastest-growing Texas city.",
    content: "Katy: $280K-$450K homes, 4-6% appreciation, excellent Katy ISD schools."
  },
  {
    id: "10",
    title: "Sugar Land: Luxury Fort Bend",
    category: "buying",
    slug: "sugar-land-luxury-real-estate",
    date: "June 15, 2026",
    readTime: "7 min",
    excerpt: "Most affluent Houston suburb.",
    content: "$400K-$1.5M+ homes, Fort Bend ISD top 20 nationwide."
  },
  {
    id: "11",
    title: "Pearland: Fastest Growing",
    category: "buying",
    slug: "pearland-texas-growth",
    date: "June 12, 2026",
    readTime: "7 min",
    excerpt: "America's fastest-growing community.",
    content: "100,000+ residents, $300K-$550K homes, 4-5% appreciation."
  },
  {
    id: "12",
    title: "Houston Home Buying Process",
    category: "buying",
    slug: "houston-buying-process",
    date: "June 10, 2026",
    readTime: "8 min",
    excerpt: "Step-by-step guide.",
    content: "9 steps: Pre-Approval, Agent, Search, Offer, Inspection, Walkthrough, Underwriting, Closing, Keys."
  },
  {
    id: "13",
    title: "Houston Home Sale Checklist",
    category: "selling",
    slug: "houston-sale-checklist",
    date: "June 8, 2026",
    readTime: "7 min",
    excerpt: "Strategic checklist to sell.",
    content: "Pre-Listing, Pricing, Staging, Marketing, Inspection Ready, Negotiation, Closing."
  },
  {
    id: "14",
    title: "Rental Property Management",
    category: "investing",
    slug: "rental-property-management",
    date: "June 5, 2026",
    readTime: "7 min",
    excerpt: "Maximize profits, minimize headaches.",
    content: "Tenant Screening, Lease Enforcement, Rent Collection, Maintenance, Communication, Financial Management."
  },
  {
    id: "15",
    title: "Houston Real Estate Taxes",
    category: "market-news",
    slug: "houston-property-taxes",
    date: "June 3, 2026",
    readTime: "6 min",
    excerpt: "Understanding tax impacts.",
    content: "Harris County 1.8% annually. Exemptions, protests, investor strategies."
  },
  {
    id: "16",
    title: "School Districts & Home Values",
    category: "buying",
    slug: "school-districts-home-values",
    date: "May 30, 2026",
    readTime: "6 min",
    excerpt: "School quality affects values.",
    content: "Top districts command 10-20% premiums. Spring ISD, Katy ISD, Fort Bend ISD."
  },
  {
    id: "17",
    title: "2026 Houston Real Estate Forecast",
    category: "market-news",
    slug: "houston-2026-forecast",
    date: "May 28, 2026",
    readTime: "7 min",
    excerpt: "Positioned for growth.",
    content: "Growth drivers, predictions, balanced market, investor opportunities."
  },
  {
    id: "18",
    title: "Getting Pre-Approved Houston",
    category: "buying",
    slug: "houston-home-loan-preapproval",
    date: "May 25, 2026",
    readTime: "6 min",
    excerpt: "Your first step.",
    content: "Process, required docs, credit check, pre-approval letter, next steps."
  },
  {
    id: "19",
    title: "Houston Home Inspection Guide",
    category: "selling",
    slug: "houston-home-inspection",
    date: "May 23, 2026",
    readTime: "6 min",
    excerpt: "Understanding inspections.",
    content: "Timeline, what inspectors look for, common findings, negotiation."
  },
  {
    id: "20",
    title: "Houston Landlord Tenant Laws",
    category: "investing",
    slug: "houston-landlord-tenant-laws",
    date: "May 20, 2026",
    readTime: "7 min",
    excerpt: "Understanding laws.",
    content: "Critical laws, deposits, eviction process, fair housing, best practices."
  },
  {
    id: "21",
    title: "Cypress Texas Growth Corridor",
    category: "buying",
    slug: "cypress-texas-growth",
    date: "May 18, 2026",
    readTime: "6 min",
    excerpt: "Western growth corridor.",
    content: "Growth drivers, new communities, schools, investment potential."
  },
  {
    id: "22",
    title: "Why Houston Beats National Average",
    category: "market-news",
    slug: "houston-vs-national-real-estate",
    date: "May 16, 2026",
    readTime: "6 min",
    excerpt: "Best real estate market.",
    content: "Affordability, appreciation, rental income, job diversity, wealth building potential."
  }
];