import { Building2, Settings, Share2 } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const steps = [
  {
    number: "01",
    icon: Building2,
    title: "Set up your company",
    description: "Import existing shareholder data or start fresh. Configure share classes, entities, and initial cap table structure in minutes.",
  },
  {
    number: "02",
    icon: Settings,
    title: "Manage events",
    description: "Record corporate actions, board decisions, and ownership changes. Every event is tracked, timestamped, and linked to supporting documents.",
  },
  {
    number: "03",
    icon: Share2,
    title: "Export & share",
    description: "Generate audit-ready reports, share updates with stakeholders, and export data for regulators and advisors whenever needed.",
  },
];

export function HowItWorks() {
  return (
    <section className="section bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-6">How it works</h2>
          <p className="text-lg text-muted-foreground">
            Get started quickly. Stay organised effortlessly. Share with confidence.
          </p>
        </ScrollReveal>

        <div className="max-w-5xl mx-auto">
          <StaggerContainer className="grid md:grid-cols-3 gap-8 lg:gap-12 relative" staggerDelay={0.15}>
            {/* Connecting line (desktop only) */}
            <div className="hidden md:block absolute top-16 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-border via-accent/30 to-border" />

            {steps.map((step) => (
              <StaggerItem key={step.number} className="relative text-center">
                {/* Step number circle */}
                <div className="relative inline-flex items-center justify-center w-32 h-32 mb-6">
                  <div className="absolute inset-0 bg-teal-light rounded-full" />
                  <div className="absolute inset-2 bg-card rounded-full shadow-md flex items-center justify-center">
                    <step.icon className="w-10 h-10 text-accent" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
