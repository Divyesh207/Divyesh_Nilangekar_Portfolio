"use client";

import React, { useState } from "react";
import { SKILLS, SKILL_GROUPS } from "@/data/skills";
import { Sparkles, Layers } from "lucide-react";

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState<string>("All");

  const displayedSkills =
    activeTab === "All"
      ? SKILLS
      : SKILL_GROUPS.find((g) => g.category === activeTab)?.items || SKILLS;

  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-20 border-t border-white/5 bg-[#08080a]">
      <div className="max-w-5xl mx-auto">
        {/* Section Marker */}
        <div className="flex items-center gap-2 mb-12">
          <span className="text-zinc-500 font-mono text-sm">✦</span>
          <h2 className="text-sm font-mono uppercase tracking-widest text-zinc-400">
            My Skills
          </h2>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setActiveTab("All")}
            className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all duration-200 ${
              activeTab === "All"
                ? "bg-white text-zinc-950 font-semibold"
                : "bg-white/5 text-zinc-400 hover:text-white border border-white/10"
            }`}
          >
            All Skills ({SKILLS.length})
          </button>
          {SKILL_GROUPS.map((group) => (
            <button
              key={group.category}
              onClick={() => setActiveTab(group.category)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all duration-200 ${
                activeTab === group.category
                  ? "bg-white text-zinc-950 font-semibold"
                  : "bg-white/5 text-zinc-400 hover:text-white border border-white/10"
              }`}
            >
              {group.category}
            </button>
          ))}
        </div>

        {/* Tag / Pill Grid */}
        <div className="flex flex-wrap gap-3">
          {displayedSkills.map((skill, index) => (
            <div
              key={index}
              className="group relative px-4 py-2.5 rounded-xl bg-[#0f1115] border border-white/10 hover:border-white/25 hover:bg-white/[0.04] transition-all duration-200 flex items-center gap-2 shadow-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 opacity-60 group-hover:opacity-100 transition-opacity" />
              <span className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors">
                {skill}
              </span>
            </div>
          ))}
        </div>

        {/* Rolling Mini Ticker */}
        <div className="mt-14 p-4 rounded-2xl bg-white/[0.02] border border-white/5 overflow-hidden flex items-center">
          <div className="flex items-center gap-2 shrink-0 pr-6 border-r border-white/10 text-xs font-mono text-zinc-400">
            <Layers className="w-4 h-4 text-emerald-400" />
            <span>Core Tooling</span>
          </div>
          <div className="overflow-hidden whitespace-nowrap pl-6 w-full flex">
            <div className="animate-marquee-left flex gap-6 text-xs font-mono text-zinc-400">
              {SKILLS.concat(SKILLS).map((s, i) => (
                <span key={i} className="inline-flex items-center gap-2">
                  <span>✦</span>
                  <span className="text-zinc-300">{s}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
