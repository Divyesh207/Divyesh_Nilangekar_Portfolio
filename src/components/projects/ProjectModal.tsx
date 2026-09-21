"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectItem } from "@/data/projects";
import { X, ExternalLink, Github, BookOpen, CheckCircle2 } from "lucide-react";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto"
        >
          {/* Backdrop with click-to-dismiss */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-xl"
          />

          {/* Dialog Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0f1115] border border-white/10 shadow-2xl p-6 md:p-8 flex flex-col gap-6"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close project modal"
              className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="flex flex-col gap-1 pr-10">
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
                {project.subtitle}
              </span>
              <h2
                id="project-modal-title"
                className="text-2xl md:text-3xl font-bold font-display text-white"
              >
                {project.title}
              </h2>
              <p className="text-sm md:text-base text-zinc-400 italic">
                {project.tagline}
              </p>
            </div>

            {/* Cover / Featured Image */}
            <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden border border-white/10 bg-black/40">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Description */}
            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                Overview & Architecture
              </h4>
              <p className="text-sm md:text-base text-zinc-300 leading-relaxed">
                {project.longDescription || project.description}
              </p>
            </div>

            {/* Features / Highlights */}
            {project.features && project.features.length > 0 && (
              <div className="flex flex-col gap-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                  Key Engineering Highlights
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {project.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs md:text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack Tags */}
            <div className="flex flex-col gap-2 pt-2 border-t border-white/5">
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-zinc-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-zinc-950 text-xs md:text-sm font-semibold hover:bg-zinc-200 transition-colors shadow-sm"
                >
                  <span>Live Application</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-200 text-xs md:text-sm font-medium transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              )}

              {project.paperUrl && (
                <a
                  href={project.paperUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs md:text-sm font-medium transition-colors"
                >
                  <BookOpen className="w-4 h-4 text-emerald-400" />
                  <span>Read Published Paper</span>
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
