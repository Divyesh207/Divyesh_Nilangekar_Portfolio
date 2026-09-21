"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, CheckCircle2, Zap, Award, Layers, FileText } from "lucide-react";

export interface ProjectModalData {
  number: string;
  name: string;
  category: string;
  tagline: string;
  tech: string[];
  metricBadge?: {
    label: string;
    value: string;
  };
  abstract: string;
  problem: string;
  solution: string;
  features: string[];
  screenshots: {
    url: string;
    title: string;
    description: string;
  }[];
  liveUrl?: string;
  githubUrl?: string;
  paperUrl?: string;
}

interface ProjectAbstractModalProps {
  project: ProjectModalData | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectAbstractModal({ project, isOpen, onClose }: ProjectAbstractModalProps) {
  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0f1115] border border-white/15 rounded-3xl sm:rounded-[36px] p-6 sm:p-8 md:p-10 shadow-2xl text-[#D7E2EA] z-10 custom-scrollbar"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 sm:top-7 sm:right-7 p-2 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-zinc-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header: Project Badge & Title */}
            <div className="flex flex-col gap-2 border-b border-white/10 pb-6 pr-10">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="font-mono text-sm font-bold text-emerald-400 tracking-wider">
                  PROJECT {project.number}
                </span>
                <span className="text-zinc-600">•</span>
                <span className="text-xs uppercase tracking-widest text-zinc-400 font-mono">
                  {project.category}
                </span>
                {project.metricBadge && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold">
                    <Zap className="w-3.5 h-3.5" />
                    {project.metricBadge.value}
                  </span>
                )}
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight uppercase text-white font-display mt-1">
                {project.name}
              </h2>
              <p className="text-sm sm:text-base text-zinc-400 font-normal">
                {project.tagline}
              </p>
            </div>

            {/* Body Content */}
            <div className="py-6 space-y-8">
              {/* Abstract Section */}
              <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-5 sm:p-6">
                <div className="flex items-center gap-2 mb-3">
                  <FileText className="w-4 h-4 text-cyan-400" />
                  <h3 className="text-sm font-mono uppercase tracking-widest text-cyan-300 font-semibold">
                    Project Abstract &amp; Architecture
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed text-justify">
                  {project.abstract}
                </p>
              </div>

              {/* Problem vs Solution Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-rose-950/20 border border-rose-500/20 rounded-2xl p-5">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-rose-400 font-semibold mb-2">
                    The Problem
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {project.problem}
                  </p>
                </div>
                <div className="bg-emerald-950/20 border border-emerald-500/20 rounded-2xl p-5">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold mb-2">
                    The Engineering Solution
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Core Features */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <h3 className="text-sm font-mono uppercase tracking-widest text-zinc-300 font-semibold">
                    Key Features &amp; Engineering Implementations
                  </h3>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs sm:text-sm text-zinc-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Pills */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Layers className="w-4 h-4 text-indigo-400" />
                  <h3 className="text-sm font-mono uppercase tracking-widest text-zinc-300 font-semibold">
                    Technologies &amp; Tools Used
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-zinc-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Action Links */}
            <div className="border-t border-white/10 pt-6 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3 flex-wrap">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#D7E2EA] text-[#0C0C0C] font-semibold text-xs sm:text-sm uppercase tracking-wider hover:bg-white transition-all shadow-lg"
                  >
                    <span>Visit Live Demo</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/20 text-[#D7E2EA] hover:bg-white/10 text-xs sm:text-sm font-medium uppercase tracking-wider transition-all"
                  >
                    <Github className="w-4 h-4" />
                    <span>View GitHub Code</span>
                  </a>
                )}
                {project.paperUrl && (
                  <a
                    href={project.paperUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-amber-500/40 text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 text-xs sm:text-sm font-medium uppercase tracking-wider transition-all"
                  >
                    <Award className="w-4 h-4" />
                    <span>Read Research Paper</span>
                  </a>
                )}
              </div>

              <button
                onClick={onClose}
                className="px-5 py-2 text-xs font-mono uppercase text-zinc-400 hover:text-white transition-colors"
              >
                Close (ESC)
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
