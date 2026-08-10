import Link from 'next/link'

export default async function ArticlePage({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const { slug } = await params
  
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/blog/${slug}`, {
    cache: 'no-store'
  })

  if (!res.ok) {
    return <div>Article not found</div>
  }

  const article = await res.json()

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <Link href="/blog" className="text-blue-600 hover:underline mb-6 inline-block">
        ← Back to Blog
      </Link>

      <article>
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
          <div className="flex gap-4 text-gray-600 text-sm">
            <span>{article.publishedAt}</span>
            <span>{article.readTime} min read</span>
          </div>
        </div>

        <div className="whitespace-pre-wrap text-gray-800">
          {article.content}
        </div>
      </article>
    </div>
  )
}