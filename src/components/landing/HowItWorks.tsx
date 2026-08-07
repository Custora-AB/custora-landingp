import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const steps = [
  { number: "01", text: "Import your shareholder data or start fresh." },
  { number: "02", text: "Record corporate actions and governance events." },
  { number: "03", text: "Export reports ready for audit and share with stakeholders." },
];

export function HowItWorks() {
  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="mb-4">How it works</h2>
        </ScrollReveal>

        <StaggerContainer
          className="max-w-3xl mx-auto grid md:grid-cols-3 gap-8"
          staggerDelay={0.12}
        >
          {steps.map((step) => (
            <StaggerItem key={step.number} className="text-center">
              <span className="inline-block text-sm font-bold text-accent mb-2">
                {step.number}
              </span>
              <p className="text-foreground font-medium">{step.text}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
