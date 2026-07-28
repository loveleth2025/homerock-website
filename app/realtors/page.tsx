import type { Metadata } from "next";
import { AcademyLayout } from "@/layouts/AcademyLayout";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card, CardTitle, CardCategory, CardDescription } from "@/components/ui/Card";
import { ComingSoonButton } from "@/components/ui/ComingSoonButton";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Realtor Growth Academy",
  description: "Scale your real estate business with proven systems through Natalie Pilkinton's Realtor Growth Academy.",
  path: "/realtors",
});

const framework = [
  { icon: "📞", title: "Lead Generation" },
  { icon: "💬", title: "Lead Nurturing" },
  { icon: "🤝", title: "Client Conversion" },
  { icon: "⭐", title: "Referral Generation" },
];

const programs = [
  { icon: "🎯", title: "Prospecting & Lead Gen", description: "Proven methods to generate consistent leads through multiple channels" },
  { icon: "📱", title: "Social Media Mastery", description: "Build your personal brand and attract clients on social platforms" },
  { icon: "💼", title: "Negotiations Skills", description: "Advanced negotiation techniques to get better deals for your clients" },
  { icon: "🚀", title: "Business Systems", description: "Automation and systems to scale without adding more hours" },
];

const toolsAndResources = [
  { category: "Template", title: "Client Follow-Up System", description: "Email and SMS templates for consistent client communication" },
  { category: "Worksheet", title: "Business Plan Template", description: "Annual business plan and goal-setting worksheet for realtors" },
  { category: "Script", title: "Listing Presentation", description: "Complete listing presentation script to win more listings" },
];


export default function RealtorsPage() {
  return (
    <AcademyLayout
      title="Realtor Growth Academy"
      subheading="Scale your real estate business with proven systems"
      ctaTitle="Scale Your Real Estate Business"
      ctaDescription="Get personalized coaching and strategies to grow your real estate career."
      ctaLabel="Book Your Strategy Session →"
    >
      <Section>
        <Container>
          <h2>Business Growth Framework</h2>
          <div className="grid grid-cols-4 max-md:grid-cols-2 gap-lg">
            {framework.map((item) => (
              <div key={item.title} className="bg-gradient-to-br from-navy to-[#1a2d4a] text-white p-lg rounded-xs">
                <div className="text-3xl mb-md w-[60px] h-[60px] bg-gold/10 border-2 border-gold rounded-xs flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-white text-lg mt-md mb-0">{item.title}</h3>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="light">
        <Container>
          <h2>Core Training Programs</h2>
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-lg">
            {programs.map((program) => (
              <Card key={program.title}>
                <CardTitle>
                  {program.icon} {program.title}
                </CardTitle>
                <CardDescription>{program.description}</CardDescription>
                <ComingSoonButton />
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2>Tools &amp; Resources</h2>
          <div className="grid grid-cols-3 max-md:grid-cols-1 gap-lg">
            {toolsAndResources.map((item) => (
              <Card key={item.title} featured>
                <CardCategory>{item.category}</CardCategory>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </AcademyLayout>
  );
}
