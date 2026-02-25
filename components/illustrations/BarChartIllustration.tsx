const bars = [40, 65, 45, 80, 55, 70];
export default function BarChartIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 60" fill="none" className={className}>
      {bars.map((h, i) => (
        <rect
          key={i}
          x={10 + i * 18}
          y={55 - (h / 100) * 50}
          width="12"
          height={(h / 100) * 50}
          rx="2"
          className="fill-brand/60"
        />
      ))}
    </svg>
  );
}
