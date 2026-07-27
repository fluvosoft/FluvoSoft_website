import { resumeBuilderFaqs } from "@/data/resumeBuilderFaqs";
import {
  buildProductPageJsonLdGraph,
  buildProductPageMetadata,
  type ProductSeoConfig,
} from "@/lib/productPageSeo";

export const resumeBuilderConfig: ProductSeoConfig = {
  name: "Resume Builder",
  tagline: "Free Mobile Resume App for Job Seekers",
  path: "/resume-builder",
  description:
    "Resume Builder is a free Android resume app by FluvoSoft. Build a standout resume in minutes with 20 professional templates, ATS scoring, live preview, PDF export, and cloud sync — no subscription required.",
  shortDescription:
    "Free resume app with 20 templates, ATS score, PDF export, and cloud sync. Built by FluvoSoft for students and professionals.",
  keywords: [
    "Resume Builder",
    "free resume app",
    "resume maker android",
    "CV builder app",
    "ATS resume checker",
    "professional resume templates",
    "PDF resume export",
    "resume app USA",
    "resume builder United States",
    "FluvoSoft Resume Builder",
    "mobile resume builder",
    "resume app no subscription",
    "job seeker resume app",
    "curriculum vitae app",
  ],
  ogImagePath: "/images/resume-builder/resume_builder_logo.png",
  ogImageAlt:
    "Resume Builder — free mobile resume app with templates, ATS scoring, and PDF export by FluvoSoft",
  applicationCategory: "BusinessApplication",
  operatingSystems: ["Android"],
  features: [
    "20 professional resume templates",
    "ATS readiness score and tips",
    "Live preview and PDF export",
    "Cloud sync across sessions",
    "Email and Google Sign-In",
    "Resume import from PDF",
    "Free forever — no subscription",
  ],
  screenshotPaths: [
    "/images/resume-builder/resume_builder_fluvosoft_3.webp",
    "/images/resume-builder/resume_builder_fluvosoft_2.webp",
    "/images/resume-builder/resume_builder_fluvosoft.webp",
    "/images/resume-builder/resume_builder_fluvosoft_4.webp",
  ],
  playStoreUrl: "#",
  offers: [{ name: "Free", price: 0 }],
  faqs: resumeBuilderFaqs.map((item) => ({
    question: item.question,
    answer: item.answer,
  })),
};

export const resumeBuilderMetadata = buildProductPageMetadata(resumeBuilderConfig);

export function buildResumeBuilderJsonLdGraph() {
  return buildProductPageJsonLdGraph(resumeBuilderConfig);
}
