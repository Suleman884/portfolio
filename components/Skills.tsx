"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

const marqueeItems = [
  "React Native",
  "Next.js",
  "React.js",
  "TypeScript",
  "iOS",
  "Android",
  "Redux Toolkit",
  "GraphQL",
  "Node.js",
  "Firebase",
  "Stripe",
  "Bitrise",
  "Jest",
  "Detox",
  "Tailwind",
  "Expo",
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-sm text-neon-amber">04 //</span>
            <div className="h-px flex-1 bg-gradient-to-r from-neon-amber/40 to-transparent" />
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-extrabold mb-16 tracking-tight">
            Tech <span className="gradient-text">Stack</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="gradient-border p-6 md:p-8 group"
            >
              <h3 className="font-display text-xl font-bold text-white mb-5 flex items-center gap-2">
                <span className="font-mono text-sm text-neon-cyan">
                  0{i + 1}
                </span>
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-md bg-white/[0.03] border border-white/[0.08] text-xs md:text-sm font-mono text-white/70 hover:text-white hover:border-white/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Marquee at bottom */}
      <div className="mt-24 py-8 border-y border-white/5 overflow-hidden">
        <div className="marquee-track gap-12 text-3xl md:text-5xl font-display font-extrabold">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className={
                i % 3 === 0
                  ? "text-white/10"
                  : i % 3 === 1
                  ? "gradient-text"
                  : "text-white/30"
              }
            >
              {item} ◆
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
