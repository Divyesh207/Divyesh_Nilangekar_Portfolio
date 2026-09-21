import { Project, SkillCategory, Achievement, Certificate, EducationItem } from '../types';

export const PERSONAL_INFO = {
  name: "Divyesh Nilangekar",
  fullName: "Divyesh Deepratna Nilangekar",
  title: "Backend Team Lead · Backend & Full-Stack Engineer",
  location: "Pune, Maharashtra, India",
  email: "nilangekardivyesh@gmail.com",
  phone: "+91 7057311330",
  github: "https://github.com/Divyesh207",
  linkedin: "https://linkedin.com/in/divyesh-nilangekar",
  resumePath: "/docs/resume.pdf",
  resumeUrl: "/docs/resume.pdf",
  bio: "Backend & Full-Stack Engineering student and Backend Team Lead with proven experience architecting modular Python/FastAPI services, REST APIs, and relational PostgreSQL databases. Skilled in driving Git-based code reviews, system design, and performance optimizations. Demonstrated track record of leading development teams, shipping production-grade backend components, and cutting API latency by over 91.5%.",
  stats: [
    { label: "Diploma Aggregate", value: "91.06%", highlight: "First Class with Distinction" },
    { label: "Engineering Lead", value: "Pipe 3", highlight: "UWACI / MegaBliss Limited" },
    { label: "Latency Optimization", value: "91.5%+", highlight: "11.8x Performance Gain" },
    { label: "Research Publication", value: "IJPREMS", highlight: "DOI: 10.58257/IJPREMS51878" },
  ]
};

