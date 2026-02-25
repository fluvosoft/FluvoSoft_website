export default function RisingIllustration({ className = "", small = false }: { className?: string; small?: boolean }) {
  const size = small ? 80 : 120;
  return (
    <svg viewBox={`0 0 ${size} ${size * 0.5}`} fill="none" className={className}>
      <path
        d={`M 0 ${size * 0.5} Q ${size * 0.25} ${size * 0.35} ${size * 0.5} ${size * 0.4} Q ${size * 0.75} ${size * 0.2} ${size} ${size * 0.25}`}
        stroke="currentColor"
        strokeWidth="2"
        className="text-brand/50"
        fill="none"
      />
      <path
        d={`M 0 ${size * 0.5} Q ${size * 0.25} ${size * 0.35} ${size * 0.5} ${size * 0.4} Q ${size * 0.75} ${size * 0.2} ${size} ${size * 0.25} L ${size} ${size * 0.5} Z`}
        className="fill-brand/10"
      />
    </svg>
  );
}
