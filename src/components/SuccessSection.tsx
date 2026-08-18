import {
  TrendingDown,
  MousePointerClick,
  PieChart,
  Repeat,
  Award,
  Star,
  MapPin,
  type LucideIcon,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import IconCircle from "@/components/ui/IconCircle";
import Reveal from "@/components/ui/Reveal";

type Outcome = {
  icon: LucideIcon;
  label: string;
  fill: "outline-gold" | "outline-berry";
};

const outcomes: Outcome[] = [
  { icon: TrendingDown, label: "Lower Acquisition Cost", fill: "outline-gold" },
  { icon: MousePointerClick, label: "Higher Booking Conversion Rate", fill: "outline-berry" },
  { icon: PieChart, label: "More Profitable Service Mix", fill: "outline-gold" },
  { icon: Repeat, label: "Higher Repeat Booking Rate", fill: "outline-berry" },
  { icon: Award, label: "More Memberships & Loyalty", fill: "outline-gold" },
  { icon: Star, label: "Better Review Velocity", fill: "outline-berry" },
  { icon: MapPin, label: "Clearer Branch-Level Performance", fill: "outline-gold" },
];

export default function SuccessSection() {
  return (
    <section id="outcomes" className="bg-plum py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="What Success Looks Like"
          eyebrowColor="gold"
          align="center"
          tone="cream"
          size="lg"
          title="Commercial Outcomes, Not Vanity Metrics"
          description="No invented numbers before a single campaign runs — this is what a well-run growth partnership is built to produce, measured every month."
        />

        <div className="mx-auto mt-16 flex max-w-5xl flex-wrap justify-center gap-x-10 gap-y-10 lg:mt-20 lg:gap-x-12">
          {outcomes.map(({ icon: Icon, label, fill }, i) => (
            <Reveal key={label} delay={0.06 * (i + 1)}>
              <div className="flex w-[110px] flex-col items-center gap-3.5 text-center sm:w-[128px]">
                <IconCircle fill={fill} size="md">
                  <Icon strokeWidth={1.5} aria-hidden="true" />
                </IconCircle>
                <p className="text-xs font-medium leading-snug text-cream sm:text-sm">
                  {label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
