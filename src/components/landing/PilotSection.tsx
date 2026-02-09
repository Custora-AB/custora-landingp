import { CheckCircle } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const benefits = [
  "Early access to the platform before public launch",
  "Direct influence on product roadmap and feature priorities",
  "Dedicated onboarding and migration support",
  "Preferential pricing for pilot participants",
  "Access to the founding advisory network",
];

export function PilotSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <ScrollReveal>
            <h2 className="mb-4">Pilot-driven launch</h2>
            <p className="text-muted-foreground mb-4">
              Custora launches through a curated pilot programme with select companies via our advisory network. We work closely with early adopters to validate and refine the platform.
            </p>
            <p className="text-muted-foreground">
              Pilot customers shape the product — and get a head start on digital ownership infrastructure.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <h3 className="text-lg font-semibold text-foreground mb-6">What pilot customers get</h3>
            <ul className="space-y-4">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{b}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
