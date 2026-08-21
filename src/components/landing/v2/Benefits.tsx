import { ClipboardCheck, FileSpreadsheet, FolderLock, UserCheck } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const useCases = [
  {
    icon: FileSpreadsheet,
    label: "Share register & cap table",
    text: "Keep track of who owns what, across every company in your group. The cap table updates itself whenever shares are issued, sold, or split.",
  },
  {
    icon: ClipboardCheck,
    label: "Regulatory reporting",
    text: "The reports the authorities ask for, on forms that are already set up for you. Save drafts as you go, then export when it is due.",
  },
  {
    icon: UserCheck,
    label: "KYC collection",
    text: "Collect the documents and details you need on every investor in one guided flow. You decide who gets approved.",
  },
  {
    icon: FolderLock,
    label: "Investor data room",
    text: "A safe place to share documents with investors. Everyone sees only the files meant for them, and always the newest version.",
  },
];

export function Benefits() {
  return (
    <section className="relative border-t border-border py-20 lg:py-28">
      <div className="relative mx-auto w-full max-w-[1600px] px-6 sm:px-10 lg:px-14">
        <ScrollReveal>
          <div className="grid gap-6 lg:grid-cols-12 lg:items-center lg:gap-10">
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

        <StaggerContainer
          className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4"
          staggerDelay={0.08}
        >
          {useCases.map((u) => (
            <StaggerItem key={u.label} className="h-full">
              <div className="flex h-full flex-col border border-border bg-card p-6 sm:aspect-square">
                <u.icon className="h-6 w-6 text-accent" strokeWidth={1.5} />

                <div className="mt-auto pt-8">
                  <h3 className="text-base font-medium leading-snug text-black">
                    {u.label}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {u.text}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
