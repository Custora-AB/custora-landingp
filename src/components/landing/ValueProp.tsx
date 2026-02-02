import { Link2, Shield, Users } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

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
        <ScrollReveal className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-6">Where private ownership connects</h2>
          <p className="text-lg text-muted-foreground">
            Managing ownership in private companies is complex. Multiple stakeholders, 
            evolving cap tables, and compliance requirements demand a single source of truth. 
            Custora brings it all together.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-3 gap-8 lg:gap-12" staggerDelay={0.12}>
          {features.map((feature) => (
            <StaggerItem key={feature.title} className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-teal-light">
                <feature.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
