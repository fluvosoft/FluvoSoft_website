import ResumeBuilderPhoneMockup from "./ResumeBuilderPhoneMockup";

const MOCKUP_IMAGES = {
  home: "/images/resume-builder/resume_builder_fluvosoft_3.jpeg",
  editor: "/images/resume-builder/resume_builder_fluvosoft_2.jpeg",
  templates: "/images/resume-builder/resume_builder_fluvosoft.jpeg",
  atsTips: "/images/resume-builder/resume_builder_fluvosoft_4.jpeg",
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
    <section
      className={`${bgClass} px-6 py-16 lg:px-8 lg:py-24`}
      aria-labelledby={sectionId}
    >
      <div className="mx-auto max-w-container">
        <div className="hidden items-center gap-8 lg:grid lg:grid-cols-[1fr_1.2fr_1fr] xl:gap-12">
          <div className="flex justify-center">
            <ResumeBuilderPhoneMockup
              src={left.src}
              alt={left.alt}
              caption={left.caption}
              screenWidth={220}
            />
          </div>

          <div className="flex flex-col justify-center text-center lg:text-left">
            <span className="mx-auto inline-block w-fit rounded-full bg-rb-brand/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-rb-navy lg:mx-0">
              {badge}
            </span>
            <h2
              id={sectionId}
              className="mt-4 font-rb-heading text-2xl font-bold leading-tight text-rb-navy md:text-3xl lg:text-[2rem] lg:leading-[1.2]"
            >
              {title}
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-rb-muted">
              {paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <ResumeBuilderPhoneMockup
              src={right.src}
              alt={right.alt}
              caption={right.caption}
              screenWidth={220}
            />
          </div>
        </div>

        <div className="lg:hidden">
          <div className="text-center">
            <span className="inline-block rounded-full bg-rb-brand/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-rb-navy">
              {badge}
            </span>
            <h2 className="mt-4 font-rb-heading text-2xl font-bold leading-tight text-rb-navy md:text-3xl">
              {title}
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-rb-muted">
              {paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-6">
            <ResumeBuilderPhoneMockup
              src={left.src}
              alt={left.alt}
              caption={left.caption}
              screenWidth={160}
            />
            <ResumeBuilderPhoneMockup
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

export default function ResumeBuilderShowcaseSections() {
  return (
    <>
      <ShowcaseBlock
        badge="Home & editor"
        title="Resume Building Made Simple"
        paragraphs={[
          "Home gives you a personalized greeting, resume count, latest progress with completion %, recent resumes, popular templates, and an ATS score card with actionable tips.",
          "Open the editor to create or continue a draft: switch templates, auto-fill from profile or imported data, fill collapsible sections from summary to references, save drafts with completion tracking, and get writing tips along the way.",
        ]}
        left={{
          src: MOCKUP_IMAGES.home,
          alt: "Resume Builder home screen with resume progress and ATS score",
          caption: "Home overview",
        }}
        right={{
          src: MOCKUP_IMAGES.editor,
          alt: "Resume Builder create resume screen with personal information fields",
          caption: "Create & edit",
        }}
        bgClass="bg-white"
      />

      <ShowcaseBlock
        badge="Templates & library"
        title="Free Professional Resume Templates"
        paragraphs={[
          "Browse 20 professional and modern layouts. Search by name or category, filter by category, and tap any template to start — all templates are free to use.",
          "My Resumes keeps every document organized — search and filter by draft or complete, open to edit, and duplicate past resumes. Track your ATS score and improvement tips from Profile anytime.",
        ]}
        left={{
          src: MOCKUP_IMAGES.templates,
          alt: "Resume Builder template selection with live preview",
          caption: "Templates",
        }}
        right={{
          src: MOCKUP_IMAGES.atsTips,
          alt: "Resume Builder ATS score and improvement tips on profile",
          caption: "ATS score & tips",
        }}
        bgClass="bg-rb-cream"
      />
    </>
  );
}
