import { Card, CardCategory, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export type WebinarCardProps = {
  status: string;
  title: string;
  description: string;
  schedule: string;
  cta: { label: string; href: string };
};

export function WebinarCard({ status, title, description, schedule, cta }: WebinarCardProps) {
  return (
    <Card>
      <CardCategory className="bg-gold text-navy inline-block px-sm py-1 rounded-xs normal-case tracking-normal">
        {status}
      </CardCategory>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <p className="text-sm text-gold font-semibold mb-md">{schedule}</p>
      <Button href={cta.href}>{cta.label}</Button>
    </Card>
  );
}
