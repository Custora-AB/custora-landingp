import { AlertTriangle, ShieldAlert, BarChart3 } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const problems = [
  {
    icon: AlertTriangle,
    title: "Higher risk",
    description: "Ownership data scattered across Excel, Word, and PDF with no audit trail.",
  },
  {
    icon: ShieldAlert,
    title: "Low efficiency",
    description: "Manual processes for corporate actions, compliance and reporting.",
  },
  {
    icon: BarChart3,
    title: "Weaker decision basis",
    description: "No single source of truth — limited transparency for boards and investors.",
  },
];

export function ProblemSection() {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="max-w-2xl mx-auto text-center mb-14">
          <h2 className="mb-4">The problem</h2>
          <p className="text-muted-foreground">
            Ownership data in private companies is still managed manually and fragmented — while regulatory complexity keeps rising.
          </p>
        </ScrollReveal>

        <StaggerContainer
          className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          staggerDelay={0.1}
        >
          {problems.map((p) => (
            <StaggerItem key={p.title} className="text-center space-y-3">
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mx-auto">
                <p.icon className="w-6 h-6 text-destructive" />
              </div>
              <h4 className="text-base font-semibold text-foreground">{p.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
