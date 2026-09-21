import React from "react";
import { HeroSection } from "@/components/jack/HeroSection";
import { SkillsAndGithubSection } from "@/components/jack/SkillsAndGithubSection";
import { AboutSection } from "@/components/jack/AboutSection";
import { ServicesSection } from "@/components/jack/ServicesSection";
import { ExperienceSection } from "@/components/jack/ExperienceSection";
import { ProjectsSection } from "@/components/jack/ProjectsSection";
import { ContactSection } from "@/components/jack/ContactSection";
import { PippoChatbot } from "@/components/jack/PippoChatbot";
import { InteractiveBackground } from "@/components/jack/InteractiveBackground";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0C0C0C] text-[#D7E2EA] font-sans relative overflow-x-clip">
      {/* Interactive Ambient Hover Glow & Tech Grid Effect */}
      <InteractiveBackground />

      {/* 1. Hero Section with 3D Avatar and Fixed "DIVYESH" Watermark */}
      <HeroSection />

      {/* 2. Skills & Live GitHub Streak Activity (Continuous Marquee & Native Top Languages) */}
      <SkillsAndGithubSection />

      {/* 3. About Section */}
      <AboutSection />

      {/* 4. Skills & Architecture Details */}
      <ServicesSection />

      {/* 5. Experience Section (UWACI / MegaBliss Backend Team Lead, Research, Achievements) */}
      <ExperienceSection />

      {/* 6. Real Projects (CashBuddy, EduFlow, BijliAudit) */}
      <ProjectsSection />

      {/* 6. Contact Section */}
      <ContactSection />

      {/* 7. Pippo Robotic AI Companion (Landing Intro, Thought Cloud & Thought Storage) */}
      <PippoChatbot />
    </main>
  );
}
