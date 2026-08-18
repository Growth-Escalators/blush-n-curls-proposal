import { Target, MapPin, Tag, Wallet, Repeat, SearchX, type LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import IconCircle from "@/components/ui/IconCircle";
import Reveal from "@/components/ui/Reveal";

type Card = {
  icon: LucideIcon;
  fill: "outline-gold" | "outline-berry";
  question: string;
};

const cards: Card[] = [
  {
    icon: Target,
    fill: "outline-gold",
    question: "Which services actually acquire your best customers?",
  },
  {
    icon: MapPin,
    fill: "outline-berry",
    question: "Which branch should receive more marketing spend?",
  },
  {
    icon: Tag,
    fill: "outline-gold",
    question: "Which offers convert into real, paid bookings?",
  },
  {
    icon: Wallet,
    fill: "outline-berry",
    question: "What does a new customer really cost to acquire?",
  },
  {
    icon: Repeat,
    fill: "outline-gold",
    question: "Which customers come back — and which don't?",
  },
  {
    icon: SearchX,
    fill: "outline-berry",
    question: "Where in the journey are opportunities being lost?",
  },
];

export default function InsightSection() {
  return (
    <section id="insight" className="bg-wine py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Data & Growth Intelligence"
          eyebrowColor="gold"
          align="center"
          tone="cream"
          size="lg"
          title="Know What Actually Drives Growth"
          description="Most salons know their revenue. Few know which service, branch, offer and customer segment is actually producing it. We build the dashboard that answers the questions that matter."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <Reveal key={card.question} delay={0.06 * (i + 1)}>
                <div className="h-full rounded-card border border-border-dark bg-wine-soft/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/30">
                  <IconCircle fill={card.fill} size="md">
                    <Icon aria-hidden="true" />
                  </IconCircle>
                  <p className="mt-6 font-serif text-lg font-semibold leading-snug text-cream">
                    {card.question}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
