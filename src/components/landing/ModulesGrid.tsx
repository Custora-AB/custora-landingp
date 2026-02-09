import {
  FileSpreadsheet,
  ClipboardCheck,
  UserCheck,
  FolderLock,
} from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const modules = [
  {
    icon: FileSpreadsheet,
    title: "Share register & cap table",
    description:
      "Multi-entity ownership structure with support for ordinary shares, preference shares, and options. Automatic cap table with full dilution view.",
  },
  {
    icon: ClipboardCheck,
    title: "Regulatory reporting",
    description:
      "Structured forms for financial authority reporting — AIF data, ownership structures, and managed capital. Draft versioning and export-ready.",
  },
  {
    icon: UserCheck,
    title: "KYC collection",
    description:
      "Structured investor verification: identity, ownership structure, PEP/AML declarations, and document uploads with manual approval workflow.",
  },
  {
    icon: FolderLock,
    title: "Investor data room",
    description:
      "Controlled document library per company. Role-based access, version history, and download-only sharing for reports, agreements, and presentations.",
  },
];

export function ModulesGrid() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="max-w-2xl mx-auto text-center mb-14">
          <h2 className="mb-4">Core modules</h2>
          <p className="text-muted-foreground">
            Four purpose-built modules that cover the full ownership lifecycle — from register to compliance.
          </p>
        </ScrollReveal>

        <StaggerContainer
          className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto"
          staggerDelay={0.08}
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
