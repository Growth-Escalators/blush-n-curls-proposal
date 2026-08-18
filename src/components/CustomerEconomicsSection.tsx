import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const FLOW = [
  "Marketing Spend",
  "Enquiries",
  "Bookings",
  "Appointments",
  "Revenue",
  "Repeat Visits",
  "Lifetime Value",
];

export default function CustomerEconomicsSection() {
  return (
    <section id="economics" className="bg-wine py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Customer Economics"
          eyebrowColor="gold"
          align="center"
          tone="cream"
          size="lg"
          title="We Don't Just Optimise Ads. We Optimise Customer Economics."
          description="The goal isn't the cheapest lead — it's understanding the full path from spend to lifetime value, and which combination of service, offer, audience and branch produces it."
        />

        {/* Flow chain */}
        <Reveal delay={0.1} className="mt-16 lg:mt-20">
          <div className="flex flex-wrap items-center justify-center gap-x-1.5 gap-y-4">
            {FLOW.map((stage, index) => (
              <div key={stage} className="flex items-center gap-1.5">
                <span className="whitespace-nowrap rounded-pill border border-border-dark bg-wine-soft/70 px-4 py-2.5 text-xs font-semibold text-cream sm:px-5 sm:text-sm">
                  {stage}
                </span>
                {index < FLOW.length - 1 && (
                  <ArrowRight className="h-4 w-4 shrink-0 text-gold/60" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
        </Reveal>

        {/* Restrained callout — the one question this proposal keeps coming back to */}
        <Reveal delay={0.22} className="mt-14 lg:mt-16">
          <div className="mx-auto max-w-2xl border-t border-gold/25 pt-10 text-center">
            <p className="text-[15px] leading-relaxed text-muted-on-dark">
              Which combination actually produces your most valuable customers?
            </p>
            <p className="mt-3 font-serif text-xl font-semibold leading-snug text-cream sm:text-2xl">
              Which service + offer + audience + branch creates the most valuable customers.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
