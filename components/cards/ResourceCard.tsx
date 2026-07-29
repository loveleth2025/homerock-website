import Link from "next/link";
import { Card, CardCategory, CardTitle, CardDescription } from "@/components/ui/Card";

export type ResourceCardProps = {
  category: string;
  title: string;
  description: string;
  featured?: boolean;
  cta?: { label: string; href: string; external?: boolean };
};

const ctaClassName =
  "inline-block px-md py-sm text-sm font-semibold border border-navy text-navy rounded-xs hover:bg-navy hover:text-white transition-colors";

export function ResourceCard({ category, title, description, featured = true, cta }: ResourceCardProps) {
  return (
    <Card featured={featured}>
      <CardCategory>{category}</CardCategory>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      {cta &&
        (cta.external ? (
          <a href={cta.href} target="_blank" rel="noopener noreferrer" className={ctaClassName}>
            {cta.label}
          </a>
        ) : (
          <Link href={cta.href} className={ctaClassName}>
            {cta.label}
          </Link>
        ))}
    </Card>
  );
}
