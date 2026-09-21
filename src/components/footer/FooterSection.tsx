"use client";

import React, { useState, useEffect } from "react";
import { PERSONAL_INFO } from "@/data/personal";
import { ArrowUpRight, Github, Linkedin, Twitter, FileText, Mail, Heart } from "lucide-react";

export function FooterSection() {
  const [greetingIndex, setGreetingIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setGreetingIndex((prev) => (prev + 1) % PERSONAL_INFO.greetings.length);
    }, 2200);
    return () => clearInterval(timer);
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="py-28 px-6 md:px-12 lg:px-20 border-t border-white/5 bg-[#08080a] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-t from-emerald-500/[0.03] to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto flex flex-col gap-16 relative z-10">
        {/* Multilingual Looping Greeting */}
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <div className="text-sm font-mono text-zinc-400 tracking-wider">
            Saying{" "}
            <span className="text-white font-semibold underline decoration-emerald-500/50 decoration-2 transition-all duration-300">
              {PERSONAL_INFO.greetings[greetingIndex]}
            </span>{" "}
            from {PERSONAL_INFO.location}
          </div>
        </div>

        {/* Large "Let's get in contact!" mailto trigger */}
        <div className="flex flex-col gap-4">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">
            Have a project or opportunity?
          </span>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="group inline-flex items-center gap-4 text-4xl sm:text-6xl md:text-7xl font-bold font-display text-white tracking-tighter hover:text-emerald-400 transition-colors duration-300"
          >
            <span>Let&apos;s get in contact!</span>
            <ArrowUpRight className="w-8 h-8 sm:w-12 sm:h-12 text-zinc-600 group-hover:text-emerald-400 transition-all duration-300 group-hover:translate-x-2 group-hover:-translate-y-2" />
          </a>
          <span className="text-sm md:text-base font-mono text-zinc-400">
            {PERSONAL_INFO.email} · {PERSONAL_INFO.phone}
          </span>
        </div>

        {/* Links & Socials Grid */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Social Icons */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-zinc-300 hover:text-white transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5 text-sky-400" />
              <span>LinkedIn</span>
            </a>

            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-zinc-300 hover:text-white transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

            <a
              href={PERSONAL_INFO.twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-zinc-300 hover:text-white transition-colors"
            >
              <Twitter className="w-3.5 h-3.5 text-zinc-400" />
              <span>X / Twitter</span>
            </a>

            <a
              href={PERSONAL_INFO.resumeUrl}
              download="Divyesh_Nilangekar_Resume.pdf"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-xs font-medium text-emerald-300 transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-emerald-400" />
              <span>Resume PDF</span>
            </a>
          </div>

          {/* Copyright line */}
          <div className="text-xs font-mono text-zinc-500">
            © {currentYear} {PERSONAL_INFO.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
