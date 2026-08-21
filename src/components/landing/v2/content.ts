import {
  FileSpreadsheet,
  ClipboardCheck,
  UserCheck,
  FolderLock,
  type LucideIcon,
} from "lucide-react";

export interface Module {
  id: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  details: string[];
}

export const modules: Module[] = [
  {
    id: "register",
    icon: FileSpreadsheet,
    title: "Share register & cap table",
    tagline: "An accurate, current ownership structure for every entity.",
    details: [
      "Multiple entities in one group — holding and subsidiaries",
      "Ordinary shares, preference shares, and options with vesting",
      "Corporate actions: issuance, transfer, split, redemption",
      "Automatic cap table with a full dilution view",
      "Export as PDF or CSV/Excel",
    ],
  },
  {
    id: "reporting",
    icon: ClipboardCheck,
    title: "Regulatory reporting",
    tagline: "Structured data collection for financial authority filings.",
    details: [
      "Predefined forms based on FI requirements",
      "AIF reporting, ownership structure, managed capital",
      "Draft versioning and history by period",
      "Ready to export in PDF and Excel",
    ],
  },
  {
    id: "kyc",
    icon: UserCheck,
    title: "KYC collection",
    tagline: "Structured investor verification with manual approval.",
    details: [
      "Guided flow: identity, ownership, PEP/AML",
      "Document upload for ID and corporate records",
      "Status tracking: pending, in progress, approved, rejected",
      "Approval workflow controlled by admins",
    ],
  },
  {
    id: "dataroom",
    icon: FolderLock,
    title: "Investor data room",
    tagline: "Controlled document sharing per company and investor.",
    details: [
      "Folder structure for reports, agreements, presentations",
      "Access by role — investor or admin — per entity",
      "Version history with the latest version always visible",
      "Download only, no editing",
    ],
  },
];

export const faqs = [
  {
    question: "What types of companies can use Custora?",
    answer:
      "Custora is built for private, unlisted European companies — startups, growth companies, holding structures, family offices, and PE-backed businesses. Multiple entities and group structures are supported out of the box.",
  },
  {
    question: "How is this different from a spreadsheet or a US cap table tool?",
    answer:
      "A spreadsheet holds numbers; Custora holds a connected record. A change to the register flows into the cap table, the documents, and what each stakeholder sees. And it is built around European legal frameworks, terminology, and reporting obligations rather than retrofitted from a US model.",
  },
  {
    question: "Can I import existing shareholder data?",
    answer:
      "Yes. We import structured data from spreadsheets and can assist with migration from other systems. Historical records are verified with you before go-live, so the register you start from is one you can defend.",
  },
  {
    question: "Is my data secure and GDPR compliant?",
    answer:
      "Data is encrypted in transit and at rest, hosted in EU data centres, and every change is written to an immutable audit log. Custora is GDPR compliant and supports your data processing agreements.",
  },
  {
    question: "What happens during onboarding?",
    answer:
      "Pilot customers get hands-on onboarding: we configure your entity structure, import and reconcile your data, train your team, and stay close through the first reporting cycle.",
  },
];
