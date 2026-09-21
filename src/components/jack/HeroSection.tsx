"use client";

import React from "react";
import { ContactButton } from "./ContactButton";
import { Magnet } from "./Magnet";
import { FadeIn } from "./FadeIn";
import { Divyesh3DViewer } from "./Divyesh3DViewer";
import { FileDown } from "lucide-react";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen w-full flex flex-col justify-between overflow-x-clip bg-[#0C0C0C] select-none">
      {/* Background Watermark: Sized safely so all letters D-I-V-Y-E-S-H are 100% visible */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden px-4">
        <span className="text-[10.5vw] sm:text-[11.5vw] md:text-[12.5vw] font-black tracking-tight text-white/[0.035] uppercase whitespace-nowrap leading-none text-center transform -translate-y-8 sm:-translate-y-12 max-w-full">
          DIVYESH
        </span>
      </div>

      {/* Navbar */}
      <FadeIn delay={0} y={-20} as="header" className="relative z-20 w-full px-6 md:px-10 pt-6 md:pt-8">
        <nav className="flex items-center justify-between w-full">
          <button
            type="button"
            onClick={() => scrollToSection("about")}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 cursor-pointer"
          >
            About
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("skills-activity")}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 cursor-pointer"
          >
            Skills
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("projects")}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 cursor-pointer"
          >
            Projects
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 cursor-pointer"
          >
            Contact
          </button>
        </nav>
      </FadeIn>

      {/* Massive Hero Heading: Resized so HI, I'M DIVYESH (with the H) is 100% visible without any clipping */}
      <div className="overflow-hidden w-full relative z-10 mt-6 sm:mt-4 md:-mt-5 px-4 sm:px-6">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center text-[8.5vw] sm:text-[9.5vw] md:text-[10.5vw] lg:text-[11.2vw] max-w-full mx-auto">
            Hi, i&apos;m divyesh
          </h1>
        </FadeIn>
      </div>

      {/* 3D Creator Avatar: Faces front initially, no auto-rotation */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-auto flex flex-col items-center">
        <FadeIn delay={0.5} y={30}>
          <Magnet
            padding={120}
            strength={3.5}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
          >
            <Divyesh3DViewer />
          </Magnet>
        </FadeIn>
      </div>

      {/* Bottom Bar */}
      <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 relative z-20 w-full">
        {/* Left text from resume */}
        <FadeIn delay={0.35} y={20}>
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[280px] text-[clamp(0.75rem,1.3vw,1.35rem)]">
            a backend & ai/ml engineer driven by crafting high-performance and intelligent systems
          </p>
        </FadeIn>

        {/* Right Action buttons */}
        <FadeIn delay={0.5} y={20} className="flex items-center gap-3">
          <a
            href="/docs/resume.pdf"
            download="Divyesh_Nilangekar_Resume.pdf"
            className="hidden sm:inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#D7E2EA]/30 text-[#D7E2EA] text-xs uppercase tracking-widest hover:bg-[#D7E2EA]/10 transition-colors"
          >
            <FileDown className="w-3.5 h-3.5 text-emerald-400" />
            <span>Resume</span>
          </a>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
