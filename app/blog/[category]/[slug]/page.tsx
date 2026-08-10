import { getArticleBySlug } from '@/lib/blog' 
import Link from 'next/link' 
 
export default async function ArticlePage({ params }) { 
  const article = await getArticleBySlug(params.slug) 
  if (!article) return <div>Article not found</div> 
  return ( 
    <div className="max-w-3xl mx-auto px-6 py-12"> 
      <article> 
        <h1>{article.title}</h1> 
        <div className="whitespace-pre-wrap">{article.content}</div> 
      </article> 
    </div> 
  ) 
}  dir app\blog\[category]\[slug]\page.tsx
