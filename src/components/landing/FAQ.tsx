import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const faqs = [
  {
    question: "What types of companies can use Custora?",
    answer: "Custora is designed for private (unlisted) European companies, including startups, growth companies, holding structures, family offices, and PE-backed businesses. We support companies across all EU jurisdictions with multi-entity and group structures.",
  },
  {
    question: "How is Custora different from spreadsheets or traditional cap table tools?",
    answer: "Unlike spreadsheets, Custora provides a connected system where changes automatically flow across your cap table, documents, and stakeholder communications. Unlike US-focused tools, we're built specifically for European legal frameworks, terminology, and compliance requirements.",
  },
  {
    question: "Can I import my existing shareholder data?",
    answer: "Yes. We offer structured data import from spreadsheets and can assist with migrating data from other systems. Our onboarding team ensures your historical records are accurately captured and verified before go-live.",
  },
  {
    question: "Is my data secure and GDPR-compliant?",
    answer: "Absolutely. Custora is built with European data protection at its core. Data is encrypted at rest and in transit, hosted in EU data centres, and we maintain comprehensive audit logs. We're fully GDPR-compliant and can support your data processing agreements.",
  },
  {
    question: "What support do you offer during onboarding?",
    answer: "All plans include onboarding support. Pro and Enterprise customers receive dedicated onboarding specialists who help configure your structure, import data, train your team, and ensure you're productive from day one.",
  },
];

export function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="section bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal className="text-center mb-12">
            <h2 className="mb-6">Frequently asked questions</h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about getting started with Custora.
            </p>
          </ScrollReveal>

          <motion.div ref={ref}>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.08,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="card-elevated px-6 border-none"
                  >
                    <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
