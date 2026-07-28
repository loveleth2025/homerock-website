import { Card, CardCategory, CardTitle, CardDescription } from "@/components/ui/Card";

export type VideoCardProps = {
  category: string;
  title: string;
  description: string;
};

/** Featured video/webinar/podcast teaser card, e.g. the "Recently Released" grid. */
export function VideoCard({ category, title, description }: VideoCardProps) {
  return (
    <Card featured>
      <CardCategory>{category}</CardCategory>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </Card>
  );
}
