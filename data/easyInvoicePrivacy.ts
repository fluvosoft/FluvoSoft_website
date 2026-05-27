export type EasyInvoicePrivacySection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  closingParagraphs?: string[];
};

export const easyInvoicePrivacyMeta = {
  effectiveDate: "May 27, 2026",
  lastUpdated: "May 27, 2026",
  contactEmail: "support@fluvosoft.com",
  appName: "Easy Invoice",
  companyName: "FluvoSoft Ltd.",
  companyLocation: "Dhaka, Bangladesh",
};

export const easyInvoicePrivacySections: EasyInvoicePrivacySection[] = [
  {
    id: "introduction",
    title: "Introduction",
    paragraphs: [
      "Easy Invoice (“the App”) is provided by FluvoSoft Ltd. (“FluvoSoft,” “we,” “us,” or “our”). This Privacy Policy explains how we collect, use, store, and share information when you use the Easy Invoice mobile app and related web experiences.",
      "By creating an account or using the App, you agree to this Privacy Policy. If you do not agree, please do not use the App.",
    ],
  },
  {
    id: "information-we-collect",
    title: "Information we collect",
    paragraphs: ["We collect information you provide and data generated when you use the App, including:"],
    bullets: [
      "Account information: name, email address, profile photo, and authentication identifiers when you sign up with email or Google Sign-In.",
      "Business profile: shop name, location, owner details, customer type, and preferences you set during onboarding or in Settings.",
      "Invoice and client data: clients, line items, amounts, tax and discount settings, payment methods, invoice status, templates, attachments, and PDF-related content you create or upload.",
      "Usage and device data: app interactions, crash diagnostics (if enabled), device type, operating system, and general analytics needed to operate and improve the App.",
      "Advertising data: when you interact with optional Google AdMob ads in the native app, Google may collect data according to its policies (see Third-party services below).",
    ],
  },
  {
    id: "how-we-use",
    title: "How we use your information",
    paragraphs: ["We use collected information to:"],
    bullets: [
      "Provide invoicing, templates, dashboard analytics, notifications, and cloud sync across your devices.",
      "Authenticate you, maintain your session, and secure your account.",
      "Generate invoice previews and PDFs, including server-rendered HTML and download links.",
      "Send service-related communications such as email verification, password reset, and push notifications (if enabled).",
      "Display optional ads that help keep core invoicing free, where applicable on supported platforms.",
      "Improve reliability, fix bugs, and develop new features.",
      "Comply with legal obligations and protect the rights and safety of users and FluvoSoft.",
    ],
  },
  {
    id: "legal-bases",
    title: "Legal bases for processing",
    paragraphs: [
      "Where required by law, we process personal data based on: performance of our contract with you (providing the App), your consent (for example, optional ads or push notifications), our legitimate interests in operating and improving the App, and compliance with legal obligations.",
    ],
  },
  {
    id: "sharing",
    title: "How we share information",
    paragraphs: [
      "We do not sell your personal information. We may share data with service providers that help us run the App, only as needed to provide the service:",
    ],
    bullets: [
      "Google Firebase — authentication, Realtime Database storage, and related infrastructure.",
      "Google Sign-In — when you choose to sign in with your Google account.",
      "Google AdMob — optional advertising in the native Android app.",
      "Amazon Web Services (AWS) S3 — storing invoice HTML and related files for PDF generation and sync.",
      "Firebase Cloud Messaging (FCM) — push notifications if you enable them.",
    ],
    closingParagraphs: [
      "These providers process data under their own privacy policies. We may also disclose information if required by law, to protect our users, or in connection with a merger or acquisition.",
    ],
  },
  {
    id: "permissions",
    title: "Device permissions",
    paragraphs: [
      "The App requests device permissions only when a feature needs them. You can deny or revoke permissions in your device settings, though related features may not work.",
    ],
    bullets: [
      "Photos / storage: when you attach images to invoices or related records. We access only the files you select.",
      "Notifications: optional push alerts for service messages. You can disable these in device or app settings.",
    ],
  },
  {
    id: "storage-security",
    title: "Storage, retention, and security",
    paragraphs: [
      "Your data is stored on secure cloud infrastructure. We retain account and invoice data while your account is active and for a reasonable period afterward unless you delete your account or applicable law requires otherwise.",
      "When you delete your account, we remove personal data from active production systems within a reasonable period, typically within 30 days. Backup copies may persist for up to 90 days before automatic removal.",
      "We use industry-standard measures to protect data in transit and at rest. No method of transmission or storage is 100% secure; we cannot guarantee absolute security.",
    ],
  },
  {
    id: "account-deletion",
    title: "Account deletion",
    paragraphs: [
      "If you created an Easy Invoice account, you can request deletion of your account and associated personal data by emailing support@fluvosoft.com from the address linked to your account, or by using Delete account in Settings if your app version includes that option.",
      "After deletion, we remove personal data from active systems within a reasonable period, typically within 30 days. Backup copies may persist for up to 90 days before automatic removal.",
    ],
  },
  {
    id: "your-rights",
    title: "Your choices and rights",
    paragraphs: ["Depending on your location, you may have the right to:"],
    bullets: [
      "Access, correct, or delete personal data associated with your account.",
      "Export or duplicate invoice data within the App where features are available.",
      "Opt out of optional rewarded ads by not watching them; core features remain available without watching ads.",
      "Disable push notifications in device or app settings.",
      "Sign out at any time; sign-out clears Firebase and Google sessions as described in the App.",
      "Delete your account as described in Account deletion above, or contact us to raise a privacy concern.",
    ],
  },
  {
    id: "children",
    title: "Children’s privacy",
    paragraphs: [
      "Easy Invoice is intended for business users and is not directed at children under 13 (or the minimum age required in your country). We do not knowingly collect personal information from children. If you believe a child has provided us data, contact us and we will delete it.",
    ],
  },
  {
    id: "international",
    title: "International users",
    paragraphs: [
      "FluvoSoft is based in Bangladesh. If you use the App from other countries, your information may be transferred to and processed in Bangladesh and in countries where our service providers operate, which may have different data protection laws than your jurisdiction.",
    ],
  },
  {
    id: "changes",
    title: "Changes to this policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time. We will post the revised policy on this page and update the “Last updated” date. Continued use of the App after changes means you accept the updated policy.",
    ],
  },
  {
    id: "contact",
    title: "Contact us",
    paragraphs: [
      "For privacy questions, data requests, or concerns about Easy Invoice, contact FluvoSoft at support@fluvosoft.com or through the support options in the App.",
    ],
  },
];
