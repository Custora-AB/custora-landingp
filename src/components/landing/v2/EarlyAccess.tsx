import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { WaitlistForm } from "./WaitlistForm";

export function EarlyAccess() {
  return (
    <section className="px-6 pb-28 pt-16 sm:px-10 lg:px-14 lg:pb-40 lg:pt-24">
      <div className="mx-auto max-w-[1600px] text-center">
        <ScrollReveal>
          <h2 className="font-sans text-[clamp(2rem,5vw,4rem)] font-medium leading-[1.05] tracking-[-0.035em] text-black">
            Get early access.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mt-10">
          <WaitlistForm centered />
        </ScrollReveal>
      </div>
    </section>
  );
}
