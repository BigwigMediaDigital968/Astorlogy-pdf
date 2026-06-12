"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Star = {
  x: number;
  y: number;
  duration: number;
};

export default function StarBackground() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 50 }, () => ({
      x: Math.random() * 1500,
      y: Math.random() * 1000,
      duration: 2 + Math.random() * 4,
    }));

    setStars(generatedStars);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {stars.map((star, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-white"
          style={{
            left: star.x,
            top: star.y,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  );
}
