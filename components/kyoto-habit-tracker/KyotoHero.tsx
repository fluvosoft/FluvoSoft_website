import Image from "next/image";
import Link from "next/link";
import { TrustBadge } from "./KyotoCTAs";
import KyotoWishlistForm from "./KyotoWishlistForm";

const HERO_LOGO = "/habit_tracker/habit_tracker_kyoto_logo.png";

export default function KyotoHero() {
  return (
    <header className="relative overflow-hidden bg-ky-peach" aria-labelledby="kyoto-hero-heading">
      <div className="ky-hero-mesh" aria-hidden />
      <div className="ky-hero-grain" aria-hidden />

      <div className="relative mx-auto max-w-container px-6 pb-8 pt-10 lg:px-8 lg:pb-12 lg:pt-14">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="order-2 lg:order-1">
            <TrustBadge>Optimistic · Social · Encouraging</TrustBadge>

            <h1
              id="kyoto-hero-heading"
              className="mt-5 font-ky-heading text-5xl font-bold leading-none tracking-tight text-ky-ink md:text-6xl lg:text-7xl"
            >
              KYOTO
            </h1>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-ky-coral">
              Habit Tracker
            </p>

            <p className="mt-5 max-w-lg font-ky-heading text-2xl font-bold leading-snug text-ky-ink md:text-3xl">
              Build good habits. Stick with them. Grow with others.
            </p>

            <p className="mt-4 max-w-lg text-base leading-relaxed text-ky-muted md:text-lg">
              A warm, friendly habit app for daily check-ins, streaks, clubs, and friendly
              accountability — bright and human, never clinical.
            </p>

            <div className="mt-8 flex flex-wrap items-start gap-3">
              <KyotoWishlistForm />
            </div>

            <div className="mt-4">
              <Link
                href="/kyoto-habit-tracker#features"
                className="inline-flex items-center justify-center rounded-full border border-ky-coral/30 bg-white/80 px-6 py-3 text-sm font-semibold text-ky-ink no-underline transition hover:border-ky-coral hover:bg-white"
              >
                See features
              </Link>
            </div>

            <ul
              className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium text-ky-muted"
              aria-label="Key features"
            >
              <li>Daily habits</li>
              <li aria-hidden className="text-ky-coral">
                ·
              </li>
              <li>Clubs & challenges</li>
              <li aria-hidden className="text-ky-coral">
                ·
              </li>
              <li>Friends & mood</li>
            </ul>
          </div>

          <div className="order-1 relative flex min-h-[320px] items-center justify-center lg:order-2 lg:min-h-[480px]">
            <div className="ky-float">
              <Image
                src={HERO_LOGO}
                alt="KYOTO Habit Tracker app logo by FluvoSoft"
                width={420}
                height={420}
                className="ky-phone-enter h-auto w-full max-w-sm object-contain drop-shadow-2xl lg:max-w-md"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
