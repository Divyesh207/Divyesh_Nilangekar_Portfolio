export const SKILLS: string[] = [
  "Python",
  "FastAPI",
  "TypeScript",
  "Next.js",
  "React",
  "PostgreSQL",
  "Machine Learning",
  "Scikit-learn",
  "NLP & TF-IDF",
  "Tailwind CSS",
  "GSAP",
  "Framer Motion",
  "Docker",
  "Git & GitHub",
  "REST APIs",
  "SQL",
  "Data Structures",
  "Generative AI",
  "Vercel",
  "Linux",
];

export interface SkillGroup {
  category: string;
  items: string[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "AI & Machine Learning",
    items: ["Python", "Machine Learning", "NLP", "Scikit-learn", "TF-IDF", "Pandas", "Generative AI"],
  },
  {
    category: "Backend & Systems",
    items: ["FastAPI", "Flask", "PostgreSQL", "REST APIs", "SQL", "JWT Auth", "System Design"],
  },
  {
    category: "Frontend & Creative UI",
    items: ["TypeScript", "Next.js", "React", "Tailwind CSS", "GSAP Animations", "Framer Motion", "HTML5/CSS3"],
  },
  {
    category: "Cloud, Tools & Workflow",
    items: ["Git", "GitHub", "Vercel", "Docker", "Render", "Linux", "Figma"],
  },
];
