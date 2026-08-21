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
      <div className="relative mx-auto w-full max-w-[1600px] px-6 sm:px-10 lg:px-14">
        <ScrollReveal>
          <div className="grid gap-6 lg:grid-cols-12 lg:items-center lg:gap-10">
            <h2 className="font-sans text-[clamp(1.75rem,4vw,3.25rem)] font-medium leading-[1.05] tracking-[-0.03em] text-black lg:col-span-6">
              Tailored solutions for efficiency
              <br />
              in financial operations
            </h2>

            <p className="max-w-md text-lg leading-relaxed text-muted-foreground lg:col-span-6 lg:col-start-7">
              Custora consolidates the fragmented and inefficient systems asset
              managers use today into one unified platform.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer
          className="mt-16 grid grid-cols-2 gap-4 lg:mt-20 lg:grid-cols-4"
          staggerDelay={0.08}
        >
          {useCases.map((u) => (
            <StaggerItem key={u.label}>
              <div className="flex aspect-square flex-col justify-between border border-border bg-card p-6">
                <u.icon className="h-6 w-6 text-accent" strokeWidth={1.5} />
                <span className="text-base font-medium leading-snug text-black">
                  {u.label}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
