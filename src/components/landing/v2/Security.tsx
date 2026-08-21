import { FileText, Globe2, KeyRound, ShieldCheck } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const points = [
  {
    icon: Globe2,
    title: "European by default",
    text: "Data is hosted in EU data centres and processed under GDPR, with data processing agreements available.",
  },
  {
    icon: KeyRound,
    title: "Access by role",
    text: "Investors, admins, and advisors see only what belongs to them, scoped per entity.",
  },
  {
    icon: FileText,
    title: "Immutable audit log",
    text: "Every change to the register is recorded with actor, timestamp, and prior state.",
  },
  {
    icon: ShieldCheck,
    title: "Encrypted end to end",
    text: "Encryption in transit and at rest, with documents stored under access-controlled keys.",
  },
];

export function Security() {
  return (
    <section id="security" className="scroll-mt-20 bg-navy py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <ScrollReveal>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-accent">
              Security &amp; trust
            </p>
            <h2 className="font-display text-3xl tracking-tight text-white md:text-4xl">
              A record you can defend
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-white/60">
              A share register is a legal artefact before it is a product feature.
              Custora is built so the answer to “who owned what, and when” is always
              provable.
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid gap-x-8 gap-y-9 sm:grid-cols-2" staggerDelay={0.1}>
            {points.map((p) => (
              <StaggerItem key={p.title}>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
                  <p.icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="text-base font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{p.text}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
