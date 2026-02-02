import { Link2, Shield, Users } from "lucide-react";

const features = [
  {
    icon: Link2,
    title: "Connected workflows",
    description: "Changes flow automatically across cap tables, documents, and stakeholder communications.",
  },
  {
    icon: Shield,
    title: "Audit-ready data",
    description: "Complete audit trails and export-ready reports for regulators, auditors, and advisors.",
  },
  {
    icon: Users,
    title: "Role-based access",
    description: "Granular permissions ensure the right people see the right information at the right time.",
  },
];

export function ValueProp() {
  return (
    <section className="section bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-6">Where private ownership connects</h2>
          <p className="text-lg text-muted-foreground">
            Managing ownership in private companies is complex. Multiple stakeholders, 
            evolving cap tables, and compliance requirements demand a single source of truth. 
            Custora brings it all together.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="text-center space-y-4 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-teal-light">
                <feature.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
