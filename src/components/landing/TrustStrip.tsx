import { Shield, FileText, Lock } from "lucide-react";

const trustItems = [
  {
    icon: Shield,
    title: "GDPR-ready",
    description: "Built for European data protection requirements",
  },
  {
    icon: FileText,
    title: "Complete audit log",
    description: "Every action tracked and timestamped",
  },
  {
    icon: Lock,
    title: "Access control",
    description: "Granular role-based permissions",
  },
];

export function TrustStrip() {
  return (
    <section className="py-12 lg:py-16 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {trustItems.map((item, index) => (
            <div
              key={item.title}
              className="flex items-center gap-4 text-center md:text-left justify-center md:justify-start"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-semibold text-primary-foreground">{item.title}</h4>
                <p className="text-sm text-primary-foreground/70">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
