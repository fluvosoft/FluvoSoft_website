export default function InfrastructureIllustration({ className = "" }: { className?: string }) {
  return (
    <div className={`rounded-lg border border-white/20 bg-background p-3 font-mono text-xs text-foreground ${className}`}>
      <div className="text-accent">$</div>
      <div className="mt-1">127.0.0.1:8000</div>
    </div>
  );
}
