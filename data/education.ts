export interface EducationItem {
  title: string;
  institution: string;
  link: string;
  dates: string;
  badge?: string;
  description: string;
  highlights?: string[];
}

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    title: "B.Tech in Artificial Intelligence & Data Science",
    institution: "D. Y. Patil Pratishthan's College of Engineering, Akurdi, Pune",
    link: "https://www.dypcoeakurdi.ac.in/",
    dates: "2026 – 2028 (Pursuing)",
    badge: "Direct Second Year",
    description:
      "Advanced undergraduate curriculum focusing on Machine Learning Systems, Distributed Architectures, Deep Learning, Big Data Engineering, and High-Performance Cloud Computing.",
    highlights: [
      "Department of Artificial Intelligence and Data Science",
      "Specializing in Scalable AI Deployments & System Design",
    ],
  },
  {
    title: "Diploma in Artificial Intelligence & Machine Learning",
    institution: "D. Y. Patil Polytechnic, Ambi, Pune (MSBTE)",
    link: "https://msbte.org.in/",
    dates: "2023 – 2026",
    badge: "91.06% Distinction",
    description:
      "Graduated with First Class with Distinction (Aggregate 91.06%, 1548/1700 marks). Completed comprehensive coursework in Big Data Analytics, Image Processing, Data Warehousing & Mining, and Mobile Application Development.",
    highlights: [
      "First Class with Distinction (91.06% Aggregate)",
      "Authored Capstone Project and Research Paper on AI Personal Finance (CashBuddy)",
    ],
  },
  {
    title: "Peer-Reviewed Research Publication (IJPREMS)",
    institution: "International Journal of Progressive Research in Engineering Management and Science",
    link: "https://doi.org/10.58257/IJPREMS51878",
    dates: "March 2026",
    badge: "DOI: 10.58257/IJPREMS51878",
    description:
      "Published research paper titled 'CASHBUDDY: An AI Driven Personal Finance Management System' (Volume 06, Issue 03, March 2026). Paper ID: IJPREMS260300003670.",
  },
  {
    title: "1st Rank — Innovative Business Idea Presentation",
    institution: "PCET's Pimpri Chinchwad Polytechnic, Pune",
    link: "https://www.pcpolytechnic.com/",
    dates: "February 2025",
    badge: "1st Place Winner",
    description:
      "Secured 1st Rank among 50+ competing teams presenting an AI-based operational automation framework during the annual State-Level Technical Symposium 2024-25.",
  },
  {
    title: "Mathematics for Machine Learning & Specialized Certifications",
    institution: "Udemy & Microsoft / LinkedIn Learning",
    link: "https://www.udemy.com/",
    dates: "2024 – 2026",
    badge: "Verified Credentials",
    description:
      "Completed deep technical coursework in Linear Algebra, Vector Calculus, Multivariate Statistics for Machine Learning, Generative AI for Productivity, and Object-Oriented System Foundations.",
  },
];
