import { Building2, TrendingUp, Scale, Network } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const audiences = [
  {
    icon: Building2,
    title: "PE & Family Offices",
    description: "Consolidated ownership view across portfolio companies.",
  },
  {
    icon: TrendingUp,
    title: "Growth companies",
    description: "Structured cap table from first share issue to exit.",
  },
  {
    icon: Scale,
    title: "Law firms & auditors",
    description: "Reliable register data for due diligence and compliance.",
  },
  {
    icon: Network,
    title: "Holding & group structures",
    description: "Multi-entity governance in one shared workspace.",
  },
];

export function AudienceCards() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="max-w-2xl mx-auto text-center mb-14">
          <h2 className="mb-4">Built for pilot customers</h2>
          <p className="text-muted-foreground">
            Designed for organisations that manage complex ownership structures.
          </p>
        </ScrollReveal>

        <StaggerContainer
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
          staggerDelay={0.08}
        >
          {audiences.map((a) => (
            <StaggerItem
              key={a.title}
              className="rounded-2xl border border-border bg-card p-7 space-y-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto">
                <a.icon className="w-6 h-6 text-accent" />
              </div>
              <h4 className="text-base font-semibold text-foreground">{a.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{a.description}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
