const items = [
  "Accessibility first",
  "Responsive design",
  "Light and dark mode",
  "Easy to customize",
  "Top-level performance",
  "Production ready",
  "Made for localisation",
  "CMS friendly",
];

export default function CarouselIllustration({ className = "" }: { className?: string }) {
  return (
    <div className={`flex gap-2 overflow-x-auto pb-2 ${className}`}>
      {items.map((label, i) => (
        <div
          key={i}
          className="shrink-0 rounded-md border border-white/20 bg-white/5 px-3 py-2 text-xs text-foreground"
        >
          {label}
        </div>
      ))}
    </div>
  );
}
