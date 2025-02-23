"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import pessiSticker from "@/assets/images/pessi-sticker.png";

export default function AutoTiltCard() {
  return (
    <motion.div
      className="relative"
      style={{ perspective: 1000 }}
      animate={{
        rotateX: [50, -10, 50],
        rotateY: [100, -100, 100],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      }}
    >
      <motion.div
        className="relative"
        style={{ transformStyle: "preserve-3d" }}
      >
        <Image
          src={pessiSticker}
          alt="sticker"
          className="rounded-lg scale-75"
        />
        {/* Overlay shiny animé */}
        <motion.div
          className="absolute inset-0 pointer-events-none rounded-lg"
          style={{
            backgroundSize: "200% 200%",
            mixBlendMode: "screen",
          }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.div>
    </motion.div>
  );
}