export const PROJECTS_DATA: Project[] = [
  {
    id: "cashbuddy",
    title: "CASHBUDDY",
    subtitle: "AI-POWERED PERSONAL FINANCE PLATFORM",
    tagline: "A privacy-focused platform for smarter money management.",
    category: "Featured",
    description: "Full-stack AI-driven personal finance application for expense tracking, smart budgeting, and savings insights with automated transaction parsing and peer accounting.",
    problem: "Manual expense logging is tedious, error-prone, and disconnected from modern banking notifications, leading to poor financial visibility.",
    solution: "An intelligent platform featuring 'Magic Import' to auto-parse bank SMS notifications using AI, alongside real-time spending analytics, category breakdowns, and friend ledgers.",
    features: [
      "Expense tracking with real-time balance calculations",
      "Smart budgeting and monthly expense forecasts",
      "Savings goals with progress tracking",
      "Automated transaction categorization",
      "Magic Import AI — auto-add expenses from bank SMS messages",
      "Spending analysis and financial visual analytics",
      "Friend Ledger for shared expense tracking",
      "Privacy-focused design with JWT authentication"
    ],
    technologies: ["React", "TypeScript", "FastAPI", "Python", "PostgreSQL", "JWT", "Render", "Vercel"],
    screenshots: [
      { url: "/projects/cashbuddy/dashboard.png", caption: "CashBuddy Main Dashboard with Spending Analytics & Magic Import", isCover: true },
      { url: "/projects/cashbuddy/Screenshot-1.png", caption: "Transactions & Categorized Expense Breakdown" },
      { url: "/projects/cashbuddy/Screenshot-2.png", caption: "Friend Ledger & Peer Balance Management" },
      { url: "/projects/cashbuddy/Screenshot-3.png", caption: "Savings Goals & Milestone Tracker" },
      { url: "/projects/cashbuddy/Screenshot-4.png", caption: "Analytics & Spending Distribution Graphs" },
      { url: "/projects/cashbuddy/Screenshot-5.png", caption: "Settings, Preferences & Account Management" }
    ],
    liveDemoUrl: "https://cashbuddy-one.vercel.app/",
    githubUrl: "https://github.com/Divyesh207/cashbuddy-backend",
    paperDoi: "10.58257/IJPREMS51878",
    paperUrl: "https://doi.org/10.58257/IJPREMS51878"
  },
  {
    id: "eduflow",
    title: "EDUFLOW",
    subtitle: "ACADEMIC MANAGEMENT PLATFORM",
    tagline: "Connecting students, teachers and academic workflows.",
    category: "Featured",
    description: "Comprehensive multi-role learning and academic management platform featuring real-time attendance analytics, automated assignment evaluation, and institutional health insights.",
    problem: "Academic institutions struggle with fragmented workflows across student attendance, assignment submissions, performance tracking, and teacher-student collaboration.",
    solution: "A unified portal with dedicated role-based dashboards (Student, Teacher, Admin), automated task pipelines, performance trends, and AI-assisted administrative analytics.",
    features: [
      "Role-based authentication & workflows (Student, Teacher, Admin)",
      "Admin Dashboard with Institutional Health Score & AI Insights",
      "Student Dashboard with task submission, punctuality & rank tracking",
      "Teacher Dashboard for class management and grading workflows",
      "Active group management and departmental task distribution",
      "Automated assignment submission & originality feedback pipelines",
      "Weekly study progress tracking & performance trend analytics",
      "Real-time notifications and academic announcements"
    ],
    technologies: ["React", "Python", "FastAPI", "PostgreSQL", "Vercel"],
    screenshots: [
      { url: "/projects/eduflow/admin-dashboard.png", caption: "Admin Dashboard — Institution Health Score & AI Administrative Insights", isCover: true },
      { url: "/projects/eduflow/student-dashboard.png", caption: "Student Dashboard — Tasks Done, Rank, Punctuality & AI Coach Card" },
      { url: "/projects/eduflow/teacher-dashboard.png", caption: "Teacher Dashboard — Class Schedules, Student Lists & Grading Tools" },
      { url: "/projects/eduflow/Screenshot-1.png", caption: "Assignment Submissions & Originality Check Workflow" },
      { url: "/projects/eduflow/Screenshot-2.png", caption: "Attendance Monitoring & Analytics View" },
      { url: "/projects/eduflow/Screenshot-3.png", caption: "Group Collaboration & Class Resource Hub" },
      { url: "/projects/eduflow/screenshot-4.png", caption: "Performance Trend & Examination Record" },
      { url: "/projects/eduflow/Screenshot-5.png", caption: "Administrative Settings & Institution Configuration" }
    ],
    liveDemoUrl: "https://eduflow-frontend-rho.vercel.app/",
    githubUrl: "https://github.com/Divyesh207"
  },
  {
    id: "bijliaudit",
    title: "BIJLIAUDIT",
    subtitle: "AI-POWERED REGULATORY-TECH & BILL FORENSICS",
    tagline: "Intelligent electricity billing audit platform detecting discrepancies, tariff errors, and appliance insights.",
    category: "Featured",
    description: "BijliAudit is an intelligent electricity billing audit platform designed to help Indian electricity consumers understand, analyze, and identify potential discrepancies in their electricity bills. It converts complex electricity bills into easy-to-understand audit reports by analyzing billing periods, tariff slabs, sanctioned load, consumption, fixed charges, taxes, and other billing components.",
    problem: "Electricity consumers often face convoluted tariffs, obscure billing slabs, unexplained charges, and cumbersome dispute processes with power distribution companies.",
    solution: "An AI-powered forensics pipeline combining Gemini multimodal OCR, rule-based tariff and slab discrepancy detection, transparent mathematical breakdowns, appliance consumption insights, and automated CGRF complaint drafting.",
    features: [
      "AI-powered electricity bill OCR — upload bill to automatically extract structured billing parameters",
      "Electricity Bill Analysis — examines billing periods, units consumed, tariff slabs, sanctioned load, fixed charges, and taxes",
      "Billing Discrepancy Detection — flags mathematical inconsistencies or unusual billing patterns via rule-based analysis",
      "Transparent Calculations — displays step-by-step mathematical reasoning behind every audited value and discrepancy",
      "Personalized Recommendations — actionable energy-saving suggestions tailored to user consumption history",
      "Appliance Consumption Analysis — breakdown of estimated load across AC, heater, refrigeration, and washing units",
      "CGRF Grievance Generation — generates structured Consumer Grievance Redressal Forum complaint drafts with audit proof",
      "PDF Report Generation — exports formal audit dossiers and grievance documentation via jsPDF",
      "Responsive Modern Dashboard with Dark / Light theme switching and Supabase authentication"
    ],
    technologies: ["Next.js 14", "TypeScript", "Tailwind CSS", "Google Gemini", "Supabase", "PostgreSQL", "shadcn/ui", "Framer Motion", "Recharts", "Zod", "React Hook Form", "jsPDF"],
    screenshots: [
      { url: "/projects/bijliaudit/cover.png", caption: "BijliAudit Forensic Dashboard — Overview & Discrepancy Metrics", isCover: true },
      { url: "/projects/bijliaudit/screenshot-1.png", caption: "AI Bill OCR & Transparent Calculation Audit Breakdown" },
      { url: "/projects/bijliaudit/screenshot-2.png", caption: "CGRF Formal Grievance & Detailed Audit PDF Generator" }
    ],
    liveDemoUrl: "https://bijli-audit-lime.vercel.app/",
    githubUrl: "https://github.com/Divyesh207/BijliAudit.git"
  },
  {
    id: "quiz-application",
    title: "QUIZ APPLICATION",
    subtitle: "INTERACTIVE ASSESSMENT PLATFORM",
    tagline: "Modular quiz application with timer-based assessment and analytics.",
    category: "Supporting",
    description: "Responsive web quiz application designed with instant scoring, category selection, and detailed post-quiz performance breakdown.",
    problem: "Students need fast, interactive practice assessment tools with immediate answer explanations.",
    solution: "Clean frontend assessment interface with randomized question pools, countdown timers, and accuracy metrics.",
    features: [
      "Dynamic question rendering across multiple subject categories",
      "Countdown timer with auto-submit mechanism",
      "Real-time score calculation and detailed solution review"
    ],
    technologies: ["JavaScript", "HTML", "CSS", "React"],
    screenshots: [],
    githubUrl: "https://github.com/Divyesh207"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "LANGUAGES",
    skills: ["Python", "SQL", "JavaScript", "TypeScript"]
  },
  {
    title: "BACKEND & APIS",
    skills: ["FastAPI", "Flask", "REST API Development", "Pydantic", "SQLAlchemy", "JWT Authentication", "Async/asyncpg"]
  },
  {
    title: "FRONTEND",
    skills: ["React", "Next.js", "Vite", "Tailwind CSS"]
  },
  {
    title: "DATABASES & ARCHITECTURE",
    skills: ["PostgreSQL", "Relational Database Design", "Domain-Driven Design (DDD)", "Modular Architecture"]
  },
  {
    title: "SOFTWARE ENGINEERING & TOOLS",
    skills: ["Data Structures & Algorithms", "Git/GitHub", "Code Review", "Pytest", "Ruff", "MyPy", "Render", "Vercel", "Supabase"]
  }
];

