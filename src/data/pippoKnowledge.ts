// Pippo Knowledge Base - Trained on Divyesh Nilangekar's verified background, skills, and projects
// Designed to provide varied, non-repeating, sequential thoughts.

export interface ThoughtResponse {
  category: string;
  sentences: string[];
}

export const PIPPO_KNOWLEDGE: Record<string, string[][]> = {
  greeting: [
    [
      "Beep boop! Hello there, human friend!",
      "I am Pippo, Divyesh's trusty robotic companion.",
      "I know everything about his code, his backend architectures, and his machine learning pipelines.",
      "Feel free to ask me anything you'd like to discover!",
    ],
    [
      "Greetings! Pippo systems are fully online and calibrated.",
      "Divyesh built this portfolio so you could explore his real-world engineering work.",
      "Ask me about his projects like CashBuddy or EduFlow, or his skills in Python and FastAPI!",
    ],
    [
      "Hey there! Pippo at your service!",
      "I'm here to give you an insider tour of Divyesh Nilangekar's technical journey.",
      "What shall we inspect first? His projects, his skills, or his leadership at UWACI?",
    ],
    [
      "Beep beep! Welcome to Divyesh's digital realm!",
      "My memory banks are loaded with his production codebases, GitHub streaks, and academic distinctions.",
      "Fire away with any questions!",
    ],
  ],

  about: [
    [
      "Divyesh Nilangekar is a high-performance Backend & AI/ML Engineer based in India.",
      "He focuses on crafting resilient, scalable microservices and intelligent machine learning models.",
      "He doesn't just write code—he engineers production architectures with strict type safety and domain modeling.",
    ],
    [
      "Divyesh is passionate about bridging cutting-edge AI pipelines with robust Python backend systems.",
      "From database schemas in PostgreSQL to TF-IDF text classification, he builds end-to-end solutions.",
      "He believes in clean code, modular design, and rigorous testing for zero-downtime reliability.",
    ],
    [
      "Meet Divyesh Nilangekar: an engineer with a proven track record of technical leadership.",
      "He has led development teams, enforced strict quality gates with Pytest and Ruff, and delivered impactful software.",
      "He is currently pursuing his B.Tech in Artificial Intelligence and Data Science.",
    ],
  ],

  skills_backend: [
    [
      "Divyesh's backend stack is anchored around Python, FastAPI, and PostgreSQL.",
      "He utilizes SQLAlchemy ORM with async database sessions for optimal throughput.",
      "Pydantic is his go-to for strict schema validation and data integrity.",
    ],
    [
      "On the server side, Divyesh specializes in RESTful API architecture and Domain-Driven Design (DDD).",
      "He is proficient in both FastAPI for lightning-fast microservices and Django for comprehensive full-stack workflows.",
      "He also manages Linux containerized environments with Docker for seamless deployments.",
    ],
    [
      "When it comes to backend engineering, Divyesh emphasizes performance and defensive architecture.",
      "Every endpoint is secured with JWT authentication, rate limiting, and robust error handlers.",
      "His codebases are clean, decoupled, and fully tested with Pytest and MyPy.",
    ],
  ],

  skills_ai_ml: [
    [
      "Divyesh's AI & ML toolkit includes Scikit-learn, Pandas, NumPy, and NLP processing.",
      "He builds end-to-end data pipelines from feature extraction to model evaluation.",
      "He has developed practical classification systems utilizing TF-IDF vectorization and Logistic Regression.",
    ],
    [
      "Machine learning for Divyesh isn't just theory—it's solving real human problems.",
      "He designed BijliAudit, an AI regulatory-tech platform auditing electricity bills with Gemini OCR and discrepancy detection.",
      "He is continuously exploring modern LLM orchestrations and generative AI workflows.",
    ],
    [
      "In the data science realm, Divyesh excels at exploratory data analysis and predictive analytics.",
      "He prepares structured datasets with Pandas and trains optimized models using Scikit-learn.",
      "All ML pipelines are packaged with clean REST API interfaces for easy consumption.",
    ],
  ],

  cashbuddy: [
    [
      "CashBuddy is an AI-powered personal finance management platform where Divyesh served as Team Lead!",
      "He engineered 8–9 core features including Magic Import AI for SMS transaction parsing, Smart Sweeps, budgeting, and savings goals.",
      "The system is powered by FastAPI, PostgreSQL, SQLAlchemy, React, TypeScript, OTP auth, and reCAPTCHA.",
    ],
    [
      "Divyesh co-authored a published peer-reviewed research paper on CashBuddy in IJPREMS (Vol. 06, Issue 03, March 2026, DOI: 10.58257/IJPREMS51878).",
      "The backend features normalized relational PostgreSQL schemas, async query optimization, and peer ledger balance tracking.",
      "You can inspect the source code on GitHub at github.com/Divyesh207/cashbuddy-backend or test the live app!",
    ],
  ],

  eduflow: [
    [
      "EduFlow is a unified academic management platform and multi-role LMS architected by Divyesh.",
      "Built with Python, FastAPI, PostgreSQL, SQLAlchemy, React, TypeScript, and Vite.",
      "It features 50+ structured endpoints, multi-role RBAC (Admin, Teacher, Student), automated group assignments, and submission evaluations.",
    ],
    [
      "In EduFlow, Divyesh normalized the PostgreSQL database architecture to ensure zero data anomalies.",
      "It provides institutional health scoring, student study ranking cards, and attendance rate analytics.",
      "You can explore the live demo at eduflow-frontend-rho.vercel.app or view his GitHub!",
    ],
  ],

  bijliaudit: [
    [
      "BijliAudit is Divyesh's flagship full-stack regulatory-tech and electricity bill forensics platform (bijli-audit-lime.vercel.app).",
      "Built with Next.js 14, TypeScript, Supabase, PostgreSQL, Tailwind CSS, and Google Gemini multimodal OCR.",
      "It analyzes billing periods, tariff slabs, sanctioned load, and generates automated CGRF complaint petitions under Section 42(5) of the Electricity Act, 2003.",
    ],
    [
      "Divyesh solved a critical dashboard API waterfall in BijliAudit caused by sequential authentication and DB queries.",
      "By engineering a local audit reader, he achieved a 91.5%+ latency reduction—slashing load times from 2,231 ms to 188 ms (an 11.8× performance boost!).",
      "Check out the live deployment at https://bijli-audit-lime.vercel.app/ or GitHub at github.com/Divyesh207/BijliAudit.git!",
    ],
  ],

  experience_uwaci: [
    [
      "Divyesh serves as Backend Team Lead (Pipe 3) at UWACI / MegaBliss Limited (Remote) since Aug 2026, promoted in Sept 2026!",
      "He coordinates and leads 3 backend developers, managing task planning, sprint assignments, code reviews, and architectural decisions.",
      "He has authored 12 PRs (6 merged) and audited 5 PRs, enforcing strict code quality with Pytest, Ruff, and MyPy.",
    ],
    [
      "At UWACI, Divyesh implemented 4 core backend components: Traffic domain foundations, Trip Intent services, Directed network topology, and a Provider-neutral cross-pipe location architecture.",
      "He applied Domain-Driven Design (DDD) and dependency-inversion principles to architect scalable REST APIs and relational PostgreSQL schemas.",
      "He also authors technical documentation and bridges backend architecture with frontend engineering and leadership.",
    ],
  ],

  education: [
    [
      "Divyesh is currently a Direct Second Year student pursuing his B.Tech in Artificial Intelligence & Data Science at D. Y. Patil Pratishthan's College of Engineering, Akurdi, Pune (Expected Graduation: 2029).",
      "He completed his Diploma in Artificial Intelligence & Machine Learning from D Y Patil Polytechnic College, Ambi, Pune (MSBTE) with 91.06% aggregate (First Class with Distinction, Graduated 2026).",
      "He also secured 1st Rank (Winner out of 50+ participants) in the Innovative Idea Presentation at Pimpri Chinchwad Polytechnic College (Feb 2025).",
    ],
    [
      "With a 91.06% Distinction in AI & ML, Divyesh mastered algorithms, database design, and systems engineering early on.",
      "In his B.Tech, he focuses on high-performance backend systems, distributed architectures, database optimization, and machine learning pipelines.",
    ],
  ],

  contact: [
    [
      "Divyesh is open to Backend, Full-Stack, and AI/ML Engineering roles and high-impact technical initiatives!",
      "You can email him directly at nilangekardivyesh@gmail.com or call +91 7057311330.",
      "His LinkedIn is linkedin.com/in/divyesh-nilangekar and GitHub is github.com/Divyesh207.",
    ],
    [
      "Looking to collaborate with Divyesh? He typically responds very quickly to technical inquiries.",
      "Drop him an email at nilangekardivyesh@gmail.com or connect via LinkedIn!",
    ],
  ],

  pippo_self: [
    [
      "That's me! I'm Pippo, the mechanical intelligence assistant running here!",
      "I was modeled to accompany visitors, think in visual thought clouds, and share Divyesh's story.",
      "My processors run on pure curiosity and a love for clean code!",
    ],
    [
      "Beep boop! I am Pippo, your digital guide!",
      "Notice how I think in floating thought clouds on the side of my head?",
      "Divyesh programmed me to be helpful, concise, and full of energy!",
    ],
  ],
};

