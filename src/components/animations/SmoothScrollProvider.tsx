"use client";

import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import { getGSAP } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const LenisContext = createContext<Lenis | null>(null);

export function useLenis() {
  return useContext(LenisContext);
}

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const [lenisInstance, setLenisInstance] = useState<Lenis | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    // If reduced motion is preferred, use native scrolling for accessibility
    if (prefersReducedMotion || typeof window === "undefined") {
      return;
    }

    const { gsap, ScrollTrigger } = getGSAP();

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth exponential decay
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
    });

    setLenisInstance(lenis);

    // Sync Lenis scroll events with GSAP's ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // Drive Lenis from GSAP's ticker to avoid competing requestAnimationFrames
    const handleTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(handleTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(handleTicker);
      lenis.destroy();
      setLenisInstance(null);
    };
  }, [prefersReducedMotion]);

  return (
    <LenisContext.Provider value={lenisInstance}>
      {children}
    </LenisContext.Provider>
  );
}
