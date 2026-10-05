export type NavChild = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Natalie", href: "/about" },
  {
    label: "Home Buyers",
    href: "/buyers",
    children: [
      { label: "First-Time Buyers", href: "/buyers/first-time-buyers" },
      { label: "Credit", href: "/buyers/credit" },
      { label: "Financing", href: "/buyers/financing" },
      { label: "New Construction", href: "/buyers/new-construction" },
      { label: "Relocation", href: "/buyers/relocation" },
      { label: "Home Buying Process", href: "/buyers/process" },
      { label: "FAQ", href: "/buyers/faq" },
      { label: "Buyer Resources", href: "/buyers/resources" },
    ],
  },
  {
    label: "Home Sellers",
    href: "/sellers",
    children: [
      { label: "Selling Process", href: "/sellers/process" },
      { label: "Pricing", href: "/sellers/pricing" },
      { label: "Marketing", href: "/sellers/marketing" },
      { label: "Home Value", href: "/sellers/home-value" },
      { label: "Staging", href: "/sellers/staging" },
      { label: "FAQ", href: "/sellers/faq" },
    ],
  },
  {
    label: "Investors",
    href: "/investors",
    children: [
      { label: "Beginner Investing", href: "/investors/beginner" },
      { label: "Passive Investing", href: "/investors/passive" },
      { label: "Multifamily", href: "/investors/multifamily" },
      { label: "BRRRR", href: "/investors/brrrr" },
      { label: "Private Lending", href: "/investors/private-lending" },
      { label: "Case Studies", href: "/investors/case-studies" },
    ],
  },
  {
    label: "Realtors",
    href: "/realtors",
    children: [
      { label: "Join HomeRock Realty", href: "/realtors/join" },
      { label: "Agent Attraction", href: "/realtors/agent-attraction" },
      { label: "Coaching", href: "/realtors/coaching" },
      { label: "Training", href: "/realtors/training" },
    ],
  },
  {
    label: "Vendors",
    href: "/vendor-sponsorship",
  },
  {
    label: "Listings",
    href: "/listings",
  },
  {
    label: "Podcast",
    href: "/podcast",
  },
  {
    label: "Market Updates",
    href: "/market-updates",
  },
{
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "Free Guides", href: "/resources/guides" },
      { label: "Calculators", href: "/resources/calculators" },
      { label: "Downloads", href: "/resources/downloads" },
      { label: "Checklists", href: "/resources/checklists" },
      { label: "Templates", href: "/resources/templates" },
    ],
  },
];

export const bookingCta: NavChild = { label: "Book Strategy Session", href: "/booking" };

export const footerNav = {
  learning: {
    title: "Learning",
    links: [
      { label: "Home Buyers", href: "/buyers" },
      { label: "Home Sellers", href: "/sellers" },
      { label: "Investors", href: "/investors" },
      { label: "Realtors", href: "/realtors" },
      { label: "Featured Listings", href: "/listings" },
    ] as NavChild[],
  },
  resources: {
    title: "Resources",
    links: [
      { label: "About Natalie", href: "/about" },
      { label: "Book Strategy Session", href: "/booking" },
      { label: "Contact", href: "/contact" },
      { label: "Blog", href: "/blog" },
    ] as NavChild[],
  },
  company: {
    title: "Company",
    links: [
      { label: "Why HomeRock", href: "/about" },
      { label: "Join Our Team", href: "/realtors/join" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
    ] as NavChild[],
  },
  connect: {
    title: "Connect",
    links: [
      { label: "Facebook", href: "https://facebook.com/nataliepilkinton" },
      { label: "Instagram", href: "https://instagram.com/nataliepilkinton" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/nataliepilkinton1" },
      { label: "YouTube", href: "https://www.youtube.com/channel/UCuXN_TctvXKZFs2ImP_sCBA" },
      { label: "HAR.com Profile", href: "https://www.har.com/web/nataliepilkinton" },
    ] as NavChild[],
  },
};

export const siteConfig = {
  name: "Natalie Pilkinton",
  brand: "HomeRock Realty",
  logoUrl:
    "https://assets.cdn.filesafe.space/p6coQEMK9WucfxjPnduV/media/6a58bdddbaf5f6da40993769.jpg",
  logoAlt: "HomeRock Realty Logo",
  faviconUrl:
    "https://assets.cdn.filesafe.space/p6coQEMK9WucfxjPnduV/media/69bd835a9d53bf7545b5be81.png",
  headshotUrl:
    "https://assets.cdn.filesafe.space/p6coQEMK9WucfxjPnduV/media/6a58be7f524a3ec4c61853f3.png",
  phone: "(832) 863-3468",
  phoneHref: "tel:+18328633468",
  email: "natalie@nataliepilkinton.com",
  /** Natalie's business mailing address — the canonical NAP for the site, schema and profiles. */
  address: {
    line1: "HomeRock Realty",
    line2: "6046 FM 2920, Ste 326",
    line3: "Spring, TX 77379",
    street: "6046 FM 2920, Ste 326",
    city: "Spring",
    region: "TX",
    postalCode: "77379",
    country: "US",
  },
  /** TREC sales agent license. */
  licenseNumber: "744998",
  yearsExperience: "20+",
  /** Sponsoring brokerage (required brokerage disclosures). */
  brokerage: {
    name: "HomeRock Realty",
    url: "https://www.homerockrealty.com",
    street: "24624 Interstate 45 N, Suite 120",
    city: "Spring",
    region: "TX",
    postalCode: "77386",
    iabsUrl: "https://dtzulyujzhqiu.cloudfront.net/newhomeprogramsllc11526/compliance/tx/entity/11526_3_iabs.pdf",
    consumerProtectionUrl: "https://www.trec.texas.gov/sites/default/files/pdf-forms/CN%201-5.pdf",
  },
  /** Markets Natalie serves, used in schema areaServed. */
  areasServed: ["Spring", "Houston", "The Woodlands", "Tomball", "Conroe", "Cypress", "Magnolia", "Montgomery"],
  bookingUrl:
    "https://calendly.com/nataliepilkinton/30min",
  /** Natalie's official HAR member profile — the real, MLS-backed source for her current listings. */
  harProfileUrl: "https://www.har.com/web/nataliepilkinton",
  social: {
    facebook: "https://facebook.com/nataliepilkinton",
    instagram: "https://instagram.com/nataliepilkinton",
    linkedin: "https://www.linkedin.com/in/nataliepilkinton1",
    youtube: "https://www.youtube.com/channel/UCuXN_TctvXKZFs2ImP_sCBA",
  },
  siteUrl: "https://www.nataliepilkinton.com",
};
