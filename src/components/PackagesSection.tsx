import { Check } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

const performanceFeatures = [
  "Meta Ads Management",
  "Google Ads Management",
  "Ad Creatives — Static + Video Editing Using Supplied Content",
  "Creative Strategy",
  "Offer Testing Using Existing Offers",
  "Analytics & Performance Reporting",
  "SEO Recommendations",
  "Conversion Insights & Recommendations",
];

const growthFeatures = [
  "Website CRO & Premium UI/UX Improvements",
  "Landing Pages & Conversion Optimisation",
  "Offer Creation & Testing Framework",
  "SEO — On-Page, Technical & Local",
  "AI Search / Generative Engine Optimisation",
  "Email Marketing & Lifecycle Communication",
  "WhatsApp Marketing & Automation",
  "Retention Systems & Membership Activation",
  "Review Growth & Reputation Management",
  "Growth Intelligence Dashboard",
  "Branch & Service Performance Analysis",
];

function FeatureList({ items, colorClass }: { items: string[]; colorClass: string }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-[13.5px] leading-snug text-ink">
          <Check className={`mt-0.5 h-4 w-4 shrink-0 ${colorClass}`} strokeWidth={2.5} aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function PackagesSection() {
  return (
    <section id="packages" className="bg-ivory py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Partnership Options"
          eyebrowColor="berry"
          align="center"
          size="lg"
          title="Two Ways To Work Together"
          description="Both partnerships are built on the same foundation. The difference is how much of the growth system we build around your advertising."
        />

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-8 lg:mt-16 lg:grid-cols-2 lg:gap-8">
          {/* Card A — Performance Package */}
          <Reveal delay={0}>
            <div className="flex h-full flex-col rounded-card-lg border border-border-light bg-white/70 p-8 shadow-card sm:p-9">
              <h3 className="font-serif text-xl font-semibold text-ink sm:text-2xl">
                Performance Package
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                A focused acquisition partnership.
              </p>

              <div className="mt-7">
                <div className="flex items-baseline gap-1.5">
                  <span className="font-serif text-3xl font-bold text-berry sm:text-4xl">
                    AED 2,500
                  </span>
                  <span className="text-sm font-medium text-muted">/month</span>
                </div>
                <p className="mt-1 text-xs text-muted">Approx. ₹60,000/month</p>
              </div>

              <div className="mt-8 flex-1">
                <FeatureList items={performanceFeatures} colorClass="text-berry" />
              </div>

              <div className="mt-8">
                <Button href="#contact" variant="outline-berry" className="w-full !py-3.5">
                  Choose Performance Package
                </Button>
              </div>
            </div>
          </Reveal>

          {/* Card B — Growth Partnership (featured) */}
          <Reveal delay={0.1}>
            <div className="relative flex h-full flex-col overflow-hidden rounded-card-lg border-2 border-gold bg-plum shadow-elevated lg:-mt-4 lg:mb-[-4px]">
              <div className="bg-gold py-2.5 text-center text-[11px] font-bold uppercase tracking-[0.18em] text-plum">
                Recommended For Blush N Curls
              </div>

              <div className="flex flex-1 flex-col p-8 sm:p-9">
                <h3 className="font-serif text-xl font-semibold text-cream sm:text-2xl">
                  Growth Partnership
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-on-dark">
                  A complete growth system across acquisition, conversion and retention.
                </p>

                <div className="mt-7">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-serif text-3xl font-bold text-gold sm:text-4xl">
                      AED 4,000
                    </span>
                    <span className="text-sm font-medium text-muted-on-dark">/month</span>
                  </div>
                  <p className="mt-1 text-xs text-muted-on-dark">Approx. ₹1,00,000/month</p>
                </div>

                <p className="mt-8 text-sm font-semibold text-cream">
                  Everything in Performance, plus:
                </p>

                <div className="mt-4 flex-1">
                  <FeatureListDark items={growthFeatures} />
                </div>

                <div className="mt-8">
                  <Button href="#contact" variant="solid-gold" className="w-full !py-3.5">
                    Choose Growth Partnership
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Distinguishing line — make the difference between packages unmistakable */}
        <Reveal delay={0.2} className="mt-12 lg:mt-14">
          <p className="mx-auto max-w-2xl text-center font-serif text-base italic leading-relaxed text-ink sm:text-lg">
            Performance improves advertising.{" "}
            <span className="text-berry not-italic font-semibold">
              Growth Partnership builds the full growth system around it.
            </span>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

function FeatureListDark({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-[13.5px] leading-snug text-muted-on-dark">
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={2.5} aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
