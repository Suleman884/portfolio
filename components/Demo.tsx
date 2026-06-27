"use client";

import { motion } from "framer-motion";

export default function Demo() {
  return (
    <section id="demo" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-sm text-neon-cyan">03 //</span>
            <div className="h-px flex-1 bg-gradient-to-r from-neon-cyan/40 to-transparent" />
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
            <h2 className="font-display text-4xl md:text-6xl font-extrabold tracking-tight">
              App <span className="gradient-text">Demo</span>
            </h2>
            <p className="text-white/50 text-base md:text-lg max-w-md">
              A short walkthrough of a React Native app I built — captured live
              on iOS. Tap to play with sound.
            </p>
          </div>
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Glow */}
            <div className="absolute -inset-6 bg-gradient-to-br from-neon-cyan via-neon-violet to-neon-pink opacity-20 blur-3xl -z-10" />

            {/* Phone frame */}
            <div className="relative rounded-[2.5rem] bg-ink-800 border border-white/10 p-3 shadow-2xl">
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-6 rounded-b-2xl bg-ink-800 border-x border-b border-white/10 z-10" />
              <video
                className="rounded-[2rem] w-[280px] sm:w-[320px] h-auto block"
                controls
                playsInline
                preload="metadata"
                poster="/app-demo-poster.jpg"
              >
                <source src="/app-demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
