import { motion } from "framer-motion";

const messages = [
  { emoji: "✨", text: "Bem-vinda, Princesa Evelyn! Que a tua vida seja iluminada." },
  { emoji: "🍼", text: "Desejamos muita saúde e amor para esta pequena joia!" },
  { emoji: "🌟", text: "Que a Evelyn traga ainda mais luz para a vossa família!" },
  { emoji: "💖", text: "Um mundo de descobertas e alegrias espera por ti." },
  { emoji: "🎀", text: "Que cresças rodeada de carinho e proteção sempre!" },
  { emoji: "🧸", text: "Muitos mimos e momentos doces para a nossa princesa." },
  { emoji: "🦋", text: "Que a tua caminhada seja repleta de sonhos realizados!" },
  { emoji: "🌸", text: "És um presente abençoado para todos nós, Evelyn." },
  { emoji: "🤍", text: "Que o amor transborde em cada dia da tua vida!" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.12,
      duration: 0.5,
      type: "spring" as const,
      stiffness: 100,
    },
  }),
};

const MessageCards = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto px-4">
    {messages.map((m, i) => (
      <motion.div
        key={i}
        custom={i}
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        whileHover={{ scale: 1.05, y: -8, boxShadow: "0 20px 40px -15px rgba(255,182,193,0.25)" }}
        className="group bg-card/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-border cursor-default relative overflow-hidden"
      >
        {/* Decorative shimmer */}
        <div className="absolute inset-0 bg-gradient-to-br from-baby-pink/5 via-transparent to-baby-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative z-10">
          <motion.span
            className="text-3xl block mb-3"
            whileHover={{ scale: 1.3, rotate: 15 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {m.emoji}
          </motion.span>
          <p className="font-display text-base md:text-lg text-card-foreground leading-relaxed italic">
            "{m.text}"
          </p>
        </div>
      </motion.div>
    ))}
  </div>
);

export default MessageCards;
