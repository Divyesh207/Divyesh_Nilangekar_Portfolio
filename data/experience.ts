export interface ExperienceItem {
  role: string;
  type: "Fulltime" | "Internship" | "Freelance" | "Project Lead" | "Research";
  dates: string;
  company: string;
  link: string;
  description: string;
  skills?: string[];
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: "Backend Team Lead (Pipe 3)",
    type: "Fulltime",
    dates: "Aug 2026 – Present (Promoted Sept 2026)",
    company: "UWACI / MegaBliss Limited — Remote",
    link: "https://github.com/Divyesh207",
    description:
      "Coordinate and lead 3 backend developers on technical task planning, code reviews, PR merges, and architecture for Pipe 3. Authored 12 PRs (6 merged) and reviewed 5 PRs while enforcing strict quality standards via Pytest, Ruff, and MyPy. Implemented 4 core backend services: Traffic domain foundations, Trip Intent services, Directed network topology, and cross-pipe location architecture with Domain-Driven Design (DDD).",
    skills: ["Python", "FastAPI", "PostgreSQL", "Pydantic", "SQLAlchemy", "Domain-Driven Design", "Pytest", "Ruff", "MyPy"],
  },
  {
    role: "Lead Architect & AI Researcher",
    type: "Project Lead",
    dates: "2024 – 2026",
    company: "CashBuddy Platform (IJPREMS Published)",
    link: "https://cashbuddy-one.vercel.app/",
    description:
      "Designed and authored an AI-powered personal finance management ecosystem published in IJPREMS (DOI: 10.58257/IJPREMS51878). Engineered automated bank SMS transaction parser using AI ('Magic Import'), peer-to-peer balance ledger, and high-performance FastAPI backends with PostgreSQL.",
    skills: ["FastAPI", "Python", "React", "PostgreSQL", "JWT", "AI Parsing"],
  },
  {
    role: "Full-Stack Software Lead",
    type: "Project Lead",
    dates: "2024 – 2025",
    company: "EduFlow Academic Systems",
    link: "https://eduflow-frontend-rho.vercel.app/",
    description:
      "Architected multi-tier institutional management portal with role-based authentication (Student, Teacher, Admin). Implemented attendance analytics engine, automated assignment originality verification pipelines, and dynamic institution health score dashboards.",
    skills: ["React", "FastAPI", "Python", "PostgreSQL", "Data Analytics"],
  },
  {
    role: "Machine Learning & NLP Engineer",
    type: "Freelance",
    dates: "2024 – Present",
    company: "Independent Client & Research Projects",
    link: "https://github.com/Divyesh207",
    description:
      "Engineered automated resume classification engine using NLP text processing, TF-IDF vectorization, and Logistic Regression models. Delivered modular web applications and custom RESTful API integrations for clients.",
    skills: ["Scikit-learn", "NLP", "TF-IDF", "Python", "REST APIs"],
  },
  {
    role: "Frontend & Creative Developer",
    type: "Freelance",
    dates: "2023 – Present",
    company: "Self-Employed / Open Source",
    link: "https://github.com/Divyesh207",
    description:
      "Building high-aesthetic, performant web applications with Next.js, Tailwind CSS, GSAP animations, and Framer Motion. Focused on responsive design, micro-interactions, accessibility, and clean component architecture.",
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP", "Framer Motion"],
  },
];
