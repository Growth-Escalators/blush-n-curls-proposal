import { Users, MessageSquare, RefreshCw, type LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import IconCircle from "@/components/ui/IconCircle";
import Reveal from "@/components/ui/Reveal";

type Card = {
  icon: LucideIcon;
  fill: "ink" | "rose" | "gold";
  title: string;
  description: string;
};

const cards: Card[] = [
  {
    icon: Users,
    fill: "ink",
    title: "Acquire Better Customers",
    description:
      "Target the right audiences with stronger offers and high-performing paid acquisition.",
  },
  {
    icon: MessageSquare,
    fill: "rose",
    title: "Convert More Enquiries",
    description:
      "Improve the digital journey so more visitors turn into booked appointments.",
  },
  {
    icon: RefreshCw,
    fill: "gold",
    title: "Increase Repeat Revenue",
    description:
      "Build systems that increase retention, memberships, referrals and lifetime value.",
  },
];

export default function OpportunitySection() {
  return (
    <section id="opportunity" className="bg-blush-tint py-20 md:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.3fr_1fr_1fr_1fr] lg:gap-6 lg:items-start">
          {/* Text column */}
          <Reveal className="lg:pr-2">
            <Eyebrow color="rose">THE OPPORTUNITY</Eyebrow>
            <h2 className="mt-3 font-serif text-ink text-3xl sm:text-4xl font-semibold leading-tight">
              Where We See The Opportunity
            </h2>
            <p className="mt-4 text-muted text-[15px] leading-relaxed">
              Blush N Curls already has a strong brand, multiple branches, loyal customers and
              premium services. Our opportunity is not simply to run more ads. It is to build a
              connected growth engine that consistently brings in the right customers, converts
              more enquiries and increases repeat business.
            </p>
          </Reveal>

          {/* Three opportunity cards */}
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Reveal key={card.title} delay={0.1 * (index + 1)}>
                <div className="h-full bg-ivory rounded-card border border-border-beige shadow-card p-7 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1">
                  <IconCircle fill={card.fill} size="md">
                    <Icon aria-hidden="true" />
                  </IconCircle>
                  <h3 className="mt-5 font-sans text-ink text-lg font-semibold">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-muted text-sm leading-relaxed">{card.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
