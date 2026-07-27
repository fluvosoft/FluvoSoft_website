export type KyotoPrivacySection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  closingParagraphs?: string[];
};

export const kyotoPrivacyMeta = {
  effectiveDate: "July 24, 2026",
  lastUpdated: "July 27, 2026",
  contactEmail: "support@fluvosoft.com",
  appName: "KYOTO Habit Tracker",
  companyName: "FluvoSoft Ltd.",
  companyLocation: "Dhaka, Bangladesh",
};

export const kyotoPrivacySections: KyotoPrivacySection[] = [
  {
    id: "kyoto-overview",
    title: "Overview",
    paragraphs: [
      "KYOTO Habit Tracker (“the App”) is provided by FluvoSoft Ltd. (“FluvoSoft,” “we,” “us,” or “our”). This section explains how we collect, use, store, and share information when you use KYOTO, including the mobile app and related marketing pages on fluvosoft.com.",
      "We do not sell your personal information. We process data to run the App, provide habit tracking and social features, keep your account in sync, and communicate about KYOTO (for example, waitlist or beta updates when you opt in).",
    ],
  },
  {
    id: "kyoto-information-we-collect",
    title: "Information we collect",
    paragraphs: [
      "We collect information you provide and data generated when you use KYOTO, including:",
    ],
    bullets: [
      "Account details: name, email, profile photo, @username, birthdate, gender, and authentication identifiers when you sign up with email or Google Sign-In.",
      "Habit and progress data: habits you create, check-ins, streaks, reminders, mood logs, challenge progress, clubs you join, and achievements.",
      "Social data: friend requests, friendships, and in-app notifications related to activity and community.",
      "Waitlist and marketing contacts: email addresses you submit to join the KYOTO wishlist or beta interest list on our website.",
      "Usage and device data: app interactions, device type/OS, crash or diagnostic logs (where enabled), and general analytics used to operate and improve the App.",
    ],
  },
  {
    id: "kyoto-how-we-use",
    title: "How we use your information",
    paragraphs: ["We use collected information to:"],
    bullets: [
      "Provide habit tracking, streaks, reminders, mood logging, clubs, challenges, and leaderboard features.",
      "Authenticate you, maintain your session, and protect your account.",
      "Sync habits, progress, and social connections across sessions.",
      "Send service-related communications such as email verification, password reset, and push/in-app notifications (when enabled).",
      "Send waitlist or product updates when you have opted in via the KYOTO wishlist form.",
      "Improve reliability, troubleshoot issues, and develop new App features.",
      "Comply with legal obligations and protect the rights and safety of users and FluvoSoft.",
    ],
  },
  {
    id: "kyoto-permissions",
    title: "Device permissions",
    paragraphs: [
      "The App requests device permissions only when a feature needs them. You can deny or revoke permissions in your device settings, though related features may not work.",
    ],
    bullets: [
      "Photos / camera: when you add a profile photo. We access only the files you select.",
      "Notifications: optional push alerts for habit reminders and social or progress updates. You can disable these in device or app settings.",
    ],
  },
  {
    id: "kyoto-third-parties",
    title: "Third-party services",
    paragraphs: [
      "We do not sell your personal information. We may share data with service providers that help us run KYOTO, only as needed to provide the service:",
    ],
    bullets: [
      "Identity and sign-in services (email/password and Google Sign-In).",
      "Cloud hosting and database sync for habits, profile, social data, and wishlist contacts.",
      "Push notification services (when you enable notifications).",
      "Analytics and crash reporting to improve stability (where enabled).",
    ],
    closingParagraphs: [
      "These providers process data under their own privacy policies. We may also disclose information if required by law, to protect our users, or in connection with a merger or acquisition.",
    ],
  },
  {
    id: "kyoto-account-deletion",
    title: "Account deletion",
    paragraphs: [
      "If you created a KYOTO account, you can request deletion of your account and associated personal data by emailing support@fluvosoft.com from the address linked to your account. If your app version includes Delete account in Settings, you may use that option instead.",
      "After deletion, we remove personal data from active production systems within a reasonable period, typically within 30 days. Backup copies may persist for up to 90 days before automatic removal.",
    ],
  },
  {
    id: "kyoto-your-rights",
    title: "Your choices and rights",
    paragraphs: ["Depending on your location, you may have the right to:"],
    bullets: [
      "Access, correct, or delete personal data associated with your account.",
      "Manage habits, friends, and mood data inside the App.",
      "Disable push notifications in device or app settings.",
      "Unsubscribe from waitlist or marketing emails by contacting us or using unsubscribe options where provided.",
      "Delete your account as described above, or contact us to raise a privacy concern.",
    ],
  },
  {
    id: "kyoto-contact",
    title: "Contact us",
    paragraphs: [
      "For privacy questions, data requests, or concerns about KYOTO Habit Tracker, contact FluvoSoft at support@fluvosoft.com or through the support options in the App.",
      "FluvoSoft Ltd., Dhaka, Bangladesh.",
    ],
  },
];
