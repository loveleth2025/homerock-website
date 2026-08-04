import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { marketUpdates } from "@/lib/content/market-updates";
import { buildMetadata } from "@/lib/seo/metadata";
import {
  StatsGrid,
  Pullquote,
  NeighborhoodSpotlight,
  BuyerSellerCompare,
  Takeaways,
} from "@/components/blog/BlogBlocks";

export function generateStaticParams() {
  return marketUpdates.map((update) => ({ slug: update.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const update = marketUpdates.find((item) => item.slug === slug);
  if (!update) return buildMetadata({ title: "Market Update Not Found", description: "", path: "/market-updates" });
  return buildMetadata({ title: update.title, description: update.summary, path: `/market-updates/${update.slug}` });
}

export default async function MarketUpdatePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const update = marketUpdates.find((item) => item.slug === slug);

  if (!update) notFound();

  const otherUpdates = marketUpdates.filter((item) => item.slug !== slug).slice(0, 3);

  return (
    <>
      <BreadcrumbBar
        items={[
          { name: "Market Updates", path: "/market-updates" },
          { name: update.title, path: `/market-updates/${update.slug}` },
        ]}
      />

      <div
        className="w-full py-xl flex items-center justify-center relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, #0a1a33 0%, #0e6bc7 50%, #0e6bc7 100%)`,
          minHeight: "24rem",
        }}
      >
        <Container>
          <div className="relative z-10 text-center text-white">
            <span
              className="inline-block mb-md px-md py-sm rounded-full text-sm font-semibold"
              style={{ backgroundColor: "#c9a227" }}
            >
              Market Update
            </span>
            <h1 className="text-balance text-[clamp(2rem,1rem+4vw,3.5rem)] font-bold leading-[1.1]">
              {update.title}
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
                  <span>📅 {update.date}</span>
                  <span>⏱️ {update.readTime} read</span>
                </div>
              </div>

              <article className="mb-3xl">
                <p className="text-xl text-gray-700 leading-relaxed font-semibold mb-2xl italic border-l-4 border-blue pl-lg">
                  {update.summary}
                </p>

                <div className="space-y-lg">
                  {update.content.map((section, sectionIdx) => {
                    switch (section.type) {
                      case "stats":
                        return <StatsGrid key={sectionIdx} items={section.items} />;
                      case "pullquote":
                        return <Pullquote key={sectionIdx} quote={section.quote} />;
                      case "neighborhoods":
                        return <NeighborhoodSpotlight key={sectionIdx} items={section.items} />;
                      case "compare":
                        return <BuyerSellerCompare key={sectionIdx} columns={section.columns} />;
                      case "takeaways":
                        return <Takeaways key={sectionIdx} heading={section.heading} items={section.items} />;
                      default:
                        return (
                          <div key={sectionIdx}>
                            {section.heading && (
                              <h3 className="text-2xl font-bold mt-2xl mb-md" style={{ color: "#0a1a33" }}>
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
                        );
                    }
                  })}
                </div>
              </article>

              <div className="pt-2xl border-t border-gray-200">
                <Link
                  href="/market-updates"
                  className="inline-flex items-center gap-sm font-semibold transition-colors hover:underline"
                  style={{ color: "#0e6bc7" }}
                >
                  ← Back to Market Updates
                </Link>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div
                className="rounded-lg p-lg mb-2xl text-white sticky top-lg"
                style={{ backgroundColor: "#0a1a33" }}
              >
                <div className="flex flex-col items-center text-center">
                  <div
                    className="w-24 h-24 rounded-full mb-md flex items-center justify-center text-4xl font-bold"
                    style={{ backgroundColor: "#c9a227" }}
                  >
                    NP
                  </div>
                  <h3 className="text-lg font-bold mb-sm">Natalie Pilkinton</h3>
                  <p className="text-sm text-gray-300 mb-md font-semibold">REALTOR®</p>
                  <p className="text-xs text-gray-400 mb-lg leading-relaxed">
                    Helping buyers, sellers, and investors achieve their real estate goals in Houston.
                  </p>
                  <Link
                    href="https://outlook.office.com/bookwithme/user/f39b29ca72d4472699897db031f61fd7@homerockrealty.com/meetingtype/OLdPZ9Q4HUKXNbgzgjnasg2"
                    className="w-full px-lg py-sm rounded font-semibold transition-colors text-center"
                    style={{ backgroundColor: "#c9a227", color: "#0a1a33" }}
                  >
                    Book a Call
                  </Link>
                </div>
              </div>

              {otherUpdates.length > 0 && (
                <div className="border border-gray-200 rounded-lg p-lg">
                  <h4 className="font-bold mb-lg text-navy text-sm uppercase tracking-wide">More Market Updates</h4>
                  <div className="space-y-md">
                    {otherUpdates.map((item) => (
                      <Link
                        key={item.slug}
                        href={`/market-updates/${item.slug}`}
                        className="block group pb-md border-b border-gray-100 last:border-b-0"
                      >
                        <h5 className="font-semibold text-sm mb-xs group-hover:text-blue transition-colors line-clamp-2">
                          {item.title}
                        </h5>
                        <p className="text-xs text-gray-600">{item.date}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
