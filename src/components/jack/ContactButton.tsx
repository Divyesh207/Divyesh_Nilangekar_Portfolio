"use client";

import React from "react";

interface ContactButtonProps {
  onClick?: () => void;
  className?: string;
}

export function ContactButton({ onClick, className = "" }: ContactButtonProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      const contactEl = document.getElementById("contact");
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = "mailto:hello@jack3d.com";
      }
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      style={{
        background: "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
        boxShadow: "0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset",
        outline: "2px solid white",
        outlineOffset: "-3px",
      }}
      className={`rounded-full text-white font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base hover:scale-105 active:scale-95 transition-transform duration-200 cursor-pointer select-none inline-flex items-center justify-center ${className}`}
    >
      Contact Me
    </button>
  );
}
