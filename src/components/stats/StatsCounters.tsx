"use client";

import React, { useEffect, useState, useRef } from "react";
import { STATS, StatItem } from "@/data/stats";

function AnimatedNumber({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 1800; // ms
          const frameDuration = 1000 / 60;
          const totalFrames = Math.round(duration / frameDuration);
          let frame = 0;

          const timer = setInterval(() => {
            frame++;
            const progress = frame / totalFrames;
            // easeOutQuad
            const currentCount = Math.round(value * (1 - (1 - progress) * (1 - progress)));
            setCount(currentCount);

            if (frame >= totalFrames) {
              setCount(value);
              clearInterval(timer);
            }
          }, frameDuration);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div ref={ref} className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight">
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </div>
  );
}

export function StatsCounters() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 border-t border-white/5 bg-[#0a0c10]">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-[#0f1115] border border-white/10 flex flex-col gap-3 relative overflow-hidden group hover:border-white/20 transition-colors"
            >
              {/* Subtle top indicator bar */}
              <div className="w-12 h-1 rounded-full bg-emerald-400 mb-1" />

              <AnimatedNumber
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
              />

              <h3 className="text-base font-semibold text-zinc-200">
                {stat.label}
              </h3>

              <p className="text-xs text-zinc-400 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
