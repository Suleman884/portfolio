"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-sm text-neon-pink">03 //</span>
            <div className="h-px flex-1 bg-gradient-to-r from-neon-pink/40 to-transparent" />
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-extrabold mb-16 tracking-tight">
            Work <span className="gradient-text-warm">Experience</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-neon-cyan via-neon-violet to-neon-pink opacity-30" />

          {experience.map((role, i) => (
            <motion.div
              key={role.company + role.period}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative pl-12 md:pl-20 pb-12 last:pb-0"
            >
              {/* Dot */}
              <div className="absolute left-2 md:left-6 top-2 w-5 h-5 rounded-full bg-gradient-to-br from-neon-cyan to-neon-violet ring-4 ring-ink-950" />

              {/* Card */}
              <div className="glass rounded-2xl p-6 md:p-8 hover:bg-white/[0.05] transition-colors">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <Briefcase className="w-4 h-4 text-neon-cyan" />
                      <h3 className="font-display text-xl md:text-2xl font-bold text-white">
                        {role.title}
                      </h3>
                    </div>
                    <div className="text-base text-neon-cyan font-semibold">
                      {role.company}
                    </div>
                  </div>
                  <div className="text-right text-sm font-mono">
                    <div className="text-white/60">{role.period}</div>
                    <div className="text-white/40 mt-0.5">{role.location}</div>
                  </div>
                </div>

                <ul className="space-y-2.5">
                  {role.highlights.map((h, j) => (
                    <li key={j} className="flex gap-3 text-white/70 text-sm md:text-base leading-relaxed">
                      <span className="text-neon-violet mt-1.5 flex-shrink-0">▸</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