// Memory of past response indices to prevent immediate repeats
const lastResponseIndex: Record<string, number> = {};

export function getPippoThought(query: string): { topic: string; sentences: string[] } {
  const normalized = query.toLowerCase().trim();

  let category = "greeting";

  if (
    normalized.includes("cashbuddy") ||
    normalized.includes("cash buddy") ||
    normalized.includes("finance") ||
    normalized.includes("budget")
  ) {
    category = "cashbuddy";
  } else if (
    normalized.includes("eduflow") ||
    normalized.includes("edu flow") ||
    normalized.includes("erp") ||
    normalized.includes("school") ||
    normalized.includes("college")
  ) {
    category = "eduflow";
  } else if (
    normalized.includes("bijli") ||
    normalized.includes("audit") ||
    normalized.includes("forensic") ||
    normalized.includes("bill") ||
    normalized.includes("electricity") ||
    normalized.includes("cgrf")
  ) {
    category = "bijliaudit";
  } else if (
    normalized.includes("uwaci") ||
    normalized.includes("experience") ||
    normalized.includes("lead") ||
    normalized.includes("job") ||
    normalized.includes("work")
  ) {
    category = "experience_uwaci";
  } else if (
    normalized.includes("skill") ||
    normalized.includes("stack") ||
    normalized.includes("tech") ||
    normalized.includes("fastapi") ||
    normalized.includes("postgres") ||
    normalized.includes("sql") ||
    normalized.includes("python")
  ) {
    // Alternate between backend and AI skills if generic
    category = normalized.includes("ai") || normalized.includes("ml") ? "skills_ai_ml" : "skills_backend";
  } else if (
    normalized.includes("study") ||
    normalized.includes("education") ||
    normalized.includes("degree") ||
    normalized.includes("diploma") ||
    normalized.includes("marks") ||
    normalized.includes("btech")
  ) {
    category = "education";
  } else if (
    normalized.includes("contact") ||
    normalized.includes("email") ||
    normalized.includes("hire") ||
    normalized.includes("github") ||
    normalized.includes("reach")
  ) {
    category = "contact";
  } else if (
    normalized.includes("who are you") ||
    normalized.includes("your name") ||
    normalized.includes("pippo") ||
    normalized.includes("pipoo") ||
    normalized.includes("robot") ||
    normalized.includes("bot")
  ) {
    category = "pippo_self";
  } else if (
    normalized.includes("who is divyesh") ||
    normalized.includes("about") ||
    normalized.includes("tell me about") ||
    normalized.includes("introduce")
  ) {
    category = "about";
  } else if (
    normalized.includes("hi") ||
    normalized.includes("hello") ||
    normalized.includes("hey") ||
    normalized.includes("sup")
  ) {
    category = "greeting";
  } else {
    // Synthesize a smart contextual response for custom questions
    return {
      topic: "general",
      sentences: [
        `Beep boop! Regarding "${query.slice(0, 32)}..."`,
        "Divyesh is a versatile Python Backend & AI/ML engineer who loves tackling difficult technical problems.",
        "His core proficiencies span FastAPI, PostgreSQL, Scikit-learn, and scalable architecture.",
        "Check out his projects below or connect directly at divyeshnilangekar207@gmail.com!",
      ],
    };
  }

  const variations = PIPPO_KNOWLEDGE[category] || PIPPO_KNOWLEDGE.greeting;
  const lastIdx = lastResponseIndex[category] ?? -1;

  // Pick an index different from lastIdx to avoid repeating
  let newIdx = Math.floor(Math.random() * variations.length);
  if (variations.length > 1 && newIdx === lastIdx) {
    newIdx = (newIdx + 1) % variations.length;
  }
  lastResponseIndex[category] = newIdx;

  return {
    topic: category,
    sentences: variations[newIdx],
  };
}
