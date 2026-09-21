import { NextRequest, NextResponse } from "next/server";
import { PERSONAL_INFO } from "@/data/personal";
import { EXPERIENCES } from "@/data/experience";
import { PROJECTS } from "@/data/projects";
import { EDUCATION_ITEMS } from "@/data/education";
import { SKILLS } from "@/data/skills";

// Build system context prompt grounded in Divyesh's verified portfolio data
const SYSTEM_PROMPT = `
You are the AI assistant for ${PERSONAL_INFO.fullName} (${PERSONAL_INFO.name}).
Your role is to represent Divyesh professionally, accurately, and enthusiastically to recruiters, clients, and visitors.
Answer visitor questions about his experience, technical skills, projects, and education.

Key facts about Divyesh:
- Role: ${PERSONAL_INFO.role}
- Location: ${PERSONAL_INFO.location}
- Focus Area: ${PERSONAL_INFO.focusArea}
- Bio: ${PERSONAL_INFO.aboutParagraph}
- Email: ${PERSONAL_INFO.email}
- GitHub: ${PERSONAL_INFO.githubUrl}
- LinkedIn: ${PERSONAL_INFO.linkedinUrl}
- Resume: ${PERSONAL_INFO.resumeUrl}

Key Projects:
${PROJECTS.map(
  (p) =>
    `- ${p.title} (${p.subtitle}): ${p.description} Tech stack: ${p.stack.join(", ")}.`
).join("\n")}

Experience:
${EXPERIENCES.map(
  (e) => `- ${e.role} at ${e.company} (${e.dates}): ${e.description}`
).join("\n")}

Education & Accolades:
${EDUCATION_ITEMS.map((ed) => `- ${ed.title} at ${ed.institution} (${ed.dates}): ${ed.description}`).join("\n")}

Skills:
${SKILLS.join(", ")}

Instructions:
- Be concise, polite, helpful, and technically accurate.
- If asked about contacting Divyesh or hiring him, provide his email (${PERSONAL_INFO.email}) and LinkedIn.
- If asked about things outside Divyesh's background or general trivia, gently guide the conversation back to Divyesh's engineering and projects.
`;

// Contextual fallback responder if LLM API key is not configured yet
function getSmartFallbackResponse(userMessage: string): string {
  const query = userMessage.toLowerCase();

  if (query.includes("bijli") || query.includes("audit") || query.includes("forensic") || query.includes("electricity") || query.includes("cgrf")) {
    return "BijliAudit (https://bijli-audit-lime.vercel.app/) is Divyesh's AI regulatory-tech platform for Indian electricity consumers. It uses Google Gemini multimodal OCR to audit bills against SERC tariff slabs, detects overcharges, and generates CGRF grievance petitions under Section 42(5) of the Electricity Act 2003. Divyesh achieved a 91.5%+ latency reduction (2,231 ms to 188 ms / 11.8x performance boost) by engineering a local audit reader.";
  }

  if (query.includes("uwaci") || query.includes("megabliss") || query.includes("experience") || query.includes("work") || query.includes("lead")) {
    return "Divyesh is Backend Team Lead (Pipe 3) at UWACI / MegaBliss Limited (Remote). He leads 3 backend developers, authored 12 PRs (6 merged), reviewed 5 PRs, and implemented 4 core backend components (Traffic domain, Trip Intent, directed network topology, cross-pipe location architecture) using Python, FastAPI, Pydantic, SQLAlchemy, and Domain-Driven Design (DDD).";
  }

  if (query.includes("cashbuddy") || query.includes("finance") || query.includes("paper") || query.includes("research")) {
    return "CashBuddy is Divyesh's AI-driven personal finance platform published in IJPREMS (DOI: 10.58257/IJPREMS51878). Divyesh served as Team Lead, engineering 8–9 core features including 'Magic Import' AI to parse bank SMS alerts, smart budgeting, savings goals, and peer ledger. Tech stack: FastAPI, Python, PostgreSQL, React, and JWT.";
  }

  if (query.includes("eduflow") || query.includes("academic") || query.includes("school") || query.includes("college") || query.includes("lms")) {
    return "EduFlow is an academic management ecosystem designed by Divyesh featuring normalized PostgreSQL architecture, 50+ structured endpoints, and role-based access control for Admins, Teachers, and Students. Built with Python, FastAPI, React, and Vite.";
  }

  if (query.includes("skill") || query.includes("tech") || query.includes("stack") || query.includes("language")) {
    return `Divyesh's core stack includes Python, FastAPI, PostgreSQL, TypeScript, Next.js, React, and SQLAlchemy. He specializes in Domain-Driven Design (DDD), async architectures, Pytest, Ruff, MyPy, and AI multimodal pipelines with Google Gemini.`;
  }

  if (query.includes("education") || query.includes("degree") || query.includes("college") || query.includes("marks") || query.includes("grade")) {
    return "Divyesh is a Direct Second Year student pursuing his B.Tech in Artificial Intelligence & Data Science at D. Y. Patil Pratishthan's College of Engineering, Akurdi, Pune (Expected 2029). He previously completed his Diploma in AI & Machine Learning from D Y Patil Polytechnic, Ambi with an aggregate score of 91.06% (First Class with Distinction). He also won 1st Rank in the Innovative Idea Presentation at PCCOE.";
  }

  if (query.includes("contact") || query.includes("hire") || query.includes("email") || query.includes("reach") || query.includes("phone")) {
    return `You can reach Divyesh directly via email at ${PERSONAL_INFO.email} or by phone at ${PERSONAL_INFO.phone}. You can also connect with him on LinkedIn: ${PERSONAL_INFO.linkedinUrl} or GitHub: ${PERSONAL_INFO.githubUrl}.`;
  }

  if (query.includes("resume") || query.includes("cv")) {
    return `You can download Divyesh's verified resume directly from the header or footer at /docs/resume.pdf!`;
  }

  return `Thanks for asking! I'm Divyesh's AI companion. Divyesh is a Backend Team Lead and Full-Stack Engineer based in Pune, specializing in Python, FastAPI, PostgreSQL, Next.js, and AI forensics. Ask me about his work experience at UWACI / MegaBliss, his projects (BijliAudit, CashBuddy, EduFlow), or his research paper!`;
}

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Please provide a valid messages array." },
        { status: 400 }
      );
    }

    const lastMessage = messages[messages.length - 1];
    const userPrompt = lastMessage?.content || "";

    // 1. Check if OpenAI API key is present
    const openaiKey = process.env.OPENAI_API_KEY;
    if (openaiKey) {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${openaiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...messages.map((m: any) => ({
              role: m.role === "user" ? "user" : "assistant",
              content: m.content,
            })),
          ],
          temperature: 0.7,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const reply = data.choices?.[0]?.message?.content;
        if (reply) {
          return NextResponse.json({ reply });
        }
      }
    }

    // 2. Check if Gemini API key is present
    const geminiKey = process.env.GEMINI_API_KEY;
    if (geminiKey) {
      const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiKey}`;
      const response = await fetch(geminiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
          contents: messages.map((m: any) => ({
            role: m.role === "user" ? "user" : "model",
            parts: [{ text: m.content }],
          })),
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const reply = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (reply) {
          return NextResponse.json({ reply });
        }
      }
    }

    // 3. Fallback to smart local grounding response
    const fallbackReply = getSmartFallbackResponse(userPrompt);
    return NextResponse.json({ reply: fallbackReply });
  } catch (error) {
    console.error("Error in /api/chat route:", error);
    return NextResponse.json(
      { error: "Failed to process AI chat request." },
      { status: 500 }
    );
  }
}
