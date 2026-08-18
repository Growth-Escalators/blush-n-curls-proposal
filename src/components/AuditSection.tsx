import { Megaphone, MousePointerClick, Activity, Search, Route, ClipboardList, type LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import IconCircle from "@/components/ui/IconCircle";
import Reveal from "@/components/ui/Reveal";

type Item = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const items: Item[] = [
  {
    icon: Megaphone,
    title: "Paid Media Audit",
    description: "Meta & Google account structure, spend efficiency and wasted budget.",
  },
  {
    icon: MousePointerClick,
    title: "Conversion Audit",
    description: "Every step between a click and a confirmed appointment.",
  },
  {
    icon: Activity,
    title: "Tracking & Measurement Audit",
    description: "What's currently measured — and what's invisible right now.",
  },
  {
    icon: Search,
    title: "SEO / Organic Audit",
    description: "Local search visibility and AI search presence for every branch.",
  },
  {
    icon: Route,
    title: "Customer Journey Audit",
    description: "From first enquiry to booking, appointment and repeat visit.",
  },
  {
    icon: ClipboardList,
    title: "Prioritised Growth Plan",
    description: "Every finding ranked by impact, so we fix what matters first.",
  },
];

export default function AuditSection() {
  return (
    <section id="audit" className="bg-plum py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="The First 7 Days"
          eyebrowColor="gold"
          tone="cream"
          size="lg"
          title="Before We Spend a Single Dirham, We Audit Everything."
          description="No campaign goes live and no budget moves until we understand exactly where Blush N Curls stands today, across every branch."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-5">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={0.06 * (i + 1)}>
                <div className="flex h-full items-start gap-4 rounded-card border border-border-dark bg-plum-soft/70 p-6 transition-colors duration-300 hover:border-berry/30">
                  <IconCircle fill="outline-gold" size="sm" className="mt-0.5">
                    <Icon aria-hidden="true" />
                  </IconCircle>
                  <div>
                    <h3 className="font-serif text-base font-semibold text-cream">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-on-dark">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
