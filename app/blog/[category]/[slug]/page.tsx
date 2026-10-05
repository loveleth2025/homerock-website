import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { MarkdownBody } from "@/components/blog/MarkdownBody";
import { categoryLabels } from "@/lib/content/blog";
import { getAllBlogFilePosts, getBlogFilePost, bodyToMarkdown } from "@/lib/content/blogFiles";
import { buildMetadata } from "@/lib/seo/metadata";
import { articleSchema, jsonLdScriptProps } from "@/lib/seo/schema";
import { siteConfig } from "@/lib/data/navigation";

type Params = Promise<{ category: string; slug: string }>;

export function generateStaticParams() {
  return getAllBlogFilePosts().map((post) => ({ category: post.category, slug: post.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { category, slug } = await params;
  const post = getBlogFilePost(slug);

  if (!post || post.category !== category) {
    return buildMetadata({ title: "Article Not Found", description: "This article could not be found.", path: "/blog" });
  }

  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.category}/${post.slug}`,
    image: post.image,
  });
}

function formatDate(iso?: string) {
  if (!iso) return null;
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

export default async function ArticlePage({ params }: { params: Params }) {
  const { category, slug } = await params;
  const post = getBlogFilePost(slug);
  if (!post || post.category !== category) notFound();

  const label = categoryLabels[post.category as keyof typeof categoryLabels] ?? "Articles";
  const path = `/blog/${post.category}/${post.slug}`;
  const published = formatDate(post.date);

  return (
    <>
      {post.date && (
        <script
          {...jsonLdScriptProps(
            articleSchema({
              headline: post.title,
              description: post.excerpt,
              path,
              datePublished: post.date,
              image: post.image,
            }),
          )}
        />
      )}

      <BreadcrumbBar
        items={[
          { name: "Blog", path: "/blog" },
          { name: label, path: `/blog/${post.category}` },
          { name: post.title, path },
        ]}
      />

      <div
        className="w-full py-xl flex items-center justify-center relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0a1a33 0%, #0e6bc7 50%, #0e6bc7 100%)", minHeight: "24rem" }}
      >
        <Container>
          <div className="relative z-10 text-center text-white">
            <span className="inline-block mb-md px-md py-sm rounded-full text-sm font-semibold" style={{ backgroundColor: "#c9a227" }}>
              {label}
            </span>
            <h1 className="text-balance text-[clamp(2rem,1rem+4vw,3.5rem)] font-bold leading-[1.1]">{post.title}</h1>
            <p className="mt-md text-sm text-white/85">
              By{" "}
              <Link href="/about" className="font-semibold underline underline-offset-2">
                Natalie Pilkinton
              </Link>
              , REALTOR® &amp; Real Estate Investor
            </p>
          </div>
        </Container>
      </div>

      {post.image && (
        <div className="w-full py-lg">
          <Container>
            <Image
              src={post.image}
              alt={post.title}
              width={1200}
              height={630}
              className="max-w-[48rem] w-full h-auto rounded-lg mx-auto"
            />
          </Container>
        </div>
      )}

      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-3xl">
            <div className="lg:col-span-3">
              <div className="flex gap-lg text-sm text-gray-600 mb-2xl pb-lg border-b border-gray-200">
                {published && <time dateTime={post.date}>{published}</time>}
                <span>{post.readTime} min read</span>
              </div>

              <article className="mb-3xl">
                {post.excerpt && (
                  <p className="text-xl text-gray-700 leading-relaxed font-semibold mb-2xl italic border-l-4 border-blue pl-lg">
                    {post.excerpt}
                  </p>
                )}
                <MarkdownBody markdown={bodyToMarkdown(post.body)} />
              </article>

              <div className="pt-2xl border-t border-gray-200">
                <Link href={`/blog/${post.category}`} className="inline-flex items-center gap-sm font-semibold hover:underline" style={{ color: "#0e6bc7" }}>
                  ← Back to {label}
                </Link>
              </div>
            </div>

            <aside className="lg:col-span-1">
              <div className="rounded-lg p-lg mb-2xl text-white sticky top-lg" style={{ backgroundColor: "#0a1a33" }}>
                <div className="flex flex-col items-center text-center">
                  <Link href="/about" className="mb-md">
                    <Image
                      src={siteConfig.headshotUrl}
                      alt="Natalie Pilkinton"
                      width={96}
                      height={96}
                      className="w-24 h-24 rounded-full object-cover"
                    />
                  </Link>
                  <h3 className="text-lg font-bold mb-xs">
                    <Link href="/about" className="hover:underline">
                      Natalie Pilkinton
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-300 mb-md font-semibold">REALTOR® · Investor · Educator</p>
                  <p className="text-xs text-gray-400 mb-lg leading-relaxed">
                    20+ years helping buyers, sellers and investors across Houston, Spring and The Woodlands with {siteConfig.brand}.
                  </p>
                  <Link
                    href="/booking"
                    className="w-full px-lg py-sm rounded font-semibold transition-colors text-center"
                    style={{ backgroundColor: "#c9a227", color: "#0a1a33" }}
                  >
                    Book a Call
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  );
}
