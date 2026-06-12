"use client";

import { motion } from "framer-motion";

const signs = [
  "♈",
  "♉",
  "♊",
  "♋",
  "♌",
  "♍",
  "♎",
  "♏",
  "♐",
  "♑",
  "♒",
  "♓",
];

export default function ZodiacOrbit() {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center z-0 opacity-15">
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
        className="relative h-[500px] w-[500px]"
      >
        {signs.map((sign, index) => {
          const angle = (index / signs.length) * Math.PI * 2;

          const x = Number((Math.cos(angle) * 220).toFixed(2));
          const y = Number((Math.sin(angle) * 220).toFixed(2));

          return (
            <div
              key={sign}
              className="absolute text-3xl text-violet-300"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
              }}
            >
              {sign}
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
