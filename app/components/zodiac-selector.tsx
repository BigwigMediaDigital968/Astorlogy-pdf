"use client";

import { motion } from "framer-motion";
import { zodiacSigns } from "@/app/lib/zodiac";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ZodiacSelector() {
  const [selected, setSelected] = useState("");
  const router = useRouter();

  const handleContinue = () => {
    if (!selected) return;

    localStorage.setItem("selectedRashi", selected);
    localStorage.setItem("zodiacSelected", "true");

    router.push("/scan");
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-12 text-center"
      ></motion.div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-6">
        {zodiacSigns.map((sign, index) => (
          <motion.button
            key={sign}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: index * 0.05,
            }}
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={() => setSelected(sign)}
            className={`rounded-2xl border p-5 transition-all cursor-pointer
            ${
              selected === sign
                ? "border-violet-500 bg-violet-500/20"
                : "border-white/10 bg-white/5"
            }`}
          >
            {sign}
          </motion.button>
        ))}
      </div>

      <motion.button
        animate={
          selected
            ? {
                boxShadow: [
                  "0 0 0px #7c3aed",
                  "0 0 30px #7c3aed",
                  "0 0 0px #7c3aed",
                ],
              }
            : {}
        }
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        onClick={handleContinue}
        disabled={!selected}
        className="mt-10 w-full rounded-full bg-gradient-to-r from-violet-600 to-purple-500 px-8 py-4 font-semibold text-white disabled:opacity-40 cursor-pointer"
      >
        Continue
      </motion.button>
    </>
  );
}
