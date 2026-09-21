"use client";

import React from "react";
import { FadeIn } from "./FadeIn";
import { Briefcase, GitPullRequest, Users, ShieldCheck, Cpu, Award } from "lucide-react";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-20 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-24 select-none"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Heading */}
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none tracking-tight mb-14 sm:mb-20">
            Experience
          </h2>
        </FadeIn>

        {/* Primary Featured Role: UWACI / MegaBliss Limited */}
        <FadeIn delay={0.1} y={30}>
          <div className="w-full rounded-[36px] sm:rounded-[48px] md:rounded-[56px] border-2 border-[#D7E2EA] bg-[#0f1115]/90 p-6 sm:p-9 md:p-12 shadow-2xl flex flex-col gap-8 relative overflow-hidden">
            {/* Top Glowing Ambient Gradient */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />

            {/* Header Row: Company, Role & Promotion Tag */}
            <div className="flex flex-wrap items-start justify-between gap-4 border-b border-[#D7E2EA]/15 pb-6">
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-emerald-400 font-semibold">
                    Work Experience • Remote
                  </span>
                  <span className="px-3 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
                    Promoted Sept 2026
                  </span>
                </div>
                <h3 className="text-2xl sm:text-4xl md:text-5xl font-extrabold uppercase text-[#D7E2EA] tracking-tight font-display">
                  Backend Team Lead (Pipe 3)
                </h3>
                <div className="flex items-center gap-2 text-sm sm:text-base text-zinc-300 font-medium">
                  <Briefcase className="w-4 h-4 text-emerald-400" />
                  <span>UWACI / MegaBliss Limited</span>
                  <span className="text-zinc-600">•</span>
                  <span className="text-zinc-400 font-mono text-xs sm:text-sm">Aug 2026 – Present</span>
                </div>
              </div>

              {/* Leadership Numbers Grid */}
              <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                <div className="px-4 py-2 rounded-2xl bg-white/[0.04] border border-white/10 text-center">
                  <div className="text-lg sm:text-xl font-bold font-mono text-emerald-400">3</div>
                  <div className="text-[10px] font-mono text-zinc-400 uppercase">Devs Coordinated</div>
                </div>
                <div className="px-4 py-2 rounded-2xl bg-white/[0.04] border border-white/10 text-center">
                  <div className="text-lg sm:text-xl font-bold font-mono text-cyan-400">12</div>
                  <div className="text-[10px] font-mono text-zinc-400 uppercase">PRs Authored</div>
                </div>
                <div className="px-4 py-2 rounded-2xl bg-white/[0.04] border border-white/10 text-center">
                  <div className="text-lg sm:text-xl font-bold font-mono text-indigo-400">5</div>
                  <div className="text-[10px] font-mono text-zinc-400 uppercase">PRs Audited</div>
                </div>
              </div>
            </div>

            {/* Core Responsibilities & Impact */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left Column (7 cols): Responsibilities from Resume */}
              <div className="lg:col-span-7 flex flex-col gap-3.5">
                <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-semibold mb-1">
                  Key Deliverables &amp; Leadership Impact
                </h4>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.02] border border-white/5">
                  <Users className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    <strong className="text-white">Engineering Leadership:</strong> Coordinate and lead 3 backend developers, managing technical task planning, task assignments, code reviews, PR merges, and architectural decisions for Pipe 3.
                  </p>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.02] border border-white/5">
                  <GitPullRequest className="w-4 h-4 text-cyan-400 mt-1 shrink-0" />
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    <strong className="text-white">Code Audits &amp; Quality:</strong> Authored 12 PRs (6 merged) and reviewed 5 PRs across the backend codebase while enforcing strict code quality standards using Pytest, Ruff, and MyPy.
                  </p>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.02] border border-white/5">
                  <ShieldCheck className="w-4 h-4 text-indigo-400 mt-1 shrink-0" />
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    <strong className="text-white">Domain-Driven Architecture:</strong> Applied Domain-Driven Design (DDD) and dependency-inversion principles to architect scalable REST APIs and relational PostgreSQL schemas.
                  </p>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.02] border border-white/5">
                  <Cpu className="w-4 h-4 text-amber-400 mt-1 shrink-0" />
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    <strong className="text-white">Cross-Team Collaboration:</strong> Authored technical documentation, onboarded developers, and collaborated closely with frontend engineering and leadership to translate requirements into robust technical solutions.
                  </p>
                </div>
              </div>

              {/* Right Column (5 cols): 4 Core Backend Components Built */}
              <div className="lg:col-span-5 flex flex-col justify-between p-5 sm:p-6 rounded-3xl bg-zinc-950/80 border border-white/10">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold mb-3">
                    4 Core Backend Components Implemented
                  </h4>
                  <p className="text-xs text-zinc-400 mb-4 leading-relaxed">
                    Engineered modular foundational services using Python, FastAPI, Pydantic, and SQLAlchemy:
                  </p>
                  <ul className="space-y-2.5">
                    <li className="flex items-center gap-2.5 text-xs sm:text-sm font-mono text-zinc-200 bg-white/[0.03] p-2.5 rounded-xl border border-white/5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span>Traffic Domain Foundations</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-xs sm:text-sm font-mono text-zinc-200 bg-white/[0.03] p-2.5 rounded-xl border border-white/5">
                      <span className="w-2 h-2 rounded-full bg-cyan-400" />
                      <span>Trip Intent Services</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-xs sm:text-sm font-mono text-zinc-200 bg-white/[0.03] p-2.5 rounded-xl border border-white/5">
                      <span className="w-2 h-2 rounded-full bg-indigo-400" />
                      <span>Directed Network Topology</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-xs sm:text-sm font-mono text-zinc-200 bg-white/[0.03] p-2.5 rounded-xl border border-white/5">
                      <span className="w-2 h-2 rounded-full bg-purple-400" />
                      <span>Provider-Neutral Location Architecture</span>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-white/5">
                  {["Python", "FastAPI", "PostgreSQL", "Pydantic", "SQLAlchemy", "Pytest", "Ruff", "MyPy", "DDD"].map((tech) => (
                    <span key={tech} className="px-2.5 py-1 text-[11px] font-mono rounded-lg bg-white/5 text-zinc-400 border border-white/10">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Secondary Highlights: Research & Academic Competitions */}
        <FadeIn delay={0.2} y={30}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
            {/* Research Publication Card */}
            <div className="rounded-[30px] sm:rounded-[40px] border border-[#D7E2EA]/20 bg-[#0f1115]/60 p-6 sm:p-8 flex flex-col justify-between gap-4">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-amber-400">
                  <Award className="w-4 h-4" />
                  <span>Research Publication • Accepted March 2026</span>
                </div>
                <h4 className="text-lg sm:text-xl font-bold uppercase text-[#D7E2EA] font-display">
                  IJPREMS Journal Publication
                </h4>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  Co-authored research paper on CashBuddy AI-Driven Personal Finance Architecture accepted in IJPREMS (Vol. 06, Issue 03, March 2026, DOI: 10.58257/IJPREMS51878).
                </p>
              </div>
              <a
                href="https://doi.org/10.58257/IJPREMS51878"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono uppercase text-amber-300 hover:text-amber-200 underline tracking-wider"
              >
                View DOI: 10.58257/IJPREMS51878 ➔
              </a>
            </div>

            {/* Achievement Card */}
            <div className="rounded-[30px] sm:rounded-[40px] border border-[#D7E2EA]/20 bg-[#0f1115]/60 p-6 sm:p-8 flex flex-col justify-between gap-4">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-emerald-400">
                  <Award className="w-4 h-4" />
                  <span>1st Rank Winner • Feb 2025</span>
                </div>
                <h4 className="text-lg sm:text-xl font-bold uppercase text-[#D7E2EA] font-display">
                  Innovative Idea Presentation (PCCOE)
                </h4>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  Secured 1st Rank (Winner) out of 50+ participants at Pimpri Chinchwad Polytechnic College for innovative system engineering and architecture presentation.
                </p>
              </div>
              <span className="text-xs font-mono uppercase text-emerald-400 tracking-wider">
                Rank 1 / 50+ Competitors ✦
              </span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
