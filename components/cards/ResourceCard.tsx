import Link from "next/link";
import { Card, CardCategory, CardTitle, CardDescription } from "@/components/ui/Card";

export type ResourceCardProps = {
  category: string;
  title: string;
  description: string;
  featured?: boolean;
  cta?: { label: string; href: string };
};

export function ResourceCard({ category, title, description, featured = true, cta }: ResourceCardProps) {
  return (
    <Card featured={featured}>
      <CardCategory>{category}</CardCategory>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      {cta && (
        <Link
          href={cta.href}
          className="inline-block px-md py-sm text-sm font-semibold border border-navy text-navy rounded-[2px] hover:bg-navy hover:text-white transition-colors"
        >
          {cta.label}
        </Link>
      )}
    </Card>
  );
}
