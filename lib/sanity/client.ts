import {createClient} from 'next-sanity'

export const client = createClient({
  projectId: '7976atf0',
  dataset: 'production',
  apiVersion: '2025-01-01',
  useCdn: false,
})

export async function getArticles() {
  return client.fetch(`
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
}

export async function getArticleBySlug(slug: string) {
  return client.fetch(`
    *[_type == "article" && slug.current == $slug][0]
  `, {slug})
}