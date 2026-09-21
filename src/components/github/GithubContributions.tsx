"use client";

import React, { useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { PERSONAL_INFO } from "@/data/personal";
import { Github, ExternalLink } from "lucide-react";

export function GithubContributions() {
  const [selectedYear, setSelectedYear] = useState<number | undefined>(undefined);
  const years = [2026, 2025, 2024, 2023];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 border-t border-white/5 bg-[#08080a]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="text-zinc-500 font-mono text-sm">✦</span>
            <h2 className="text-sm font-mono uppercase tracking-widest text-zinc-400">
              GitHub Activity
            </h2>
          </div>

          <div className="flex items-center gap-3">
            {/* Year Selector Tabs */}
            <div className="flex items-center gap-1.5 p-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono">
              <button
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
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1 text-xs font-mono text-emerald-400 hover:underline"
            >
              <Github className="w-3.5 h-3.5" />
              <span>@{PERSONAL_INFO.githubUsername}</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>
          </div>
        </div>

        {/* Mobile Swipe Cue */}
        <div className="flex sm:hidden items-center justify-end text-[10px] font-mono text-zinc-500 mb-2">
          <span>← Swipe horizontally to see earlier months →</span>
        </div>

        {/* Heatmap Card */}
        <div className="p-6 md:p-8 rounded-2xl bg-[#0f1115] border border-white/10 overflow-x-auto shadow-xl">
          <div className="min-w-[700px] flex justify-center text-zinc-300">
            <GitHubCalendar
              username={PERSONAL_INFO.githubUsername}
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
      </div>
    </section>
  );
}
