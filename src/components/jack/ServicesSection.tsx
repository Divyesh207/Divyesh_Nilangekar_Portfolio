"use client";

import React from "react";
import { FadeIn } from "./FadeIn";

const SKILLS_DATA = [
  {
    number: "01",
    name: "Backend & APIs",
    description:
      "FastAPI, Django, Flask, REST APIs, Pydantic, SQLAlchemy, Domain-Driven Design. Architecting high-throughput microservices, timezone-aware trip intent models, and dependency-inversion contracts.",
    tags: ["FastAPI", "Python", "SQLAlchemy", "Pydantic", "REST APIs", "DDD"],
  },
  {
    number: "02",
    name: "Database Architecture",
    description:
      "PostgreSQL, relational schema architecture, query optimization, and transaction modeling. Designing scalable entities, indexing strategies, and secure multi-tenant data isolation.",
    tags: ["PostgreSQL", "Database Design", "SQL", "Indexing", "Migrations"],
  },
  {
    number: "03",
    name: "Machine Learning & NLP",
    description:
      "Scikit-learn, Pandas, Natural Language Processing, TF-IDF vectorization, Logistic Regression. Engineering classification pipelines, feature transformers, and modular evaluation engines.",
    tags: ["Scikit-learn", "Pandas", "NLP", "TF-IDF", "Logistic Regression"],
  },
  {
    number: "04",
    name: "Quality & Leadership",
    description:
      "Tech & Team Lead at UWACI. Pytest test suites, Ruff linting, MyPy static type checking, PR audit workflows, and technical mentoring across distributed engineering sprints.",
    tags: ["Pytest", "Ruff", "MyPy", "Code Reviews", "PR Workflows", "Git"],
  },
  {
    number: "05",
    name: "Cloud & Deployment",
    description:
      "Deploying high-availability web applications and APIs using Render, Vercel, and CI/CD pipelines. Bridging backend power with modern Next.js frontends.",
    tags: ["Render", "Vercel", "GitHub Actions", "Next.js", "Docker Basics"],
  },
];

const ALL_SKILL_CHIPS = [
  "Python",
  "SQL",
  "FastAPI",
  "PostgreSQL",
  "SQLAlchemy",
  "Pydantic",
  "Django",
  "Flask",
  "REST APIs",
  "Scikit-learn",
  "Pandas",
  "NLP",
  "TF-IDF",
  "Pytest",
  "Ruff",
  "MyPy",
  "Git & GitHub",
  "Render",
  "Vercel",
  "Domain-Driven Design",
  "Data Structures",
  "OOP",
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10 select-none"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2 className="text-[#0C0C0C] font-black uppercase text-center text-[clamp(2.75rem,10vw,140px)] leading-none tracking-tight mb-16 sm:mb-20 md:mb-28">
            Skills & Expertise
          </h2>
        </FadeIn>

        {/* 5 Core Skills/Services items in vertical list */}
        <div className="flex flex-col border-t border-[rgba(12,12,12,0.15)]">
          {SKILLS_DATA.map((item, index) => (
            <FadeIn
              key={item.number}
              delay={index * 0.1}
              y={30}
              className="py-8 sm:py-10 md:py-12 border-b border-[rgba(12,12,12,0.15)] flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 sm:gap-8 md:gap-12"
            >
              {/* Number on the left */}
              <div className="font-black text-[#0C0C0C] text-[clamp(3rem,9vw,130px)] leading-none flex-shrink-0 w-28 sm:w-36 md:w-52">
                {item.number}
              </div>

              {/* Name + Description + Tags stacked vertically on the right */}
              <div className="flex flex-col flex-1">
                <h3 className="text-[#0C0C0C] font-medium uppercase text-[clamp(1.1rem,2.2vw,2rem)] tracking-tight">
                  {item.name}
                </h3>
                <p className="text-[#0C0C0C] font-light leading-relaxed max-w-2xl text-[clamp(0.85rem,1.5vw,1.2rem)] opacity-70 mt-2">
                  {item.description}
                </p>

                {/* Sub-tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-[#0C0C0C]/5 border border-[#0C0C0C]/10 text-xs font-medium uppercase text-[#0C0C0C]/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Complete Tech Stack Matrix Pills */}
        <FadeIn delay={0.3} y={30} className="mt-16 sm:mt-24 pt-12 border-t border-[rgba(12,12,12,0.1)] text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-[#0C0C0C]/50 block mb-6">
            // Full Engineering Tech Stack
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-4xl mx-auto">
            {ALL_SKILL_CHIPS.map((chip) => (
              <span
                key={chip}
                className="px-4 py-2 rounded-full bg-[#0C0C0C] text-white text-xs sm:text-sm font-medium tracking-wide uppercase shadow-sm"
              >
                {chip}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
