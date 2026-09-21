"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { LiveProjectButton } from "./LiveProjectButton";
import { ProjectAbstractModal, ProjectModalData } from "./ProjectAbstractModal";
import { ExternalLink, Github, FileText, CheckCircle2, Zap, Award, Layers } from "lucide-react";

interface ProjectItemData extends ProjectModalData {
  techDisplay: string;
  shortSummary: string;
  bullet1: string;
  bullet2: string;
  previewImages: {
    label: string;
    url: string;
  }[];
}

const PROJECTS: ProjectItemData[] = [
  {
    number: "01",
    name: "CashBuddy",
    category: "AI & Full-Stack / Research Paper",
    tagline: "AI-driven personal finance app with statement import & smart budgeting",
    techDisplay: "Python · FastAPI · React · TypeScript · PostgreSQL · SQLAlchemy · JWT",
    tech: ["Python", "FastAPI", "React", "TypeScript", "PostgreSQL", "SQLAlchemy", "JWT", "Render", "Vercel"],
    metricBadge: {
      label: "Research",
      value: "IJPREMS Published • DOI: 10.58257",
    },
    shortSummary:
      "Team Lead for an AI-powered personal finance platform. Engineered 8–9 core features including Magic Import, budgeting, Smart Sweeps, and peer ledger.",
    bullet1:
      "Engineered 'Magic Import' AI engine to automatically extract and categorize transactions from banking SMS alerts.",
    bullet2:
      "Designed normalized PostgreSQL schemas and RESTful endpoints; co-authored research paper published in IJPREMS (March 2026).",
    abstract:
      "CashBuddy is an intelligent personal finance platform designed to eliminate the friction of manual expense entry. Serving as Team Lead, Divyesh architected 8–9 core features including 'Magic Import' AI for SMS transaction parsing, dynamic budget forecasting, savings goal velocity tracking, and a peer-to-peer balance ledger. Engineered with FastAPI, PostgreSQL, and JWT with OTP authentication and reCAPTCHA security. The research is accepted and published in the International Journal of Progressive Research in Engineering Management and Science (IJPREMS, Vol. 06, Issue 03, March 2026).",
    problem:
      "Users struggle with tedious manual expense logging, fragmented bank statements, and lack of predictive visibility into monthly spending habits.",
    solution:
      "Autonomous SMS parsing pipeline that extracts transaction metadata with zero manual typing, coupled with automated budgeting algorithms and multi-category expense analytics.",
    features: [
      "Magic Import AI — automated expense extraction from banking alerts",
      "Dynamic visual analytics with monthly expense forecast algorithms",
      "Friend Ledger for splitting group expenses & tracking balances",
      "Savings Goal tracker with milestone projections and velocity checks",
      "Multi-tenant data isolation with JWT authentication and OTP verification",
      "Published research paper in IJPREMS (DOI: 10.58257/IJPREMS51878)",
    ],
    previewImages: [
      { label: "Dashboard", url: "/projects/cashbuddy/dashboard.png" },
      { label: "Analytics", url: "/projects/cashbuddy/Screenshot-1.png" },
      { label: "Budgets", url: "/projects/cashbuddy/Screenshot-2.png" },
    ],
    screenshots: [
      { url: "/projects/cashbuddy/dashboard.png", title: "Main Financial Dashboard", description: "Monthly cash flow overview, category breakdown, and savings progress." },
      { url: "/projects/cashbuddy/Screenshot-1.png", title: "Smart Sweeps & Expense Analytics", description: "Interactive expense velocity chart and budget utilization trends." },
      { url: "/projects/cashbuddy/Screenshot-2.png", title: "Friend Ledger & Split Bills", description: "P2P balance tracking and shared expense ledger." },
    ],
    liveUrl: "https://cashbuddy-one.vercel.app/",
    githubUrl: "https://github.com/Divyesh207/cashbuddy-backend",
    paperUrl: "https://doi.org/10.58257/IJPREMS51878",
  },
  {
    number: "02",
    name: "EduFlow",
    category: "Academic Architecture / Platform",
    tagline: "Role-based academic management ecosystem for students, teachers & admins",
    techDisplay: "Python · FastAPI · PostgreSQL · SQLAlchemy · React · TypeScript · Vite",
    tech: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "React", "TypeScript", "Vite", "Tailwind CSS"],
    metricBadge: {
      label: "Architecture",
      value: "50+ Endpoints • Multi-Role LMS",
    },
    shortSummary:
      "Built backend REST APIs and normalized PostgreSQL architecture for a multi-role LMS supporting 50+ structured endpoints, RBAC, and assignment evaluations.",
    bullet1:
      "Enforced multi-tenant role-based access control (Admin, Teacher, Student) with strict schema-level data separation.",
    bullet2:
      "Automated assignment submission pipelines, originality verification, and real-time student attendance rate tracking.",
    abstract:
      "EduFlow replaces fragmented educational management portals with a unified, role-based architecture serving Administrators, Teachers, and Students. Architected with Python, FastAPI, and a normalized PostgreSQL database, it provides 50+ structured endpoints, automated homework verification pipelines, student study ranking cards, and actionable AI insights for institutional department heads.",
    problem:
      "Colleges and universities rely on disjointed portals for grading, attendance, and assignment submissions, leading to administrative overhead and poor student visibility.",
    solution:
      "Centralized RESTful LMS architecture with normalized relational schemas, real-time departmental health scoring, and streamlined assignment workflows.",
    features: [
      "Role-based access controls for Admin, Faculty, and Student tiers",
      "Institutional Health Score computing real-time departmental health",
      "Automated assignment submission & originality verification workflow",
      "Comprehensive attendance rate calculators and low-attendance warnings",
      "Student punctuality trends, study streaks, and ranking metrics",
    ],
    previewImages: [
      { label: "Admin View", url: "/projects/eduflow/admin-dashboard.png" },
      { label: "Student View", url: "/projects/eduflow/student-dashboard.png" },
      { label: "Teacher View", url: "/projects/eduflow/teacher-dashboard.png" },
    ],
    screenshots: [
      { url: "/projects/eduflow/admin-dashboard.png", title: "Admin Portal", description: "Institutional health analytics and department breakdown." },
      { url: "/projects/eduflow/student-dashboard.png", title: "Student Dashboard", description: "Upcoming assignments, study rankings, and attendance rate." },
      { url: "/projects/eduflow/teacher-dashboard.png", title: "Teacher Grading", description: "Classroom submissions, automated feedback, and score recording." },
    ],
    liveUrl: "https://eduflow-frontend-rho.vercel.app/",
    githubUrl: "https://github.com/Divyesh207",
  },
  {
    number: "03",
    name: "BijliAudit",
    category: "AI Regulatory-Tech & Bill Forensics",
    tagline: "Intelligent electricity billing audit platform detecting discrepancies & tariff errors",
    techDisplay: "Next.js 14 · TypeScript · React · Supabase · PostgreSQL · Gemini OCR · Tailwind CSS",
    tech: ["Next.js 14", "TypeScript", "React", "Supabase", "PostgreSQL", "Google Gemini", "Tailwind CSS", "Recharts", "jsPDF"],
    metricBadge: {
      label: "Performance",
      value: "⚡ 91.5% Latency Drop (11.8× faster)",
    },
    shortSummary:
      "Full-stack forensic electricity-billing audit platform for Indian consumers featuring Gemini OCR, slab calculations, and automated CGRF petitions.",
    bullet1:
      "Identified and resolved critical dashboard API waterfall; replaced sequential auth/DB calls with local audit reader to cut latency from 2,231ms to 188ms.",
    bullet2:
      "Audits billing periods, sanctioned load, fixed charges, and fuel surcharges against SERC tariff schedules with one-click CGRF dispute generation.",
    abstract:
      "BijliAudit is an intelligent, full-stack forensic electricity-billing audit platform designed for Indian power consumers. Built with Next.js, Supabase, PostgreSQL, and Google Gemini multimodal OCR, it converts complex electricity bills into easy-to-understand forensic audit dossiers. The platform mathematically audits billing periods, tariff slabs, connected load, fuel surcharges, and appliance consumption profiles. When meter readers record extended cycles without mandatory slab proration, BijliAudit flags the discrepancy and drafts an actionable legal petition for the Consumer Grievance Redressal Forum (CGRF) under Section 42(5) of the Electricity Act, 2003.",
    problem:
      "Consumers frequently suffer from delayed meter-reading penalties, extended 35–45 day cycles that inflate tariff slabs, obscure fixed demand charges, and complex dispute processes.",
    solution:
      "Automated deterministic audit engine with Gemini OCR extraction, SERC tariff slab proration, transparent calculations, and one-click court-ready CGRF petition export.",
    features: [
      "AI-powered electricity bill OCR using Google Gemini Vision",
      "SERC-mandated tariff slab proration for extended billing cycles",
      "Deterministic discrepancy detector with transparent mathematical proof",
      "91.5%+ latency reduction via local audit reader (2,231ms to 188ms)",
      "Appliance consumption profiling & personalized ToD energy recommendations",
      "Automated CGRF Legal Grievance petition generation in court-ready PDF",
    ],
    previewImages: [
      { label: "Forensic Overview", url: "/projects/bijliaudit/cover.png" },
      { label: "AI OCR & Slabs", url: "/projects/bijliaudit/screenshot-1.png" },
      { label: "CGRF Petition", url: "/projects/bijliaudit/screenshot-2.png" },
    ],
    screenshots: [
      { url: "/projects/bijliaudit/cover.png", title: "Forensic Audit Overview", description: "Discrepancy benchmark comparing billed amount against SERC normative schedule." },
      { url: "/projects/bijliaudit/screenshot-1.png", title: "Gemini OCR & Slab Breakdown", description: "Structured parameter extraction and transparent step-by-step calculations." },
      { url: "/projects/bijliaudit/screenshot-2.png", title: "CGRF Petition Generator", description: "Automated legal dispute drafting under Section 42(5) of the Electricity Act, 2003." },
    ],
    liveUrl: "https://bijli-audit-lime.vercel.app/",
    githubUrl: "https://github.com/Divyesh207/BijliAudit.git",
  },
];

