import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "@/components/Confetti";
import Balloons from "@/components/Balloons";
import Sparkles from "@/components/Sparkles";
import FloatingHearts from "@/components/FloatingHearts";
import FloatingButterflies from "@/components/FloatingButterflies";
import Countdown from "@/components/Countdown";
import MessageCards from "@/components/MessageCards";

const isEventDay = () => {
  const now = new Date();
  return now.getFullYear() === 2026 && now.getMonth() === 2 && now.getDate() === 28;
};

const CrownIcon = () => (
  <motion.div
    initial={{ scale: 0, rotate: -20 }}
    animate={{ scale: 1, rotate: 0 }}
    transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
  >
    <svg viewBox="0 0 64 64" className="w-24 h-24 md:w-32 md:h-32 animate-float drop-shadow-lg" fill="none">
      <path
        d="M10 44L15 20L25 30L32 10L39 30L49 20L54 44H10Z"
        fill="hsl(var(--primary))"
        stroke="hsl(var(--secondary))"
        strokeWidth="2"
      />
      <circle cx="32" cy="8" r="4" fill="hsl(var(--secondary))" />
      <circle cx="15" cy="18" r="3" fill="hsl(var(--secondary))" />
      <circle cx="49" cy="18" r="3" fill="hsl(var(--secondary))" />
      <rect x="10" y="44" width="44" height="6" rx="3" fill="hsl(var(--secondary))" />
      {/* Jewels */}
      <circle cx="20" cy="47" r="1.5" fill="white" />
      <circle cx="32" cy="47" r="1.5" fill="white" />
      <circle cx="44" cy="47" r="1.5" fill="white" />
    </svg>
  </motion.div>
);

const quotes = [
  "Um pequeno presente do céu chegou... 💕",
  "A nossa princesa Evelyn já é muito amada! 👑",
  "Celebrar a vida é o maior presente que podemos partilhar. ✨",
  "Cada detalhe preparado com muito amor e carinho. 🍼",
];

