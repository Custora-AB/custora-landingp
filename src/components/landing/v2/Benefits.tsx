import { ClipboardCheck, FileSpreadsheet, FolderLock, UserCheck } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const useCases = [
  { icon: FileSpreadsheet, label: "Share register & cap table" },
  { icon: ClipboardCheck, label: "Regulatory reporting" },
  { icon: UserCheck, label: "KYC collection" },
  { icon: FolderLock, label: "Investor data room" },
];

export function Benefits() {
  return (
    <section className="relative border-t border-border py-20 lg:py-28">
      {/* Faint column rules, echoing the grid the hero sits on */}
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden lg:block">
        <div className="mx-auto flex h-full max-w-[1600px] px-6 sm:px-10 lg:px-14">
          <div className="grid w-full grid-cols-4">
            <div className="border-l border-border/60" />
            <div className="border-l border-border/60" />
            <div className="border-l border-border/60" />
            <div className="border-x border-border/60" />
          </div>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-[1600px] px-6 sm:px-10 lg:px-14">
        <ScrollReveal>
          <div className="mb-8 flex items-center gap-3">
            <span className="h-2.5 w-2.5 bg-accent" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
              Benefits
            </span>
          </div>

          <div className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
            <h2 className="max-w-[14ch] font-sans text-[clamp(2rem,4vw,3.25rem)] font-medium leading-[1.05] tracking-[-0.03em] text-black lg:col-span-6">
              Why asset managers choose Custora
            </h2>

            <p className="max-w-md text-lg leading-relaxed text-muted-foreground lg:col-span-5 lg:col-start-8">
              Custora consolidates the fragmented and inefficient systems asset
              managers use today into one unified platform.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-16 border-t border-border pt-10 lg:mt-20 lg:pt-12">
          <ScrollReveal>
            <div className="mb-7 flex items-center gap-3">
              <span className="h-2.5 w-2.5 bg-accent" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
                Use cases
              </span>
            </div>
          </ScrollReveal>

          <StaggerContainer className="flex flex-wrap gap-3" staggerDelay={0.08}>
            {useCases.map((u) => (
              <StaggerItem key={u.label}>
                <span className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium text-black">
                  <u.icon className="h-4 w-4 text-accent" />
                  {u.label}
                </span>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
