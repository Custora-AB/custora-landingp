import {
  FileSpreadsheet,
  ArrowRightLeft,
  Users,
  ClipboardCheck,
  Eye,
  UserCheck,
} from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const modules = [
  {
    icon: FileSpreadsheet,
    title: "Share register & cap table",
    description: "Single source of truth for ownership across entities.",
  },
  {
    icon: ArrowRightLeft,
    title: "Corporate actions",
    description: "Issuances, transfers, and splits — fully auditable.",
  },
  {
    icon: Users,
    title: "Governance workflows",
    description: "Board decisions, minutes, and document logs.",
  },
  {
    icon: ClipboardCheck,
    title: "Compliance-ready exports",
    description: "Audit trails and jurisdiction-specific reporting.",
  },
  {
    icon: Eye,
    title: "Investor portal",
    description: "Controlled access for stakeholders and investors.",
  },
  {
    icon: UserCheck,
    title: "KYC collection",
    description: "Structured intake and manual review workflows.",
  },
];

export function ModulesGrid() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="max-w-2xl mx-auto text-center mb-14">
          <h2 className="mb-4">The solution</h2>
          <p className="text-muted-foreground">
            Custora is a system of record for ownership and governance. Purpose-built modules that work together.
          </p>
        </ScrollReveal>

        <StaggerContainer
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
          staggerDelay={0.06}
        >
          {modules.map((module) => (
            <StaggerItem
              key={module.title}
              className="rounded-2xl border border-border bg-card p-7 space-y-4 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <module.icon className="w-6 h-6 text-accent" />
              </div>
              <h4 className="text-base font-semibold text-foreground">{module.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {module.description}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
