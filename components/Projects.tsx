"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-sm text-neon-violet">02 //</span>
            <div className="h-px flex-1 bg-gradient-to-r from-neon-violet/40 to-transparent" />
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
            <h2 className="font-display text-4xl md:text-6xl font-extrabold tracking-tight">
              Selected <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-white/50 text-base md:text-lg max-w-md">
              Live products on App Store and Play Store — used by hundreds of
              thousands of people every day.
            </p>
          </div>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl"
            >
              {/* Gradient border background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-60`} />
              <div className="absolute inset-[1px] rounded-3xl bg-ink-900" />

              {/* Content */}
              <div className="relative p-8 md:p-12 grid md:grid-cols-12 gap-8">
                {/* Left: Big number + name */}
                <div className="md:col-span-4 flex flex-col justify-between">
                  <div>
                    <div className="font-mono text-sm text-white/30 mb-2">
                      0{i + 1}
                    </div>
                    <h3 className="font-display text-4xl md:text-5xl font-extrabold leading-tight mb-3">
                      {project.name}
                    </h3>
                    {project.highlight && (
                      <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-xs font-mono text-emerald-300 mb-3">
                        ● {project.highlight}
                      </span>
                    )}
                    <p
                      className={`text-base md:text-lg font-medium bg-gradient-to-r ${project.accent} bg-clip-text text-transparent`}
                    >
                      {project.tagline}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3 mt-6 text-xs font-mono">
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60">
                      {project.domain}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60">
                      {project.region}
                    </span>
                  </div>
                </div>

                {/* Right: Description + stack + links */}
                <div className="md:col-span-8 space-y-6">
                  <p className="text-white/70 text-base md:text-lg leading-relaxed">
                    {project.description}
                  </p>

                  {/* Stack */}
                  <div>
                    <div className="text-xs font-mono text-white/30 mb-2 uppercase tracking-wider">
                      Stack
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 rounded-md bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-white/70"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  {project.links.length > 0 && (
                    <div>
                      <div className="text-xs font-mono text-white/30 mb-3 uppercase tracking-wider">
                        Live
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.links.map((link) => (
                          <a
                            key={link.url}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/link inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 text-sm transition-all"
                          >
                            <span>{link.label}</span>
                            <ArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover/link:opacity-100 group-hover/link:rotate-45 transition-all" />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Hover glow */}
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${project.accent} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 -z-10`}
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
