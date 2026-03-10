import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EVENT_DATE = new Date(2026, 2, 28, 13, 0, 0, 0); // Mar 28, 2026 13:00

const Countdown = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const diff = EVENT_DATE.getTime() - now.getTime();

  const totalSeconds = Math.max(0, Math.floor(diff / 1000));
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const units = [
    { label: "Dias", value: days },
    { label: "Horas", value: hours },
    { label: "Minutos", value: minutes },
    { label: "Segundos", value: seconds },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="flex flex-col items-center gap-6"
    >
      <h2 className="font-script text-2xl md:text-3xl text-baby-pink">
        Faltam para o Grande Dia...
      </h2>
      <div className="flex gap-3 md:gap-6">
        {units.map((u, i) => (
          <motion.div
            key={u.label}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 + i * 0.1, type: "spring", stiffness: 150 }}
            className="flex flex-col items-center bg-card/80 backdrop-blur-sm rounded-2xl p-3 md:p-5 shadow-lg border border-border min-w-[70px] md:min-w-[90px] relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-baby-pink/5 to-baby-blue/5" />
            <AnimatePresence mode="popLayout">
              <motion.span
                key={u.value}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="font-display text-3xl md:text-5xl font-bold text-primary relative z-10"
              >
                {String(u.value).padStart(2, "0")}
              </motion.span>
            </AnimatePresence>
            <span className="text-xs md:text-sm text-muted-foreground mt-1 font-medium relative z-10">
              {u.label}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Countdown;
