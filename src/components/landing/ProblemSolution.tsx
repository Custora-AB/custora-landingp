import { ArrowRight } from "lucide-react";

const items = [
  {
    problem: "Ownership data scattered across spreadsheets, PDFs, and email threads",
    solution: "A single, structured share register with full version history",
  },
  {
    problem: "Regulatory complexity increasing across European jurisdictions",
    solution: "Built-in compliance workflows and audit-ready exports",
  },
  {
    problem: "Stakeholders lack visibility into their holdings and decisions",
    solution: "Secure portals with role-based access for investors and boards",
  },
];

export function ProblemSolution() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-foreground mb-4">
            From fragmented records to connected infrastructure
          </h2>
          <p className="text-lg text-muted-foreground">
            Private company ownership shouldn't be managed in silos. Custora replaces manual processes with a unified platform.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {items.map((item, index) => (
            <div key={index} className="space-y-6">
              {/* Problem */}
              <div className="card-glass p-6 border-l-2 border-destructive/30">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-2">
                  The challenge
                </p>
                <p className="text-foreground leading-relaxed">
                  {item.problem}
                </p>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 text-teal rotate-90" />
                </div>
              </div>

              {/* Solution */}
              <div className="card-elevated p-6 border-l-2 border-teal">
                <p className="text-sm font-medium text-teal uppercase tracking-wide mb-2">
                  With Custora
                </p>
                <p className="text-foreground leading-relaxed">
                  {item.solution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
