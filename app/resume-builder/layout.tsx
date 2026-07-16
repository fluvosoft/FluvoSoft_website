import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import { resumeBuilderMetadata } from "@/lib/resumeBuilderSeo";
import { ResumeBuilderBetaModalProvider } from "@/components/resume-builder/ResumeBuilderBetaModalProvider";
import "./resume-builder.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-rb-heading",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-rb-body",
  display: "swap",
});

export const metadata = resumeBuilderMetadata;

export default function ResumeBuilderLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${plusJakarta.variable} ${dmSans.variable} font-rb-body rb-page`}>
      <ResumeBuilderBetaModalProvider>{children}</ResumeBuilderBetaModalProvider>
    </div>
  );
}
