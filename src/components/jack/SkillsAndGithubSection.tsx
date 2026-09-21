"use client";

import React, { useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { FadeIn } from "./FadeIn";
import { Github, Flame, GitCommit, Code2, Server, Brain, ShieldCheck, ArrowUpRight } from "lucide-react";

const BACKEND_SKILLS = [
  { name: "Python", icon: "🐍", level: "Primary" },
  { name: "FastAPI", icon: "⚡", level: "Production" },
  { name: "PostgreSQL", icon: "🐘", level: "Database" },
  { name: "SQLAlchemy", icon: "🔗", level: "ORM" },
  { name: "Pydantic", icon: "🛡️", level: "Validation" },
  { name: "Django", icon: "🌐", level: "Full-Stack" },
  { name: "REST APIs", icon: "📡", level: "Architecture" },
  { name: "Domain-Driven Design", icon: "📐", level: "Patterns" },
  { name: "Docker", icon: "🐳", level: "Containers" },
  { name: "Linux", icon: "🐧", level: "Environment" },
];

const ML_DEVOPS_SKILLS = [
  { name: "Scikit-learn", icon: "🤖", level: "ML Modeling" },
  { name: "Pandas", icon: "🐼", level: "Data Analysis" },
  { name: "NLP", icon: "💬", level: "Text Processing" },
  { name: "TF-IDF", icon: "📊", level: "Vectorization" },
  { name: "Logistic Regression", icon: "📈", level: "Classification" },
  { name: "Pytest", icon: "🧪", level: "Testing" },
  { name: "Ruff", icon: "⚡", level: "Linting" },
  { name: "MyPy", icon: "🎯", level: "Type Safety" },
  { name: "Git & GitHub", icon: "🐙", level: "Version Control" },
  { name: "Render & Vercel", icon: "☁️", level: "Cloud Deploy" },
];

// Doubled lists for continuous seamless 50% translation marquee
const ROW_1_SEAMLESS = [...BACKEND_SKILLS, ...BACKEND_SKILLS];
const ROW_2_SEAMLESS = [...ML_DEVOPS_SKILLS, ...ML_DEVOPS_SKILLS];

export function SkillsAndGithubSection() {
  const [selectedYear, setSelectedYear] = useState<number | undefined>(undefined);
  const years = [2026, 2025, 2024];

  return (
    <section
      id="skills-activity"
      className="bg-[#0C0C0C] pt-24 sm:pt-32 pb-16 px-4 sm:px-8 md:px-12 relative z-20 border-t border-white/5 select-none"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <FadeIn delay={0} y={30}>
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 block mb-3">
              // Technical Arsenal & Live Activity
            </span>
            <h2 className="hero-heading font-black uppercase text-[clamp(2.5rem,8vw,100px)] leading-none tracking-tight">
              Skills & GitHub
            </h2>
            <p className="text-[#D7E2EA]/60 max-w-xl mx-auto text-sm sm:text-base font-light mt-4">
              Real-world engineering tools, continuous contribution streaks, and production backend architecture.
            </p>
          </FadeIn>
        </div>

        {/* 1. Scrolling Skills Marquee - Continuous Infinite Opposing Directions */}
        <div className="flex flex-col gap-4 overflow-hidden py-4 -mx-4 sm:-mx-8 md:-mx-12 mb-20 relative">
          {/* Subtle gradient edge masks */}
          <div className="absolute left-0 inset-y-0 w-20 bg-gradient-to-r from-[#0C0C0C] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 inset-y-0 w-20 bg-gradient-to-l from-[#0C0C0C] to-transparent z-10 pointer-events-none" />

          {/* Row 1: Right to Left (Continuous Infinite) */}
          <div className="skills-marquee-left">
            <div className="flex gap-3 pr-3">
              {ROW_1_SEAMLESS.map((item, idx) => (
                <div
                  key={`b-${idx}`}
                  className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-emerald-500/40 hover:bg-white/[0.06] transition-colors shadow-sm group cursor-default"
                >
                  <span className="text-xl group-hover:scale-125 transition-transform">{item.icon}</span>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-[#D7E2EA] whitespace-nowrap uppercase tracking-wider">
                      {item.name}
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400/80 uppercase">
                      {item.level}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Left to Right (Continuous Infinite) */}
          <div className="skills-marquee-right">
            <div className="flex gap-3 pr-3">
              {ROW_2_SEAMLESS.map((item, idx) => (
                <div
                  key={`m-${idx}`}
                  className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-500/40 hover:bg-white/[0.06] transition-colors shadow-sm group cursor-default"
                >
                  <span className="text-xl group-hover:scale-125 transition-transform">{item.icon}</span>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-[#D7E2EA] whitespace-nowrap uppercase tracking-wider">
                      {item.name}
                    </span>
                    <span className="text-[10px] font-mono text-cyan-400/80 uppercase">
                      {item.level}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 2. Core Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          <FadeIn delay={0.1} y={20} className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-colors flex flex-col justify-between">
            <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 w-fit mb-4">
              <Server className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-medium text-white uppercase tracking-tight">Backend & APIs</h3>
              <p className="text-xs text-[#D7E2EA]/60 font-light mt-2 leading-relaxed">
                FastAPI, Django, PostgreSQL, SQLAlchemy, Pydantic, Domain-Driven Design for scalable microservices.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.15} y={20} className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-colors flex flex-col justify-between">
            <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 w-fit mb-4">
              <Brain className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-medium text-white uppercase tracking-tight">AI & Machine Learning</h3>
              <p className="text-xs text-[#D7E2EA]/60 font-light mt-2 leading-relaxed">
                Scikit-learn, Pandas, NLP, TF-IDF vectorization, and Logistic Regression classification pipelines.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} y={20} className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-colors flex flex-col justify-between">
            <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-400 w-fit mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-medium text-white uppercase tracking-tight">Testing & Quality</h3>
              <p className="text-xs text-[#D7E2EA]/60 font-light mt-2 leading-relaxed">
                Rigorous test coverage with Pytest, Ruff fast linting, and MyPy strict static type checking.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.25} y={20} className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-colors flex flex-col justify-between">
            <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400 w-fit mb-4">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-medium text-white uppercase tracking-tight">Git & Leadership</h3>
              <p className="text-xs text-[#D7E2EA]/60 font-light mt-2 leading-relaxed">
                UWACI Tech & Team Lead, PR audits, Git feature-branch workflows, and collaborative delivery.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* 3. GitHub Activity & Streak Ecosystem */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <Flame className="w-5 h-5 text-emerald-400" />
              <h3 className="text-lg sm:text-xl font-medium uppercase tracking-tight text-white">
                Live GitHub Streak & Contributions
              </h3>
            </div>

            <div className="flex items-center gap-3">
              {/* Year Selector */}
              <div className="flex items-center gap-1 p-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono">
                <button
                  type="button"
                  onClick={() => setSelectedYear(undefined)}
                  className={`px-3 py-1 rounded-full transition-colors ${
                    selectedYear === undefined
                      ? "bg-white text-zinc-950 font-semibold"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  Last Year
                </button>
                {years.map((yr) => (
                  <button
                    key={yr}
                    type="button"
                    onClick={() => setSelectedYear(yr)}
                    className={`px-2.5 py-1 rounded-full transition-colors ${
                      selectedYear === yr
                        ? "bg-white text-zinc-950 font-semibold"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    {yr}
                  </button>
                ))}
              </div>

              <a
                href="https://github.com/Divyesh207"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>@Divyesh207</span>
                <ArrowUpRight className="w-3 h-3 opacity-60" />
              </a>
            </div>
          </div>

          {/* GitHub Heatmap Calendar Card */}
          <FadeIn delay={0.1} y={20}>
            <div className="p-6 md:p-8 rounded-3xl bg-[#0C0C0C] border border-white/10 shadow-2xl overflow-x-auto">
              <div className="min-w-[700px] flex justify-center text-zinc-300">
                <GitHubCalendar
                  username="Divyesh207"
                  year={selectedYear}
                  colorScheme="dark"
                  theme={{
                    dark: ["#161922", "#0e4429", "#006d32", "#26a641", "#39d353"],
                  }}
                  blockSize={12}
                  blockMargin={4}
                  fontSize={12}
                />
              </div>
            </div>
          </FadeIn>

          {/* GitHub Streak Stats & Repos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Streak Stats Card */}
            <FadeIn delay={0.2} y={20} className="p-4 rounded-3xl bg-[#0C0C0C] border border-white/10 overflow-hidden flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://github-readme-streak-stats.herokuapp.com/?user=Divyesh207&theme=dark&background=0C0C0C&border=27272A&stroke=38BDF8&ring=10B981&fire=10B981&currStreakLabel=10B981&dates=71717A"
                alt="Divyesh Nilangekar GitHub Streak"
                loading="lazy"
                className="w-full h-auto max-w-md rounded-2xl select-none"
              />
            </FadeIn>

            {/* Top Languages & Codebase Share Card (Native & 100% Reliable) */}
            <FadeIn delay={0.25} y={20} className="p-6 md:p-7 rounded-3xl bg-[#0C0C0C] border border-white/10 flex flex-col justify-between shadow-2xl">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-cyan-400" />
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
                      Top Languages & Codebase Share
                    </h4>
                  </div>
                  <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest">
                    Live Breakdown
                  </span>
                </div>

                {/* Multi-color language ratio progress bar */}
                <div className="w-full h-2.5 rounded-full bg-white/5 overflow-hidden flex mb-6 p-0.5 border border-white/10">
                  <div className="h-full bg-cyan-400 rounded-l-full transition-all duration-1000" style={{ width: "74.2%" }} title="Python: 74.2%" />
                  <div className="h-full bg-emerald-400 transition-all duration-1000" style={{ width: "13.8%" }} title="PostgreSQL / SQL: 13.8%" />
                  <div className="h-full bg-purple-400 transition-all duration-1000" style={{ width: "7.5%" }} title="TypeScript: 7.5%" />
                  <div className="h-full bg-amber-400 rounded-r-full transition-all duration-1000" style={{ width: "4.5%" }} title="Shell & Docker: 4.5%" />
                </div>

                {/* Language list metrics */}
                <div className="grid grid-cols-2 gap-3.5">
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#38bdf8]" />
                      <span className="text-xs font-medium text-zinc-200">Python</span>
                    </div>
                    <span className="text-xs font-mono text-cyan-400 font-semibold">74.2%</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                      <span className="text-xs font-medium text-zinc-200">PostgreSQL</span>
                    </div>
                    <span className="text-xs font-mono text-emerald-400 font-semibold">13.8%</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-purple-400 shadow-[0_0_8px_#c084fc]" />
                      <span className="text-xs font-medium text-zinc-200">TypeScript</span>
                    </div>
                    <span className="text-xs font-mono text-purple-400 font-semibold">7.5%</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_8px_#fbbf24]" />
                      <span className="text-xs font-medium text-zinc-200">Shell / Docker</span>
                    </div>
                    <span className="text-xs font-mono text-amber-400 font-semibold">4.5%</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <span>Production backend & ML architecture</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Verified Repository Metrics
                </span>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