const RotatingQuote = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % quotes.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="h-16 flex items-center justify-center max-w-xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="font-script text-lg md:text-xl text-muted-foreground text-center px-4"
        >
          {quotes[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
};

const AgeSinceBirth = () => {
  const [age, setAge] = useState("");

  useEffect(() => {
    const calculateAge = () => {
      const birthDate = new Date(2025, 11, 23); // 23 de Dezembro de 2025
      const now = new Date();
      
      let months = (now.getFullYear() - birthDate.getFullYear()) * 12 + (now.getMonth() - birthDate.getMonth());
      let days = now.getDate() - birthDate.getDate();
      
      if (days < 0) {
        months--;
        const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += lastMonth.getDate();
      }
      
      if (months === 0) {
        setAge(`${days} dias de vida`);
      } else {
        setAge(`${months} meses e ${days} dias`);
      }
    };

    calculateAge();
    const id = setInterval(calculateAge, 86400000);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-center bg-white/30 backdrop-blur-sm rounded-2xl p-4 border border-baby-pink/20"
    >
      <p className="text-sm uppercase tracking-widest text-baby-blue font-bold">A nossa princesa tem</p>
      <p className="font-display text-2xl text-primary">{age}</p>
    </motion.div>
  );
};

const Index = () => {
  const [eventDay, setEventDay] = useState(isEventDay());

  useEffect(() => {
    const id = setInterval(() => {
      setEventDay(isEventDay());
    }, 60000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-baby-pink/10 via-background to-baby-blue/10">
      {/* Animated gradient orbs */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-baby-pink/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -25, 0], y: [0, 30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-baby-blue/5 rounded-full blur-3xl"
      />

      {eventDay && (
        <>
          <Confetti />
          <Balloons />
        </>
      )}
      <Sparkles />
      <FloatingHearts />
      <FloatingButterflies />

      <main className="relative z-10 flex flex-col items-center py-16 px-4 gap-12 md:gap-16">
        {/* Crown */}
        <CrownIcon />

        {/* Name & Greeting */}
        <div className="text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <p className="font-script text-xl md:text-2xl text-baby-pink mb-2">
              ✨ Chá de Bebé da Princesa ✨
            </p>
            <h1 className="font-display text-6xl sm:text-7xl md:text-9xl font-black tracking-tight text-primary drop-shadow-sm">
              Evelyn
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="max-w-2xl mx-auto px-4 space-y-4"
          >
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              ✨👑 Com o coração transbordando de alegria, tenho a honra de convidar vocês para um momento muito especial nas nossas vidas… 👑✨
            </p>
            <p className="text-primary font-medium italic">
              Vamos celebrar a doce espera da nossa princesa Evelyn 🍼💖
            </p>
            <p className="text-muted-foreground text-sm md:text-base">
              O seu Chá de Bebé será uma tarde encantadora, preparada com muito amor e carinho, em tons de rosa, branco e jeans, dignos de uma verdadeira princesa 🎀🤍
            </p>
          </motion.div>
        </div>

        {/* Age Section */}
        <AgeSinceBirth />

        {/* Details Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl"
        >
          {[
            { label: "Data", value: "28 de Março de 2026", icon: "🗓" },
            { label: "Hora", value: "13h", icon: "⏰" },
            { label: "Local", value: "Zona Verde", icon: "📍" },
          ].map((item, i) => (
            <div key={i} className="bg-card/70 backdrop-blur-sm rounded-2xl p-6 border border-border shadow-md text-center group hover:border-baby-blue transition-colors">
              <span className="text-3xl block mb-2">{item.icon}</span>
              <h3 className="font-bold text-baby-blue uppercase tracking-wider text-xs mb-1">{item.label}</h3>
              <p className="font-display text-lg text-card-foreground">{item.value}</p>
            </div>
          ))}
        </motion.div>

        {/* Rotating quote */}
        <RotatingQuote />

        {/* Countdown */}
        <Countdown />

        {/* Gift Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="w-full max-w-3xl space-y-8 bg-card/40 backdrop-blur-sm rounded-3xl p-8 border border-baby-pink/20"
        >
          <div className="text-center space-y-2">
            <h2 className="font-script text-3xl md:text-4xl text-baby-pink">Presentes & Mimos</h2>
            <p className="text-muted-foreground">
              Para quem desejar presentear a nossa pequena, serão bem-vindos fraldas, roupinhas, brinquedos ou qualquer outro mimo preparado com carinho 🎁🧸🍼
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
            <div className="p-4 bg-white/50 rounded-xl border border-dashed border-baby-blue/30">
              <p className="font-medium text-baby-blue">Sugestões</p>
              <p className="text-sm">Fraldas, roupinhas, brinquedos ou qualquer mimo preparado com carinho.</p>
            </div>
            <div className="p-4 bg-white/50 rounded-xl border border-dashed border-baby-pink/30">
              <p className="font-medium text-baby-pink">Preferências (NB)</p>
              <p className="text-sm font-bold">Fraldas Huggies e Pampers (Tamanho 2 - 5kg)</p>
            </div>
          </div>
        </motion.div>

        {/* Messages */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full space-y-8"
        >
          <h2 className="font-script text-3xl md:text-4xl text-center text-baby-blue">
            Mensagens de Carinho
          </h2>
          <MessageCards />
        </motion.div>

        {/* RSVP & Confirmation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-baby-blue/10 backdrop-blur-sm rounded-3xl p-8 border border-baby-blue/20 max-w-lg w-full text-center space-y-4"
        >
          <p className="text-2xl">📞</p>
          <h3 className="font-display text-xl font-bold text-card-foreground">
            Confirmação de Presença
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            A vossa presença tornará este dia ainda mais inesquecível! 💕 Por favor, confirme através do número abaixo.
          </p>
          <a 
            href="tel:848097349" 
            className="inline-block bg-baby-blue text-white px-8 py-3 rounded-full font-bold hover:bg-baby-denim transition-colors shadow-lg"
          >
            Confirmar: 848097349
          </a>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center space-y-2 mt-8"
        >
          <div className="flex justify-center gap-1 text-xl">
            {["🍼", "🎀", "🧸", "🤍", "✨"].map((e, i) => (
              <motion.span
                key={i}
                animate={{ y: [0, -5, 0] }}
                transition={{ delay: i * 0.15, duration: 2, repeat: Infinity }}
              >
                {e}
              </motion.span>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            Evelyn — A nossa Pequena Princesa 👑
          </p>
          <p className="text-xs text-muted-foreground/60">
            Preparado com muito amor e carinho 💕
          </p>
        </motion.div>
      </main>
    </div>
  );
};

export default Index;
