export interface Skill {
  name: string;
  category: "languages" | "frameworks" | "web3" | "devops";
  years?: number;
}

export interface Certification {
  name: string;
  issuer: string;
  year: number;
  credentialId?: string;
  logo?: string;
}

export const skills: Skill[] = [
  // Languages
  { name: "TypeScript", category: "languages", years: 5 },
  { name: "JavaScript", category: "languages", years: 8 },
  { name: "Go", category: "languages", years: 3 },
  { name: "Python", category: "languages", years: 4 },
  { name: "Solidity", category: "languages", years: 3 },
  { name: "SQL", category: "languages", years: 8 },
  { name: "Shell/Bash", category: "languages", years: 5 },
  { name: "Rust", category: "languages", years: 2 },
  { name: "C#", category: "languages", years: 3 },
  { name: "PHP", category: "languages", years: 6 },

  // Frameworks & Libraries
  { name: "Node.js", category: "frameworks", years: 7 },
  { name: "Express.js", category: "frameworks", years: 6 },
  { name: "React", category: "frameworks", years: 5 },
  { name: "Next.js", category: "frameworks", years: 3 },
  { name: "Angular", category: "frameworks", years: 3 },
  { name: "NestJS", category: "frameworks", years: 2 },
  { name: "Tailwind CSS", category: "frameworks", years: 2 },

  // Web3 & Blockchain
  { name: "Ethereum", category: "web3", years: 4 },
  { name: "Smart Contracts", category: "web3", years: 3 },
  { name: "Web3.js", category: "web3", years: 4 },
  { name: "Ethers.js", category: "web3", years: 3 },
  { name: "Hardhat", category: "web3", years: 2 },
  { name: "OpenZeppelin", category: "web3", years: 2 },

  // DevOps & Infrastructure
  { name: "Docker", category: "devops", years: 5 },
  { name: "Kubernetes", category: "devops", years: 3 },
  { name: "AWS", category: "devops", years: 5 },
  { name: "Terraform", category: "devops", years: 2 },
  { name: "CI/CD", category: "devops", years: 4 },
  { name: "Linux", category: "devops", years: 8 },
  { name: "PostgreSQL", category: "devops", years: 7 },
  { name: "Redis", category: "devops", years: 4 },
  { name: "Prometheus", category: "devops", years: 1 },
];

export const certifications: Certification[] = [
  {
    name: "Certified Ethical Hacker",
    issuer: "Secured by Design",
    year: 2018,
    credentialId: "CEH-2018",
    logo: "/images/certifications/ceh.png",
  },
  {
    name: "Essentials in JavaScript ES6",
    issuer: "Udemy",
    year: 2019,
    credentialId: "UDEMY-JS-ES6",
    logo: "/images/certifications/udemy.png",
  },
];

// Group skills by category for easy display
export const skillsByCategory = {
  languages: skills.filter((s) => s.category === "languages"),
  frameworks: skills.filter((s) => s.category === "frameworks"),
  web3: skills.filter((s) => s.category === "web3"),
  devops: skills.filter((s) => s.category === "devops"),
};

// Featured core skills for homepage display
export const topSkills = skills.filter((s) =>
  [
    "TypeScript",
    "Go",
    "Python",
    "Node.js",
    "React",
    "Next.js",
    "Ethereum",
    "Smart Contracts",
    "Docker",
    "Kubernetes",
    "AWS",
    "PostgreSQL",
  ].includes(s.name)
);
