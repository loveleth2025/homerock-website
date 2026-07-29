import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { type Crumb } from "@/components/layout/Breadcrumbs";
import { Card, CardCategory, CardTitle, CardDescription } from "@/components/ui/Card";
import { ComingSoonButton } from "@/components/ui/ComingSoonButton";
import { Button } from "@/components/ui/Button";
import { CTA } from "@/components/sections/CTA";
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
      <BreadcrumbBar items={breadcrumbs} />

      <Hero title={title} subheading={subheading} align="left" />

      <Section>
        <Container>
          <div className="grid grid-cols-3 max-md:grid-cols-1 gap-lg">
            {items.map((item) => (
              <Card key={item.title} featured>
                <CardCategory>{item.category}</CardCategory>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
                {item.href ? (
                  <Button href={item.href} size="small">
                    View Checklist →
                  </Button>
                ) : (
                  <ComingSoonButton />
                )}
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
