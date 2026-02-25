import Image from "next/image";

const LogoIcon = () => (
  <svg width="86" height="86" viewBox="0 0 86 86" fill="none">
    <path
      d="M37.3333 45.3334H10.6666L21.3333 34.6667H32L56 10.6667H72L37.3333 45.3334Z"
      fill="#FAFAFA"
    />
    <path d="M40 53.3334V48L74.6666 13.3334V18.6667L40 53.3334Z" fill="#FAFAFA" />
    <path d="M40 64V58.6667L74.6666 24V29.3334L40 64Z" fill="#FAFAFA" />
    <path d="M40 74.6667V69.3334L53.3333 56V61.3334L40 74.6667Z" fill="#FAFAFA" />
  </svg>
);

export default function BentoSection() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-container px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-medium text-foreground md:text-4xl lg:text-5xl">
          Build a better website, faster.
        </h2>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4 lg:flex-row">
            <div className="flex min-w-0 flex-1 flex-col gap-6 rounded-xl border border-white/20 bg-background p-6">
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-medium text-foreground">
                  100+ sections and components
                </h3>
                <p className="text-base text-accent">
                  All the elements you need to build a modern, responsive, and accessible
                  landing page.
                </p>
              </div>
              <div className="relative min-h-[200px] flex-1">
                <Image
                  src="https://api.builder.io/api/v1/image/assets/TEMP/88a5e48cc0bb73995bcf22791cb7f6180d17aa85?width=848"
                  alt="Globe illustration"
                  width={848}
                  height={400}
                  className="h-auto w-full rounded-lg object-cover"
                  unoptimized
                />
              </div>
            </div>
            <div className="flex min-w-0 flex-1 flex-col gap-6 rounded-xl border border-white/20 bg-background p-6">
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-medium text-foreground">
                  You&apos;re in control
                </h3>
                <p className="text-base text-accent">
                  This is not a component library. It&apos;s a collection of re-usable
                  components that you can copy and paste into your apps.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center rounded-lg bg-brand/10">
                <LogoIcon />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 lg:flex-row">
            <div className="flex min-w-0 flex-1 flex-col gap-6 rounded-xl border border-white/20 bg-background p-6">
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-medium text-foreground">
                  Fits right into your stack
                </h3>
                <p className="text-base text-accent">
                  Built with modern web technologies and tools that fit right into any
                  React project. No bloat, no extra dependencies, no risk of conflicts.
                </p>
              </div>
              <div className="flex flex-1 flex-wrap items-center justify-center gap-4 rounded-lg bg-brand/10 p-6">
                {["React", "Tailwind", "TypeScript", "Figma", "Shadcn"].map((t) => (
                  <div
                    key={t}
                    className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 text-xs font-medium text-foreground"
                  >
                    {t.charAt(0)}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex min-w-0 flex-1 flex-col gap-6 rounded-xl border border-white/20 bg-background p-6">
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-medium text-foreground">
                  Data-agnostic
                </h3>
                <p className="text-base text-accent">
                  All the data is separate from components so you can edit it in seconds or
                  make it dynamic. Easily connect to a CMS of your choice.
                </p>
              </div>
              <div className="flex flex-1 flex-col justify-center gap-3 rounded-lg bg-brand/10 p-4">
                <div className="rounded-lg bg-white/10 px-3 py-2 text-sm text-foreground">
                  We need to update this heading before launch
                </div>
                <div className="ml-4 rounded-lg bg-white/10 px-3 py-2 text-sm text-foreground">
                  Let me quickly jump into Sanity and fix it
                </div>
                <div className="ml-8 rounded-lg bg-white/10 px-3 py-2 text-sm text-foreground">
                  Done!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
