import { useMemo } from "react";

const Sparkles = () => {
  const stars = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        delay: Math.random() * 4,
        duration: 2 + Math.random() * 3,
        size: 4 + Math.random() * 8,
      })),
    []
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      {stars.map((s) => (
        <div
          key={s.id}
          className="absolute animate-sparkle"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
            width: s.size,
            height: s.size,
          }}
        >
          <svg viewBox="0 0 24 24" fill="hsl(var(--birthday-gold))" width="100%" height="100%">
            <path d="M12 0l3 9h9l-7.5 5.5L19.5 24 12 18l-7.5 6 3-9.5L0 9h9z" />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default Sparkles;
