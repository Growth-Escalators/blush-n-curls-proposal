import {
  Inbox,
  CalendarPlus,
  Scissors,
  Star,
  Repeat,
  Award,
  Share2,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import IconCircle from "@/components/ui/IconCircle";
import Reveal from "@/components/ui/Reveal";

type Stage = {
  icon: LucideIcon;
  label: string;
  fill: "rose" | "gold";
};

const stages: Stage[] = [
  { icon: Inbox, label: "New Enquiry", fill: "rose" },
  { icon: CalendarPlus, label: "First Booking", fill: "rose" },
  { icon: Scissors, label: "Appointment", fill: "rose" },
  { icon: Star, label: "Review", fill: "gold" },
  { icon: Repeat, label: "Repeat Visit", fill: "gold" },
  { icon: Award, label: "Membership / Loyalty", fill: "gold" },
  { icon: Share2, label: "Referral", fill: "gold" },
];

const touchpoints = [
  "Booking reminders",
  "Post-appointment follow-ups",
  "Review requests",
  "Service reminders",
  "Birthday communication",
  "Reactivation campaigns",
  "Membership promotions",
  "Referral campaigns",
];

/**
 * Customer Lifecycle — not shown in the reference mockup. Built fresh using
 * the same eyebrow + serif headline + icon-circle language as the Growth
 * Engine stage row, with a lightweight pill-chip list echoing the mockup's
 * pill/badge treatments.
 */
export default function LifecycleSection() {
  return (
    <section id="lifecycle" className="bg-cream-tint py-20 md:py-28">
      <Container>
        <Reveal delay={0}>
          <div className="text-center">
            <Eyebrow color="rose" align="center">
              CUSTOMER LIFECYCLE
            </Eyebrow>
            <h2 className="mx-auto mt-3 max-w-2xl font-serif text-3xl font-semibold text-ink sm:text-4xl">
              Turning First-Time Visitors Into Long-Term Customers
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {stages.map((stage, index) => {
              const Icon = stage.icon;
              const isLast = index === stages.length - 1;
              return (
                <div key={stage.label} className="flex items-center gap-3 sm:gap-4">
                  <div className="flex w-20 flex-col items-center gap-2 text-center sm:w-24">
                    <IconCircle fill={stage.fill} size="sm">
                      <Icon aria-hidden="true" />
                    </IconCircle>
                    <span className="text-xs font-medium text-ink sm:text-sm">{stage.label}</span>
                  </div>
                  {!isLast && (
                    <ArrowRight
                      className="h-4 w-4 shrink-0 text-rose/40"
                      aria-hidden="true"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-12">
            <p className="mx-auto max-w-xl text-center text-sm text-muted">
              Personal, timely communication across email and WhatsApp — never generic bulk
              messaging.
            </p>
            <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-2.5 pt-4">
              {touchpoints.map((item) => (
                <span
                  key={item}
                  className="rounded-pill border border-border-beige bg-ivory px-4 py-2 text-xs text-ink sm:text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
