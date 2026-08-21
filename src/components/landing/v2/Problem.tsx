import { ArrowRight } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const rows = [
  {
    before: "Ownership data spread across spreadsheets, PDFs, and email threads",
    after: "One structured share register with full version history",
  },
  {
    before: "Regulatory obligations growing across European jurisdictions",
    after: "Reporting workflows built in, with exports ready for audit",
  },
  {
    before: "Investors and boards asking for numbers nobody can confirm",
    after: "Role-based portals where every stakeholder sees the current record",
  },
];

export function Problem() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-accent">
            The shift
          </p>
          <h2 className="font-display text-3xl tracking-tight text-foreground md:text-4xl">
            From fragmented records to connected infrastructure
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Ownership is the one dataset a private company can never get wrong.
            It deserves better than a folder of versions.
          </p>
        </ScrollReveal>

        <StaggerContainer className="mx-auto max-w-4xl divide-y divide-border" staggerDelay={0.12}>
          {rows.map((r) => (
            <StaggerItem
              key={r.before}
              className="grid items-center gap-4 py-7 md:grid-cols-[1fr_auto_1fr] md:gap-8"
            >
              <p className="text-base leading-relaxed text-muted-foreground line-through decoration-destructive/40 decoration-1">
                {r.before}
              </p>
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/10">
                <ArrowRight className="h-4 w-4 rotate-90 text-accent md:rotate-0" />
              </div>
              <p className="text-base font-medium leading-relaxed text-foreground">
                {r.after}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
