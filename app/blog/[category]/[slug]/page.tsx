import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { blogArticles, categoryLabels } from "@/lib/content/blog";
import { buildMetadata } from "@/lib/seo/metadata";

export function generateStaticParams() {
  return blogArticles.map((article) => ({ category: article.category, slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}): Promise<Metadata> {
  const { category, slug } = await params;
  const article = blogArticles.find((item) => item.category === category && item.slug === slug);
  if (!article) return buildMetadata({ title: "Article Not Found", description: "", path: "/blog" });
  return buildMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/blog/${category}/${slug}`,
  });
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  const article = blogArticles.find((item) => item.category === category && item.slug === slug);
  
  if (!article) notFound();

  const relatedArticles = blogArticles
    .filter((a) => a.category === category && a.slug !== slug)
    .slice(0, 3);

  return (
    <>
      <BreadcrumbBar 
        items={[
          { name: "Blog", path: "/blog" },
          { name: categoryLabels[article.category], path: `/blog/${article.category}` },
          { name: article.title, path: `/blog/${article.category}/${article.slug}` },
        ]} 
      />

      <div 
        className="w-full py-xl bg-gradient-to-r from-navy via-blue to-blue-600 flex items-center justify-center relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, #0a1a33 0%, #0e6bc7 50%, #0e6bc7 100%)`,
          minHeight: '24rem',
        }}
      >
        <Container>
          <div className="relative z-10 text-center text-white">
            <span className="inline-block mb-md px-md py-sm rounded-full text-sm font-semibold" style={{ backgroundColor: '#c9a227' }}>
              {categoryLabels[article.category]}
            </span>
            <h1 className="text-balance text-[clamp(2rem,1rem+4vw,3.5rem)] font-bold leading-[1.1]">
              {article.title}
            </h1>
          </div>
        </Container>
      </div>

      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-3xl">
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-2xl pb-lg border-b border-gray-200">
                <div className="flex gap-lg text-sm text-gray-600">
                  <span>📅 {article.date}</span>
                  <span>⏱️ {article.readTime} read</span>
                </div>
              </div>

              <article className="mb-3xl">
                <p className="text-xl text-gray-700 leading-relaxed font-semibold mb-2xl italic border-l-4 border-blue pl-lg">
                  {article.excerpt}
                </p>
                
                <div className="space-y-lg">
                  {article.content.map((section, sectionIdx) => (
                    <div key={sectionIdx}>
                      {section.heading && (
                        <h3 className="text-2xl font-bold mt-2xl mb-md" style={{ color: '#0a1a33' }}>
                          {section.heading}
                        </h3>
                      )}
                      <div className="space-y-md">
                        {section.paragraphs.map((paragraph, paraIdx) => (
                          <p key={`${sectionIdx}-${paraIdx}`} className="text-base text-gray-700 leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </article>

              <div className="pt-2xl border-t border-gray-200">
                <Link 
                  href={`/blog/${category}`}
                  className="inline-flex items-center gap-sm font-semibold transition-colors hover:underline"
                  style={{ color: '#0e6bc7' }}
                >
                  ← Back to {categoryLabels[article.category]}
                </Link>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div 
                className="rounded-lg p-lg mb-2xl text-white sticky top-lg"
                style={{ backgroundColor: '#0a1a33' }}
              >
                <div className="flex flex-col items-center text-center">
                  <div 
                    className="w-24 h-24 rounded-full mb-md flex items-center justify-center text-4xl font-bold"
                    style={{ backgroundColor: '#c9a227' }}