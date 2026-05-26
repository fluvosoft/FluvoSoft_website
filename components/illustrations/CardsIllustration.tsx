export default function CardsIllustration({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-1.5 ${className}`}>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="rounded-lg border-2 border-brand/50 bg-white/5"
          style={{
            width: `${48 - i * 8}px`,
            height: `${56 - i * 6}px`,
            transform: `rotate(${-4 + i * 4}deg) translateY(${i * 2}px)`,
          }}
        />
      ))}
    </div>
  );
}
