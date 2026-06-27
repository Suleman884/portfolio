"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";
import { Code2, Zap, Globe, Users } from "lucide-react";
import CountUp from "@/components/CountUp";

const iconMap = [Code2, Zap, Globe, Users];

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-sm text-neon-cyan">01 //</span>
            <div className="h-px flex-1 bg-gradient-to-r from-neon-cyan/40 to-transparent" />
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-extrabold mb-12 tracking-tight">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Senior Software Engineer with{" "}
              <span className="gradient-text-warm font-semibold">
                6+ years
              </span>{" "}
              building high-performance{" "}
              <span className="text-white font-semibold">React Native</span>,{" "}
              <span className="text-white font-semibold">React.js</span>, and{" "}
              <span className="text-white font-semibold">Next.js</span>{" "}
              applications.
            </p>
            <p className="text-base md:text-lg text-white/60 leading-relaxed">
              I architect and ship products across{" "}
              <span className="text-neon-cyan">fintech</span>,{" "}
              <span className="text-neon-violet">eSIM/telecom</span>,{" "}
              <span className="text-neon-pink">edtech</span>, e-commerce, and
              media — used by global audiences on iOS, Android, and Web.
            </p>
            <p className="text-base md:text-lg text-white/60 leading-relaxed">
              Currently leading mobile + web engineering at{" "}
              <span className="text-white font-semibold">Alfabolt (Nomod)</span>
              . Previously at AA'LA Solutions, Dankia Solutions, and Youni.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              <span className="px-4 py-2 rounded-full glass text-sm font-mono text-white/70">
                #CleanArchitecture
              </span>
              <span className="px-4 py-2 rounded-full glass text-sm font-mono text-white/70">
                #TypeScript
              </span>
              <span className="px-4 py-2 rounded-full glass text-sm font-mono text-white/70">
                #TestDriven
              </span>
              <span className="px-4 py-2 rounded-full glass text-sm font-mono text-white/70">
                #RemoteFirst
              </span>
            </div>
          </motion.div>

          {/* Right: Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {profile.stats.map((stat, i) => {
              const Icon = iconMap[i];
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    delay: 0.3 + i * 0.12,
                    type: "spring",
                    stiffness: 200,
                    damping: 16,
                  }}
                  whileHover={{ y: -6, scale: 1.03, transition: { duration: 0.2 } }}
                  className="gradient-border p-6 group"
                >
                  <Icon className="w-6 h-6 text-neon-cyan mb-4 transition-colors group-hover:text-neon-violet group-hover:animate-pulse" />
                  <div className="font-display text-3xl md:text-4xl font-extrabold gradient-text mb-1">
                    <CountUp value={stat.value} />
                  </div>
                  <div className="text-sm text-white/50 font-mono">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
