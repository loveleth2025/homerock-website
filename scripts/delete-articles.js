require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
  apiVersion: '2021-10-21'
});

async function deleteArticles() {
  console.log('Fetching all articles...');
  
  const articles = await client.fetch('*[_type == "article"]');
  console.log(`Found ${articles.length} articles to delete`);
  
  for (const article of articles) {
    try {
      await client.delete(article._id);
      console.log(`✓ Deleted: ${article.title}`);
    } catch (err) {
      console.error(`✗ Failed: ${article._id}`);
    }
  }
  
  console.log('All articles deleted!');
}

deleteArticles().catch(console.error);