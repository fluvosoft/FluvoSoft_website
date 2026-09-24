import Link from "next/link";
import { fluvoSoftTermsMeta, termsDocArticleIds, termsDocChapters } from "@/data/fluvoSoftTerms";
import LegalPolicyDoc from "@/components/legal/LegalPolicyDoc";
import { TermsAtAGlance, TermsWhatThisCovers } from "@/components/legal/TermsOfUseOverview";

export default function TermsOfUseContent() {
  return (
    <>
      <section className="px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-container text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Terms of Use
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-accent lg:text-xl">
            Plain-language terms for FluvoSoft apps and services, including subscriptions and
            purchases.
          </p>
          <p className="mt-4 text-sm text-accent">
            Last updated: {fluvoSoftTermsMeta.lastUpdated}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="#at-a-glance"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-foreground no-underline transition hover:border-cta/50 hover:text-cta"
            >
              At a glance
            </Link>
            <Link
              href="#full-terms"
              className="inline-flex items-center justify-center rounded-full bg-cta px-5 py-2.5 text-sm font-medium text-white no-underline transition hover:bg-cta/90"
            >
              Full terms
            </Link>
            <Link
              href="/privacy"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-foreground no-underline transition hover:border-cta/50 hover:text-cta"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </section>

      <TermsAtAGlance />
      <TermsWhatThisCovers />

      <section
        id="full-terms"
        className="border-t border-white/10 px-6 py-16 lg:px-8 lg:py-20"
        aria-labelledby="terms-doc-heading"
      >
        <h2 id="terms-doc-heading" className="sr-only">
          Full terms of use
        </h2>
        <LegalPolicyDoc
          chapters={termsDocChapters}
          articleIds={termsDocArticleIds}
          heading="Full terms"
          intro="Structured like product documentation — use the table of contents to jump to any section, or read straight through."
          navLabel="Terms of Use sections"
        />
      </section>

      <section className="border-t border-white/10 px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-container text-center">
          <h2 className="text-2xl font-medium text-foreground md:text-3xl">
            Questions about these terms?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-accent">
            Reach out about subscriptions, purchases, or anything else in these Terms of Use.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${fluvoSoftTermsMeta.contactEmail}`}
              className="inline-flex items-center justify-center rounded-full bg-cta px-8 py-3.5 text-sm font-medium text-white no-underline transition hover:bg-cta/90"
            >
              {fluvoSoftTermsMeta.contactEmail}
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-3.5 text-sm font-medium text-foreground no-underline transition hover:border-cta/50 hover:text-cta"
            >
              Back to home
            </Link>
            <Link
              href="/privacy"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-3.5 text-sm font-medium text-foreground no-underline transition hover:border-cta/50 hover:text-cta"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
