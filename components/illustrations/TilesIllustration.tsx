export default function TilesIllustration({ className = "" }: { className?: string }) {
  return (
    <div className={`grid grid-cols-3 gap-1.5 ${className}`}>
      {[...Array(9)].map((_, i) => (
        <div
          key={i}
          className="aspect-square rounded-md bg-white/10"
          style={{ opacity: 1 - (i % 3) * 0.15 }}
        />
      ))}
    </div>
  );
}
