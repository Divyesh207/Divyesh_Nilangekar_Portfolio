"use client";

import React, { useState } from "react";
import { FadeIn } from "./FadeIn";
import { Mail, Phone, Linkedin, Github, FileDown, Check, Copy, ArrowUpRight } from "lucide-react";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("nilangekardivyesh@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer
      id="contact"
      className="bg-[#0C0C0C] text-[#D7E2EA] pt-24 pb-16 px-5 sm:px-8 md:px-10 border-t border-white/5 relative z-20 select-none"
    >
      <div className="max-w-5xl mx-auto w-full flex flex-col items-center text-center">
        {/* Ambient Name Watermark in Background */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 pointer-events-none select-none overflow-hidden w-full text-center">
          <span className="text-[14vw] font-black tracking-tighter text-white/[0.02] uppercase whitespace-nowrap">
            GET IN TOUCH
          </span>
        </div>

        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase text-[clamp(2.75rem,10vw,140px)] leading-none tracking-tight">
            Contact
          </h2>
        </FadeIn>

        <FadeIn delay={0.15} y={20}>
          <p className="mt-6 text-[#D7E2EA]/70 max-w-xl text-base sm:text-lg font-light leading-relaxed">
            Open for full-time Software Engineering, Python Backend & AI/ML opportunities, and high-impact technical initiatives.
          </p>
        </FadeIn>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full mt-14">
          {/* Email Card */}
          <FadeIn
            delay={0.1}
            y={20}
            className="p-5 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all flex flex-col items-center justify-between text-center group"
          >
            <div className="p-3 rounded-2xl bg-white/5 text-emerald-400 mb-3 group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/50 font-mono">Email</span>
            <a
              href="mailto:nilangekardivyesh@gmail.com"
              className="text-sm font-medium text-[#D7E2EA] hover:text-white mt-1 break-all transition-colors"
            >
              nilangekardivyesh@gmail.com
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="mt-3 text-[11px] font-mono text-[#D7E2EA]/60 hover:text-white flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5"
            >
              {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
              <span>{copied ? "Copied!" : "Copy"}</span>
            </button>
          </FadeIn>

          {/* Phone Card */}
          <FadeIn
            delay={0.15}
            y={20}
            className="p-5 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all flex flex-col items-center justify-between text-center group"
          >
            <div className="p-3 rounded-2xl bg-white/5 text-cyan-400 mb-3 group-hover:scale-110 transition-transform">
              <Phone className="w-6 h-6" />
            </div>
            <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/50 font-mono">Phone</span>
            <a
              href="tel:+917057311330"
              className="text-sm font-medium text-[#D7E2EA] hover:text-white mt-1 transition-colors"
            >
              +91 7057311330
            </a>
            <span className="mt-3 text-[11px] font-mono text-[#D7E2EA]/40 px-3 py-1">
              Pune, India
            </span>
          </FadeIn>

          {/* LinkedIn Card */}
          <FadeIn
            delay={0.2}
            y={20}
            className="p-5 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all flex flex-col items-center justify-between text-center group"
          >
            <div className="p-3 rounded-2xl bg-white/5 text-blue-400 mb-3 group-hover:scale-110 transition-transform">
              <Linkedin className="w-6 h-6" />
            </div>
            <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/50 font-mono">LinkedIn</span>
            <a
              href="https://linkedin.com/in/divyesh-nilangekar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[#D7E2EA] hover:text-white mt-1 inline-flex items-center gap-1 transition-colors"
            >
              <span>divyesh-nilangekar</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </a>
            <span className="mt-3 text-[11px] font-mono text-[#D7E2EA]/40 px-3 py-1">
              Connect
            </span>
          </FadeIn>

          {/* GitHub Card */}
          <FadeIn
            delay={0.25}
            y={20}
            className="p-5 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all flex flex-col items-center justify-between text-center group"
          >
            <div className="p-3 rounded-2xl bg-white/5 text-purple-400 mb-3 group-hover:scale-110 transition-transform">
              <Github className="w-6 h-6" />
            </div>
            <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/50 font-mono">GitHub</span>
            <a
              href="https://github.com/Divyesh207"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[#D7E2EA] hover:text-white mt-1 inline-flex items-center gap-1 transition-colors"
            >
              <span>Divyesh207</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </a>
            <span className="mt-3 text-[11px] font-mono text-[#D7E2EA]/40 px-3 py-1">
              Repositories
            </span>
          </FadeIn>
        </div>

        {/* Primary Action Buttons */}
        <FadeIn delay={0.3} y={20} className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:nilangekardivyesh@gmail.com"
            style={{
              background: "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
              boxShadow: "0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset",
              outline: "2px solid white",
              outlineOffset: "-3px",
            }}
            className="rounded-full text-white font-medium uppercase tracking-widest px-10 py-4 text-sm sm:text-base hover:scale-105 active:scale-95 transition-transform duration-200 cursor-pointer inline-flex items-center gap-2"
          >
            <Mail className="w-4 h-4" />
            <span>Send An Email</span>
          </a>

          <a
            href="/docs/resume.pdf"
            download="Divyesh_Nilangekar_Resume.pdf"
            className="rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-4 text-sm sm:text-base hover:bg-[#D7E2EA]/10 transition-colors inline-flex items-center gap-2"
          >
            <FileDown className="w-4 h-4 text-emerald-400" />
            <span>Download CV</span>
          </a>
        </FadeIn>

        {/* Footer info line */}
        <div className="mt-20 pt-8 border-t border-white/5 w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#D7E2EA]/40">
          <span>© 2026 Divyesh Nilangekar. All rights reserved.</span>
          <span className="text-[#D7E2EA]/60">
            Python Backend · AI/ML Systems · Pune, Maharashtra, India
          </span>
        </div>
      </div>
    </footer>
  );
}
