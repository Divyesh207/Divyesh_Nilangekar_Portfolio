"use client";

import React from "react";
import { FadeIn } from "./FadeIn";
import { AnimatedText } from "./AnimatedText";
import { ContactButton } from "./ContactButton";
import { Award, BookOpen, Briefcase, GraduationCap } from "lucide-react";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center items-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden bg-[#0C0C0C] select-none"
    >
      {/* Decorative 3D images in 4 corners */}

      {/* Top-left: Moon icon */}
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-10 pointer-events-none">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt="Decorative Moon"
            className="w-[120px] sm:w-[160px] md:w-[210px] h-auto drop-shadow-xl select-none"
            draggable={false}
          />
        </FadeIn>
      </div>

      {/* Bottom-left: 3D object */}
      <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-10 pointer-events-none">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt="Decorative 3D Shape"
            className="w-[100px] sm:w-[140px] md:w-[180px] h-auto drop-shadow-xl select-none"
            draggable={false}
          />
        </FadeIn>
      </div>

      {/* Top-right: Lego icon */}
      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-10 pointer-events-none">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt="Decorative Lego Icon"
            className="w-[120px] sm:w-[160px] md:w-[210px] h-auto drop-shadow-xl select-none"
            draggable={false}
          />
        </FadeIn>
      </div>

      {/* Bottom-right: 3D group */}
      <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-10 pointer-events-none">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt="Decorative 3D Group"
            className="w-[130px] sm:w-[170px] md:w-[220px] h-auto drop-shadow-xl select-none"
            draggable={false}
          />
        </FadeIn>
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 flex flex-col items-center justify-center max-w-4xl mx-auto w-full">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center text-[clamp(3rem,12vw,160px)]">
            About me
          </h2>
        </FadeIn>

        {/* Gap between heading and text: gap-10 sm:gap-14 md:gap-16 */}
        <div className="h-8 sm:h-12 md:h-14" />

        {/* Animated paragraph from Divyesh's resume */}
        <AnimatedText text="Backend and full-stack engineering student and Backend Team Lead with proven experience architecting modular Python and FastAPI services, REST APIs, and relational PostgreSQL databases. Skilled in driving Git-based code reviews, system design, and cutting API latency by over 91.5%." />

        {/* Credential highlights */}
        <FadeIn delay={0.15} y={20} className="mt-10 flex flex-wrap items-center justify-center gap-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-xs text-[#D7E2EA]">
            <Briefcase className="w-3.5 h-3.5 text-emerald-400" />
            <span>Backend Team Lead (Pipe 3) at UWACI</span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-xs text-[#D7E2EA]">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>Diploma AI/ML — 91.06% Distinction</span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-xs text-[#D7E2EA]">
            <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
            <span>B.Tech AI & Data Science (Pursuing)</span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-xs text-[#D7E2EA]">
            <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
            <span>Published Author (IJPREMS)</span>
          </div>
        </FadeIn>

        {/* Gap between text block and button */}
        <div className="h-12 sm:h-16 md:h-20" />

        {/* Contact Button */}
        <FadeIn delay={0.2} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
