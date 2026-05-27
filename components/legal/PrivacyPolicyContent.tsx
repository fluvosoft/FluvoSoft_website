import Link from "next/link";
import { fluvoSoftPrivacyMeta } from "@/data/fluvoSoftPrivacy";
import PrivacyPolicyDoc from "@/components/legal/PrivacyPolicyDoc";
import {
  PrivacyAtAGlance,
  PrivacyWhatThisCovers,
} from "@/components/legal/PrivacyPolicyOverview";

export default function PrivacyPolicyContent() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-container text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Privacy Policy
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-accent lg:text-xl">
            Plain-language overview of how {fluvoSoftPrivacyMeta.companyName} handles your
            information across our website, apps, and services.
          </p>
          <p className="mt-4 text-sm text-accent">
            Effective {fluvoSoftPrivacyMeta.effectiveDate} · Last updated{" "}
            {fluvoSoftPrivacyMeta.lastUpdated}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="#at-a-glance"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-foreground no-underline transition hover:border-cta/50 hover:text-cta"
            >
              At a glance
            </Link>
            <Link
              href="#full-policy"
              className="inline-flex items-center justify-center rounded-full bg-cta px-5 py-2.5 text-sm font-medium text-white no-underline transition hover:bg-cta/90"
            >
              Full policy
            </Link>
          </div>
        </div>
      </section>

      <PrivacyAtAGlance />
      <PrivacyWhatThisCovers />

      {/* Documentation-style full policy */}
      <section
        id="full-policy"
        className="border-t border-white/10 px-6 py-16 lg:px-8 lg:py-20"
        aria-labelledby="privacy-doc-heading"
      >
        <h2 id="privacy-doc-heading" className="sr-only">
          Full privacy policy
        </h2>
        <PrivacyPolicyDoc />
      </section>

      {/* Contact */}
      <section className="border-t border-white/10 px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-container text-center">
          <h2 className="text-2xl font-medium text-foreground md:text-3xl">
            Questions about privacy?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-accent">
            Reach out for access requests, corrections, account deletion, or general privacy
            inquiries.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${fluvoSoftPrivacyMeta.contactEmail}`}
              className="inline-flex items-center justify-center rounded-full bg-cta px-8 py-3.5 text-sm font-medium text-white no-underline transition hover:bg-cta/90"
            >
              {fluvoSoftPrivacyMeta.contactEmail}
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-3.5 text-sm font-medium text-foreground no-underline transition hover:border-cta/50 hover:text-cta"
            >
              Back to home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
