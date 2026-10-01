import {createClient} from 'next-sanity'

export const client = createClient({
  projectId: '7976atf0',
  dataset: 'production',
  apiVersion: '2025-01-01',
  useCdn: false,
})

export async function getArticles() {
  try {
    return await client.fetch(`
      *[_type == "article"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        category,
        excerpt,
        content,
        publishedAt,
        readTime
      }
    `)
  } catch (error) {
    console.error('Failed to fetch articles from Sanity:', error)
    return []
  }
}

export async function getArticleBySlug(slug: string) {
  try {
    return await client.fetch(`
      *[_type == "article" && slug.current == $slug][0] {
        _id,
        title,
        slug,
        category,
        excerpt,
        content,
        publishedAt,
        readTime
      }
    `, {slug})
  } catch (error) {
    console.error(`Failed to fetch article with slug "${slug}" from Sanity:`, error)
    return null
  }
}