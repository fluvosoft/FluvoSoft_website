export type ResumeBuilderFaqCategory =
  | "All"
  | "Account"
  | "Resumes"
  | "Templates"
  | "ATS"
  | "General";

export type ResumeBuilderFaq = {
  id: string;
  question: string;
  answer: string;
  category: Exclude<ResumeBuilderFaqCategory, "All">;
};

export const resumeBuilderFaqCategories: ResumeBuilderFaqCategory[] = [
  "All",
  "Account",
  "Resumes",
  "Templates",
  "ATS",
  "General",
];

export const resumeBuilderFaqs: ResumeBuilderFaq[] = [
  {
    id: "sign-in",
    category: "Account",
    question: "How do I create an account and sign in?",
    answer:
      "Sign up with email and password or use Google Sign-In. After signup, verify your email (resend is available). Your session stays persisted when you reopen the app. Sign out clears your session with confirmation.",
  },
  {
    id: "onboarding",
    category: "General",
    question: "What does getting started include?",
    answer:
      "New users see a splash screen with app branding, intro slides covering fast building, professional templates, and editing anywhere, then sign in or create an account. First-time setup collects your name, headline, location, phone, and preferred template.",
  },
  {
    id: "home",
    category: "General",
    question: "What can I do from the Home screen?",
    answer:
      "Home shows a personalized greeting, profile avatar shortcut, notifications bell with unread badge, count of resumes created with quick Create New, latest resume progress (title, template, completion %, status), recent resumes, a popular templates carousel, and an ATS score card with tips and re-check actions.",
  },
  {
    id: "templates",
    category: "Templates",
    question: "How many templates are available?",
    answer:
      "Browse 20 professional and modern layouts. Search by name or category, filter by category, and tap any template to start a new resume. All templates are free to use. You can also set a preferred default template in Settings.",
  },
  {
    id: "editor",
    category: "Resumes",
    question: "What sections can I fill when creating a resume?",
    answer:
      "The editor supports personal information, profile photo (where the template allows), professional summary, skills, work experience, projects, education, certifications, achievements, publications, volunteer work, languages, interests, and references. Sections are collapsible with expand/collapse all, auto-fill from profile or imported data, writing tips, draft save with completion %, and options to clear fields or discard changes.",
  },
  {
    id: "preview",
    category: "Resumes",
    question: "Can I preview and share my resume as a PDF?",
    answer:
      "Yes. Use live resume preview while editing, then download as PDF or share through your device share sheet (save, email, messaging apps, and more). Full-screen ads may appear before preview or export in the native app.",
  },
  {
    id: "my-resumes",
    category: "Resumes",
    question: "How do I manage saved resumes?",
    answer:
      "My Resumes is your library of all saved resumes with status and completion. Search resumes, filter by All / Draft / Complete, open any resume to edit, duplicate a resume, or delete with confirmation.",
  },
  {
    id: "ats",
    category: "ATS",
    question: "How does the ATS score work?",
    answer:
      "On first use you can optionally upload an existing resume PDF. You get an ATS readiness score with focus areas (Summary, Experience, Skills, and more), actionable improvement tips with point boosts, and the ability to check off tips as you apply them. Imported content can pre-fill your profile and new resumes. Re-upload and re-check anytime from Home or Profile.",
  },
  {
    id: "profile-settings",
    category: "Account",
    question: "What is in Profile and Settings?",
    answer:
      "Profile shows your avatar, name, email, headline, location, phone, and ATS score with tips. Settings includes account overview, preferred template, push notifications on/off with a soft prompt, notifications inbox, and sign out with confirmation.",
  },
  {
    id: "sync",
    category: "General",
    question: "Does my progress sync across sessions?",
    answer:
      "Yes. Resumes and progress stay with your account across sessions. Completion percentage is shown on Home, in the editor, and in My Resumes.",
  },
  {
    id: "ads",
    category: "General",
    question: "Are there ads in the app?",
    answer:
      "The native app may show banner ads on Home (one dismissible, one inline) and full-screen ads before preview or export. Ads help keep Resume Builder free for everyone.",
  },
  {
    id: "free",
    category: "General",
    question: "Is Resume Builder free?",
    answer:
      "Yes. All 20 templates, the resume editor, PDF export, ATS scoring, and cloud sync are free. There are no subscriptions or premium tiers.",
  },
];
