export interface PersonalInfo {
  name: string;
  fullName: string;
  role: string;
  location: string;
  focusArea: string;
  shortBio: string;
  aboutParagraph: string;
  email: string;
  phone: string;
  githubUsername: string;
  githubUrl: string;
  linkedinUrl: string;
  twitterUrl: string;
  resumeUrl: string;
  greetings: string[];
}

export const PERSONAL_INFO: PersonalInfo = {
  name: "Divyesh Nilangekar",
  fullName: "Divyesh Deepratna Nilangekar",
  role: "Creative Developer & AI/ML Engineer",
  location: "Pune, Maharashtra, India",
  focusArea: "AI/ML Systems, Scalable Cloud APIs & Modern Interactive Web",
  shortBio:
    "I design and build intelligent web platforms and high-throughput backend systems. Driven by minimal aesthetics and rock-solid architecture, I transform complex engineering problems into clean, high-performance software.",
  aboutParagraph:
    "Based in Pune, India, I specialize in architecting intelligent full-stack applications, machine learning workflows, and responsive digital products. With an academic background in Artificial Intelligence and Machine Learning (graduating with 91.06% aggregate distinction), I combine backend engineering depth in Python and FastAPI with modern, fluid web frontends in Next.js and TypeScript. When I'm not coding, I explore generative AI models and research published systems.",
  email: "nilangekardivyesh@gmail.com",
  phone: "+91 7057311330",
  githubUsername: "Divyesh207",
  githubUrl: "https://github.com/Divyesh207",
  linkedinUrl: "https://www.linkedin.com/in/divyesh-nilangekar-bb68632b7/",
  twitterUrl: "https://x.com/Divyesh207",
  resumeUrl: "/docs/resume.pdf",
  greetings: [
    "Hello",
    "नमस्ते",
    "Bonjour",
    "Hola",
    "Hallo",
    "Ciao",
    "مرحبا",
    "こんにちは",
  ],
};
