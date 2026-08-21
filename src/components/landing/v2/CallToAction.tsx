import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

interface CallToActionProps {
  onPilotClick: () => void;
}

export function CallToAction({ onPilotClick }: CallToActionProps) {
  return (
    <section className="pb-20 lg:pb-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-navy px-8 py-14 text-center lg:px-16 lg:py-20">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/20 blur-[100px]" />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl font-display text-3xl tracking-tight text-white md:text-4xl">
              Be one of the first companies on Custora
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/60">
              Pilot customers help shape the product and get hands-on onboarding,
              migration support, and direct access to the team building it.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Button
                size="lg"
                onClick={onPilotClick}
                className="group bg-white text-navy hover:bg-white/90"
              >
                Become pilot customer
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <Button
                size="lg"
                variant="ghost"
                asChild
                className="border border-white/15 text-white hover:bg-white/10 hover:text-white"
              >
                <a href="mailto:hello@custora.se">Talk to us</a>
              </Button>
            </div>
            <p className="mt-6 text-xs text-white/40">
              No commitment. We respect your privacy — GDPR compliant.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
