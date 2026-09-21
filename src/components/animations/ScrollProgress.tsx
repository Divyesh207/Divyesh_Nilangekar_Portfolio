"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const prefersReducedMotion = usePrefersReducedMotion();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  if (prefersReducedMotion) return null;

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500 via-white to-emerald-400 origin-left z-[60] pointer-events-none"
    />
  );
}
