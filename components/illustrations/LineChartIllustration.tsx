const points = "10,50 30,45 50,35 70,40 90,25 110,30";
export default function LineChartIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 60" fill="none" className={`${className}`}>
      <polyline
        points={points}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-brand"
        fill="none"
      />
      <polygon
        points={`${points} 110,60 10,60`}
        className="fill-brand/10"
      />
    </svg>
  );
}
