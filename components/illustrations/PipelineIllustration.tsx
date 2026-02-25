const items = [
  { time: "Sep 15 2025 12:34 PM", text: "Changes committed and pushed", by: "Cursor • contact@mikolajdobrucki.com" },
  { time: "Sep 20 2025 2:43 PM", text: "Pull Request #2121 merged", by: "Github • contact@mikolajdobrucki.com" },
  { time: "Aug 23 2025 6:34 PM", text: "Deployed to production", by: "Vercel • contact@mikolajdobrucki.com" },
];

export default function PipelineIllustration({ className = "" }: { className?: string }) {
  return (
    <div className={`relative flex flex-col ${className}`}>
      <div className="absolute left-[5px] top-3 bottom-3 w-px bg-white/20" />
      {items.map((item, i) => (
        <div key={i} className="relative flex gap-3 pb-4">
          <div className="relative z-10 mt-0.5 h-3 w-3 shrink-0 rounded-full bg-brand" />
          <div className="flex-1">
            <p className="text-xs text-accent">{item.time}</p>
            <p className="mt-0.5 text-sm font-medium text-foreground">{item.text}</p>
            <p className="mt-0.5 text-xs text-accent">{item.by}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
