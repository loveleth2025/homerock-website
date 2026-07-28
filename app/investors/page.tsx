import type { Metadata } from "next";
import { AcademyLayout } from "@/layouts/AcademyLayout";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card, CardTitle, CardCategory, CardDescription } from "@/components/ui/Card";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Investor Academy",
  description: "Build wealth through strategic real estate investments with Natalie Pilkinton's Investor Academy.",
  path: "/investors",
});

const strategies = [
  { icon: "🏘️", title: "Buy & Hold", description: "Long-term rental property strategy for consistent cash flow and appreciation" },
  { icon: "🔄", title: "Fix & Flip", description: "Purchase undervalued properties, renovate, and sell for profit" },
  { icon: "📊", title: "Wholesale", description: "Find deals and sell contracts to other investors for a fee" },
];

const tools = [
  { icon: "📈", title: "ROI Calculator", description: "Calculate your return on investment for potential deals" },
  { icon: "💹", title: "Cash Flow Analyzer", description: "Project monthly cash flow for rental properties" },
];

const modules = [
  { category: "Course", title: "Investment Property Analysis", description: "Master the metrics and formulas for evaluating investment opportunities" },
  { category: "Course", title: "Financing Your Investments", description: "Learn about loan types, terms, and strategies for investment properties" },
  { category: "Course", title: "Building Your Portfolio", description: "Strategies for scaling from one property to a diversified portfolio" },
];

function ComingSoonButton() {
  return (
    <button
      type="button"
      disabled
      className="px-md py-sm text-sm font-semibold border border-navy text-navy rounded-xs opacity-60 cursor-not-allowed"
    >
      Coming Soon
    </button>
  );
}

export default function InvestorsPage() {
  return (
    <AcademyLayout
      title="Investor Academy"
      subheading="Build wealth through strategic real estate investments"
      ctaTitle="Ready to Start Investing?"
      ctaDescription="Schedule a consultation to discuss your investment goals."
      ctaLabel="Book Investor Consultation →"
    >
      <Section>
        <Container>
          <h2>Investment Strategies</h2>
          <div className="grid grid-cols-3 max-md:grid-cols-1 gap-lg">
            {strategies.map((strategy) => (
              <Card key={strategy.title}>
                <CardTitle>
                  {strategy.icon} {strategy.title}
                </CardTitle>
                <CardDescription>{strategy.description}</CardDescription>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="light">
        <Container>
          <h2>Investment Analysis Tools</h2>
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-lg">
            {tools.map((tool) => (
              <Card key={tool.title}>
                <CardTitle>
                  {tool.icon} {tool.title}
                </CardTitle>
                <CardDescription>{tool.description}</CardDescription>
                <ComingSoonButton />
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2>Learning Modules</h2>
          <div className="grid grid-cols-3 max-md:grid-cols-1 gap-lg">
            {modules.map((module) => (
              <Card key={module.title} featured>
                <CardCategory>{module.category}</CardCategory>
                <CardTitle>{module.title}</CardTitle>
                <CardDescription>{module.description}</CardDescription>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </AcademyLayout>
  );
}
