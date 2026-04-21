import { useMemo } from "react";

type Props = { count?: number; className?: string };

export function ParticleField({ count = 40, className = "" }: Props) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 4 + 1.5,
        delay: Math.random() * 8,
        duration: Math.random() * 10 + 8,
        color: ["#6366f1", "#8b5cf6", "#06b6d4", "#ec4899"][i % 4],
      })),
    [count]
  );

  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            background: p.color,
            boxShadow: `0 0 ${p.size * 4}px ${p.color}`,
            animation: `float ${p.duration}s ease-in-out ${p.delay}s infinite`,
            opacity: 0.7,
          }}
        />
      ))}
    </div>
  );
}
