import React from "react";
import { HeroSection } from "./components/jack/HeroSection";
import { SkillsAndGithubSection } from "./components/jack/SkillsAndGithubSection";
import { AboutSection } from "./components/jack/AboutSection";
import { ServicesSection } from "./components/jack/ServicesSection";
import { ProjectsSection } from "./components/jack/ProjectsSection";
import { ContactSection } from "./components/jack/ContactSection";

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0C0C0C] text-[#D7E2EA] font-sans relative overflow-x-clip">
      <HeroSection />
      <SkillsAndGithubSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default App;
