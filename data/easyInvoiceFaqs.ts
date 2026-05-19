export type EasyInvoiceFaq = {
  id: string;
  question: string;
  answer: string;
};

export const easyInvoiceFaqs: EasyInvoiceFaq[] = [
  {
    id: "sign-in",
    question: "How do I create an account and sign in?",
    answer:
      "You can sign up with email and password or use Google Sign-In. After sign-up, verify your email before entering the app. Forgot-password and reset flows are built in, and your session stays persisted when you reopen the app. Sign out clears both Firebase and Google sessions.",
  },
  {
    id: "onboarding",
    question: "What does onboarding include?",
    answer:
      "New users see a splash screen that routes to intro, shop setup, or home based on auth and onboarding state. The intro carousel has four slides. You then set up your shop profile (name, location, owner details, customer type) and choose from 20 server-hosted invoice templates with a live preview. Progress is saved to Firebase Realtime Database.",
  },
  {
    id: "devices",
    question: "Does Easy Invoice work on phone, tablet, and desktop?",
    answer:
      "Yes. The app shell adapts to screen size: sidebar and top bar on wide layouts (desktop/web), bottom navigation on mobile. You get quick access to new invoice, settings, and notifications. AdMob banner ads appear on wide layouts in the native app, not on web.",
  },
  {
    id: "dashboard",
    question: "What analytics are on the dashboard?",
    answer:
      "The dashboard shows revenue overview (paid vs unpaid), invoice counts with month-over-month style changes, a trend chart and analytics carousel, an invoice activity heatmap for the current month, top clients by revenue, and a recent invoices list. Pull-to-refresh keeps data up to date.",
  },
  {
    id: "invoices",
    question: "How do I manage invoices?",
    answer:
      "View invoices in a grid on wide screens or a list on narrow screens. Create, edit, duplicate, and delete invoices stored in Firebase. Statuses include Draft, Pending, Paid, Overdue, and Cancelled in the UI (stored as draft, sent, paid, and related values). If HTML upload to S3 fails, you can retry sync from the app.",
  },
  {
    id: "builder",
    question: "What can I do in the invoice builder?",
    answer:
      "Add business info, clients (saved in Firebase), invoice details, line items with quantities and amounts, subtotal, tax, and discount, plus currency and payment methods (Cash, Bank transfer, Card, Bkash, Nagad, PayPal, Other). Attach images, pick a status, choose from 20 templates, and preview live via server-rendered HTML. Save to Firebase, sync drafts to the backend, then download or share a PDF.",
  },
  {
    id: "templates-pdf",
    question: "How many templates are there, and can I export PDFs?",
    answer:
      "There are 20 server templates (invoice_fluvo_1 through invoice_fluvo_20). You can set a default template in Settings. PDFs are generated on the server with a presigned download link, with a local export fallback when needed.",
  },
  {
    id: "languages",
    question: "Which languages are supported for invoices?",
    answer:
      "From the More screen in the invoice flow you can set invoice language to English, Bangla, Hindi, or Arabic. Push notifications can be toggled via FCM, and support email is available from the same area.",
  },
  {
    id: "settings",
    question: "What is available in Settings?",
    answer:
      "Settings shows your account summary (name, email, photo from Firebase), reset password, default invoice template, open-source licenses, and sign out.",
  },
  {
    id: "notifications",
    question: "How do notifications work?",
    answer:
      "Easy Invoice includes an in-app notifications inbox with an unread badge on the entry point so you can see what is new at a glance.",
  },
  {
    id: "pricing",
    question: "Is Easy Invoice really free?",
    answer:
      "Yes. There are no subscriptions or paid tiers. The app is supported by Google AdMob — optional rewarded ads on certain actions (such as editing an invoice) and banner ads on wide screens in the native app. Web users do not see banner ads.",
  },
];
