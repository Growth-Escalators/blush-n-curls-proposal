import { Fragment } from "react";
import {
  Magnet,
  AppWindow,
  Users,
  Star,
  ArrowRight,
  ArrowDown,
  BarChart3,
  type LucideIcon,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import IconCircle from "@/components/ui/IconCircle";
import Reveal from "@/components/ui/Reveal";

type Stage = {
  icon: LucideIcon;
  fill: "rose" | "gold";
  labelClass: string;
  label: string;
  subtitle: string;
  detail: string;
};

const stages: Stage[] = [
  {
    icon: Magnet,
    fill: "rose",
    labelClass: "text-rose",
    label: "ATTRACT",
    subtitle: "Get Discovered",
    detail: "Meta Ads · Google Ads · SEO · Content",
  },
  {
    icon: AppWindow,
    fill: "rose",
    labelClass: "text-rose",
    label: "CONVERT",
    subtitle: "Turn Interest Into Bookings",
    detail: "Offers · Landing Pages · Website CRO · WhatsApp",
  },
  {
    icon: Users,
    fill: "gold",
    labelClass: "text-gold",
    label: "RETAIN",
    subtitle: "Increase Repeat Visits",
    detail: "Email · WhatsApp · Memberships · Loyalty · Reactivation",
  },
  {
    icon: Star,
    fill: "gold",
    labelClass: "text-gold",
    label: "ADVOCATE",
    subtitle: "Build Fans & Referrals",
    detail: "Review Management · Referrals · Social Proof",
  },
];

function StageCard({ stage }: { stage: Stage }) {
  const Icon = stage.icon;
  return (
    <div className="flex w-full max-w-xs flex-col items-center text-center lg:w-[190px]">
      <IconCircle fill={stage.fill} size="lg">
        <Icon aria-hidden="true" />
      </IconCircle>
      <span className={`mt-4 font-sans text-sm font-bold tracking-wide ${stage.labelClass}`}>
        {stage.label}
      </span>
      <span className="mt-1 text-cream-text text-sm font-medium">{stage.subtitle}</span>
      <span className="mt-2 text-muted-on-dark text-xs leading-relaxed">{stage.detail}</span>
    </div>
  );
}

export default function GrowthEngine() {
  return (
    <section id="approach" className="bg-charcoal py-20 md:py-28">
      <Container>
        <Reveal className="mx-auto max-w-2xl">
          <Eyebrow color="gold" align="center">
            OUR APPROACH
          </Eyebrow>
          <h2 className="mt-3 font-serif text-cream-text text-3xl sm:text-4xl font-medium text-center">
            The Growth Engine We Build For You
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-14 md:mt-16">
          {/* Desktop: horizontal connected row */}
          <div className="hidden lg:flex lg:items-start">
            {stages.map((stage, index) => (
              <Fragment key={stage.label}>
                <StageCard stage={stage} />
                {index < stages.length - 1 && (
                  <div className="flex h-20 flex-1 items-center justify-center px-1">
                    <div className="relative h-px w-full bg-border-beige-dark">
                      <ArrowRight
                        aria-hidden="true"
                        className="absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 text-gold/60"
                      />
                    </div>
                  </div>
                )}
              </Fragment>
            ))}
          </div>

          {/* Mobile / tablet: vertical connected journey */}
          <div className="flex flex-col items-center lg:hidden">
            {stages.map((stage, index) => (
              <Fragment key={stage.label}>
                <StageCard stage={stage} />
                {index < stages.length - 1 && (
                  <div className="flex flex-col items-center py-4">
                    <div className="h-8 w-px bg-border-beige-dark" />
                    <ArrowDown aria-hidden="true" className="-mt-1 h-4 w-4 text-gold/60" />
                  </div>
                )}
              </Fragment>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2} className="mt-14 md:mt-16">
          <div className="flex w-full flex-wrap items-center justify-center gap-4 rounded-pill border border-gold/30 bg-near-black px-6 py-4 shadow-badge sm:justify-start sm:px-8">
            <IconCircle fill="outline-gold" size="sm">
              <BarChart3 aria-hidden="true" />
            </IconCircle>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-3">
              <span className="text-gold text-sm font-semibold tracking-wide">
                DATA & GROWTH INTELLIGENCE
              </span>
              <span className="text-muted-on-dark text-xs sm:text-sm">
                Tracking · Analytics · Reporting · Insights That Drive Better Decisions
              </span>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
