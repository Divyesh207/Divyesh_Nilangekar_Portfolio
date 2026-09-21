"use client";

import React from "react";

interface LiveProjectButtonProps {
  href?: string;
  label?: string;
  variant?: "primary" | "secondary";
  className?: string;
}

export function LiveProjectButton({
  href = "#",
  label = "Live Project",
  variant = "primary",
  className = "",
}: LiveProjectButtonProps) {
  const baseClasses =
    variant === "secondary"
      ? "rounded-full border border-[#D7E2EA]/40 text-[#D7E2EA]/85 hover:text-[#D7E2EA] hover:border-[#D7E2EA] bg-white/[0.03] hover:bg-white/[0.08] font-medium uppercase tracking-wider px-5 py-2 sm:px-6 sm:py-2.5 text-xs sm:text-sm transition-all duration-200 inline-flex items-center justify-center gap-1.5 cursor-pointer select-none"
      : "rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-6 py-2 sm:px-7 sm:py-2.5 text-xs sm:text-sm hover:bg-[#D7E2EA]/10 hover:shadow-[0_0_20px_rgba(215,226,234,0.15)] transition-all duration-200 inline-flex items-center justify-center gap-1.5 cursor-pointer select-none";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${className}`}
    >
      {label}
    </a>
  );
}
