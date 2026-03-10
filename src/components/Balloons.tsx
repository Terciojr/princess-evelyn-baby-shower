import { useMemo } from "react";

const BALLOON_COLORS = [
  "hsl(var(--birthday-pink))",
  "hsl(var(--birthday-purple))",
  "hsl(var(--birthday-gold))",
  "hsl(var(--birthday-rose))",
  "hsl(var(--primary))",
];

const Balloons = () => {
  const balloons = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        id: i,
        left: 5 + Math.random() * 90,
        delay: Math.random() * 8,
        duration: 8 + Math.random() * 6,
        size: 30 + Math.random() * 20,
        color: BALLOON_COLORS[Math.floor(Math.random() * BALLOON_COLORS.length)],
      })),
    []
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {balloons.map((b) => (
        <div
          key={b.id}
          className="absolute animate-balloon"
          style={{
            left: `${b.left}%`,
            animationDelay: `${b.delay}s`,
            animationDuration: `${b.duration}s`,
          }}
        >
          <svg width={b.size} height={b.size * 1.3} viewBox="0 0 40 52">
            <ellipse cx="20" cy="18" rx="16" ry="18" fill={b.color} opacity="0.85" />
            <polygon points="20,36 17,40 23,40" fill={b.color} opacity="0.7" />
            <line x1="20" y1="40" x2="20" y2="52" stroke="currentColor" className="text-muted-foreground/40" strokeWidth="0.8" />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default Balloons;
