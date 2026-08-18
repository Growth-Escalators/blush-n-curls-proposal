import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

type Milestone = {
  order: string;
  range: string;
  title: string;
  items: string[];
};

const milestones: Milestone[] = [
  {
    order: "1",
    range: "Within 7 Days",
    title: "Complete Growth Audit",
    items: [
      "Paid media audit",
      "Tracking audit",
      "Website / booking flow audit",
      "Offers audit",
      "Creative audit",
      "SEO / local search audit",
      "Customer journey review",
      "Branch setup review",
      "Reporting & measurement review",
    ],
  },
  {
    order: "2",
    range: "Within 15–30 Days",
    title: "Meta Growth System Stabilised",
    items: [
      "Account structure cleanup",
      "Tracking corrections",
      "Audience testing",
      "Offer testing",
      "Creative testing",
      "Campaign direction set",
      "Early winning combinations",
      "First optimisation layer",
    ],
  },
  {
    order: "3",
    range: "Within 45–60 Days",
    title: "Google Growth System Stabilised",
    items: [
      "Campaign restructuring",
      "Keyword strategy",
      "Search-term cleanup",
      "Negative keyword logic",
      "Location + service segmentation",
      "Landing-page alignment",
      "Google conversion tracking",
      "Performance optimisation",
    ],
  },
  {
    order: "4",
    range: "Within 90 Days",
    title: "Scale What Is Proven",
    items: [
      "Scale profitable campaigns",
      "Strongest service + offer combinations identified",
      "Stronger branches & opportunities identified",
      "Conversion improved",
      "Compounding SEO underway",
      "Retention systems activated",
      "Review & repeat frameworks improved",
      "Next-quarter growth plan set",
    ],
  },
];

export default function ExecutionTimelineSection() {
  return (
    <section id="roadmap" className="bg-ivory py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Execution Roadmap"
          align="center"
          size="lg"
          title="Your 7–30–60–90 Day Growth Plan"
          description="No vague retainers. Every phase has a defined, named outcome — from a complete audit, to a stabilised Meta system, to a stabilised Google system, to scaling what's proven to work."
        />

        <div className="relative mt-16 lg:mt-20">
          {/* Connecting line — desktop only */}
          <div
            className="pointer-events-none absolute top-6 right-0 left-0 hidden h-px bg-gradient-to-r from-berry via-gold to-berry lg:block"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {milestones.map((m, i) => (
              <Reveal key={m.order} delay={0.1 * i}>
                <div className="relative flex h-full flex-col">
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-gold bg-ivory shadow-badge">
                    <span className="font-serif text-base font-bold text-berry">
                      {m.order}
                    </span>
                  </div>
                  <div className="mt-6 flex flex-1 flex-col rounded-card border border-border-light bg-white/70 p-6 shadow-card">
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-gold-dark">
                      {m.range}
                    </p>
                    <h3 className="mt-1.5 font-serif text-lg font-semibold leading-snug text-ink">
                      {m.title}
                    </h3>
                    <ul className="mt-4 space-y-1.5 text-[13px] leading-snug text-muted">
                      {m.items.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-berry" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
