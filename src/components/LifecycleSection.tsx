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
import SectionHeading from "@/components/ui/SectionHeading";
import IconCircle from "@/components/ui/IconCircle";
import Reveal from "@/components/ui/Reveal";

type Stage = {
  icon: LucideIcon;
  label: string;
  fill: "berry" | "gold";
};

const stages: Stage[] = [
  { icon: Inbox, label: "New Enquiry", fill: "berry" },
  { icon: CalendarPlus, label: "First Booking", fill: "berry" },
  { icon: Scissors, label: "Appointment", fill: "berry" },
  { icon: Star, label: "Review", fill: "gold" },
  { icon: Repeat, label: "Repeat Visit", fill: "gold" },
  { icon: Award, label: "Membership / Loyalty", fill: "gold" },
  { icon: Share2, label: "Referral", fill: "gold" },
];

const touchpoints = [
  "Booking reminders",
  "Post-visit follow-up",
  "Review requests",
  "Service reminders",
  "Birthday messages",
  "Membership promotions",
  "Reactivation campaigns",
  "Referral prompts",
];

export default function LifecycleSection() {
  return (
    <section id="lifecycle" className="bg-ivory-deep py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Customer Lifecycle"
          eyebrowColor="berry"
          align="center"
          size="lg"
          title="Turning First-Time Visitors Into Long-Term Customers"
          description="Every stage of the relationship — from first enquiry to referral — has a defined system behind it, not a hope that clients come back on their own."
        />

        {/* Journey chain */}
        <Reveal delay={0.1} className="mt-14 lg:mt-16">
          <div className="flex flex-wrap items-start justify-center gap-x-1 gap-y-6 sm:gap-x-2">
            {stages.map((stage, index) => {
              const Icon = stage.icon;
              const isLast = index === stages.length - 1;
              return (
                <div key={stage.label} className="flex items-start gap-1 sm:gap-2">
                  <div className="flex w-[86px] flex-col items-center gap-2.5 text-center sm:w-24">
                    <IconCircle fill={stage.fill} size="sm">
                      <Icon aria-hidden="true" />
                    </IconCircle>
                    <span className="text-[11px] font-semibold leading-tight text-ink sm:text-xs">
                      {stage.label}
                    </span>
                  </div>
                  {!isLast && (
                    <ArrowRight
                      className="mt-4 h-4 w-4 shrink-0 text-berry/40"
                      aria-hidden="true"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* Touchpoints */}
        <Reveal delay={0.22} className="mt-16 lg:mt-20">
          <p className="mx-auto max-w-xl text-center text-sm text-muted">
            Personal, timely communication across email and WhatsApp — never generic bulk
            messaging.
          </p>
          <div className="mx-auto mt-6 flex max-w-3xl flex-wrap justify-center gap-2.5">
            {touchpoints.map((item) => (
              <span
                key={item}
                className="rounded-pill border border-border-light bg-white/70 px-4 py-2 text-xs font-medium text-ink sm:text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
