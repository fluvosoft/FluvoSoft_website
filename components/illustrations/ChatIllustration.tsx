export default function ChatIllustration({ className = "" }: { className?: string }) {
  return (
    <div className={`space-y-2 ${className}`} aria-hidden>
      <div className="rounded-lg bg-white/10 px-3 py-2 text-sm text-foreground transition-colors duration-200 hover:bg-white/15">
        We need to update this heading before launch
      </div>
      <div className="ml-4 rounded-lg bg-white/10 px-3 py-2 text-sm text-foreground transition-colors duration-200 hover:bg-white/15">
        Let me quickly jump into Sanity and fix it
        <span className="block text-xs text-accent">— Sofia G.</span>
      </div>
      <div className="ml-8 rounded-lg bg-white/10 px-3 py-2 text-sm text-foreground transition-colors duration-200 hover:bg-white/15">
        Done!
        <span className="block text-xs text-accent">— Erik D.</span>
      </div>
    </div>
  );
}
