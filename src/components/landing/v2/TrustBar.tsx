import { FileText, Globe2, Lock, ShieldCheck } from "lucide-react";

const items = [
  { icon: ShieldCheck, label: "GDPR compliant" },
  { icon: Globe2, label: "EU data centres" },
  { icon: Lock, label: "Access by role" },
  { icon: FileText, label: "Complete audit log" },
];

export function TrustBar() {
  return (
    <section className="border-b border-border bg-secondary/60">
      <div className="container mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 lg:gap-x-16">
          {items.map((i) => (
            <div key={i.label} className="flex items-center gap-2 text-muted-foreground">
              <i.icon className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium">{i.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