export const ACHIEVEMENTS_DATA: Achievement[] = [
  {
    id: "business-idea-1st-place",
    title: "1ST PLACE — INNOVATIVE IDEA PRESENTATION",
    subtitle: "Pimpri Chinchwad Polytechnic, Pune · Technical Event 2024-25",
    type: "competitive",
    date: "February 28, 2025",
    badge: "1ST RANK",
    metrics: "Rank 1 among 50+ participants",
    description: "Secured 1st Rank among 50+ participants by presenting an AI-based business innovation idea addressing real-world operational challenges during Technical Event 2024-25 organized by Engineering departments.",
    imagePath: "/achievements/business-idea-1st-place.jpeg",
    viewActionText: "VIEW CERTIFICATE",
    organizer: "Pimpri Chinchwad Education Trust's Pimpri Chinchwad Polytechnic"
  },
  {
    id: "academic-performance-diploma",
    title: "91.06% AGGREGATE — DIPLOMA IN AI & ML",
    subtitle: "Maharashtra State Board of Technical Education (MSBTE)",
    type: "academic",
    date: "Summer 2026",
    badge: "DISTINCTION",
    metrics: "1548 / 1700 Marks (91.06%)",
    description: "Awarded First Class with Distinction for Diploma in Artificial Intelligence and Machine Learning with an aggregate score of 91.06% (1548/1700 marks) at D. Y. Patil Polytechnic, Ambi.",
    imagePath: "/achievements/diploma-result.jpeg",
    viewActionText: "VIEW STATEMENT OF MARKS",
    organizer: "Maharashtra State Board of Technical Education (MSBTE)"
  },
  {
    id: "research-publication-cashbuddy",
    title: "RESEARCH PUBLICATION: CASHBUDDY",
    subtitle: "International Journal of Progressive Research in Engineering Management and Science (IJPREMS)",
    type: "publication",
    date: "March 2026",
    badge: "PEER REVIEWED",
    metrics: "DOI: 10.58257/IJPREMS51878",
    description: "Authored and published research paper titled 'CASHBUDDY: An AI Driven Personal Finance Management System' in IJPREMS (Volume 06, Issue 03, March 2026). Paper ID: IJPREMS260300003670.",
    imagePath: "/projects/cashbuddy/dashboard.png",
    viewActionText: "VIEW PUBLICATION DETAILS",
    paperDetails: {
      journal: "IJPREMS",
      volume: "Volume 06, Issue 03, March 2026",
      doi: "10.58257/IJPREMS51878",
      paperId: "IJPREMS260300003670"
    }
  }
];

