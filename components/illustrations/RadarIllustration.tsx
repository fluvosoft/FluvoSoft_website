export default function RadarIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" fill="none" className={className}>
      <circle cx="40" cy="40" r="35" stroke="currentColor" strokeWidth="1" className="text-white/20" />
      <circle cx="40" cy="40" r="25" stroke="currentColor" strokeWidth="1" className="text-white/15" />
      <circle cx="40" cy="40" r="15" stroke="currentColor" strokeWidth="1" className="text-white/10" />
      <line x1="40" y1="40" x2="40" y2="5" stroke="currentColor" strokeWidth="1" className="text-white/20" />
      <line x1="40" y1="40" x2="72" y2="40" stroke="currentColor" strokeWidth="1" className="text-white/20" />
      <line x1="40" y1="40" x2="55" y2="15" stroke="currentColor" strokeWidth="1" className="text-white/20" />
      <path
        d="M40 40 L40 25 L52 32 Z"
        className="fill-brand/40"
      />
    </svg>
  );
}
