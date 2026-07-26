import KyotoPhoneMockup from "./KyotoPhoneMockup";

const IMAGES = {
  dashboard: "/habit_tracker/habit_tracker_KYOTO_dashboard.jpeg",
  explore: "/habit_tracker/habit_tracker_KYOTO_explore.jpeg",
  activity: "/habit_tracker/habit_tracker_KYOTO_activity.jpeg",
  profile: "/habit_tracker/habit_tracker_KYOTO_profile.jpeg",
  clubs: "/habit_tracker/habit_tracker_KYOTO_clubs.jpeg",
  customHabit: "/habit_tracker/habit_tracker_KYOTO_custom_habit.jpeg",
  leaderboard: "/habit_tracker/habit_tracker_KYOTO_leaderboard.jpeg",
} as const;

type PhoneImage = { src: string; alt: string; caption: string };

type ShowcaseBlockProps = {
  badge: string;
  title: string;
  paragraphs: string[];
  left: PhoneImage;
  right: PhoneImage;
  bgClass?: string;
};

function ShowcaseBlock({
  badge,
  title,
  paragraphs,
  left,
  right,
  bgClass = "bg-white",
}: ShowcaseBlockProps) {
  const sectionId = title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  return (
    <section className={`${bgClass} px-6 py-16 lg:px-8 lg:py-24`} aria-labelledby={sectionId}>
      <div className="mx-auto max-w-container">
        <div className="hidden items-center gap-8 lg:grid lg:grid-cols-[1fr_1.2fr_1fr] xl:gap-12">
          <div className="flex justify-center">
            <KyotoPhoneMockup
              src={left.src}
              alt={left.alt}
              caption={left.caption}
              screenWidth={220}
            />
          </div>

          <div className="flex flex-col justify-center text-center lg:text-left">
            <span className="mx-auto inline-block w-fit rounded-full bg-ky-coral/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ky-ink lg:mx-0">
              {badge}
            </span>
            <h2
              id={sectionId}
              className="mt-4 font-ky-heading text-2xl font-bold leading-tight text-ky-ink md:text-3xl lg:text-[2rem] lg:leading-[1.2]"
            >
              {title}
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-ky-muted">
              {paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <KyotoPhoneMockup
              src={right.src}
              alt={right.alt}
              caption={right.caption}
              screenWidth={220}
            />
          </div>
        </div>

        <div className="lg:hidden">
          <div className="text-center">
            <span className="inline-block rounded-full bg-ky-coral/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ky-ink">
              {badge}
            </span>
            <h2 className="mt-4 font-ky-heading text-2xl font-bold leading-tight text-ky-ink md:text-3xl">
              {title}
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-ky-muted">
              {paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-6">
            <KyotoPhoneMockup
              src={left.src}
              alt={left.alt}
              caption={left.caption}
              screenWidth={160}
            />
            <KyotoPhoneMockup
              src={right.src}
              alt={right.alt}
              caption={right.caption}
              screenWidth={160}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function KyotoShowcaseSections() {
  return (
    <>
      <ShowcaseBlock
        badge="Daily habits"
        title="Your day, one check-in at a time"
        paragraphs={[
          "Home greets you with today’s progress, a soft date strip, and clear streaks — encouraging, not demanding.",
          "Create custom habits with icons, colors, reminders, and build vs quit — then check them off as your day unfolds.",
        ]}
        left={{
          src: IMAGES.dashboard,
          alt: "KYOTO Habit Tracker home dashboard with daily habits",
          caption: "Home — daily check-ins",
        }}
        right={{
          src: IMAGES.customHabit,
          alt: "KYOTO create custom habit screen",
          caption: "Create — custom habits",
        }}
        bgClass="bg-white"
      />
      <ShowcaseBlock
        badge="Explore & clubs"
        title="Discover ideas. Grow with others."
        paragraphs={[
          "Explore suggested habits, challenges, and Learn Habits tips — add what fits in one tap.",
          "Browse and join Habit Clubs for shared accountability, or create a club of your own.",
        ]}
        left={{
          src: IMAGES.explore,
          alt: "KYOTO Explore screen with habit ideas and challenges",
          caption: "Explore — ideas & challenges",
        }}
        right={{
          src: IMAGES.clubs,
          alt: "KYOTO Habit Clubs screen",
          caption: "Clubs — shared motivation",
        }}
        bgClass="bg-ky-peach"
      />
      <ShowcaseBlock
        badge="Progress & people"
        title="See growth. Stay accountable."
        paragraphs={[
          "Activity switches between Daily, Weekly, and Monthly views with success rate, points, streaks, and mood.",
          "Profile, friends, achievements, and the leaderboard make progress social — grow together, not alone.",
        ]}
        left={{
          src: IMAGES.activity,
          alt: "KYOTO Activity stats and mood overview",
          caption: "Activity — stats & mood",
        }}
        right={{
          src: IMAGES.leaderboard,
          alt: "KYOTO leaderboard with ranked friends",
          caption: "Leaderboard — friendly competition",
        }}
        bgClass="bg-white"
      />
    </>
  );
}
