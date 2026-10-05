import { siteConfig } from "@/lib/data/navigation";
import type { Listing } from "@/lib/listings/types";

/** JSON-LD builders. Render via <script type="application/ld+json"> in each page. */

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.siteUrl}${item.path}`,
    })),
  };
}

/** Stable @id values so every page's JSON-LD points at the same three entities. */
export const schemaIds = {
  person: `${siteConfig.siteUrl}/#natalie`,
  agent: `${siteConfig.siteUrl}/#agent`,
  brokerage: `${siteConfig.siteUrl}/#homerock`,
  website: `${siteConfig.siteUrl}/#website`,
};

const sameAs = [
  siteConfig.harProfileUrl,
  siteConfig.social.linkedin,
  siteConfig.social.youtube,
  siteConfig.social.facebook,
  siteConfig.social.instagram,
];

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: siteConfig.address.street,
  addressLocality: siteConfig.address.city,
  addressRegion: siteConfig.address.region,
  postalCode: siteConfig.address.postalCode,
  addressCountry: siteConfig.address.country,
};

/** Natalie as a person: the entity her content, profiles and expertise attach to. */
export function personSchema() {
  return {
    "@type": "Person",
    "@id": schemaIds.person,
    name: siteConfig.name,
    url: `${siteConfig.siteUrl}/about`,
    image: siteConfig.headshotUrl,
    jobTitle: "REALTOR®, Real Estate Investor & Educator",
    description: `Houston-area REALTOR®, real estate investor and educator with ${siteConfig.yearsExperience} years of experience helping buyers, sellers and investors in Spring, Houston and The Woodlands.`,
    worksFor: { "@id": schemaIds.brokerage },
    address: postalAddress,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    knowsAbout: [
      "Residential real estate",
      "First-time home buyers",
      "New construction homes",
      "Home selling",
      "Real estate investing",
      "Multifamily investing",
      "Passive real estate investing",
      "Real estate education",
      "Realtor coaching",
    ],
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "license",
      name: `Texas Real Estate Sales Agent License #${siteConfig.licenseNumber}`,
      recognizedBy: { "@type": "GovernmentOrganization", name: "Texas Real Estate Commission", url: "https://www.trec.texas.gov" },
    },
    sameAs,
  };
}

/** Natalie's real estate practice (the local-business entity). */
export function localBusinessSchema() {
  return {
    "@type": "RealEstateAgent",
    "@id": schemaIds.agent,
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    image: siteConfig.headshotUrl,
    logo: siteConfig.logoUrl,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: postalAddress,
    areaServed: siteConfig.areasServed.map((city) => ({ "@type": "City", name: `${city}, TX` })),
    founder: { "@id": schemaIds.person },
    parentOrganization: { "@id": schemaIds.brokerage },
    sameAs,
  };
}

/** HomeRock Realty, the sponsoring brokerage. */
export function brokerageSchema() {
  return {
    "@type": "Organization",
    "@id": schemaIds.brokerage,
    name: siteConfig.brokerage.name,
    url: siteConfig.brokerage.url,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.brokerage.street,
      addressLocality: siteConfig.brokerage.city,
      addressRegion: siteConfig.brokerage.region,
      postalCode: siteConfig.brokerage.postalCode,
      addressCountry: "US",
    },
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": schemaIds.website,
    name: `${siteConfig.name} | ${siteConfig.brand}`,
    url: siteConfig.siteUrl,
    publisher: { "@id": schemaIds.person },
  };
}

/** The sitewide entity graph, emitted once in the root layout. */
export function siteGraphSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [personSchema(), localBusinessSchema(), brokerageSchema(), websiteSchema()],
  };
}

export function articleSchema(input: {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.headline,
    description: input.description,
    url: `${siteConfig.siteUrl}${input.path}`,
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    image: input.image ?? siteConfig.headshotUrl,
    author: {
      "@type": "Person",
      "@id": schemaIds.person,
      name: siteConfig.name,
      url: `${siteConfig.siteUrl}/about`,
    },
    publisher: { "@id": schemaIds.person },
  };
}

export function listingSchema(listing: Listing) {
  const { address } = listing;
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${address.street}, ${address.city}, ${address.state}`,
    description: listing.shortDescription,
    image: listing.images.map((image) => `${siteConfig.siteUrl}${image.url}`),
    offers: {
      "@type": "Offer",
      price: listing.price,
      priceCurrency: "USD",
      availability:
        listing.status === "Active"
          ? "https://schema.org/InStock"
          : "https://schema.org/OutOfStock",
      url: listing.harMlsUrl,
    },
    additionalProperty: [
      { "@type": "PropertyValue", name: "Bedrooms", value: listing.beds },
      { "@type": "PropertyValue", name: "Bathrooms", value: listing.baths },
      { "@type": "PropertyValue", name: "Square Footage", value: listing.sqft },
    ],
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function jsonLdScriptProps(schema: object) {
  return {
    type: "application/ld+json",
    dangerouslySetInnerHTML: { __html: JSON.stringify(schema) },
  };
}