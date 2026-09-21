import { CinematicSceneConfig } from '../types';

export const CINEMATIC_SCENES: CinematicSceneConfig[] = [
  {
    id: 1,
    folderName: "video-01",
    frameCount: 300,
    title: "Introduction",
    startProgress: 0.0,
    endProgress: 0.1428,
    overlays: [
      {
        start: 0.05,
        end: 0.45,
        title: "DIVYESH NILANGEKAR",
        tagline: "AI/ML ENGINEER · BUILDER · PRODUCT THINKER"
      },
      {
        start: 0.50,
        end: 0.85,
        title: "I TURN IDEAS INTO PRODUCTS.",
        tagline: ""
      }
    ]
  },
  {
    id: 2,
    folderName: "video-02",
    frameCount: 300,
    title: "Engineering",
    startProgress: 0.1428,
    endProgress: 0.2857,
    overlays: [
      {
        start: 0.25,
        end: 0.80,
        title: "FROM PROBLEM → CODE → PRODUCT",
        tagline: ""
      }
    ]
  },
  {
    id: 3,
    folderName: "video-03",
    frameCount: 300,
    title: "CashBuddy",
    startProgress: 0.2857,
    endProgress: 0.4285,
    overlays: [
      {
        start: 0.35,
        end: 0.95,
        title: "CASHBUDDY",
        tagline: "AI-POWERED PERSONAL FINANCE",
        chips: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Python"],
        action: {
          label: "EXPLORE PROJECT →",
          targetSection: "cashbuddy"
        }
      }
    ]
  },
  {
    id: 4,
    folderName: "video-04",
    frameCount: 300,
    title: "EduFlow",
    startProgress: 0.4285,
    endProgress: 0.5714,
    overlays: [
      {
        start: 0.35,
        end: 0.95,
        title: "EDUFLOW",
        tagline: "ACADEMIC MANAGEMENT PLATFORM",
        chips: ["React", "Python", "FastAPI", "PostgreSQL"],
        action: {
          label: "EXPLORE PROJECT →",
          targetSection: "eduflow"
        }
      }
    ]
  },
  {
    id: 5,
    folderName: "video-05",
    frameCount: 300,
    title: "Under the Surface",
    startProgress: 0.5714,
    endProgress: 0.7142,
    overlays: [
      {
        start: 0.15,
        end: 0.90,
        title: "THE INTERFACE IS ONLY THE SURFACE.",
        staggerItems: ["FRONTEND", "API", "BACKEND", "DATABASE"]
      }
    ]
  },
  {
    id: 6,
    folderName: "video-06",
    frameCount: 300,
    title: "Technical Breadth",
    startProgress: 0.7142,
    endProgress: 0.8571,
    overlays: [
      {
        start: 0.15,
        end: 0.70,
        title: "TECHNICAL ARCHITECTURE",
        staggerItems: [
          "PYTHON",
          "FASTAPI · REST APIs",
          "POSTGRESQL · SQL",
          "DATA · MACHINE LEARNING",
          "REACT · FRONTEND"
        ]
      },
      {
        start: 0.72,
        end: 0.95,
        title: "FROM IDEA TO DEPLOYED PRODUCT.",
        tagline: ""
      }
    ]
  },
  {
    id: 7,
    folderName: "video-07",
    frameCount: 300,
    title: "The Builder",
    startProgress: 0.8571,
    endProgress: 1.0,
    overlays: [
      {
        start: 0.05,
        end: 0.35,
        title: "THE PERSON BEHIND THE SYSTEM."
      },
      {
        start: 0.40,
        end: 0.70,
        title: "DIVYESH NILANGEKAR",
        tagline: "AI/ML ENGINEER · BUILDER · PRODUCT THINKER"
      },
      {
        start: 0.75,
        end: 0.98,
        title: "I BUILD THINGS WORTH EXPLORING.",
        action: {
          label: "EXPLORE MY WORK →",
          targetSection: "projects"
        }
      }
    ]
  }
];
