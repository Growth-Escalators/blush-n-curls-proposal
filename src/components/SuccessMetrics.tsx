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
import Eyebrow from "@/components/ui/Eyebrow";
import IconCircle from "@/components/ui/IconCircle";
import Reveal from "@/components/ui/Reveal";

const outcomes: { icon: LucideIcon; label: string }[] = [
  { icon: TrendingDown, label: "Lower Acquisition Cost" },
  { icon: MousePointerClick, label: "Higher Booking Conversion Rate" },
  { icon: PieChart, label: "More Profitable Service Mix" },
  { icon: Repeat, label: "Higher Repeat Booking Rate" },
  { icon: Award, label: "More Memberships & Loyalty" },
  { icon: Star, label: "Growing Review Velocity" },
  { icon: MapPin, label: "Clear Branch-Level Performance" },
];

export default function SuccessMetrics() {
  return (
    <section id="success-metrics" className="bg-near-black py-16 md:py-20">
      <Container>
        <Eyebrow color="rose" align="center">
          SUCCESS LOOKS LIKE THIS
        </Eyebrow>

        <div className="mt-10 flex flex-wrap justify-center gap-x-10 gap-y-8">
          {outcomes.map(({ icon: Icon, label }, i) => (
            <Reveal key={label} delay={0.05 * i}>
              <div className="flex flex-col items-center gap-3">
                <IconCircle fill="outline-rose" size="md">
                  <Icon strokeWidth={1.5} />
                </IconCircle>
                <p className="text-cream-text text-xs sm:text-sm font-medium text-center max-w-[110px]">
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
