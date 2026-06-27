"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

const COLORS = ["#00ffd1", "#a855f7", "#ff2d92", "#ffb627"];

export default function Particles({ count = 26 }: { count?: number }) {
  const dots = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 4 + 1.5,
        color: COLORS[i % COLORS.length],
        duration: Math.random() * 8 + 6,
        delay: Math.random() * 6,
        drift: Math.random() * 40 - 20,
      })),
    [count]
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {dots.map((d) => (
        <motion.span
          key={d.id}
          className="absolute rounded-full"
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            width: d.size,
            height: d.size,
            backgroundColor: d.color,
            boxShadow: `0 0 ${d.size * 3}px ${d.color}`,
          }}
          animate={{
            y: [0, -60, 0],
            x: [0, d.drift, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: d.duration,
            delay: d.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
