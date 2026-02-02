import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Base",
    description: "For companies starting their ownership journey",
    features: [
      "Single entity cap table",
      "Basic share register",
      "Document storage",
      "Email support",
      "Standard exports",
    ],
    cta: "Get started",
    highlighted: false,
  },
  {
    name: "Pro",
    description: "For growing companies with complex structures",
    features: [
      "Multi-entity support",
      "All share instruments",
      "Corporate actions",
      "Governance module",
      "Investor portal",
      "Priority support",
      "Custom exports",
    ],
    cta: "Request a demo",
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "For PE firms, family offices, and holding structures",
    features: [
      "Unlimited entities",
      "Full module access",
      "Compliance workflows",
      "KYC collection",
      "API access",
      "Dedicated support",
      "Custom integrations",
      "SLA guarantee",
    ],
    cta: "Contact sales",
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section className="section bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-6">Simple, transparent pricing</h2>
          <p className="text-lg text-muted-foreground">
            Choose the plan that fits your needs. All plans include core ownership management 
            features with no hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl p-6 lg:p-8 animate-slide-up ${
                tier.highlighted
                  ? "bg-primary text-primary-foreground shadow-xl scale-105 lg:scale-110"
                  : "card-elevated"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {tier.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                  Most popular
                </div>
              )}

              <div className="space-y-4 mb-8">
                <h3 className={`text-2xl font-bold ${tier.highlighted ? "" : "text-foreground"}`}>
                  {tier.name}
                </h3>
                <p className={`text-sm ${tier.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                  {tier.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${tier.highlighted ? "text-accent" : "text-accent"}`} />
                    <span className={`text-sm ${tier.highlighted ? "text-primary-foreground/90" : "text-muted-foreground"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={tier.highlighted ? "heroSecondary" : "hero"}
                className="w-full"
              >
                {tier.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
