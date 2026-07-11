import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { BlogPost } from "@/data/blogPosts";
import { blogPosts } from "@/data/blogPosts";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPostExperience({ post }: { post: BlogPost }) {
  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <article className="blog-swiss relative font-inter text-swiss-fg">
      <div className="swiss-noise absolute inset-0 z-0" aria-hidden />

      {/* Header */}
      <header className="relative z-10 border-b-4 border-black">
        <div className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10 sm:py-14 lg:px-12 lg:py-16">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-black no-underline transition-colors duration-150 hover:text-cta"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={2.5} aria-hidden />
            Back to blog
          </Link>

          <p className="mt-8 text-xs font-bold uppercase tracking-[0.25em] text-swiss-accent sm:text-sm">
            {post.tag}
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black uppercase leading-[0.95] tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            {post.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base font-medium leading-relaxed text-black/70 sm:text-lg">
            {post.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t-2 border-black pt-6 text-xs font-bold uppercase tracking-[0.15em] text-black/60">
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            <span>{post.readingTime}</span>
            <span>FluvoSoft</span>
          </div>
        </div>
      </header>

      {/* Body */}
      <div className="relative z-10 border-b-4 border-black">
        <div className="mx-auto grid max-w-[1400px] lg:grid-cols-[8fr_4fr]">
          <div className="swiss-dots space-y-14 border-black px-6 py-12 sm:px-10 sm:py-16 lg:border-r-4 lg:px-12 lg:py-20">
            {post.sections.map((section, index) => (
              <section key={section.heading} id={`section-${index + 1}`}>
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-swiss-accent sm:text-xs">
                  {String(index + 1).padStart(2, "0")}. Section
                </p>
                <h2 className="mt-3 text-2xl font-black uppercase tracking-tighter sm:text-3xl md:text-4xl">
                  {section.heading}
                </h2>
                <div className="mt-6 space-y-5">
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 48)}
                      className="max-w-2xl text-left text-base font-normal leading-relaxed text-black/75 sm:text-lg"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}

            {post.relatedHref ? (
              <div className="border-2 border-black bg-swiss-muted p-8 sm:p-10">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-swiss-accent">
                  Next step
                </p>
                <p className="mt-3 text-xl font-bold uppercase tracking-tight">
                  {post.relatedLabel ?? "Learn more"}
                </p>
                <Link
                  href={post.relatedHref}
                  className="mt-6 inline-flex h-14 items-center justify-center gap-2 border-2 border-black bg-black px-6 text-sm font-bold uppercase tracking-widest text-white no-underline transition-colors duration-150 hover:border-cta hover:bg-cta"
                >
                  {post.relatedLabel ?? "Learn more"}
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} aria-hidden />
                </Link>
              </div>
            ) : null}
          </div>

          <aside className="swiss-diagonal border-t-4 border-black bg-swiss-muted px-6 py-12 sm:px-10 lg:border-t-0 lg:px-10 lg:py-16">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-swiss-accent">
              Topics
            </p>
            <ul className="mt-4 space-y-2">
              {post.keywords.slice(0, 8).map((keyword) => (
                <li
                  key={keyword}
                  className="border-b border-black/20 py-2 text-sm font-medium uppercase tracking-wide text-black/70"
                >
                  {keyword}
                </li>
              ))}
            </ul>

            <p className="mt-12 text-xs font-bold uppercase tracking-[0.25em] text-swiss-accent">
              More from the journal
            </p>
            <ul className="mt-4 space-y-0 border-2 border-black">
              {related.map((item) => (
                <li key={item.slug} className="border-b-2 border-black last:border-b-0">
                  <Link
                    href={`/blog/${item.slug}`}
                    className="group block bg-white p-5 no-underline transition-colors duration-150 hover:bg-cta hover:text-white"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-swiss-accent group-hover:text-white">
                      {item.tag}
                    </span>
                    <span className="mt-2 block text-sm font-bold uppercase leading-snug tracking-tight">
                      {item.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="relative z-10 swiss-grid-pattern px-6 py-14 sm:px-10 lg:px-12 lg:py-16">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="text-2xl font-black uppercase tracking-tighter sm:text-3xl">
            Have a story idea or guest post?
          </h2>
          <p className="mt-4 max-w-xl text-sm font-medium text-black/70 sm:text-base">
            We welcome perspectives from partners, clients, and builders in our ecosystem.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex h-14 items-center justify-center border-2 border-black bg-black px-8 text-sm font-bold uppercase tracking-widest text-white no-underline transition-colors duration-150 hover:border-cta hover:bg-cta sm:h-16"
            >
              Contact us
            </Link>
            <Link
              href="/blog"
              className="inline-flex h-14 items-center justify-center border-2 border-t-0 border-black bg-white px-8 text-sm font-bold uppercase tracking-widest text-black no-underline transition-colors duration-150 hover:border-cta hover:bg-cta hover:text-white sm:h-16 sm:border-l-0 sm:border-t-2"
            >
              All posts
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
