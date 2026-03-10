import { useMemo } from "react";

const COLORS = [
  "hsl(330, 70%, 55%)",
  "hsl(280, 60%, 50%)",
  "hsl(45, 80%, 55%)",
  "hsl(350, 80%, 70%)",
  "hsl(270, 50%, 75%)",
  "hsl(0, 0%, 100%)",
  "hsl(200, 70%, 60%)",
];

const Confetti = () => {
  const pieces = useMemo(
    () =>
      Array.from({ length: 50 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 3 + Math.random() * 4,
        size: 6 + Math.random() * 8,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        shape: Math.random() > 0.5 ? "circle" : "rect",
      })),
    []
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {pieces.map((p) => (
        <div
          key={p.id}
          className="absolute animate-confetti"
          style={{
            left: `${p.left}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            width: p.shape === "circle" ? p.size : p.size * 0.6,
            height: p.size,
            backgroundColor: p.color,
            borderRadius: p.shape === "circle" ? "50%" : "2px",
          }}
        />
      ))}
    </div>
  );
};

export default Confetti;
