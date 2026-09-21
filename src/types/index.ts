export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  category: 'Featured' | 'Supporting' | 'Prototype';
  description: string;
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  screenshots: {
    url: string;
    caption: string;
    isCover?: boolean;
  }[];
  liveDemoUrl?: string;
  githubUrl?: string;
  paperUrl?: string;
  paperDoi?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  iconName?: string;
}

export interface Achievement {
  id: string;
  title: string;
  subtitle: string;
  type: 'competitive' | 'academic' | 'publication';
  date: string;
  badge: string;
  metrics?: string;
  description: string;
  imagePath: string;
  viewActionText: string;
  organizer?: string;
  paperDetails?: {
    journal: string;
    volume: string;
    doi: string;
    paperId: string;
  };
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  imagePath: string;
  credentialUrl?: string;
  category: string;
  skills: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  aggregate?: string;
  honors?: string;
  status: 'Completed' | 'Pursuing';
  details: string[];
}

export interface CinematicSceneConfig {
  id: number;
  folderName: string;
  frameCount: number;
  title: string;
  startProgress: number; // 0.0 to 1.0
  endProgress: number;
  overlays: {
    start: number; // local scene progress (0.0 to 1.0)
    end: number;
    title?: string;
    tagline?: string;
    chips?: string[];
    action?: {
      label: string;
      targetSection: string;
    };
    staggerItems?: string[];
  }[];
}
