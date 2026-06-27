"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Demo", href: "#demo" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`flex items-center justify-between rounded-full transition-all duration-500 ${
            scrolled
              ? "glass border border-white/10 px-6 py-2"
              : "px-2 py-2"
          }`}
        >
          {/* Logo */}
          <Link
            href="#"
            className="font-display text-xl font-extrabold tracking-tight"
          >
            <span className="gradient-text">MS</span>
            <span className="text-white/40 font-mono text-sm ml-1">/dev</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-white/60 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <a
            href="mailto:sulemanashiq984@gmail.com"
            className="hidden md:inline-flex px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-sm font-medium text-white transition-all"
          >
            Let's Talk
          </a>

          {/* Mobile menu - simple link list */}
          <div className="md:hidden flex items-center gap-3">
            <a
              href="#contact"
              className="px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-xs font-medium text-white"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
