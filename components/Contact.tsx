"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Linkedin, ArrowRight, Github } from "lucide-react";
import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-purple-600/10 blur-[150px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="font-mono text-sm text-neon-cyan">05 //</span>
            <span className="font-mono text-sm text-white/40">CONTACT</span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 tracking-tight leading-none">
            Let's build
            <br />
            <span className="gradient-text">something</span>{" "}
            <span className="gradient-text-warm">incredible.</span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
            Currently open to senior remote roles. If you're building something
            ambitious, I'd love to hear about it.
          </p>
        </motion.div>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-16"
        >
          <a
            href={`mailto:${profile.email}`}
            className="group relative px-10 py-5 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 font-display font-bold text-xl text-ink-950 overflow-hidden transition-transform hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-3">
              {profile.email}
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
          </a>
        </motion.div>

        {/* Contact grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto"
        >
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="glass p-6 rounded-2xl hover:bg-white/[0.05] transition-all group"
          >
            <Linkedin className="w-6 h-6 text-neon-cyan mb-3 group-hover:scale-110 transition-transform" />
            <div className="text-xs font-mono text-white/40 uppercase tracking-wider mb-1">
              LinkedIn
            </div>
            <div className="text-white/90 text-sm break-all">
              muhammad-suleman-804225178
            </div>
          </a>

          <a
            href={`mailto:${profile.email}`}
            className="glass p-6 rounded-2xl hover:bg-white/[0.05] transition-all group"
          >
            <Mail className="w-6 h-6 text-neon-violet mb-3 group-hover:scale-110 transition-transform" />
            <div className="text-xs font-mono text-white/40 uppercase tracking-wider mb-1">
              Email
            </div>
            <div className="text-white/90 text-sm break-all">
              {profile.email}
            </div>
          </a>

          <div className="glass p-6 rounded-2xl">
            <MapPin className="w-6 h-6 text-neon-pink mb-3" />
            <div className="text-xs font-mono text-white/40 uppercase tracking-wider mb-1">
              Based In
            </div>
            <div className="text-white/90 text-sm">{profile.location}</div>
          </div>
        </motion.div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-mono text-white/30"
        >
          <span>© 2026 Muhammad Suleman</span>
          <span>Crafted with Next.js, Tailwind, & Framer Motion</span>
        </motion.div>
      </div>
    </section>
  );
}
