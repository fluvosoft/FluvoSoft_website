const nodes = [
  { x: 50, y: 20 },
  { x: 20, y: 50 },
  { x: 80, y: 50 },
  { x: 35, y: 75 },
  { x: 65, y: 75 },
  { x: 50, y: 50 },
];
const links = [[0, 5], [1, 5], [2, 5], [3, 5], [4, 5], [1, 3], [2, 4], [0, 1], [0, 2]];

export default function NetworkIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className}>
      {links.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke="currentColor"
          strokeWidth="1"
          className="text-white/20"
        />
      ))}
      {nodes.map((n, i) => (
        <circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={i === 5 ? 6 : 4}
          className={i === 5 ? "fill-brand" : "fill-white/30"}
        />
      ))}
    </svg>
  );
}
