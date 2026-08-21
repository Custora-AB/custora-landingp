import { ClipboardCheck, FileSpreadsheet, FolderLock, UserCheck } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const useCases = [
  {
    icon: FileSpreadsheet,
    label: "Share register & cap table",
    text: "Keep track of who owns what, across every company in your group.",
  },
  {
    icon: ClipboardCheck,
    label: "Regulatory reporting",
    text: "The reports the authorities ask for, on forms that are already set up for you.",
  },
  {
    icon: UserCheck,
    label: "KYC collection",
    text: "Collect the documents and details you need on every investor in one guided flow.",
  },
  {
    icon: FolderLock,
    label: "Investor data room",
    text: "A safe place to share documents with investors.",
  },
];

export function Benefits() {
  return (
    <section id="solutions" className="relative py-20 lg:py-28">
      <div className="relative mx-auto w-full max-w-[1600px] px-6 sm:px-10 lg:px-14">
        <ScrollReveal>
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-10">
            <h2 className="font-sans text-[clamp(1.75rem,4vw,3.25rem)] font-medium leading-[1.05] tracking-[-0.03em] text-black lg:col-span-6">
              Tailored solutions for
              <br />
              efficiency in ownership
              <br />
              and compliance.
            </h2>

            <p className="max-w-md text-lg leading-relaxed text-muted-foreground lg:col-span-6 lg:col-start-7">
              Custora consolidates the fragmented and inefficient systems asset
              managers use today into one unified platform.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative mt-16 lg:mt-20">
          <ScrollReveal>
            <div className="mb-8 flex items-center gap-3.5 pl-[29px]">
              <span className="h-4 w-4 shrink-0 bg-accent" />
              <span className="font-mono text-base font-semibold uppercase leading-none tracking-[0.22em] text-black">
                Solutions
              </span>
            </div>
          </ScrollReveal>

          <StaggerContainer
            className="relative z-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
            staggerDelay={0.08}
          >
            {useCases.map((u) => (
              <StaggerItem key={u.label} className="h-full">
                <div className="flex h-full flex-col border border-border bg-card p-7">
                  <u.icon className="h-7 w-7 text-accent" strokeWidth={1.5} />

                  <h3 className="mt-10 text-2xl font-normal leading-snug tracking-tight text-black">
                    {u.label}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    {u.text}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
