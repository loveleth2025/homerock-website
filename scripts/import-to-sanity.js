require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
  apiVersion: '2021-10-21'
});

const articles = [
  { title: "Houston Market Trends", category: "market-news", slug: "houston-market-trends", date: "2026-08-04", readTime: "7 min", excerpt: "Latest Houston real estate market analysis." },
  { title: "5 Mistakes First-Time Buyers Make", category: "buying", slug: "5-mistakes-first-time-buyers", date: "2026-07-28", readTime: "10 min", excerpt: "Avoid costly first-time buyer mistakes." },
  { title: "Home Staging Secrets", category: "selling", slug: "home-staging-secrets", date: "2026-07-21", readTime: "8 min", excerpt: "Professional staging techniques." },
  { title: "How to Analyze Investment Properties", category: "investing", slug: "analyze-investment-properties", date: "2026-07-14", readTime: "11 min", excerpt: "Key metrics for evaluating investments." },
  { title: "Best Investment Neighborhoods", category: "investing", slug: "best-investment-neighborhoods", date: "2026-07-07", readTime: "9 min", excerpt: "Top neighborhoods for returns." },
  { title: "Build a 6-Figure Real Estate Career", category: "realtor-growth", slug: "6-figure-real-estate-career", date: "2026-06-30", readTime: "12 min", excerpt: "Scaling your business." },
  { title: "Spring TX Neighborhoods", category: "buying", slug: "spring-tx-neighborhoods", date: "2026-06-25", readTime: "8 min", excerpt: "Complete Spring guide." },
  { title: "The Woodlands Houston", category: "buying", slug: "the-woodlands-houston", date: "2026-06-20", readTime: "7 min", excerpt: "Woodlands community." },
  { title: "Katy Texas Real Estate", category: "buying", slug: "katy-texas-real-estate", date: "2026-06-18", readTime: "6 min", excerpt: "Katy market overview." },
  { title: "Sugar Land Luxury Real Estate", category: "buying", slug: "sugar-land-luxury-real-estate", date: "2026-06-15", readTime: "7 min", excerpt: "Luxury homes." },
  { title: "Pearland Texas Growth", category: "buying", slug: "pearland-texas-growth", date: "2026-06-12", readTime: "7 min", excerpt: "Pearland opportunity." },
  { title: "Houston Home Buying Process", category: "buying", slug: "houston-buying-process", date: "2026-06-10", readTime: "8 min", excerpt: "Step-by-step guide." },
  { title: "Home Seller's Checklist", category: "selling", slug: "houston-sale-checklist", date: "2026-06-08", readTime: "7 min", excerpt: "Selling checklist." },
  { title: "Rental Property Management", category: "investing", slug: "rental-property-management", date: "2026-06-05", readTime: "7 min", excerpt: "Property management." },
  { title: "Houston Property Taxes", category: "market-news", slug: "houston-property-taxes", date: "2026-06-03", readTime: "6 min", excerpt: "Understanding taxes." },
  { title: "School Districts & Home Values", category: "buying", slug: "school-districts-home-values", date: "2026-05-30", readTime: "6 min", excerpt: "Schools impact." },
  { title: "Houston 2026 Forecast", category: "market-news", slug: "houston-2026-forecast", date: "2026-05-28", readTime: "7 min", excerpt: "2026 predictions." },
  { title: "Houston Home Loan Pre-Approval", category: "buying", slug: "houston-home-loan-preapproval", date: "2026-05-25", readTime: "6 min", excerpt: "Getting pre-approved." },
  { title: "Houston Home Inspection", category: "selling", slug: "houston-home-inspection", date: "2026-05-23", readTime: "6 min", excerpt: "Inspection guide." },
  { title: "Houston Landlord Tenant Laws", category: "investing", slug: "houston-landlord-tenant-laws", date: "2026-05-20", readTime: "7 min", excerpt: "Tenant laws." },
  { title: "Cypress Texas Growth", category: "buying", slug: "cypress-texas-growth", date: "2026-05-18", readTime: "6 min", excerpt: "Cypress trends." },
  { title: "Houston vs National Real Estate", category: "market-news", slug: "houston-vs-national-real-estate", date: "2026-05-16", readTime: "6 min", excerpt: "Houston comparison." }
];

async function importArticles() {
  console.log('Starting import without content field...');
  let success = 0;
  
  for (const article of articles) {
    try {
      await client.create({
        _type: 'article',
        title: article.title,
        slug: { current: article.slug },
        category: article.category,
        excerpt: article.excerpt,
        publishedAt: article.date,
        readTime: article.readTime
      });
      console.log(`✓ ${article.title}`);
      success++;
    } catch (err) {
      console.error(`✗ ${article.title}: ${err.message}`);
    }
  }
  console.log(`\n✓ Imported ${success}/22 articles`);
}

importArticles().catch(console.error);