interface CardProps {
  project: ProjectItemData;
  index: number;
  totalCards: number;
  onOpenAbstract: (p: ProjectItemData) => void;
}

function ProjectCard({ project, index, totalCards, onOpenAbstract }: CardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.025;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  const activeImage = project.previewImages[activeTab] || project.previewImages[0];

  return (
    <div
      ref={containerRef}
      className="min-h-[80vh] sm:min-h-[85vh] flex items-start justify-center sticky top-20 md:top-24 pb-12"
      style={{
        top: `calc(4.5rem + ${index * 24}px)`,
      }}
    >
      <motion.div
        style={{
          scale,
        }}
        className="w-full max-w-6xl rounded-[32px] sm:rounded-[44px] md:rounded-[52px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-5 sm:p-7 md:p-8 shadow-2xl flex flex-col justify-between gap-5 sm:gap-6"
      >
        {/* Top Header Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#D7E2EA]/15 pb-4 sm:pb-5">
          <div className="flex items-baseline gap-4 sm:gap-6">
            <span className="font-black text-3xl sm:text-5xl md:text-6xl text-[#D7E2EA] leading-none">
              {project.number}
            </span>
            <div className="flex flex-col">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs sm:text-sm font-light uppercase tracking-wider text-emerald-400">
                  {project.category}
                </span>
                {project.metricBadge && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-[11px] font-mono">
                    {project.metricBadge.value}
                  </span>
                )}
              </div>
              <h3 className="text-lg sm:text-2xl md:text-3xl font-medium uppercase text-[#D7E2EA] tracking-tight">
                {project.name}
              </h3>
              <span className="text-xs text-[#D7E2EA]/60 font-mono mt-0.5">
                {project.techDisplay}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            {/* View Abstract / Deep Dive Button */}
            <button
              onClick={() => onOpenAbstract(project)}
              className="rounded-full border border-cyan-400/50 text-cyan-300 bg-cyan-400/10 hover:bg-cyan-400/20 font-medium uppercase tracking-wider px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm transition-all duration-200 inline-flex items-center justify-center gap-1.5 cursor-pointer select-none"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Abstract &amp; Deep Dive</span>
            </button>

            {/* Live Demo */}
            {project.liveUrl && (
              <LiveProjectButton href={project.liveUrl} label="Live Demo" variant="primary" />
            )}

            {/* GitHub */}
            {project.githubUrl && (
              <LiveProjectButton href={project.githubUrl} label="GitHub" variant="secondary" />
            )}
          </div>
        </div>

        {/* Content Layout: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          {/* Left Column: Abstract Summary & Key Deliverables */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4 p-5 sm:p-6 rounded-[24px] sm:rounded-[32px] bg-zinc-950/60 border border-white/10">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-semibold">
                  Engineering Abstract
                </span>
                <button
                  onClick={() => onOpenAbstract(project)}
                  className="text-[11px] font-mono text-cyan-400 hover:text-cyan-300 underline uppercase"
                >
                  Expand Full Dossier ➔
                </button>
              </div>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {project.shortSummary}
              </p>

              <div className="space-y-2 pt-2 border-t border-white/5">
                <div className="flex items-start gap-2 text-xs text-zinc-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                  <span>{project.bullet1}</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-zinc-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                  <span>{project.bullet2}</span>
                </div>
              </div>
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
              {project.tech.slice(0, 5).map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 text-[11px] font-mono rounded bg-white/[0.04] text-zinc-400 border border-white/5"
                >
                  {t}
                </span>
              ))}
              {project.tech.length > 5 && (
                <span className="px-2 py-0.5 text-[11px] font-mono rounded bg-white/[0.04] text-zinc-500">
                  +{project.tech.length - 5} more
                </span>
              )}
            </div>
          </div>

          {/* Right Column: Perfectly-Fitted Browser Device Frame */}
          <div className="lg:col-span-7 flex flex-col rounded-[24px] sm:rounded-[32px] overflow-hidden bg-zinc-950 border border-white/10 shadow-xl">
            {/* Browser Top Window Bar */}
            <div className="px-4 py-2.5 bg-zinc-900/90 border-b border-white/10 flex items-center justify-between gap-3 flex-wrap">
              {/* Window Control Dots */}
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-2 text-[11px] font-mono text-zinc-400 hidden sm:inline">
                  {project.name.toLowerCase()}.app
                </span>
              </div>

              {/* View Switcher Tabs */}
              <div className="flex items-center gap-1 bg-black/40 p-0.5 rounded-xl border border-white/5">
                {project.previewImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`px-2.5 py-1 text-[11px] font-mono rounded-lg transition-all ${
                      activeTab === idx
                        ? "bg-white/15 text-white font-medium shadow-sm"
                        : "text-zinc-400 hover:text-zinc-200"
                    }`}
                  >
                    {img.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Image Box: Calibrated for Clean, Non-Cropped Fit */}
            <div
              onClick={() => onOpenAbstract(project)}
              className="relative w-full h-[260px] sm:h-[320px] md:h-[350px] bg-[#08080a] flex items-center justify-center p-2 sm:p-3 overflow-hidden group cursor-pointer"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={activeImage.url}
                alt={`${project.name} - ${activeImage.label}`}
                loading="lazy"
                className="w-full h-full object-cover object-top rounded-xl border border-white/5 transition-transform duration-500 group-hover:scale-[1.015]"
              />

              {/* Subtle Inspect Overlay Badge */}
              <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[11px] font-mono text-zinc-300 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                <FileText className="w-3 h-3 text-cyan-400" />
                <span>Click to Read Abstract</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectItemData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenAbstract = (proj: ProjectItemData) => {
    setSelectedProject(proj);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-20 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-28 select-none"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none tracking-tight mb-16 sm:mb-24">
            Projects
          </h2>
        </FadeIn>

        {/* 3 Sticky-Stacking Project Cards */}
        <div className="flex flex-col relative">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.number}
              project={project}
              index={index}
              totalCards={PROJECTS.length}
              onOpenAbstract={handleOpenAbstract}
            />
          ))}
        </div>
      </div>

      {/* Abstract Deep Dive Modal */}
      <ProjectAbstractModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}
