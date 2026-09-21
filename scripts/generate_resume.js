const { PDFDocument, rgb, StandardFonts } = require('pdf-lib');
const fs = require('fs');
const path = require('path');

async function createResume() {
  const pristinePath = path.join(__dirname, 'original_resume.pdf');
  if (fs.existsSync(pristinePath)) {
    const dest1 = path.join(__dirname, '..', 'public', 'docs', 'resume.pdf');
    const dest2 = path.join(__dirname, '..', 'public', 'documents', 'resume.pdf');
    fs.copyFileSync(pristinePath, dest1);
    fs.copyFileSync(pristinePath, dest2);
    console.log('Synchronized exact original resume to public/docs and public/documents');
    return;
  }
  const pdfDoc = await PDFDocument.create();
  // Standard Letter: 612 x 792 pt
  const page = pdfDoc.addPage([612, 792]);
  const { width, height } = page.getSize();

  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontItalic = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);
  const fontBoldItalic = await pdfDoc.embedFont(StandardFonts.HelveticaBoldOblique);

  const left = 38;
  const right = width - 38;
  const contentWidth = right - left;
  let y = height - 34;

  const black = rgb(0, 0, 0);
  const darkGray = rgb(0.12, 0.14, 0.17);
  const linkBlue = rgb(0.11, 0.31, 0.85);

  // Helper: Draw Section Header with Underline
  function drawSection(title) {
    y -= 7;
    page.drawText(title.toUpperCase(), {
      x: left,
      y: y,
      size: 9.6,
      font: fontBold,
      color: black,
    });
    y -= 3;
    page.drawLine({
      start: { x: left, y: y },
      end: { x: right, y: y },
      thickness: 1.0,
      color: black,
    });
    y -= 7;
  }

  // Helper: Wrap text into lines given maxWidth
  function wrapText(text, font, size, maxWidth) {
    const words = text.split(' ');
    const lines = [];
    let currentLine = '';

    for (const word of words) {
      const testLine = currentLine ? currentLine + ' ' + word : word;
      const testWidth = font.widthOfTextAtSize(testLine, size);
      if (testWidth <= maxWidth) {
        currentLine = testLine;
      } else {
        if (currentLine) lines.push(currentLine);
        currentLine = word;
      }
    }
    if (currentLine) lines.push(currentLine);
    return lines;
  }

  // Helper: Draw Bullet Point with text wrapping
  function drawBullet(text, boldPrefix = '', indent = 12) {
    const bulletX = left + 2;
    page.drawText('•', {
      x: bulletX,
      y: y,
      size: 9,
      font: fontBold,
      color: black,
    });

    const textX = left + indent;
    const textWidth = contentWidth - indent;

    let fullText = boldPrefix ? boldPrefix + ' ' + text : text;
    // If bold prefix exists, measure it
    if (boldPrefix) {
      const prefixWidth = fontBold.widthOfTextAtSize(boldPrefix, 8.4);
      page.drawText(boldPrefix, {
        x: textX,
        y: y,
        size: 8.4,
        font: fontBold,
        color: black,
      });

      // Wrap remaining words after prefix
      const lines = wrapText(text, fontRegular, 8.4, textWidth);
      if (lines.length > 0) {
        // First line after bold prefix if it fits, else on new line
        // Simple approach: wrap entire string with prefix accounted for
        const firstLineWords = [];
        const words = text.split(' ');
        let curX = textX + prefixWidth + 3;
        let lineIdx = 0;

        let curLine = '';
        for (const w of words) {
          const test = curLine ? curLine + ' ' + w : w;
          const wWidth = fontRegular.widthOfTextAtSize(test, 8.4);
          if (curX + wWidth < right) {
            curLine = test;
          } else {
            if (lineIdx === 0) {
              page.drawText(curLine, { x: curX, y: y, size: 8.4, font: fontRegular, color: darkGray });
              y -= 10.5;
            } else {
              page.drawText(curLine, { x: textX, y: y, size: 8.4, font: fontRegular, color: darkGray });
              y -= 10.5;
            }
            lineIdx++;
            curLine = w;
            curX = textX;
          }
        }
        if (curLine) {
          page.drawText(curLine, { x: lineIdx === 0 ? curX : textX, y: y, size: 8.4, font: fontRegular, color: darkGray });
          y -= 10.5;
        }
      } else {
        y -= 10.5;
      }
    } else {
      const lines = wrapText(text, fontRegular, 8.4, textWidth);
      for (const line of lines) {
        page.drawText(line, {
          x: textX,
          y: y,
          size: 8.4,
          font: fontRegular,
          color: darkGray,
        });
        y -= 10.5;
      }
    }
  }

  // HEADER: NAME
  const nameText = 'DIVYESH NILANGEKAR';
  const nameWidth = fontBold.widthOfTextAtSize(nameText, 17);
  page.drawText(nameText, {
    x: (width - nameWidth) / 2,
    y: y,
    size: 17,
    font: fontBold,
    color: black,
  });
  y -= 14;

  // HEADER: CONTACTS
  const contactText = 'nilangekardivyesh@gmail.com | +91 7057311330 | linkedin.com/in/divyesh-nilangekar | github.com/Divyesh207';
  const contactWidth = fontRegular.widthOfTextAtSize(contactText, 8.3);
  page.drawText(contactText, {
    x: (width - contactWidth) / 2,
    y: y,
    size: 8.3,
    font: fontRegular,
    color: rgb(0.2, 0.25, 0.3),
  });
  y -= 8;

  // 1. PROFESSIONAL SUMMARY
  drawSection('Professional Summary');
  const summaryText = 'Backend & Full-Stack Engineering student and Backend Team Lead with proven experience architecting modular Python/FastAPI services, REST APIs, and relational PostgreSQL databases. Skilled in driving Git-based code reviews, system design, and performance optimizations. Demonstrated track record of leading development teams, shipping production-grade backend components, and cutting API latency by over 91.5%.';
  const summaryLines = wrapText(summaryText, fontRegular, 8.4, contentWidth);
  for (const line of summaryLines) {
    page.drawText(line, { x: left, y: y, size: 8.4, font: fontRegular, color: darkGray });
    y -= 11;
  }

  // 2. TECHNICAL SKILLS
  drawSection('Technical Skills');
  drawBullet('Python, SQL, JavaScript, TypeScript', 'Languages:');
  drawBullet('FastAPI, Flask, REST API Development, Pydantic, SQLAlchemy, JWT Authentication, Async/asyncpg', 'Backend & APIs:');
  drawBullet('React, Next.js, Vite, Tailwind CSS', 'Frontend:');
  drawBullet('PostgreSQL, Relational Database Design, Domain-Driven Design (DDD), Modular Architecture', 'Databases & Architecture:');
  drawBullet('Data Structures & Algorithms, Git/GitHub, Code Review, Pytest, Ruff, MyPy, Render, Vercel, Supabase', 'Software Engineering & Tools:');

  // 3. WORK EXPERIENCE
  drawSection('Work Experience');
  // Role header
  page.drawText('UWACI / MegaBliss Limited — Remote', {
    x: left,
    y: y,
    size: 9.3,
    font: fontBold,
    color: black,
  });
  y -= 11.5;

  page.drawText('Backend Team Lead (Pipe 3)', {
    x: left,
    y: y,
    size: 8.7,
    font: fontItalic,
    color: black,
  });
  const dateText1 = 'Aug 2026 – Present (Promoted Sept 2026)';
  const dateWidth1 = fontBold.widthOfTextAtSize(dateText1, 8.3);
  page.drawText(dateText1, {
    x: right - dateWidth1,
    y: y,
    size: 8.3,
    font: fontBold,
    color: rgb(0.2, 0.2, 0.2),
  });
  y -= 11;

  drawBullet('Coordinate and lead 3 backend developers, managing technical task planning, task assignments, code reviews, PR merges, and architectural decisions for Pipe 3.');
  drawBullet('Authored 12 PRs (6 merged) and reviewed 5 PRs across the backend codebase while enforcing strict code quality standards using Pytest, Ruff, and MyPy.');
  drawBullet('Implemented 4 core backend components: Traffic domain foundations, Trip Intent services, Directed network topology, and a Provider-neutral cross-pipe location architecture using Python, FastAPI, Pydantic, and SQLAlchemy.');
  drawBullet('Applied Domain-Driven Design and dependency-inversion principles to architect scalable REST APIs and relational PostgreSQL schemas.');
  drawBullet('Authored technical documentation, onboarded developers, and collaborated closely with frontend engineering and leadership to translate requirements into robust technical solutions.');

  // 4. PROJECTS
  drawSection('Projects');
  
  // Project 1: BijliAudit
  page.drawText('BijliAudit — Electricity Billing Audit Platform', {
    x: left,
    y: y,
    size: 9.1,
    font: fontBold,
    color: black,
  });
  const p1Url = '| bijli-audit-lime.vercel.app';
  page.drawText(p1Url, {
    x: left + fontBold.widthOfTextAtSize('BijliAudit — Electricity Billing Audit Platform ', 9.1),
    y: y,
    size: 8.8,
    font: fontRegular,
    color: linkBlue,
  });
  y -= 11;

  page.drawText('Next.js, TypeScript, React, Supabase, PostgreSQL, Gemini OCR, Tailwind CSS', {
    x: left,
    y: y,
    size: 8.2,
    font: fontItalic,
    color: rgb(0.3, 0.35, 0.4),
  });
  y -= 10.5;

  drawBullet('Built a full-stack forensic electricity-billing audit platform for Indian consumers, featuring OCR-based bill analysis, tariff slab calculations, and automated CGRF grievance generation.');
  drawBullet('Identified and resolved a critical dashboard API network waterfall caused by sequential authentication and database calls; replaced it with a local audit reader to achieve a 91.5%+ latency reduction (2,231 ms to 188 ms / 11.8× performance improvement).');

  // Project 2: CashBuddy
  page.drawText('CashBuddy — Full-Stack Personal Finance Platform', {
    x: left,
    y: y,
    size: 9.1,
    font: fontBold,
    color: black,
  });
  y -= 11;

  page.drawText('Python, FastAPI, React, TypeScript, PostgreSQL, SQLAlchemy, JWT', {
    x: left,
    y: y,
    size: 8.2,
    font: fontItalic,
    color: rgb(0.3, 0.35, 0.4),
  });
  y -= 10.5;

  drawBullet('Served as Team Lead for an AI-powered personal finance management platform; engineered 8–9 core features including expense tracking, budgeting, savings goals, Smart Sweeps, Magic Import, transaction categorization, OTP authentication, and reCAPTCHA.');
  drawBullet('Designed relational PostgreSQL database schemas and RESTful endpoints; co-authored research paper on the system accepted for publication in IJPREMS (Vol. 06, Issue 03, March 2026).');

  // Project 3: EduFlow
  page.drawText('EduFlow — Academic Management Platform', {
    x: left,
    y: y,
    size: 9.1,
    font: fontBold,
    color: black,
  });
  y -= 11;

  page.drawText('Python, FastAPI, PostgreSQL, SQLAlchemy, React, TypeScript, Vite', {
    x: left,
    y: y,
    size: 8.2,
    font: fontItalic,
    color: rgb(0.3, 0.35, 0.4),
  });
  y -= 10.5;

  drawBullet('Built backend REST APIs and normalized PostgreSQL database architecture for a multi-role LMS supporting 50+ structured endpoints, role-based access control (Admin, Teacher, Student), automated group assignments, and submission evaluations.');

  // 5. EDUCATION
  drawSection('Education');
  
  // Degree 1
  page.drawText("B.Tech in Artificial Intelligence & Data Science | D. Y. Patil Pratishthan's College of Engineering, Akurdi, Pune", {
    x: left,
    y: y,
    size: 8.8,
    font: fontBold,
    color: black,
  });
  y -= 10.5;

  page.drawText('Direct Second Year Student (Currently 2nd Year)', {
    x: left,
    y: y,
    size: 8.3,
    font: fontRegular,
    color: darkGray,
  });
  const gradText1 = '| Expected Graduation: 2029';
  page.drawText(gradText1, {
    x: left + fontRegular.widthOfTextAtSize('Direct Second Year Student (Currently 2nd Year) ', 8.3),
    y: y,
    size: 8.3,
    font: fontRegular,
    color: darkGray,
  });
  y -= 12;

  // Degree 2
  page.drawText('Diploma in Artificial Intelligence & Machine Learning | D Y Patil Polytechnic College, Ambi, Pune (MSBTE)', {
    x: left,
    y: y,
    size: 8.8,
    font: fontBold,
    color: black,
  });
  y -= 10.5;

  page.drawText('Score: 91.06% (First Class with Distinction) | Graduated: 2026', {
    x: left,
    y: y,
    size: 8.3,
    font: fontRegular,
    color: darkGray,
  });
  y -= 8;

  // 6. RESEARCH PUBLICATION & ACHIEVEMENTS
  drawSection('Research Publication & Achievements');
  drawBullet('CashBuddy: An AI-Driven Personal Finance Management System — IJPREMS, Vol. 06, Issue 03, March 2026 (DOI: 10.58257/IJPREMS51878).', 'Publication:');
  drawBullet('1st Rank (Winner) out of 50+ participants — Innovative Idea Presentation, Pimpri Chinchwad Polytechnic College (Feb 2025).', 'Achievement:');

  const pdfBytes = await pdfDoc.save();
  
  const destDir1 = path.join(__dirname, '..', 'public', 'docs');
  const destDir2 = path.join(__dirname, '..', 'public', 'documents');
  if (!fs.existsSync(destDir1)) fs.mkdirSync(destDir1, { recursive: true });
  if (!fs.existsSync(destDir2)) fs.mkdirSync(destDir2, { recursive: true });

  fs.writeFileSync(path.join(destDir1, 'resume.pdf'), pdfBytes);
  fs.writeFileSync(path.join(destDir2, 'resume.pdf'), pdfBytes);
  console.log('Successfully generated resume.pdf at both public/docs and public/documents, size: ' + pdfBytes.length + ' bytes');
}

createResume().catch(console.error);
