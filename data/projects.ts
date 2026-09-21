export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  image: string;
  description: string;
  longDescription: string;
  stack: string[];
  link?: string;
  github?: string;
  paperUrl?: string;
  features: string[];
  screenshots?: string[];
  featured?: boolean;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: "cashbuddy",
    title: "CashBuddy",
    subtitle: "AI-Powered Personal Finance Platform",
    tagline: "Privacy-first money management with automated SMS transaction parsing",
    image: "/projects/cashbuddy/dashboard.png",
    description:
      "Full-stack AI-driven personal finance application with smart budgeting, savings goals, peer expense ledger, and Magic Import AI to parse bank SMS messages.",
    longDescription:
      "CashBuddy solves the pain of manual expense entry by introducing an intelligent 'Magic Import' engine that securely parses bank transaction SMS messages using AI. It features multi-category spending analytics, automated budget forecasting, a peer-to-peer friend ledger, and privacy-first JWT-based data isolation.",
    stack: ["FastAPI", "Python", "React", "PostgreSQL", "Tailwind CSS", "JWT"],
    link: "https://cashbuddy-one.vercel.app/",
    github: "https://github.com/Divyesh207/cashbuddy-backend",
    paperUrl: "https://doi.org/10.58257/IJPREMS51878",
    featured: true,
    features: [
      "Magic Import AI — automated expense extraction from banking alerts",
      "Dynamic visual analytics with monthly expense forecast algorithms",
      "Friend Ledger for splitting group expenses & tracking balances",
      "Savings Goal tracker with milestone projections and velocity checks",
      "Published research paper in IJPREMS (DOI: 10.58257/IJPREMS51878)",
    ],
    screenshots: [
      "/projects/cashbuddy/dashboard.png",
      "/projects/cashbuddy/Screenshot-1.png",
      "/projects/cashbuddy/Screenshot-2.png",
      "/projects/cashbuddy/Screenshot-3.png",
      "/projects/cashbuddy/Screenshot-4.png",
    ],
  },
  {
    id: "eduflow",
    title: "EduFlow",
    subtitle: "Unified Academic Management Ecosystem",
    tagline: "Bridging students, educators, and institutional operations",
    image: "/projects/eduflow/admin-dashboard.png",
    description:
      "Role-based academic management platform featuring real-time attendance analytics, institutional health score algorithms, and assignment evaluation pipelines.",
    longDescription:
      "EduFlow replaces fragmented academic portals with a unified, role-based architecture serving Administrators, Teachers, and Students. Features include live attendance tracking, automated homework verification pipelines, student study ranking cards, and actionable AI insights for department heads.",
    stack: ["React", "FastAPI", "Python", "PostgreSQL", "Tailwind CSS"],
    link: "https://eduflow-frontend-rho.vercel.app/",
    github: "https://github.com/Divyesh207",
    featured: true,
    features: [
      "Role-based access controls for Admin, Faculty, and Student tiers",
      "Institutional Health Score computing real-time departmental health",
      "Automated assignment submission & originality verification workflow",
      "Comprehensive attendance rate calculators and low-attendance warnings",
      "Student punctuality trends, study streaks, and ranking metrics",
    ],
    screenshots: [
      "/projects/eduflow/admin-dashboard.png",
      "/projects/eduflow/student-dashboard.png",
      "/projects/eduflow/teacher-dashboard.png",
      "/projects/eduflow/Screenshot-1.png",
      "/projects/eduflow/Screenshot-2.png",
    ],
  },
  {
    id: "bijliaudit",
    title: "BijliAudit",
    subtitle: "AI-Powered Bill Forensics & Regulatory-Tech",
    tagline: "Intelligent electricity billing audit platform detecting discrepancies & tariff errors",
    image: "/projects/bijliaudit/cover.png",
    description:
      "Intelligent electricity billing audit platform designed to help Indian electricity consumers understand, analyze, and identify potential discrepancies in their electricity bills.",
    longDescription:
      "BijliAudit converts complex electricity bills into clear forensic audit reports by analyzing billing periods, tariff slabs, sanctioned load, consumption, fixed charges, taxes, and other billing components. It integrates Gemini OCR bill extraction, rule-based discrepancy verification, transparent calculation breakdowns, appliance consumption insights, and automated CGRF complaint draft generation.",
    stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Google Gemini", "Supabase", "PostgreSQL", "Recharts", "jsPDF"],
    link: "https://bijli-audit-lime.vercel.app/",
    github: "https://github.com/Divyesh207/BijliAudit.git",
    featured: true,
    features: [
      "AI-powered electricity bill OCR with automatic field extraction",
      "Comprehensive electricity bill analysis across tariff slabs and sanctioned load",
      "Rule-based discrepancy detection highlighting unexplained charges or miscalculations",
      "Transparent mathematical breakdowns explaining every audit computation",
      "Appliance consumption and load estimation with personalized savings recommendations",
      "Automated Consumer Grievance Redressal Forum (CGRF) complaint draft generation",
      "Structured PDF report and formal dispute document generation",
    ],
    screenshots: [
      "/projects/bijliaudit/cover.png",
      "/projects/bijliaudit/screenshot-1.png",
      "/projects/bijliaudit/screenshot-2.png",
    ],
  },
  {
    id: "quiz-application",
    title: "Interactive Assessment Engine",
    subtitle: "Modular Web Quiz Platform",
    tagline: "Timed evaluation platform with dynamic question banks and analytics",
    image: "/achievements/business-idea-1st-place.jpeg",
    description:
      "Responsive quiz testing application featuring timed sessions, category selection, instant scoring algorithms, and performance breakdown visualizations.",
    longDescription:
      "An interactive assessment platform designed for swift knowledge testing. Features randomized question pools across technical categories, strict countdown timers with auto-submit, and immediate answer explanations upon test completion.",
    stack: ["JavaScript", "React", "Tailwind CSS", "HTML5"],
    github: "https://github.com/Divyesh207",
    featured: false,
    features: [
      "Timed examination module with automated submission handling",
      "Dynamic question pooling across varied computer science domains",
      "Detailed review screen with answer keys and percentage breakdown",
    ],
  },
];
