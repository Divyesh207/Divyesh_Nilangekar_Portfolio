import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-kanit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Divyesh Nilangekar -- Backend & AI/ML Engineer",
  description:
    "Portfolio of Divyesh Nilangekar — Python Backend & AI/ML Engineer, Tech & Team Lead at UWACI. Creator of CashBuddy and EduFlow.",
  keywords: [
    "Divyesh Nilangekar",
    "Backend Engineer",
    "AI/ML Engineer",
    "FastAPI",
    "Python",
    "PostgreSQL",
    "UWACI",
    "CashBuddy",
    "EduFlow",
    "Portfolio",
  ],
  authors: [{ name: "Divyesh Nilangekar", url: "https://github.com/Divyesh207" }],
  openGraph: {
    title: "Divyesh Nilangekar -- Backend & AI/ML Engineer",
    description:
      "Python Backend and AI/ML Engineer with experience in FastAPI, PostgreSQL, Domain-Driven Design, and Machine Learning.",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${kanit.variable} scroll-smooth`}>
      <body className="bg-[#0C0C0C] text-[#D7E2EA] font-sans antialiased selection:bg-[#D7E2EA]/30 selection:text-white overflow-x-clip">
        {children}
      </body>
    </html>
  );
}
