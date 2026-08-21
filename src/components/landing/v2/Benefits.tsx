import { ClipboardCheck, FileSpreadsheet, FolderLock, UserCheck } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const useCases = [
  {
    icon: FileSpreadsheet,
    label: "Share register & cap table",
    points: [
      "Multiple entities — holding and subsidiaries",
      "Ordinary shares, preference shares, and options with vesting",
      "Corporate actions: issuance, transfer, split, redemption",
      "Automatic cap table with a full dilution view",
      "Export as PDF or CSV/Excel",
    ],
  },
  {
    icon: ClipboardCheck,
    label: "Regulatory reporting",
    points: [
      "Predefined forms based on FI requirements",
      "AIF reporting, ownership structure, managed capital",
      "Draft versioning and history by period",
      "Ready to export in PDF and Excel",
    ],
  },
  {
    icon: UserCheck,
    label: "KYC collection",
    points: [
      "Guided flow: identity, ownership, PEP/AML",
      "Document upload for ID and corporate records",
      "Status tracking: pending, in progress, approved, rejected",
      "Approval workflow controlled by admins",
    ],
  },
  {
    icon: FolderLock,
    label: "Investor data room",
    points: [
      "Folder structure for reports, agreements, presentations",
      "Access by role — investor or admin — per entity",
      "Version history with the latest version visible",
      "Download only, no editing",
    ],
  },
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
          className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4"
          staggerDelay={0.08}
        >
          {useCases.map((u) => (
            <StaggerItem key={u.label} className="h-full">
              <div className="flex h-full flex-col border border-border bg-card p-6">
                <u.icon className="h-6 w-6 text-accent" strokeWidth={1.5} />

                <h3 className="mt-6 text-base font-medium leading-snug text-black">
                  {u.label}
                </h3>

                <ul className="mt-5 space-y-2.5">
                  {u.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5">
                      <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span className="text-sm leading-relaxed text-muted-foreground">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
