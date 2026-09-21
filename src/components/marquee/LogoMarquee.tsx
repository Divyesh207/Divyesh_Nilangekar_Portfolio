"use client";

import React from "react";
import Image from "next/image";

const LOGOS_ROW_1 = [
  { name: "Next.js", file: "/clients/nextjs.svg" },
  { name: "React", file: "/clients/react.svg" },
  { name: "TypeScript", file: "/clients/typescript.svg" },
  { name: "Python", file: "/clients/python.svg" },
  { name: "FastAPI", file: "/clients/fastapi.svg" },
  { name: "PostgreSQL", file: "/clients/postgresql.svg" },
];

const LOGOS_ROW_2 = [
  { name: "Tailwind CSS", file: "/clients/tailwindcss.svg" },
  { name: "Docker", file: "/clients/docker.svg" },
  { name: "Git", file: "/clients/git.svg" },
  { name: "GSAP", file: "/clients/gsap.svg" },
  { name: "PyTorch", file: "/clients/pytorch.svg" },
  { name: "Vercel", file: "/clients/vercel.svg" },
];

export function LogoMarquee() {
  return (
    <section className="py-20 border-t border-white/5 bg-[#08080a] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-8 text-center">
        <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">
          Technologies, Frameworks & Core Systems
        </span>
      </div>

      <div className="relative w-full flex flex-col gap-4">
        {/* Subtle fade masks at left/right edges */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#08080a] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#08080a] to-transparent z-10 pointer-events-none" />

        {/* Row 1: Scrolling Left */}
        <div className="flex w-max animate-marquee-left">
          {LOGOS_ROW_1.concat(LOGOS_ROW_1, LOGOS_ROW_1).map((logo, idx) => (
            <div
              key={`r1-${idx}`}
              className="mx-3 flex items-center justify-center transition-transform hover:scale-105"
            >
              <div className="relative w-36 h-12">
                <Image
                  src={logo.file}
                  alt={logo.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: Scrolling Right */}
        <div className="flex w-max animate-marquee-right">
          {LOGOS_ROW_2.concat(LOGOS_ROW_2, LOGOS_ROW_2).map((logo, idx) => (
            <div
              key={`r2-${idx}`}
              className="mx-3 flex items-center justify-center transition-transform hover:scale-105"
            >
              <div className="relative w-36 h-12">
                <Image
                  src={logo.file}
                  alt={logo.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
