"use client";

import { motion } from "framer-motion";

export default function GalaxyBackground() {
  return (
    <>
      {/* Purple Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-700/20 blur-[140px]"
      />

      {/* Golden Glow */}
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-amber-500/10 blur-[120px]"
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-white"
            style={{
              left: `${i * 5}%`,
              top: `${(i * 13) % 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
            }}
          />
        ))}
      </div>
    </>
  );
}
