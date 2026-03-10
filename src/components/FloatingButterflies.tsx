import { useMemo } from "react";
import { motion } from "framer-motion";

const BUTTERFLY_COLORS = [
  "hsl(var(--birthday-pink))",
  "hsl(var(--birthday-purple))",
  "hsl(var(--birthday-gold))",
  "hsl(var(--birthday-rose))",
];

const FloatingButterflies = () => {
  const butterflies = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 15,
        duration: 10 + Math.random() * 10,
        size: 15 + Math.random() * 20,
        color: BUTTERFLY_COLORS[Math.floor(Math.random() * BUTTERFLY_COLORS.length)],
      })),
    []
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
      {butterflies.map((b) => (
        <motion.div
          key={b.id}
          initial={{ bottom: -50, opacity: 0 }}
          animate={{ 
            bottom: "110%", 
            opacity: [0, 0.6, 0.6, 0],
            x: [0, 30, -30, 0] 
          }}
          transition={{
            duration: b.duration,
            delay: b.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute"
          style={{
            left: `${b.left}%`,
          }}
        >
          <svg
            width={b.size}
            height={b.size}
            viewBox="0 0 24 24"
            fill={b.color}
            className="animate-pulse"
            style={{ filter: "drop-shadow(0 0 5px rgba(255,255,255,0.5))" }}
          >
            <path d="M12,10C12,10 11,7 8,7C5,7 4,9 4,11C4,13 7,15 8,15L12,17L16,15C17,15 20,13 20,11C20,9 19,7 16,7C13,7 12,10 12,10M12,17L12,22M12,17L12,15M12,15C12,15 13,12 16,12C19,12 20,14 20,16C20,18 17,20 16,20L12,18L8,20C7,20 4,18 4,16C4,14 5,12 8,12C11,12 12,15 12,15Z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingButterflies;
