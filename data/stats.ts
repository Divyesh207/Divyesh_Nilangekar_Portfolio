// ============================================================================
// STATS COUNTERS DATA
// ============================================================================
// 3 animated counters that count up when scrolled into view.

export interface StatItem {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  description: string;
}

export const STATS: StatItem[] = [
  {
    value: 12,
    prefix: "",
    suffix: "+",
    label: "Projects & Prototypes",
    description: "Production web apps, research implementations & tools",
  },
  {
    value: 91,
    prefix: "",
    suffix: "%",
    label: "Diploma Aggregate Distinction",
    description: "MSBTE First Class with Distinction (1548/1700 marks)",
  },
  {
    value: 1400,
    prefix: "",
    suffix: "+",
    label: "Git Commits & Deployments",
    description: "Active open source contributions and production pushes",
  },
];
