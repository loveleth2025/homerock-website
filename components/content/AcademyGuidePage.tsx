import { Fragment, type ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { CTA } from "@/components/sections/CTA";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/data/navigation";
import { articleSchema, faqSchema, jsonLdScriptProps } from "@/lib/seo/schema";
import type { AcademyGuide } from "@/lib/content/academy/types";

const LINK = /\[([^\]]+)\]\(([^)\s]+)\)/g;

/** Renders [label](href) inside plain text as links; everything else stays text. */
function Rich({ text }: { text: string }) {
  const parts: ReactNode[] = [];
  let last = 0;
  for (const match of text.matchAll(LINK)) {
    const [whole, label, href] = match;
    const index = match.index ?? 0;
    if (index > last) parts.push(text.slice(last, index));
    parts.push(
      href.startsWith("/") ? (
        <Link key={index} href={href} className="text-gold-ink underline underline-offset-2 hover:text-navy">
          {label}
        </Link>
      ) : (
        <a key={index} href={href} target="_blank" rel="noopener noreferrer" className="text-gold-ink underline underline-offset-2 hover:text-navy">
          {label}
        </a>
      ),
    );
    last = index + whole.length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts.map((part, i) => <Fragment key={i}>{part}</Fragment>)}</>;
}

/** Plain text for JSON-LD: link labels kept, URLs dropped. */
const plain = (text: string) => text.replace(LINK, "$1");

function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

/**
 * Answer-first Academy guide: short answer, sections, Natalie's take,
 * visible FAQs (with FAQPage schema), sources and related reading.
 */
