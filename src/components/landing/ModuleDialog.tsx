import { useState } from "react";
import { X, FileSpreadsheet, ClipboardCheck, UserCheck, FolderLock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface ModuleInfo {
  icon: typeof FileSpreadsheet;
  title: string;
  tagline: string;
  details: string[];
}

export const modules: ModuleInfo[] = [
  {
    icon: FileSpreadsheet,
    title: "Share register & cap table",
    tagline: "Accurate, up-to-date ownership structure per entity.",
    details: [
      "Multi-entity support (holding + subsidiaries)",
      "Ordinary shares, preference shares, and options with vesting",
      "Corporate actions: issuance, transfer, split, redemption",
      "Automatic cap table with full dilution view",
      "Export as PDF or CSV/Excel",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Regulatory reporting",
    tagline: "Structured data collection for financial authority filings.",
    details: [
      "Pre-defined forms based on FI requirements",
      "AIF reporting, ownership structure, managed capital",
      "Draft versioning and period-based history",
      "Export-ready in PDF and Excel",
    ],
  },
  {
    icon: UserCheck,
    title: "KYC collection",
    tagline: "Structured investor verification with manual approval.",
    details: [
      "Step-by-step flow: identity, ownership, PEP/AML",
      "Document upload (ID, corporate docs)",
      "Status tracking: pending, in progress, approved, rejected",
      "Admin-controlled approval workflow",
    ],
  },
  {
    icon: FolderLock,
    title: "Investor data room",
    tagline: "Controlled document sharing per company and investor.",
    details: [
      "Folder structure: reports, agreements, presentations",
      "Role-based access (investor / admin) per entity",
      "Version history with latest version visible",
      "Download-only — no editing",
    ],
  },
];

interface ModuleDialogProps {
  module: ModuleInfo | null;
  onClose: () => void;
}

export function ModuleDialog({ module, onClose }: ModuleDialogProps) {
  return (
    <AnimatePresence>
      {module && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative z-10 w-full max-w-md mx-4 rounded-2xl shadow-xl overflow-hidden"
            style={{
              background: "linear-gradient(to right, hsl(var(--primary)), hsl(220, 80%, 35%), hsl(225, 100%, 57%))",
            }}
          >
            <div className="p-7">
              <button
                onClick={onClose}
                className="absolute top-5 right-5 text-white/60 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mb-4">
                <module.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-lg font-semibold text-white mb-1">{module.title}</h3>
              <p className="text-sm text-white/70 mb-5">{module.tagline}</p>

              <ul className="space-y-2.5">
                {module.details.map((d) => (
                  <li key={d} className="flex items-start gap-2.5 text-sm text-white/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/50 shrink-0 mt-1.5" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
