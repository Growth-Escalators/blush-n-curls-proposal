import { Target, MapPin, TrendingUp, Tag, type LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import IconCircle from "@/components/ui/IconCircle";
import Reveal from "@/components/ui/Reveal";

type Card = {
  icon: LucideIcon;
  fill: "rose" | "gold";
  title: string;
  description: string;
};

const cards: Card[] = [
  {
    icon: Target,
    fill: "rose",
    title: "Best Acquisition Services",
    description:
      "Understand which salon services can profitably bring new customers into the business.",
  },
  {
    icon: MapPin,
    fill: "gold",
    title: "Branch Performance",
    description:
      "Compare acquisition and booking performance across: Al Qusais · Al Barsha · Mankhool",
  },
  {
    icon: TrendingUp,
    fill: "rose",
    title: "Customer Value",
    description:
      "Understand the relationship between: First Visit → Repeat Visit → Membership → Lifetime Value",
  },
  {
    icon: Tag,
    fill: "gold",
    title: "Offer Intelligence",
    description:
      "Identify which packages, offers and promotions generate the strongest commercial outcomes.",
  },
];

/**
 * Data & Growth Intelligence — not shown in the reference mockup. Built fresh
 * using the same eyebrow + serif headline + icon-circle card language used
 * throughout the rest of the proposal (see the Opportunity card grid).
 */
export default function BranchIntelligenceSection() {
  return (
    <section id="intelligence" className="bg-blush-tint py-20 md:py-28">
      <Container>
        <Reveal delay={0}>
          <div className="max-w-2xl">
            <Eyebrow color="gold">DATA &amp; GROWTH INTELLIGENCE</Eyebrow>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-ink sm:text-4xl">
              Know What Actually Drives Growth
            </h2>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Reveal key={card.title} delay={0.08 * (index + 1)}>
                <div className="h-full rounded-card border border-border-beige bg-ivory p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                  <IconCircle fill={card.fill} size="md">
                    <Icon aria-hidden="true" />
                  </IconCircle>
                  <h3 className="mt-5 text-base font-semibold text-ink">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{card.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
