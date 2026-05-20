export default function RippleIllustration({ className = "" }: { className?: string }) {
  return (
    <div className={`relative flex h-24 w-24 items-center justify-center ${className}`}>
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="absolute animate-pulse rounded-full border-2 border-brand/30"
          style={{ width: `${i * 24}px`, height: `${i * 24}px` }}
        />
      ))}
      <div className="h-3 w-3 rounded-full bg-brand" />
    </div>
  );
}
