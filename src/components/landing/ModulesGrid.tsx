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
          <h2 className="mb-4">Built for ownership management</h2>
          <p className="text-muted-foreground">
            Purpose-built modules that work together. Start with what you need.
          </p>
        </ScrollReveal>

        <StaggerContainer
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
          staggerDelay={0.06}
        >
          {modules.map((module) => (
            <StaggerItem
              key={module.title}
              className="rounded-xl border border-border bg-card p-6 space-y-3"
            >
              <div className="w-10 h-10 rounded-lg bg-teal-light flex items-center justify-center">
                <module.icon className="w-5 h-5 text-accent" />
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
