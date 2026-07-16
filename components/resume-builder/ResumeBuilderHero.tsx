import Image from "next/image";
import ResumeBuilderCounterStats from "./ResumeBuilderCounterStats";
import { TrustBadge } from "./ResumeBuilderCTAs";
import ResumeBuilderWishlistForm from "./ResumeBuilderWishlistForm";

const HERO_LOGO = "/images/resume-builder/resume_builder_logo.png";

export default function ResumeBuilderHero() {
  return (
    <header className="relative overflow-hidden bg-rb-cream" aria-labelledby="resume-builder-hero-heading">
      <div className="rb-hero-mesh" aria-hidden />
      <div className="rb-hero-grain" aria-hidden />

      <div className="relative mx-auto max-w-container px-6 pb-8 pt-10 lg:px-8 lg:pb-12 lg:pt-14">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="order-2 lg:order-1">
            <TrustBadge>
              <span aria-hidden>⭐</span> Free Forever — No Subscriptions
            </TrustBadge>

            <p className="mt-5 text-sm font-semibold uppercase tracking-wider text-rb-navy/80">
              Resume Builder
            </p>
            <h1
              id="resume-builder-hero-heading"
              className="mt-2 font-rb-heading text-4xl font-bold leading-[1.1] tracking-tight text-rb-navy md:text-5xl lg:text-[3.25rem]"
            >
              Free Resume App — Build a Standout Resume in Minutes.
            </h1>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-rb-muted md:text-lg">
              Create professional resumes with 20 templates, ATS scoring, live preview, and PDF
              export — free on Android. Resume Builder by FluvoSoft helps students and professionals
              land their next role faster.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ResumeBuilderWishlistForm />
            </div>

            <ul
              className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium text-rb-muted"
              aria-label="Key features"
            >
              <li>20 Templates</li>
              <li aria-hidden className="text-rb-brand">
                ·
              </li>
              <li>ATS Score</li>
              <li aria-hidden className="text-rb-brand">
                ·
              </li>
              <li>PDF Export</li>
            </ul>

            <div className="mt-10">
              <ResumeBuilderCounterStats />
            </div>
          </div>

          <div className="order-1 relative flex min-h-[320px] items-center justify-center lg:order-2 lg:min-h-[480px]">
            <Image
              src={HERO_LOGO}
              alt="Resume Builder app logo by FluvoSoft"
              width={520}
              height={520}
              className="rb-phone-enter h-auto w-full max-w-md object-contain drop-shadow-2xl lg:max-w-lg"
              priority
            />
          </div>
        </div>
      </div>
    </header>
  );
}
