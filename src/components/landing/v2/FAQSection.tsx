import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { faqs } from "./content";

export function FAQSection() {
  return (
    <section id="faq" className="scroll-mt-20 py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal className="mb-12 text-center">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-accent">
              Questions
            </p>
            <h2 className="font-display text-3xl tracking-tight text-foreground md:text-4xl">
              Frequently asked
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <Accordion type="single" collapsible className="divide-y divide-border border-y border-border">
              {faqs.map((f, i) => (
                <AccordionItem key={f.question} value={`item-${i}`} className="border-none">
                  <AccordionTrigger className="py-5 text-left font-medium text-foreground hover:no-underline">
                    {f.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 pr-6 leading-relaxed text-muted-foreground">
                    {f.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
