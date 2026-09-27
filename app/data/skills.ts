export interface SkillGroup {
  label: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Infrastructure",
    items: ["Kubernetes", "Docker", "Linux", "Prometheus", "CI/CD", "Cloudflare"],
  },
  {
    label: "Languages",
    items: ["Go", "TypeScript", "JavaScript", "SQL", "Bash", "Python"],
  },
  {
    label: "Web",
    items: ["Next.js", "React", "Node.js", "Angular", "Tailwind CSS"],
  },
  {
    label: "Blockchain",
    items: ["Node operations", "RPC", "Ethereum", "Solidity"],
  },
];

export const languages = [
  { name: "English", level: "Native / bilingual" },
  { name: "Dutch", level: "Native / bilingual" },
];
