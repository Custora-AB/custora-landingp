import { ScrollReveal } from "@/components/ui/scroll-reveal";

const milestones = [
  { date: "Jan 2026", label: "MVP development starts" },
  { date: "Q1 2026", label: "First pilot version live" },
  { date: "Q3 2026", label: "Full platform launch" },
];

export function Timeline() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="max-w-2xl mx-auto text-center mb-14">
          <h2 className="mb-4">Roadmap</h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="max-w-3xl mx-auto">
          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-0">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-5 left-0 right-0 h-px bg-border" />

            {milestones.map((m, i) => (
              <div key={m.date} className="relative flex flex-col items-center text-center z-10 flex-1">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold mb-3 ${
                    i === 0
                      ? "bg-accent text-accent-foreground"
                      : "bg-secondary text-foreground border border-border"
                  }`}
                >
                  {i + 1}
                </div>
                <span className="text-sm font-semibold text-foreground">{m.date}</span>
                <span className="text-sm text-muted-foreground mt-1">{m.label}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
