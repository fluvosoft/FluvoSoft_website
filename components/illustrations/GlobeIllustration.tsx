"use client";

import { useState } from "react";

const NODES = [
  { id: "1", x: 100, y: 35, r: 4 },
  { id: "2", x: 145, y: 65, r: 3 },
  { id: "3", x: 130, y: 115, r: 3 },
  { id: "4", x: 70, y: 115, r: 3 },
  { id: "5", x: 55, y: 65, r: 4 },
  { id: "6", x: 100, y: 85, r: 5 },
  { id: "7", x: 115, y: 50, r: 3 },
  { id: "8", x: 85, y: 50, r: 3 },
  { id: "9", x: 88, y: 95, r: 3 },
  { id: "10", x: 112, y: 95, r: 3 },
];

const CONNECTIONS = [
  [0, 1], [0, 5], [0, 6], [0, 7],
  [1, 2], [1, 6],
  [2, 3], [2, 5], [2, 9],
  [3, 4], [3, 5], [3, 8], [3, 9],
  [4, 5], [4, 7],
  [5, 6], [5, 7], [5, 8], [5, 9],
  [6, 7], [8, 9],
];

export default function GlobeIllustration({ className = "" }: { className?: string }) {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-lg ${className}`}
      aria-hidden
    >
      <svg viewBox="0 0 200 200" fill="none" className="h-full w-full max-h-[200px]">
        <defs>
          <radialGradient id="globeBg" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(67,56,202,0.35)" />
            <stop offset="70%" stopColor="rgba(30,27,75,0.25)" />
            <stop offset="100%" stopColor="rgba(10,10,20,0.85)" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <rect width="200" height="200" fill="url(#globeBg)" />
        {/* Wireframe globe - longitude ellipses */}
        {[0, 30, 60, 90, 120, 150].map((angle) => (
          <ellipse
            key={angle}
            cx="100"
            cy="100"
            rx="45"
            ry="45"
            fill="none"
            stroke="#FB923C"
            strokeWidth="0.7"
            opacity={0.5}
            transform={`rotate(${angle} 100 100)`}
          />
        ))}
        <ellipse cx="100" cy="100" rx="45" ry="14" fill="none" stroke="#FB923C" strokeWidth="0.7" opacity="0.55" />
        <ellipse cx="100" cy="100" rx="45" ry="8" fill="none" stroke="#FB923C" strokeWidth="0.5" opacity="0.45" transform="rotate(-25 100 100)" />
        <ellipse cx="100" cy="100" rx="45" ry="8" fill="none" stroke="#FB923C" strokeWidth="0.5" opacity="0.45" transform="rotate(25 100 100)" />
        {/* Orbital paths */}
        <ellipse cx="100" cy="100" rx="72" ry="26" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="0.8" strokeDasharray="5 4" />
        <ellipse cx="100" cy="100" rx="72" ry="26" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="0.8" strokeDasharray="5 4" transform="rotate(55 100 100)" />
        {/* Network connections - lines between nodes */}
        {CONNECTIONS.map(([i, j], idx) => {
          const a = NODES[i];
          const b = NODES[j];
          if (!a || !b) return null;
          const active = hoveredNode === a.id || hoveredNode === b.id;
          return (
            <line
              key={idx}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke={active ? "rgba(251,146,60,0.9)" : "rgba(255,255,255,0.25)"}
              strokeWidth={active ? 1.2 : 0.6}
              className="transition-all duration-200"
            />
          );
        })}
        {/* Network nodes - interactive */}
        {NODES.map((node) => {
          const isHovered = hoveredNode === node.id;
          return (
            <circle
              key={node.id}
              cx={node.x}
              cy={node.y}
              r={isHovered ? node.r + 2 : node.r}
              fill={isHovered ? "#FB923C" : "rgba(255,255,255,0.9)"}
              className="cursor-pointer transition-all duration-200"
              style={{ filter: isHovered ? "url(#glow)" : undefined }}
              onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}
            />
          );
        })}
      </svg>
    </div>
  );
}
