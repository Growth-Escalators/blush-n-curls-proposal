import { Fragment } from "react";
import { ArrowRight, ArrowDown, Quote } from "lucide-react";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import IconCircle from "@/components/ui/IconCircle";
import Reveal from "@/components/ui/Reveal";

type Stage = {
  number: string;
  fill: "rose" | "gold";
  month: string;
  subtitle: string;
  items: string[];
};

const stages: Stage[] = [
  {
    number: "01",
    fill: "rose",
    month: "Month 1",
    subtitle: "Foundation & Measurement",
    items: [
      "Audit & Research",
      "Tracking & Analytics Setup",
      "Campaign & Offer Strategy",
      "Funnel / Website Diagnosis",
      "Quick Win Optimisations",
    ],
  },
  {
    number: "02",
    fill: "rose",
    month: "Month 2",
    subtitle: "Testing & Optimisation",
    items: [
      "Ad & Offer Testing",
      "Landing Page & CRO Improvements",
      "Audience & Creative Optimisation",
      "SEO Improvements",
      "Reporting & Insights",
    ],
  },
  {
    number: "03",
    fill: "gold",
    month: "Month 3",
    subtitle: "Scale What Works",
    items: [
      "Scale Profitable Campaigns",
      "Improve Retention & Repeat Systems",
      "Strengthen SEO & Content",
      "Improve Branch-Level Strategy",
      "Drive More Repeat Revenue",
    ],
  },
];

export default function Roadmap() {
  return (
    <section id="how-we-work" className="bg-blush-tint py-20 md:py-28">
      <Container>
        <Reveal delay={0}>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow color="rose" align="center">
              HOW WE WORK
            </Eyebrow>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-ink sm:text-4xl">
              Our 90-Day Growth Roadmap
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_360px]">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-stretch lg:gap-3">
            {stages.map((stage, index) => {
              const isLast = index === stages.length - 1;
              return (
                <Fragment key={stage.number}>
                  <Reveal delay={0.1 * index} className="lg:flex-1">
                    <div className="h-full rounded-card border border-border-beige bg-ivory p-6 shadow-card">
                      <IconCircle fill={stage.fill} size="md">
                        <span className="font-serif text-lg font-semibold">{stage.number}</span>
                      </IconCircle>
                      <div className="mt-4">
                        <p className="font-semibold text-ink">{stage.month}</p>
                        <p className="text-sm text-muted">{stage.subtitle}</p>
                      </div>
                      <ul className="mt-3 space-y-1.5 text-sm text-muted">
                        {stage.items.map((item) => (
                          <li key={item} className="flex gap-2">
                            <span className="text-rose" aria-hidden="true">
                              •
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                  {!isLast && (
                    <div className="flex items-center justify-center py-1 lg:mt-8 lg:shrink-0 lg:py-0">
                      <ArrowDown
                        className="h-5 w-5 text-rose/40 lg:hidden"
                        aria-hidden="true"
                      />
                      <ArrowRight
                        className="hidden h-6 w-6 text-rose/40 lg:block"
                        aria-hidden="true"
                      />
                    </div>
                  )}
                </Fragment>
              );
            })}
          </div>

          <Reveal delay={0.3} className="h-full">
            <div className="flex h-full flex-col justify-center rounded-card bg-blush-card p-8">
              <Quote
                className="mb-3 h-10 w-10 -scale-x-100 text-rose/40"
                aria-hidden="true"
              />
              <p className="font-serif text-lg italic leading-snug text-ink sm:text-xl">
                We focus on the right customers, the right offers and the right experience — then
                scale what works.
              </p>
              <p className="mt-4 text-sm text-muted">— Growth Escalators Team</p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
