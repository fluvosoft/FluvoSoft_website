import { Plus_Jakarta_Sans } from "next/font/google";
import { kyotoMetadata } from "@/lib/kyotoSeo";
import { KyotoBetaModalProvider } from "@/components/kyoto-habit-tracker/KyotoBetaModalProvider";
import "./kyoto.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-ky-heading",
  display: "swap",
});

const plusJakartaBody = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-ky-body",
  display: "swap",
});

export const metadata = kyotoMetadata;

export default function KyotoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${plusJakarta.variable} ${plusJakartaBody.variable} font-ky-body ky-page`}
    >
      <KyotoBetaModalProvider>{children}</KyotoBetaModalProvider>
    </div>
  );
}
