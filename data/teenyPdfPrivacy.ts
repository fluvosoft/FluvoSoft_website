export type TeenyPdfPrivacySection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  closingParagraphs?: string[];
};

export const teenyPdfPrivacyMeta = {
  effectiveDate: "August 7, 2026",
  lastUpdated: "August 7, 2026",
  contactEmail: "support@fluvosoft.com",
  appName: "TeenyPDF",
  companyName: "FluvoSoft Ltd.",
  companyLocation: "Dhaka, Bangladesh",
};

export const teenyPdfPrivacySections: TeenyPdfPrivacySection[] = [
  {
    id: "teenypdf-overview",
    title: "Overview",
    paragraphs: [
      "TeenyPDF (“the App”) is provided by FluvoSoft Ltd. (“FluvoSoft,” “we,” “us,” or “our”). This section explains how we collect, use, store, and share information when you use TeenyPDF, including the mobile app and related marketing pages on fluvosoft.com.",
      "TeenyPDF is a PDF toolkit and document scanner. PDF conversions, merging, splitting, editing, encryption, redaction, e-sign, and related tools run on your device. We do not sell your personal information.",
    ],
  },
  {
    id: "teenypdf-information-we-collect",
    title: "Information we collect",
    paragraphs: [
      "TeenyPDF is designed so your documents are processed locally. We collect limited information as follows:",
    ],
    bullets: [
      "Documents and files you choose: PDFs, images, Word (.docx), Excel (.xlsx), PowerPoint (.pptx), and scanner captures you open, create, or export in the App. These files are processed on your device and stored in app storage or a folder you select.",
      "App preferences: settings such as your custom output save directory and other in-app preferences.",
      "Recent files and file library metadata: names, paths, and history needed to show Recent files on Home and manage your Files library. You can open, share, save, or remove items from history in the App.",
      "Usage and advertising data: when the App displays banner or interstitial ads, advertising partners may collect device identifiers and usage data under their own policies (see Third-party services below).",
      "Diagnostics (where enabled): crash or performance information used to keep the App stable.",
    ],
  },
  {
    id: "teenypdf-how-we-use",
    title: "How we use your information",
    paragraphs: ["We use collected information to:"],
    bullets: [
      "Provide on-device PDF tools (Photo to PDF, compress, merge, reorder, delete pages, split, edit text, encrypt, redact, e-sign) and document conversion features.",
      "Power the document scanner (camera or gallery import, multi-page capture, filters, and export as PDF, DOCX, JPG, or PNG).",
      "Show recent files, search tools and files, and save outputs to your chosen directory.",
      "Display banner and interstitial ads that help keep the App available.",
      "Improve reliability, fix bugs, and develop new features.",
      "Comply with legal obligations and protect the rights and safety of users and FluvoSoft.",
    ],
  },
  {
    id: "teenypdf-on-device",
    title: "On-device processing",
    paragraphs: [
      "Document conversions and PDF operations in TeenyPDF run on your device. We do not upload your PDFs, images, or Office files to FluvoSoft servers for conversion as part of normal App use.",
      "Files remain under your control in app storage, your device gallery, or a custom output folder you configure in Settings. Sharing a file uses your device’s share sheet and the destination you choose.",
    ],
  },
  {
    id: "teenypdf-permissions",
    title: "Device permissions",
    paragraphs: [
      "The App requests device permissions only when a feature needs them. You can deny or revoke permissions in your device settings, though related features may not work.",
    ],
    bullets: [
      "Camera: used for the document scanner when you capture pages. Access is requested when you use Scan.",
      "Photos / gallery: used when you import images for Photo to PDF, compress, convert, or scanner gallery import. We access only the files you select.",
      "Storage / files: used to open PDFs and Office documents, save outputs, manage your Files library, and write to a custom save directory you set in Settings.",
    ],
  },
  {
    id: "teenypdf-third-parties",
    title: "Third-party services",
    paragraphs: [
      "We do not sell your personal information. TeenyPDF may use third-party services only as needed to operate the App:",
    ],
    bullets: [
      "Advertising networks (for example Google AdMob) — banner and interstitial ads. These partners may collect advertising identifiers and interaction data under their own privacy policies.",
      "Analytics and crash reporting to improve stability (where enabled).",
    ],
    closingParagraphs: [
      "These providers process data under their own privacy policies. Because document tools run on device, your document contents are not sent to FluvoSoft for conversion. We may also disclose information if required by law, to protect our users, or in connection with a merger or acquisition.",
    ],
  },
  {
    id: "teenypdf-accounts-and-deletion",
    title: "Accounts and data deletion",
    paragraphs: [
      "TeenyPDF does not require a FluvoSoft account to use core PDF and scanner features. There is no cloud account for us to delete in the same way as our signed-in apps.",
      "You can remove files from Recent / Files history in the App, delete exported files from your device or custom save folder, and clear app data through your device settings. For privacy questions, contact us at the email below.",
    ],
  },
  {
    id: "teenypdf-your-rights",
    title: "Your choices and rights",
    paragraphs: ["Depending on your location, you may have the right to:"],
    bullets: [
      "Control which files the App can access by granting or denying camera, photos, and storage permissions.",
      "Choose a custom output save directory in Settings.",
      "Remove items from recent files and delete local outputs from your device.",
      "Limit ad personalization through your device advertising or privacy settings where available.",
      "Contact us to raise a privacy concern or request assistance.",
    ],
  },
  {
    id: "teenypdf-contact",
    title: "Contact us",
    paragraphs: [
      "For privacy questions, data requests, or concerns about TeenyPDF, contact FluvoSoft at support@fluvosoft.com or through the support options in the App.",
      "FluvoSoft Ltd., Dhaka, Bangladesh.",
    ],
  },
];
