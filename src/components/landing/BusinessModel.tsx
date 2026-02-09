import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const tiers = [
  {
    name: "Base",
    description: "Share register and basic corporate actions for single entities.",
    features: ["Digital share register", "Cap table management", "Basic reporting"],
  },
  {
    name: "Pro",
    description: "Full governance, compliance engine, and investor portal.",
    features: ["Everything in Base", "Governance workflows", "Compliance exports", "Investor portal"],
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "Multi-entity management with custom integrations and SLA.",
    features: ["Everything in Pro", "Multi-entity workspace", "Custom integrations", "Dedicated support"],
  },
];

export function BusinessModel() {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="max-w-2xl mx-auto text-center mb-14">
          <h2 className="mb-4">SaaS subscription per company</h2>
          <p className="text-muted-foreground">
            Simple tiers that scale with your needs. Add-ons available for specialised workflows.
          </p>
        </ScrollReveal>

        <StaggerContainer
          className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          staggerDelay={0.08}
        >
          {tiers.map((tier) => (
            <StaggerItem
              key={tier.name}
              className={`rounded-2xl border p-7 space-y-5 transition-all duration-300 ${
                tier.highlighted
                  ? "border-accent bg-card shadow-lg"
                  : "border-border bg-card hover:border-accent/40 hover:shadow-lg hover:-translate-y-1"
              }`}
            >
              <div>
                <h4 className="text-lg font-semibold text-foreground">{tier.name}</h4>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  {tier.description}
                </p>
              </div>
              <ul className="space-y-2">
                {tier.features.map((f) => (
                  <li key={f} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
