import MockupBrowserIllustration from "@/components/illustrations/MockupBrowserIllustration";
import MockupMobileIllustration from "@/components/illustrations/MockupMobileIllustration";
import CodeEditorIllustration from "@/components/illustrations/CodeEditorIllustration";
import CarouselIllustration from "@/components/illustrations/CarouselIllustration";
import RisingIllustration from "@/components/illustrations/RisingIllustration";
import WavesIllustration from "@/components/illustrations/WavesIllustration";

export default function IllustrationsSection() {
  return (
    <section className="border-t border-white/10 bg-background px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-container">
        <h2 className="text-center text-2xl font-semibold text-foreground md:text-3xl">
          Pixel-perfect illustrations
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-accent">
          Hand-crafted with HTML, SVG, CSS and React to fit your design system. Made for landing pages and marketing websites.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <p className="mb-3 text-sm font-medium text-accent">MockupBrowserIllustration</p>
            <MockupBrowserIllustration className="w-full" />
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <p className="mb-3 text-sm font-medium text-accent">MockupMobileIllustration</p>
            <div className="flex justify-center">
              <MockupMobileIllustration />
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <p className="mb-3 text-sm font-medium text-accent">CodeEditorIllustration</p>
            <CodeEditorIllustration className="w-full" />
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 sm:col-span-2">
            <p className="mb-3 text-sm font-medium text-accent">CarouselIllustration</p>
            <CarouselIllustration />
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <p className="mb-3 text-sm font-medium text-accent">RisingIllustration</p>
            <RisingIllustration className="h-24 w-full text-brand" />
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 sm:col-span-2">
            <p className="mb-3 text-sm font-medium text-accent">WavesIllustration</p>
            <WavesIllustration className="h-16 w-full text-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
}
