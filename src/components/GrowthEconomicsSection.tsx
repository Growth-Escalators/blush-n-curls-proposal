import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const flowStages = [
  "Marketing Spend",
  "Enquiries",
  "Bookings",
  "Appointments",
  "Revenue",
  "Repeat Visits",
  "Customer Lifetime Value",
];

export default function GrowthEconomicsSection() {
  return (
    <section id="economics" className="bg-ivory py-20 md:py-28">
      <Container>
        <Reveal>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-ink text-3xl sm:text-4xl font-medium leading-tight">
              We Don&apos;t Just Optimise Ads.
              <br />
              <span className="text-rose">
                We Optimise Customer Economics.
              </span>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-2 gap-y-4">
            {flowStages.map((stage, index) => (
              <div key={stage} className="flex items-center gap-x-2">
                <span className="bg-blush-tint text-ink text-xs sm:text-sm font-medium rounded-pill px-4 py-2 border border-border-beige whitespace-nowrap">
                  {stage}
                </span>
                {index < flowStages.length - 1 && (
                  <ArrowRight className="h-4 w-4 shrink-0 text-rose/40" />
                )}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-14">
            <p className="max-w-2xl mx-auto text-center text-muted text-[15px] leading-relaxed">
              The goal is not simply to identify which campaign generates the
              cheapest lead. The goal is to identify:
            </p>
            <p className="mt-3 max-w-2xl mx-auto text-center text-ink font-semibold font-serif text-lg">
              Which service + offer + audience + branch produces the most
              valuable customers.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
