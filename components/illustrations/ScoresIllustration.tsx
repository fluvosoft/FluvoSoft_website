const scores = [
  { label: "Performance", value: 95 },
  { label: "Accessibility", value: 85 },
  { label: "Practices", value: 90 },
];

export default function ScoresIllustration({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      {scores.map((s) => (
        <div key={s.label} className="flex items-center justify-between gap-4">
          <span className="text-sm text-foreground">{s.label}</span>
          <div className="flex flex-1 items-center gap-2">
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-brand transition-all duration-500"
                style={{ width: `${s.value}%` }}
              />
            </div>
            <span className="w-8 text-right text-sm font-medium text-foreground">{s.value}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
