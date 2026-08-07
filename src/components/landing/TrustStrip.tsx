import { Shield, FileText, Lock } from "lucide-react";

const items = [
  { icon: Shield, label: "GDPR ready" },
  { icon: Lock, label: "Access by role" },
  { icon: FileText, label: "Complete audit log" },
];

export function TrustStrip() {
  return (
    <section className="py-10 lg:py-14 border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-10 lg:gap-16">
          {items.map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-muted-foreground">
              <item.icon className="w-4 h-4" />
              <span className="text-sm font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
