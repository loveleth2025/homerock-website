import Link from 'next/link'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { categoryLabels } from '@/lib/content/blog'
import { buildMetadata } from '@/lib/seo/metadata'
import type { Metadata } from 'next'
import { getArticleBySlug } from '@/lib/sanity/client'

export async function generateMetadata({ params }: { params: Promise<{ category: string; slug: string }> }): Promise<Metadata> {
  const { category, slug } = await params
  const article = await getArticleBySlug(slug)

  if (!article) {
    return buildMetadata({
      title: 'Article Not Found',
      description: 'This article could not be found.',
      path: `/blog/${category}/${slug}`,
    })
  }

  return buildMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/blog/${category}/${slug}`,
    image: article.image,
  })
}

export default async function ArticlePage({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const { category, slug } = await params
  const article = await getArticleBySlug(slug)

  if (!article) {
    return <div className="p-8">Article not found</div>
  }

  const content = article.content
  const structuredContent = Array.isArray(content) && content[0]?.paragraphs ? content : null
  return (
    <>
      <div className="w-full py-xl flex items-center justify-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a1a33 0%, #0e6bc7 50%, #0e6bc7 100%)', minHeight: '24rem' }}>
        <Container>
          <div className="relative z-10 text-center text-white">
            <span className="inline-block mb-md px-md py-sm rounded-full text-sm font-semibold" style={{ backgroundColor: '#c9a227' }}>
              {categoryLabels[category as keyof typeof categoryLabels]}
            </span>
            <h1 className="text-balance text-[clamp(2rem,1rem+4vw,3.5rem)] font-bold leading-[1.1]">{article.title}</h1>
          </div>
        </Container>
      </div>
      {article.image && (
        <div className="w-full py-lg">
          <Container>
            <Image
              src={article.image}
              alt={article.title}
              width={1200}
              height={630}
              className="max-w-[48rem] w-full h-auto rounded-lg"
            />
          </Container>
        </div>
      )}
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-3xl">
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-2xl pb-lg border-b border-gray-200">
                <div className="flex gap-lg text-sm text-gray-600">
                  <span>📅 {new Date(article.publishedAt).toLocaleDateString()}</span>
                  <span>⏱️ {article.readTime} read</span>
                </div>
              </div>
              <article className="mb-3xl">
                <p className="text-xl text-gray-700 leading-relaxed font-semibold mb-2xl italic border-l-4 border-blue pl-lg">{article.excerpt}</p>
                <div className="text-gray-700 leading-relaxed [&_h1]:mb-lg [&_h1]:text-3xl [&_h1]:font-bold [&_h2]:mb-md [&_h2]:mt-xl [&_h2]:text-2xl [&_h2]:font-bold [&_h3]:mb-sm [&_h3]:mt-lg [&_h3]:text-xl [&_h3]:font-bold [&_p]:mb-md [&_ul]:mb-md [&_ul]:list-disc [&_ul]:pl-xl [&_blockquote]:my-lg [&_blockquote]:border-l-4 [&_blockquote]:border-gold [&_blockquote]:pl-lg [&_blockquote]:italic">
                  {Array.isArray(content) && !structuredContent ? (
                    <PortableText value={content} />
                  ) : structuredContent ? (
                    structuredContent.map((section: { _key?: string; heading?: string; paragraphs?: string[] }) => (
                      <div key={section._key ?? section.heading}>
                        {section.heading && <h2>{section.heading}</h2>}
                        {section.paragraphs?.map((paragraph: string) => <p key={paragraph}>{paragraph}</p>)}
                      </div>
                    ))
                  ) : null}
                </div>
              </article>
              <div className="pt-2xl border-t border-gray-200">
                <Link href={`/blog/${category}`} className="inline-flex items-center gap-sm font-semibold transition-colors hover:underline" style={{ color: '#0e6bc7' }}>← Back to {categoryLabels[category as keyof typeof categoryLabels]}</Link>
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="rounded-lg p-lg mb-2xl text-white sticky top-lg" style={{ backgroundColor: '#0a1a33' }}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full mb-md flex items-center justify-center text-4xl font-bold" style={{ backgroundColor: '#c9a227' }}>NP</div>
                  <h3 className="text-lg font-bold mb-sm">Natalie Pilkinton</h3>
                  <p className="text-sm text-gray-300 mb-md font-semibold">REALTOR®</p>
                  <p className="text-xs text-gray-400 mb-lg leading-relaxed">Helping buyers, sellers, and investors achieve their real estate goals in Houston.</p>
                  <Link href="https://outlook.office.com/bookwithme/user/f39b29ca72d4472699897db031f61fd7@homerockrealty.com/meetingtype/OLdPZ9Q4HUKXNbgzgjnasg2" className="w-full px-lg py-sm rounded font-semibold transition-colors text-center" style={{ backgroundColor: '#c9a227', color: '#0a1a33' }}>Book a Call</Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}