export function AcademyGuidePage({ guide }: { guide: AcademyGuide }) {
  const updated = guide.dateModified ?? guide.datePublished;

  return (
    <>
      <script
        {...jsonLdScriptProps(
          articleSchema({
            headline: guide.h1,
            description: guide.metaDescription,
            path: guide.path,
            datePublished: guide.datePublished,
            dateModified: guide.dateModified,
          }),
        )}
      />
      <script {...jsonLdScriptProps(faqSchema(guide.faqs.map((faq) => ({ question: faq.question, answer: plain(faq.answer) }))))} />

      <BreadcrumbBar items={guide.breadcrumbs} />
      <Hero title={guide.h1} subheading={guide.subheading} align="left" />

      <Section>
        <Container className="max-w-[52rem]">
          {/* Byline: person → expertise → content */}
          <div className="flex items-center gap-md mb-2xl pb-lg border-b border-gray-light">
            <Link href="/about" className="shrink-0">
              <Image src={siteConfig.headshotUrl} alt="Natalie Pilkinton" width={48} height={48} className="w-12 h-12 rounded-full object-cover" />
            </Link>
            <p className="text-sm text-gray-dark m-0">
              By{" "}
              <Link href="/about" className="font-semibold text-navy hover:text-gold-ink">
                Natalie Pilkinton
              </Link>
              , REALTOR® &amp; Real Estate Investor · Updated <time dateTime={updated}>{formatDate(updated)}</time>
            </p>
          </div>

          {/* Short answer first, for readers and answer engines */}
          <div className="bg-cream border-l-4 border-gold rounded-xs p-lg mb-2xl">
            <h2 className="text-lg uppercase tracking-[0.08em] text-gold-ink mt-0 mb-sm">Short answer</h2>
            {guide.shortAnswer.map((paragraph, i) => (
              <p key={i} className="text-lg leading-relaxed text-navy mb-sm last:mb-0">
                <Rich text={paragraph} />
              </p>
            ))}
          </div>

          {guide.sections.map((section) => (
            <section key={section.heading} className="mb-2xl">
              <h2>{section.heading}</h2>
              {section.paragraphs?.map((paragraph, i) => (
                <p key={i}>
                  <Rich text={paragraph} />
                </p>
              ))}
              {section.steps && (
                <ol className="space-y-md pl-xl">
                  {section.steps.map((step) => (
                    <li key={step.title}>
                      <strong className="text-navy">{step.title}.</strong> <Rich text={step.body} />
                    </li>
                  ))}
                </ol>
              )}
              {section.bullets && (
                <ul className="list-disc pl-xl space-y-xs">
                  {section.bullets.map((bullet, i) => (
                    <li key={i}>
                      <Rich text={bullet} />
                    </li>
                  ))}
                </ul>
              )}
              {section.table && (
                <div className="overflow-x-auto my-lg">
                  <table className="w-full text-sm border-collapse">
                    {section.table.caption && <caption className="text-left text-gray-dark mb-sm">{section.table.caption}</caption>}
                    <thead>
                      <tr>
                        {section.table.headers.map((header) => (
                          <th key={header} className="text-left font-semibold text-navy border-b-2 border-gold py-sm pr-md">
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row, r) => (
                        <tr key={r} className="border-b border-gray-light">
                          {row.map((cell, c) => (
                            <td key={c} className="py-sm pr-md align-top">
                              <Rich text={cell} />
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {section.table.note && <p className="text-xs text-gray-dark mt-sm">{section.table.note}</p>}
                </div>
              )}
            </section>
          ))}

          {guide.natalieTake && (
            <aside className="bg-navy text-cream rounded-xs p-xl mb-2xl">
              <p className="text-gold text-xs font-semibold uppercase tracking-[0.18em] mb-sm">From Natalie</p>
              <h2 className="text-white mt-0">{guide.natalieTake.heading}</h2>
              {guide.natalieTake.paragraphs.map((paragraph, i) => (
                <p key={i} className="text-cream/90">
                  <Rich text={paragraph} />
                </p>
              ))}
              {guide.natalieTake.source && (
                <p className="text-sm text-cream/70 mb-0">
                  Adapted from{" "}
                  <Link href={guide.natalieTake.source.href} className="underline hover:text-gold">
                    {guide.natalieTake.source.label}
                  </Link>
                </p>
              )}
            </aside>
          )}

          {guide.recommended && (
            <section className="mb-2xl">
              <h2>{guide.recommended.heading}</h2>
              <p>
                <Rich text={guide.recommended.intro} />
              </p>
              <ul className="grid grid-cols-2 max-md:grid-cols-1 gap-lg list-none p-0">
                {guide.recommended.providers.map((provider) => (
                  <li key={provider.company} className="border border-gray-light border-l-4 border-l-gold rounded-xs p-lg">
                    <p className="text-xs uppercase tracking-[0.1em] text-gold-ink font-semibold mb-xs">{provider.role}</p>
                    <h3 className="text-xl mt-0 mb-xs">{provider.company}</h3>
                    <p className="text-sm font-semibold text-navy mb-sm">{provider.person}</p>
                    <p className="text-sm text-gray-dark">
                      <Rich text={provider.description} />
                    </p>
                    <p className="text-sm mb-0">
                      {provider.website && (
                        <a href={provider.website} target="_blank" rel="noopener noreferrer" className="text-gold-ink underline underline-offset-2 hover:text-navy">
                          {provider.website.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
                        </a>
                      )}
                      {provider.phone && <span className="text-gray-dark"> · {provider.phone}</span>}
                    </p>
                    {provider.license && <p className="text-xs text-gray-dark mt-xs mb-0">{provider.license}</p>}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-gray-dark italic mt-md">{guide.recommended.disclosure}</p>
            </section>
          )}

          <section className="mb-2xl">
            <h2>Frequently asked questions</h2>
            {guide.faqs.map((faq) => (
              <div key={faq.question} className="border-b border-gray-light py-lg last:border-b-0">
                <h3 className="text-lg mb-sm">{faq.question}</h3>
                <p className="text-gray-dark mb-0">
                  <Rich text={faq.answer} />
                </p>
              </div>
            ))}
          </section>

          <section className="mb-2xl">
            <h2>Keep learning</h2>
            <ul className="grid grid-cols-2 max-md:grid-cols-1 gap-md list-none p-0">
              {guide.related.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="block h-full border border-gray-light rounded-xs p-md hover:border-gold transition-colors">
                    <span className="block font-semibold text-navy mb-xs">{item.label} →</span>
                    <span className="block text-sm text-gray-dark">{item.description}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {(guide.disclaimer || guide.sources) && (
            <footer className="text-sm text-gray-dark border-t border-gray-light pt-lg">
              {guide.disclaimer && <p className="italic">{guide.disclaimer}</p>}
              {guide.sources && (
                <>
                  <p className="font-semibold text-navy mb-xs">Sources</p>
                  <ul className="list-disc pl-xl space-y-xs">
                    {guide.sources.map((source) => (
                      <li key={source.url}>
                        <a href={source.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-gold-ink">
                          {source.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </footer>
          )}
        </Container>
      </Section>

      <CTA title={guide.cta.title} description={guide.cta.description}>
        <Button href="/booking">{guide.cta.label}</Button>
      </CTA>
    </>
  );
}
