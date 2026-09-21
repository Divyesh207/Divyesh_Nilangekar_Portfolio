"use client";

import React from "react";
import { PERSONAL_INFO } from "@/data/personal";
import { MapPin, Target, Award, Code2 } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-20 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        {/* Section Marker */}
        <div className="flex items-center gap-2 mb-8">
          <span className="text-zinc-500 font-mono text-sm">✦</span>
          <h2 className="text-sm font-mono uppercase tracking-widest text-zinc-400">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Paragraph */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <p className="text-2xl sm:text-3xl md:text-4xl font-light text-zinc-200 leading-relaxed font-display">
              {PERSONAL_INFO.aboutParagraph}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-300">
                <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                <span>{PERSONAL_INFO.location}</span>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-300">
                <Target className="w-3.5 h-3.5 text-emerald-400" />
                <span>Focus: {PERSONAL_INFO.focusArea}</span>
              </div>
            </div>
          </div>

          {/* Quick Credential Highlights Card */}
          <div className="lg:col-span-4 flex flex-col gap-4 p-6 rounded-2xl bg-[#0f1115] border border-white/10">
            <div className="flex items-center gap-3 pb-3 border-b border-white/10">
              <Award className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-300">
                Academic Distinction
              </span>
            </div>
            <p className="text-sm text-zinc-400 leading-normal">
              Diploma in AI & ML with <span className="text-zinc-100 font-semibold">91.06% aggregate</span> under MSBTE. Published research author in IJPREMS (DOI: 10.58257/IJPREMS51878).
            </p>

            <div className="flex items-center gap-3 pt-3 border-t border-white/10">
              <Code2 className="w-4 h-4 text-sky-400" />
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-300">
                Engineering Stack
              </span>
            </div>
            <p className="text-sm text-zinc-400 leading-normal">
              Python, FastAPI, Next.js, React, PostgreSQL, Docker, and Scikit-learn machine learning pipelines.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
