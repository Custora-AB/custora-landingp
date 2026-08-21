import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const steps = [
  {
    number: "01",
    title: "Import",
    text: "Bring in your shareholder data — or start from a clean register. We reconcile the history with you before go-live.",
  },
  {
    number: "02",
    title: "Operate",
    text: "Record issuances, transfers, splits, and governance events. The cap table and every stakeholder view update with them.",
  },
  {
    number: "03",
    title: "Report",
    text: "Export filings, board packs, and audit-ready statements, and share documents through controlled investor access.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-accent">
            How it works
          </p>
          <h2 className="font-display text-3xl tracking-tight text-foreground md:text-4xl">
            Live in weeks, not quarters
          </h2>
        </ScrollReveal>

        <StaggerContainer
          className="relative mx-auto grid max-w-5xl gap-10 md:grid-cols-3 md:gap-8"
          staggerDelay={0.14}
        >
          <div className="absolute left-0 right-0 top-5 hidden h-px bg-border md:block" />
          {steps.map((s) => (
            <StaggerItem key={s.number} className="relative">
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background font-mono text-xs font-semibold text-accent">
                {s.number}
              </div>
              <h3 className="text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
