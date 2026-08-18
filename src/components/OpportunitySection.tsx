import { Users, MousePointerClick, RefreshCw, type LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import IconCircle from "@/components/ui/IconCircle";
import Reveal from "@/components/ui/Reveal";

type Card = {
  index: string;
  icon: LucideIcon;
  fill: "plum" | "berry" | "gold";
  title: string;
  description: string;
};

const cards: Card[] = [
  {
    index: "01",
    icon: Users,
    fill: "plum",
    title: "Acquire Better Customers",
    description:
      "Target the right audiences with stronger offers and high-performing paid acquisition — not just more traffic.",
  },
  {
    index: "02",
    icon: MousePointerClick,
    fill: "berry",
    title: "Convert More Enquiries",
    description:
      "Improve the digital journey so more visitors turn into booked appointments, across every branch.",
  },
  {
    index: "03",
    icon: RefreshCw,
    fill: "gold",
    title: "Increase Repeat Revenue",
    description:
      "Build systems that increase retention, memberships, referrals and lifetime value — not one-time visits.",
  },
];

export default function OpportunitySection() {
  return (
    <section id="opportunity" className="bg-ivory py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <SectionHeading
            eyebrow="The Opportunity"
            title="Where We See The Opportunity"
            description={
              <>
                Blush N Curls already has a strong brand, multiple branches,
                loyal customers and premium services. The opportunity is not
                simply to run more ads — it&apos;s to build one connected
                system across acquisition, conversion, retention, reputation
                and growth intelligence.
              </>
            }
          />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {cards.map((card, i) => {
              const Icon = card.icon;
              return (
                <Reveal key={card.title} delay={0.08 * (i + 1)} className={i === 2 ? "sm:col-span-2 lg:col-span-1" : ""}>
                  <div className="group relative h-full overflow-hidden rounded-card border border-border-light bg-white/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                    <span className="font-serif text-4xl font-bold text-blush-deep transition-colors duration-300 group-hover:text-blush">
                      {card.index}
                    </span>
                    <IconCircle fill={card.fill} size="md" className="mt-5">
                      <Icon aria-hidden="true" />
                    </IconCircle>
                    <h3 className="mt-5 font-serif text-lg font-semibold text-ink">
                      {card.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted">
                      {card.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
