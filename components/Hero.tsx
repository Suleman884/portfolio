"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, MapPin, Sparkles } from "lucide-react";
import Link from "next/link";
import { profile } from "@/lib/data";
import { useEffect, useState } from "react";

const roles = [
  "React Native Engineer",
  "Front-End Engineer",
  "Mobile Engineer",
  "Software Engineer",
  "Next.js Developer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentRole.slice(0, text.length + 1));
        if (text === currentRole) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setText(currentRole.slice(0, text.length - 1));
        if (text === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg pt-24 pb-16">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-purple-600/20 blur-[120px] animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-cyan-400/15 blur-[120px] animate-blob" style={{ animationDelay: "4s" }} />
        <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] rounded-full bg-pink-500/15 blur-[120px] animate-blob" style={{ animationDelay: "8s" }} />
      </div>

      {/* Fade overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink-950/30 to-ink-950 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
          </span>
          <span className="text-sm font-medium text-emerald-300 font-mono">
            Open to senior remote roles
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight mb-6 leading-[0.95]"
        >
          <span className="block text-white/95">Muhammad</span>
          <span className="block gradient-text">Suleman</span>
        </motion.h1>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <div className="font-mono text-lg sm:text-2xl md:text-3xl text-white/70">
            <span className="text-neon-cyan">{">"}</span> Senior{" "}
            <span className="text-white blink">{text}</span>
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl mx-auto text-base sm:text-lg text-white/60 leading-relaxed mb-10"
        >
          6+ years architecting and shipping high-performance{" "}
          <span className="text-white/90 font-semibold">React Native</span>,{" "}
          <span className="text-white/90 font-semibold">React.js</span>, and{" "}
          <span className="text-white/90 font-semibold">Next.js</span>{" "}
          applications across fintech, eSIM, edtech, and media — used by{" "}
          <span className="gradient-text-warm font-semibold">100K+ users</span>{" "}
          globally.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Link
            href="#projects"
            className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-ink-950 font-bold text-base overflow-hidden transition-transform hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              View My Work
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>

          <a
            href="mailto:sulemanashiq984@gmail.com"
            className="group px-8 py-4 rounded-full glass border border-white/10 hover:border-white/30 transition-all flex items-center gap-2 text-white/90 hover:text-white"
          >
            <Mail className="w-4 h-4" />
            Get In Touch
          </a>

          <a
            href={profile.resumeUrl}
            download
            className="group flex items-center gap-2 text-white/60 hover:text-neon-cyan transition-colors px-4 py-4"
          >
            <Download className="w-4 h-4" />
            <span className="underline underline-offset-4 decoration-dotted">
              Resume
            </span>
          </a>
        </motion.div>

        {/* Meta info row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-wrap justify-center gap-6 text-sm text-white/40 font-mono"
        >
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" /> Lahore, Pakistan
          </span>
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> 6+ Years Experience
          </span>
          <span>iOS · Android · Web</span>
        </motion.div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-mono text-white/30 tracking-widest">
          SCROLL
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
}
