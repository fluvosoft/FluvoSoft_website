export default function MockupBrowserIllustration({ className = "" }: { className?: string }) {
  return (
    <div className={`overflow-hidden rounded-lg border border-white/20 bg-white/5 ${className}`}>
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-3 py-2">
        <div className="flex gap-1.5">
          <div className="h-2 w-2 rounded-full bg-white/40" />
          <div className="h-2 w-2 rounded-full bg-white/40" />
          <div className="h-2 w-2 rounded-full bg-white/40" />
        </div>
        <div className="ml-4 flex-1 rounded bg-white/10 py-1 text-center text-[10px] text-accent">
          localhost:3000
        </div>
      </div>
      <div className="h-20 bg-background/50" />
    </div>
  );
}
