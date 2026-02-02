export interface Skill {
  name: string;
  category: "languages" | "frameworks" | "web3" | "devops" | "tools";
  proficiency: 1 | 2 | 3 | 4 | 5;
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
  {
    name: "TypeScript",
    category: "languages",
    proficiency: 5,
    years: 5,
  },
  {
    name: "JavaScript",
    category: "languages",
    proficiency: 5,
    years: 8,
  },
  {
    name: "Go",
    category: "languages",
    proficiency: 5,
    years: 3,
  },
  {
    name: "Python",
    category: "languages",
    proficiency: 4,
    years: 4,
  },
  {
    name: "Solidity",
    category: "languages",
    proficiency: 4,
    years: 3,
  },
  {
    name: "SQL",
    category: "languages",
    proficiency: 5,
    years: 8,
  },
  {
    name: "Rust",
    category: "languages",
    proficiency: 3,
    years: 2,
  },
  {
    name: "Shell/Bash",
    category: "languages",
    proficiency: 4,
    years: 5,
  },

  // Frameworks & Libraries
  {
    name: "Node.js",
    category: "frameworks",
    proficiency: 5,
    years: 7,
  },
  {
    name: "Express.js",
    category: "frameworks",
    proficiency: 5,
    years: 6,
  },
  {
    name: "React",
    category: "frameworks",
    proficiency: 4,
    years: 5,
  },
  {
    name: "Next.js",
    category: "frameworks",
    proficiency: 4,
    years: 3,
  },
  {
    name: "Angular",
    category: "frameworks",
    proficiency: 3,
    years: 3,
  },
  {
    name: "NestJS",
    category: "frameworks",
    proficiency: 4,
    years: 2,
  },
  {
    name: "Tailwind CSS",
    category: "frameworks",
    proficiency: 4,
    years: 2,
  },

  // Web3 & Blockchain
  {
    name: "Ethereum",
    category: "web3",
    proficiency: 5,
    years: 4,
  },
  {
    name: "Smart Contracts",
    category: "web3",
    proficiency: 4,
    years: 3,
  },
  {
    name: "Web3.js",
    category: "web3",
    proficiency: 5,
    years: 4,
  },
  {
    name: "Ethers.js",
    category: "web3",
    proficiency: 5,
    years: 3,
  },
  {
    name: "Hardhat",
    category: "web3",
    proficiency: 4,
    years: 2,
  },
  {
    name: "OpenZeppelin",
    category: "web3",
    proficiency: 4,
    years: 2,
  },
  {
    name: "DeFi Protocols",
    category: "web3",
    proficiency: 4,
    years: 2,
  },
  {
    name: "NFT Standards",
    category: "web3",
    proficiency: 4,
    years: 2,
  },

  // DevOps & Infrastructure
  {
    name: "Docker",
    category: "devops",
    proficiency: 5,
    years: 5,
  },
  {
    name: "Kubernetes",
    category: "devops",
    proficiency: 4,
    years: 3,
  },
  {
    name: "AWS",
    category: "devops",
    proficiency: 4,
    years: 5,
  },
  {
    name: "Google Cloud",
    category: "devops",
    proficiency: 3,
    years: 2,
  },
  {
    name: "Terraform",
    category: "devops",
    proficiency: 4,
    years: 2,
  },
  {
    name: "CI/CD",
    category: "devops",
    proficiency: 5,
    years: 4,
  },
  {
    name: "Linux",
    category: "devops",
    proficiency: 5,
    years: 8,
  },
  {
    name: "PostgreSQL",
    category: "devops",
    proficiency: 5,
    years: 7,
  },
  {
    name: "Redis",
    category: "devops",
    proficiency: 4,
    years: 4,
  },
  {
    name: "Prometheus",
    category: "devops",
    proficiency: 3,
    years: 1,
  },

  // Tools
  {
    name: "Git",
    category: "tools",
    proficiency: 5,
    years: 8,
  },
  {
    name: "VS Code",
    category: "tools",
    proficiency: 5,
    years: 5,
  },
  {
    name: "Figma",
    category: "tools",
    proficiency: 3,
    years: 2,
  },
  {
    name: "Jira",
    category: "tools",
    proficiency: 4,
    years: 4,
  },
  {
    name: "GitHub",
    category: "tools",
    proficiency: 5,
    years: 6,
  },
  {
    name: "Postman",
    category: "tools",
    proficiency: 4,
    years: 4,
  },
];

export const certifications: Certification[] = [
  {
    name: "Certified Ethical Hacker (CEH)",
    issuer: "EC-Council",
    year: 2020,
    credentialId: "ECC-123456",
    logo: "/images/certifications/ceh.png",
  },
];

// Group skills by category for easy display
export const skillsByCategory = {
  languages: skills.filter((s) => s.category === "languages"),
  frameworks: skills.filter((s) => s.category === "frameworks"),
  web3: skills.filter((s) => s.category === "web3"),
  devops: skills.filter((s) => s.category === "devops"),
  tools: skills.filter((s) => s.category === "tools"),
};

// Top skills by proficiency for homepage display
export const topSkills = skills.filter((s) => s.proficiency >= 4).slice(0, 12);
