import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs, type Crumb } from "@/components/layout/Breadcrumbs";
import { Card, CardCategory, CardTitle, CardDescription } from "@/components/ui/Card";
import { CTA } from "@/components/sections/CTA";
import { Button } from "@/components/ui/Button";
import type { ResourceItem } from "@/lib/content/resources";

type ResourceListPageProps = {
  title: string;
  subheading: string;
  breadcrumbs: Crumb[];
  items: ResourceItem[];
};

export function ResourceListPage({ title, subheading, breadcrumbs, items }: ResourceListPageProps) {
  return (
    <>
      <div className="bg-cream border-b border-gray-light py-md">
        <Container>
          <Breadcrumbs items={breadcrumbs} />
        </Container>
      </div>

      <Hero title={title} subheading={subheading} align="left" />

      <Section>
        <Container>
          <div className="grid grid-cols-3 max-md:grid-cols-1 gap-lg">
            {items.map((item) => (
              <Card key={item.title} featured>
                <CardCategory>{item.category}</CardCategory>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
                <button
                  type="button"
                  disabled
                  className="px-md py-sm text-sm font-semibold border border-navy text-navy rounded-[2px] opacity-60 cursor-not-allowed"
                >
                  Coming Soon
                </button>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <CTA title="Ready to Master Real Estate?" description="Book a free 30-minute strategy session to discuss your real estate goals.">
        <Button href="/booking">Book Your FREE Strategy Session</Button>
      </CTA>
    </>
  );
}
