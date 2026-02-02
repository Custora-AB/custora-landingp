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
    description: "Multi-company support with share classes, options, warrants, and convertibles. Always up to date.",
    features: ["Multi-entity structures", "Share classes & instruments", "Real-time valuations"],
  },
  {
    icon: ArrowRightLeft,
    title: "Corporate actions",
    description: "Execute issuances, transfers, splits, and redemptions with full documentation and audit trails.",
    features: ["Issuances & transfers", "Stock splits", "Redemptions"],
  },
  {
    icon: Users,
    title: "Governance",
    description: "Board decisions, meeting minutes, and document management in one structured environment.",
    features: ["Board resolutions", "Minutes & decisions", "Document archive"],
  },
  {
    icon: ClipboardCheck,
    title: "Compliance workflows",
    description: "Stay audit-ready with comprehensive trails, automated exports, and regulator-friendly reports.",
    features: ["Audit trail", "Automated exports", "Compliance reports"],
  },
  {
    icon: Eye,
    title: "Investor portal",
    description: "Give stakeholders controlled access to their holdings, documents, and company updates.",
    features: ["Self-service access", "Document sharing", "Real-time holdings"],
  },
  {
    icon: UserCheck,
    title: "KYC (light)",
    description: "Structured collection of investor information with manual approval workflows.",
    features: ["Document collection", "Manual review", "Approval workflows"],
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
