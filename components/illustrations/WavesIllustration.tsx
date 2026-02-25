export default function WavesIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 40" fill="none" className={className}>
      <path
        d="M0 20 Q30 5 60 20 T120 20"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-brand/40"
        fill="none"
      />
      <path
        d="M0 25 Q30 10 60 25 T120 25"
        stroke="currentColor"
        strokeWidth="1"
        className="text-white/20"
        fill="none"
      />
      <path
        d="M0 30 Q30 15 60 30 T120 30"
        stroke="currentColor"
        strokeWidth="1"
        className="text-white/10"
        fill="none"
      />
    </svg>
  );
}
