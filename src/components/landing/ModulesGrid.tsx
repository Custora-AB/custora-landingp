import {
  FileSpreadsheet,
  ArrowRightLeft,
  Users,
  ClipboardCheck,
  Eye,
  UserCheck,
} from "lucide-react";

const modules = [
  {
    icon: FileSpreadsheet,
    title: "Share register & cap table",
    description: "Maintain accurate ownership records across multiple entities. Track share classes, options, and convertibles in one place.",
    features: ["Multi-entity structures", "Share classes & instruments", "Version history"],
  },
  {
    icon: ArrowRightLeft,
    title: "Corporate actions",
    description: "Execute transfers, issuances, and splits with proper documentation. Every change is logged and traceable.",
    features: ["Issuances & transfers", "Stock splits", "Full audit trail"],
  },
  {
    icon: Users,
    title: "Governance",
    description: "Organise board decisions, resolutions, and minutes. Keep all governance records structured and accessible.",
    features: ["Board resolutions", "Meeting minutes", "Document archive"],
  },
  {
    icon: ClipboardCheck,
    title: "Compliance workflows",
    description: "Generate audit-ready exports and jurisdiction-specific reports. Stay prepared for regulatory requests.",
    features: ["Automated exports", "Compliance reports", "Audit preparation"],
  },
  {
    icon: Eye,
    title: "Investor portal",
    description: "Give stakeholders secure access to their holdings and documents. Reduce manual reporting requests.",
    features: ["Self-service access", "Document sharing", "Holdings overview"],
  },
  {
    icon: UserCheck,
    title: "KYC (light)",
    description: "Collect and verify investor information with structured forms. Review and approve submissions manually.",
    features: ["Document collection", "Manual review", "Approval workflow"],
  },
];

export function ModulesGrid() {
  return (
    <section className="section bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-6">Everything you need to manage private ownership</h2>
          <p className="text-lg text-muted-foreground">
            Purpose-built modules that work together seamlessly. Start with what you need, 
            expand as you grow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {modules.map((module, index) => (
            <div
              key={module.title}
              className="card-elevated p-6 lg:p-8 space-y-4 animate-slide-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-teal-light flex items-center justify-center">
                  <module.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{module.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{module.description}</p>
                </div>
              </div>
              
              <div className="pt-4 border-t border-border">
                <ul className="space-y-2">
                  {module.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
