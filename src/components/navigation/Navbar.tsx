"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  onBeginJourney?: () => void;
}

export function Navbar({ onBeginJourney }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string, name: string) => {
    setActiveSection(name);
    setMobileMenuOpen(false);
    if (id === "top" || id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[hsl(201_100%_13%/0.85)] backdrop-blur-md border-b border-border/40 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <nav className="relative z-10 flex flex-row items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full">
        {/* Logo */}
        <Link
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("top", "home");
          }}
          className="text-3xl tracking-tight text-foreground transition-opacity hover:opacity-90 inline-flex items-center"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          <span>Velorah</span>
          <sup className="text-xs">®</sup>
        </Link>

        {/* Desktop Nav links (hidden on mobile, md:flex) */}
        <div className="hidden md:flex items-center gap-8">
          <button
            type="button"
            onClick={() => scrollToSection("top", "home")}
            className={`text-sm transition-colors ${
              activeSection === "home"
                ? "text-foreground font-normal"
                : "text-muted-foreground hover:text-foreground font-normal"
            }`}
          >
            Home
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("projects", "studio")}
            className={`text-sm transition-colors ${
              activeSection === "studio"
                ? "text-foreground font-normal"
                : "text-muted-foreground hover:text-foreground font-normal"
            }`}
          >
            Studio
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("about", "about")}
            className={`text-sm transition-colors ${
              activeSection === "about"
                ? "text-foreground font-normal"
                : "text-muted-foreground hover:text-foreground font-normal"
            }`}
          >
            About
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("experience", "journal")}
            className={`text-sm transition-colors ${
              activeSection === "journal"
                ? "text-foreground font-normal"
                : "text-muted-foreground hover:text-foreground font-normal"
            }`}
          >
            Journal
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("contact", "reach-us")}
            className={`text-sm transition-colors ${
              activeSection === "reach-us"
                ? "text-foreground font-normal"
                : "text-muted-foreground hover:text-foreground font-normal"
            }`}
          >
            Reach Us
          </button>
        </div>

        {/* CTA button and mobile menu toggle */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => {
              if (onBeginJourney) {
                onBeginJourney();
              } else {
                scrollToSection("about", "about");
              }
            }}
            className="liquid-glass rounded-full px-6 py-2.5 text-sm text-foreground hover:scale-[1.03] transition-transform duration-200 cursor-pointer"
          >
            Begin Journey
          </button>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden px-8 py-6 flex flex-col gap-4 bg-[hsl(201_100%_13%/0.95)] backdrop-blur-xl border-b border-border animate-fade-rise">
          <button
            type="button"
            onClick={() => scrollToSection("top", "home")}
            className={`text-left text-base transition-colors ${
              activeSection === "home" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Home
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("projects", "studio")}
            className={`text-left text-base transition-colors ${
              activeSection === "studio" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Studio
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("about", "about")}
            className={`text-left text-base transition-colors ${
              activeSection === "about" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            About
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("experience", "journal")}
            className={`text-left text-base transition-colors ${
              activeSection === "journal" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Journal
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("contact", "reach-us")}
            className={`text-left text-base transition-colors ${
              activeSection === "reach-us" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Reach Us
          </button>
        </div>
      )}
    </header>
  );
}
