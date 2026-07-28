import Link from "next/link";

export type LearningPathCardProps = {
  icon: string;
  title: string;
  description: string;
  href: string;
};

export function LearningPathCard({ icon, title, description, href }: LearningPathCardProps) {
  return (
    <Link
      href={href}
      className="bg-gradient-to-br from-navy to-[#1a2d4a] text-white p-xl rounded-xs flex flex-col justify-between min-h-[240px] select-none transition-all duration-300 hover:-translate-y-1 hover:shadow-brand-lg max-md:min-h-[220px] max-md:p-lg"
    >
      <div>
        <div className="text-3xl mb-md w-[60px] h-[60px] bg-gold/10 border-2 border-gold rounded-xs flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-white mb-md mt-0">{title}</h3>
        <p className="text-white/85 text-sm leading-relaxed mb-0">{description}</p>
      </div>
      <div className="text-gold font-semibold text-sm mt-md">Explore →</div>
    </Link>
  );
}