export const CERTIFICATIONS_DATA: Certificate[] = [
  {
    id: "maths-for-ml",
    title: "Machine Learning : Complete Maths for Machine Learning",
    issuer: "Udemy",
    issueDate: "Feb 4, 2026",
    imagePath: "/certificates/maths-for-ml.jpg",
    category: "Mathematics for Machine Learning",
    skills: ["Linear Algebra", "Calculus", "Probability", "Statistics for ML"]
  },
  {
    id: "generative-ai",
    title: "Build Your Generative AI Productivity Skills",
    issuer: "Microsoft & LinkedIn Learning",
    issueDate: "Sep 22, 2024",
    imagePath: "/certificates/generative-ai.jpg",
    category: "Generative AI",
    skills: ["AI for Business", "AI for Design", "Productivity Improvement"]
  },
  {
    id: "programming-foundations",
    title: "Programming Foundations: Beyond the Fundamentals",
    issuer: "LinkedIn Learning",
    issueDate: "Aug 18, 2024",
    imagePath: "/certificates/programming-foundations.jpg",
    category: "Programming Foundations",
    skills: ["Data Structures", "Algorithms", "Object-Oriented Design"]
  },
  {
    id: "python-ai-workshop",
    title: "3 Hours Python Using AI Workshop",
    issuer: "AI for Techies",
    issueDate: "Dec 15, 2024",
    imagePath: "/certificates/python-ai-workshop.jpg",
    category: "Python / AI Workshop",
    skills: ["Python AI Automation", "Rapid Prototyping", "Interactive Visualizations"]
  },
  {
    id: "python-infosys",
    title: "Basics of Python",
    issuer: "Infosys Springboard",
    issueDate: "Jan 24, 2025",
    imagePath: "/certificates/python-infosys.jpg",
    category: "Basics of Python",
    skills: ["Python Fundamentals", "Data Types", "Control Structures", "Functions"]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: "btech-ai-ds",
    institution: "D. Y. Patil Pratishthan's College of Engineering, Akurdi, Pune",
    degree: "B.Tech in Artificial Intelligence & Data Science",
    period: "Direct 2nd Year (Current) — Expected 2029",
    status: "Pursuing",
    details: [
      "Direct Second Year Student in Artificial Intelligence & Data Science department.",
      "Focusing on high-performance backend systems, distributed architectures, database optimization, and machine learning pipelines."
    ]
  },
  {
    id: "diploma-ai-ml",
    institution: "D Y Patil Polytechnic College, Ambi, Pune (MSBTE)",
    degree: "Diploma in Artificial Intelligence & Machine Learning",
    period: "2023 — 2026",
    aggregate: "91.06%",
    honors: "FIRST CLASS WITH DISTINCTION",
    status: "Completed",
    details: [
      "Graduated with 91.06% aggregate (First Class with Distinction) under Maharashtra State Board of Technical Education (MSBTE).",
      "Completed Capstone Research Project on AI-Driven Personal Finance Architecture (CashBuddy) accepted in IJPREMS journal."
    ]
  }
];
