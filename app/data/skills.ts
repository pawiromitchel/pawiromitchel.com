export interface SkillGroup {
  label: string;
  tone: "operate" | "build" | "neutral";
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Operate",
    tone: "operate",
    items: ["Kubernetes", "Docker", "Linux", "Prometheus", "CI/CD", "Cloudflare"],
  },
  {
    label: "Build",
    tone: "build",
    items: ["Go", "TypeScript", "Next.js · React", "Node.js", "SQL · Bash", "Python"],
  },
  {
    label: "Blockchain",
    tone: "neutral",
    items: ["Node operations", "RPC endpoints", "EVM chains (Ethereum, Base)", "Solana", "Bitcoin", "Solidity"],
  },
];

export const languages = [
  { name: "English", level: "Native / bilingual" },
  { name: "Dutch", level: "Native / bilingual" },
];
