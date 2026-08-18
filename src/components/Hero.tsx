import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function Hero() {
  return (
    <section id="top" className="bg-ivory">
      <Container
        bleed
        className="flex flex-col pt-14 pb-16 lg:grid lg:grid-cols-[1.15fr_1fr] lg:items-center lg:pt-20 lg:pb-24"
      >
        {/* Left: copy */}
        <div className="pl-6 pr-6 sm:pl-8 sm:pr-8 lg:pl-10 lg:pr-8">
          <Reveal>
            <div className="max-w-[560px]">
              <Eyebrow color="rose">PROPOSAL FOR BLUSH N CURLS</Eyebrow>

              <h1 className="mt-4 font-serif text-4xl font-semibold leading-[1.08] text-ink sm:text-5xl lg:text-[3.4rem]">
                Turning Blush N Curls
                <br />
                <span className="text-rose">
                  Into a Predictable
                  <br />
                  Growth Engine
                </span>
              </h1>

              <p className="mt-5 max-w-[440px] text-base text-muted sm:text-lg">
                From acquiring the right customers to increasing repeat
                visits, memberships and lifetime value.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-6">
                <Button
                  href="#packages"
                  variant="solid-rose"
                  className="!px-8 !py-4"
                >
                  Explore the Proposal
                </Button>
                <Button href="#final-cta" variant="text-rose" showArrow>
                  Book a Strategy Call
                </Button>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right: image, bleeds to the viewport's right edge */}
        <div className="relative mt-10 w-full lg:mt-0">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-tl-[2rem] rounded-bl-[2rem] md:aspect-[4/5]">
            <img
              src="/images/hero-model.svg"
              alt="Portrait placeholder for Blush N Curls salon photography"
              className="h-full w-full object-cover"
            />
            {/* Soft blush gradient blending the image into the ivory text column */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-[30%] bg-gradient-to-r from-ivory via-ivory/40 to-transparent" />
          </div>

          {/* Overlapping stat badge */}
          <Reveal delay={0.25}>
            <div className="absolute bottom-8 left-4 flex h-32 w-32 flex-col items-center justify-center rounded-full border-2 border-gold bg-ivory text-center shadow-badge sm:h-36 sm:w-36 lg:-left-6">
              <span className="font-serif text-3xl font-semibold leading-none text-rose">
                3+
              </span>
              <span className="mt-1.5 text-xs font-medium leading-tight text-ink">
                Premium
              </span>
              <span className="text-[11px] leading-tight text-muted">
                Salons in Dubai
              </span>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
