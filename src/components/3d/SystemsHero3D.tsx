"use client";

import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

// Dynamically import Three.js Canvas with SSR disabled to ensure zero hydration mismatch
const SystemsConstruct = dynamic(
  () => import("./SystemsConstruct").then((mod) => mod.SystemsConstruct),
  {
    ssr: false,
    loading: () => <SystemsBlueprintFallback />,
  }
);

function SystemsBlueprintFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center pointer-events-none select-none opacity-40">
      <div className="relative w-64 h-64 border border-white/10 rounded-2xl flex items-center justify-center p-4">
        {/* Architectural Wireframe SVG Blueprint */}
        <svg
          viewBox="0 0 200 200"
          className="w-48 h-48 text-zinc-500 stroke-current stroke-[1.2] fill-none"
        >
          <polygon points="100,20 180,65 180,135 100,180 20,135 20,65" />
          <polygon points="100,45 160,80 160,120 100,155 40,120 40,80" className="stroke-emerald-500/60" />
          <line x1="100" y1="20" x2="100" y2="180" />
          <line x1="20" y1="65" x2="180" y2="135" />
          <line x1="20" y1="135" x2="180" y2="65" />
          <circle cx="100" cy="100" r="12" className="fill-emerald-500/20 stroke-emerald-400" />
        </svg>
      </div>
    </div>
  );
}

export function SystemsHero3D() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div className="w-full h-full min-h-[320px] sm:min-h-[420px] relative flex items-center justify-center">
      <Suspense fallback={<SystemsBlueprintFallback />}>
        <SystemsConstruct isStatic={prefersReducedMotion} />
      </Suspense>
    </div>
  );
}
