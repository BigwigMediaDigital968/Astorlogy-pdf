"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="mb-16 text-center">
      <motion.div
        initial={{
          scale: 0,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
      >
        <div className="mx-auto mb-8 flex h-32 w-32 items-center justify-center rounded-full border border-violet-500/40 bg-violet-500/10 backdrop-blur-xl">
          <span className="text-5xl">🔮</span>
        </div>
      </motion.div>

      <motion.h1
        initial={{
          y: 50,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          delay: 0.3,
        }}
        className="text-6xl font-bold"
      >
        Unlock Your Cosmic Destiny
      </motion.h1>

      <motion.p
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 0.7,
        }}
        className="mx-auto mt-6 max-w-2xl text-lg text-slate-400"
      >
        Ancient astrology meets modern cosmic analysis. Select your zodiac sign
        to reveal your personalized destiny report.
      </motion.p>
    </div>
  );
}
