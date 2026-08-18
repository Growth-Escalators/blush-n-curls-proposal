import { Check, MessageCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

const trustPoints = [
  "Free Growth Consultation",
  "Custom Strategy for Your Goals",
  "Transparent Reporting",
  "A True Growth Partnership",
];

export default function FinalCTA() {
  return (
    <section id="final-cta" className="relative bg-cream-tint">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-[26%] h-64 lg:h-auto relative overflow-hidden shrink-0">
          <img
            src="/images/final-cta-salon.svg"
            alt="Placeholder salon interior for Blush N Curls"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex-1 py-16 md:py-24 px-6 sm:px-10 lg:px-16 flex flex-col items-center lg:items-start justify-center text-center lg:text-left">
          <Reveal>
            <div className="flex flex-col items-center lg:items-start">
              <h2 className="font-serif text-ink text-3xl sm:text-4xl font-semibold leading-tight max-w-xl">
                Let&apos;s Build the Next Stage of Blush N Curls
              </h2>
              <p className="text-muted text-base max-w-lg pt-4">
                Ready to turn your existing brand momentum into a more
                predictable growth system?
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 pt-8">
                <Button href="#" variant="solid-rose">
                  Book a Strategy Call
                </Button>
                <Button
                  href="#"
                  variant="text-rose"
                  icon={<MessageCircle className="h-4 w-4" />}
                  showArrow
                >
                  WhatsApp Us
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 pt-10 text-left">
                {trustPoints.map((label) => (
                  <div
                    key={label}
                    className="flex items-center gap-2.5 text-ink text-sm"
                  >
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gold/60 text-gold">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </div>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
