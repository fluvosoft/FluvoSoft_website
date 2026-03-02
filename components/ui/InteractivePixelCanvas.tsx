"use client";

import { useRef, useEffect, useCallback } from "react";

const COLS = 24;
const ROWS = 9;
const HEAT_RADIUS = 5;
const HEAT_STRENGTH = 0.3;
const DECAY = 0.985;
const EMITTER_STRENGTH = 0.18;

// Canvas base #e0cdc6, interactive color #f22e1a
const BASE = { r: 224, g: 205, b: 198 }; // #e0cdc6
const HEAT = { r: 242, g: 46, b: 26 }; // #f22e1a

function lerpColor(heat: number): string {
  const t = Math.min(1, heat);
  const r = Math.round(BASE.r + (HEAT.r - BASE.r) * t);
  const g = Math.round(BASE.g + (HEAT.g - BASE.g) * t);
  const b = Math.round(BASE.b + (HEAT.b - BASE.b) * t);
  const a = 0.7 + t * 0.3;
  return `rgba(${r},${g},${b},${a})`;
}

export default function InteractivePixelCanvas({
  className = "",
  fullScreen = false,
}: {
  className?: string;
  fullScreen?: boolean;
}) {
  type ShapeType = "block" | "line" | "plus";
  type Emitter = {
    x: number; // in grid coords
    y: number;
    vx: number;
    vy: number;
    life: number;
    initialLife: number;
    type: ShapeType;
    size: number;
  };

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const heatRef = useRef<Float32Array>(new Float32Array(COLS * ROWS));
  const rafRef = useRef<number>(0);
  const mouseRef = useRef({ x: -1, y: -1 });
  const sizeRef = useRef({ cellW: 12, cellH: 12 });
  const frameRef = useRef(0);
  const emittersRef = useRef<Emitter[]>([]);
  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const heat = heatRef.current;
    const frame = ++frameRef.current;
    const mx = mouseRef.current.x;
    const my = mouseRef.current.y;
    const { cellW, cellH } = sizeRef.current;

    // Add heat at mouse position - square pointer, same visual width & height
    if (mx >= 0 && my >= 0 && cellW > 0 && cellH > 0) {
      const col = Math.floor(mx / cellW);
      const row = Math.floor(my / cellH);
      const radiusY = HEAT_RADIUS;
      const radiusX = Math.max(1, Math.round(HEAT_RADIUS * (cellH / cellW)));
      for (let dy = -radiusY; dy <= radiusY; dy++) {
        for (let dx = -radiusX; dx <= radiusX; dx++) {
          const dist = Math.max(Math.abs(dx) / radiusX, Math.abs(dy) / radiusY);
          const falloff = Math.max(0, 1 - dist);
          const add = HEAT_STRENGTH * falloff * falloff;
          const ny = row + dy;
          const nx = col + dx;
          if (ny >= 0 && ny < ROWS && nx >= 0 && nx < COLS) {
            const idx = ny * COLS + nx;
            heat[idx] = Math.min(1, heat[idx] + add);
          }
        }
      }
    }

    // Update and render moving emitters (auto-generated pixel shapes)
    const emitters = emittersRef.current;

    // Occasionally spawn new emitters of different shapes
    if (frame % 50 === 0 && emitters.length < 6) {
      const type: ShapeType =
        Math.random() < 0.33 ? "block" : Math.random() < 0.5 ? "line" : "plus";
      const life = 480 + Math.random() * 240;
      const size = 1 + Math.floor(Math.random() * 3); // 1, 2, or 3
      emitters.push({
        x: Math.random() * COLS,
        y: Math.random() * ROWS,
        vx: (Math.random() - 0.5) * 0.08,
        vy: (Math.random() - 0.5) * 0.06,
        life,
        initialLife: life,
        type,
        size,
      });
    }

    // Apply emitter heat
    for (let i = emitters.length - 1; i >= 0; i--) {
      const e = emitters[i];

      // Slight wobble so paths aren't perfectly straight
      e.vx += (Math.random() - 0.5) * 0.01;
      e.vy += (Math.random() - 0.5) * 0.01;
      // Clamp velocity to keep motion smooth
      e.vx = Math.max(-0.12, Math.min(0.12, e.vx));
      e.vy = Math.max(-0.09, Math.min(0.09, e.vy));

      e.x += e.vx;
      e.y += e.vy;
      e.life -= 1;
      if (e.life <= 0 || e.x < -2 || e.x > COLS + 2 || e.y < -2 || e.y > ROWS + 2) {
        emitters.splice(i, 1);
        continue;
      }

      const cx = Math.round(e.x);
      const cy = Math.round(e.y);
      const lifeFactor = Math.max(0, e.life / e.initialLife);

      const offsets: Array<[number, number]> = [];
      const s = e.size;
      if (e.type === "block") {
        for (let oy = 0; oy < s + 1; oy++) {
          for (let ox = 0; ox < s + 1; ox++) {
            offsets.push([ox, oy]);
          }
        }
      } else if (e.type === "line") {
        for (let ox = -1; ox <= s + 2; ox++) {
          offsets.push([ox, 0]);
        }
      } else {
        // plus shape
        offsets.push([0, 0]);
        for (let d = 1; d <= s + 1; d++) {
          offsets.push([d, 0]);
          offsets.push([-d, 0]);
          offsets.push([0, d]);
          offsets.push([0, -d]);
        }
      }

      for (const [ox, oy] of offsets) {
        const nx = cx + ox;
        const ny = cy + oy;
        if (nx < 0 || nx >= COLS || ny < 0 || ny >= ROWS) continue;
        const idx = ny * COLS + nx;
        const add = EMITTER_STRENGTH * lifeFactor;
        heat[idx] = Math.min(1, heat[idx] + add);
      }
    }

    // Decay and draw
    for (let y = 0; y < ROWS; y++) {
      for (let x = 0; x < COLS; x++) {
        const idx = y * COLS + x;
        heat[idx] *= DECAY;
        ctx.fillStyle = lerpColor(heat[idx]);
        ctx.fillRect(x * cellW, y * cellH, cellW + 1, cellH + 1);
      }
    }

    rafRef.current = requestAnimationFrame(draw);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      const w = Math.floor(rect.width);
      const h = Math.floor(rect.height);
      if (w <= 0 || h <= 0) return;

      canvas.width = w;
      canvas.height = h;
      sizeRef.current = {
        cellW: w / COLS,
        cellH: h / ROWS,
      };
    };

    const handleMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleLeave = () => {
      mouseRef.current = { x: -1, y: -1 };
    };

    const handleDocMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const inBounds =
        e.clientX >= 0 &&
        e.clientX <= window.innerWidth &&
        e.clientY >= 0 &&
        e.clientY <= window.innerHeight;
      if (inBounds) {
        mouseRef.current = {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        };
      } else {
        mouseRef.current = { x: -1, y: -1 };
      }
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(container);

    if (fullScreen) {
      document.addEventListener("mousemove", handleDocMove);
    } else {
      container.addEventListener("mousemove", handleMove);
      container.addEventListener("mouseleave", handleLeave);
    }

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      ro.disconnect();
      if (fullScreen) {
        document.removeEventListener("mousemove", handleDocMove);
      } else {
        container.removeEventListener("mousemove", handleMove);
        container.removeEventListener("mouseleave", handleLeave);
      }
      cancelAnimationFrame(rafRef.current);
    };
  }, [draw]);

  const containerClass = fullScreen
    ? "fixed inset-0 z-0 h-screen w-screen max-w-none p-0 pointer-events-none animate-canvas-fade-in"
    : `h-full w-full ${className}`;

  return (
    <div ref={containerRef} className={containerClass}>
      <canvas
        ref={canvasRef}
        className="block h-full w-full"
        style={{ imageRendering: "pixelated" }}
        aria-hidden
      />
    </div>
  );
}
