import {createClient} from '@sanity/client'
import {blogArticles} from '../lib/content/blog.ts'

const client = createClient({
  projectId: '7976atf0',
  dataset: 'production',
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN,
})

async function importArticles() {
  console.log('Starting import...')
  
  for (const article of blogArticles) {
    const doc = {
      _type: 'article',
      title: article.title,
      slug: {_type: 'slug', current: article.slug},
      category: article.category,
      excerpt: article.excerpt,
      content: article.content,
      publishedAt: new Date(article.date).toISOString(),
      readTime: article.readTime,
    }
    
    try {
      await client.create(doc)
      console.log(`✓ Imported: ${article.title}`)
    } catch (err) {
      console.error(`✗ Failed: ${article.title}`, err)
    }
  }
  
  console.log('Import complete!')
}

importArticles()
