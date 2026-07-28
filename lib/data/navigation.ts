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
      { label: "LinkedIn", href: "https://linkedin.com/in/nataliepilkinton" },
      { label: "YouTube", href: "https://youtube.com/@nataliepilkinton" },
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
  phone: "(123) 456-7890",
  phoneHref: "tel:+1234567890",
  email: "natalie@homerockrealty.com",
  address: {
    line1: "HomeRock Realty",
    line2: "Houston, TX",
    line3: "USA",
  },
  bookingUrl:
    "https://outlook.office.com/bookwithme/user/f39b29ca72d4472699897db031f61fd7@homerockrealty.com/meetingtype/OLdPZ9Q4HUKXNbgzgjnasg2?anonymous&ismsaljsauthenabled&ep=mlink",
  social: {
    facebook: "https://facebook.com/nataliepilkinton",
    instagram: "https://instagram.com/nataliepilkinton",
    linkedin: "https://linkedin.com/in/nataliepilkinton",
    youtube: "https://youtube.com/@nataliepilkinton",
  },
  siteUrl: "https://www.homerockrealty.com",
};
