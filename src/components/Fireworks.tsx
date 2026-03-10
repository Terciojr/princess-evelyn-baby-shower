import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Particle {
  id: string;
  x: number;
  y: number;
  color: string;
  angle: number;
  velocity: number;
  size: number;
}

interface Burst {
  id: string;
  x: number;
  y: number;
  particles: Particle[];
}

const COLORS = [
  "hsl(var(--birthday-pink))",
  "hsl(var(--birthday-gold))",
  "hsl(var(--birthday-rose))",
  "hsl(var(--primary))",
  "hsl(var(--accent))",
  "#ffffff",
];

const Fireworks: React.FC = () => {
  const [bursts, setBursts] = useState<Burst[]>([]);

  const createBurst = useCallback((x: number, y: number) => {
    const id = Math.random().toString(36).substr(2, 9);
    const particleCount = 12 + Math.floor(Math.random() * 8);
    
    const particles: Particle[] = Array.from({ length: particleCount }).map((_, i) => ({
      id: `${id}-${i}`,
      x,
      y,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      angle: (i / particleCount) * Math.PI * 2 + (Math.random() - 0.5) * 0.5,
      velocity: 50 + Math.random() * 100,
      size: 4 + Math.random() * 4,
    }));

    setBursts((prev) => [...prev, { id, x, y, particles }]);

    // Remove burst after animation
    setTimeout(() => {
      setBursts((prev) => prev.filter((b) => b.id !== id));
    }, 1000);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      createBurst(e.clientX, e.clientY);
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [createBurst]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
      <AnimatePresence>
        {bursts.map((burst) => (
          <React.Fragment key={burst.id}>
            {burst.particles.map((p) => (
              <motion.div
                key={p.id}
                initial={{ 
                  x: p.x, 
                  y: p.y, 
                  opacity: 1, 
                  scale: 1 
                }}
                animate={{ 
                  x: p.x + Math.cos(p.angle) * p.velocity,
                  y: p.y + Math.sin(p.angle) * p.velocity + 20, // Add gravity effect
                  opacity: 0,
                  scale: 0.2,
                }}
                transition={{ 
                  duration: 0.8, 
                  ease: "easeOut" 
                }}
                className="absolute rounded-full"
                style={{
                  width: p.size,
                  height: p.size,
                  backgroundColor: p.color,
                  boxShadow: `0 0 10px ${p.color}`,
                }}
              />
            ))}
          </React.Fragment>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Fireworks;
