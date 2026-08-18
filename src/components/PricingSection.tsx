import {
  Check,
  CalendarCheck,
  TrendingDown,
  RefreshCw,
  Gift,
  Star,
  BarChart3,
  type LucideIcon,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import IconCircle from "@/components/ui/IconCircle";
import Reveal from "@/components/ui/Reveal";

const performanceFeatures = [
  "Meta Ads Management",
  "Google Ads Management",
  "Ad Creatives – Static + Video Editing",
  "Creative Strategy",
  "Offer Testing using Existing Offers",
  "Analytics & Performance Reporting",
  "SEO Recommendations",
  "Conversion Insights & Recommendations",
];

const growthFeatures = [
  "Website CRO & Premium UI/UX Improvements",
  "Landing Pages & Conversion Optimisation",
  "Offer Creation & Testing Framework",
  "Full SEO – On-page, Technical & Local",
  "AI Search / Generative Engine Optimisation",
  "Email Marketing & Customer Lifecycle",
  "WhatsApp Marketing & Automation",
  "Retention Systems & Membership Activation",
  "Review Growth & Reputation Management",
  "Growth Intelligence Dashboard",
  "Branch & Service Performance Analysis",
];

const benefits: { icon: LucideIcon; label: string }[] = [
  { icon: CalendarCheck, label: "More Bookings" },
  { icon: TrendingDown, label: "Lower Acquisition Cost" },
  { icon: RefreshCw, label: "Higher Repeat Rate" },
  { icon: Gift, label: "More Memberships" },
  { icon: Star, label: "Stronger Reputation" },
  { icon: BarChart3, label: "Clearer Growth Insights" },
];

function FeatureList({
  items,
  colorClass,
}: {
  items: string[];
  colorClass: string;
}) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-ink text-sm">
          <Check className={`h-4 w-4 mt-0.5 shrink-0 ${colorClass}`} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function PricingSection() {
  return (
    <section id="packages" className="bg-cream-tint py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-2xl">
          <Eyebrow color="rose" align="center">
            CHOOSE HOW WE WORK TOGETHER
          </Eyebrow>
          <h2 className="mt-4 font-serif text-ink text-3xl sm:text-4xl font-semibold text-center">
            Our Partnership Options
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-6 items-start">
          {/* Card A — Performance Package */}
          <Reveal delay={0}>
            <div className="bg-ivory rounded-card border border-border-beige shadow-card p-8 flex flex-col">
              <h3 className="font-serif text-ink text-xl font-semibold">
                Performance Package
              </h3>
              <p className="mt-2 text-muted text-sm">
                For brands looking to improve customer acquisition.
              </p>

              <div className="mt-6">
                <div className="flex items-baseline gap-1.5">
                  <span className="font-serif text-rose text-3xl font-semibold">
                    AED 2,500
                  </span>
                  <span className="font-sans text-muted text-sm font-normal">
                    /month
                  </span>
                </div>
                <p className="mt-1 text-muted text-xs">
                  Approx. ₹60,000/month
                </p>
              </div>

              <div className="mt-7">
                <FeatureList items={performanceFeatures} colorClass="text-rose" />
              </div>

              <div className="mt-auto pt-6">
                <Button
                  href="#final-cta"
                  variant="outline-rose"
                  className="w-full !py-3.5"
                >
                  Choose Performance Package
                </Button>
              </div>
            </div>
          </Reveal>

          {/* Card B — Growth Partnership (elevated / dominant) */}
          <Reveal delay={0.1}>
            <div className="lg:-mt-6 lg:mb-[-6px] bg-ivory rounded-card-lg border-2 border-gold/60 shadow-elevated overflow-hidden flex flex-col">
              <div className="bg-gold text-cream-text text-center text-[11px] font-semibold uppercase tracking-[0.15em] py-2.5">
                RECOMMENDED FOR BLUSH N CURLS
              </div>

              <div className="p-8 lg:pb-9 flex flex-col flex-1">
                <h3 className="font-serif text-ink text-xl font-semibold">
                  Growth Partnership
                </h3>
                <p className="mt-2 text-muted text-sm">
                  For brands looking to improve acquisition, conversion,
                  retention and long-term growth.
                </p>

                <div className="mt-6">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-serif text-gold text-3xl font-semibold">
                      AED 4,000
                    </span>
                    <span className="font-sans text-muted text-sm font-normal">
                      /month
                    </span>
                  </div>
                  <p className="mt-1 text-muted text-xs">
                    Approx. ₹1,00,000/month
                  </p>
                </div>

                <p className="mt-7 text-ink text-sm font-semibold">
                  Everything in the Performance Package, plus:
                </p>

                <div className="mt-3">
                  <FeatureList items={growthFeatures} colorClass="text-gold" />
                </div>

                <div className="mt-auto pt-6">
                  <Button
                    href="#final-cta"
                    variant="solid-gold"
                    className="w-full !py-3.5"
                  >
                    Choose Growth Partnership
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Card C — Why Growth Partnership */}
          <Reveal delay={0.2}>
            <div className="bg-ivory/60 rounded-card p-8">
              <h3 className="font-serif text-ink text-xl font-semibold">
                Why Growth Partnership?
              </h3>
              <p className="mt-3 text-muted text-sm leading-relaxed">
                Advertising is just the start. We build the entire engine
                that attracts, converts, retains and grows your best
                customers.
              </p>

              <div className="mt-4">
                {benefits.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 py-3 border-b border-border-beige last:border-b-0"
                  >
                    <IconCircle fill="blush" size="sm">
                      <Icon />
                    </IconCircle>
                    <span className="text-ink text-sm font-medium">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
