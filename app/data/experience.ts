export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  startDate: string;
  endDate: string | "Present";
  description: string;
  achievements: string[];
  technologies: string[];
  location: string;
  type: "full-time" | "contract" | "freelance";
  logo?: string;
}

export const experiences: Experience[] = [
  {
    id: "quicknode",
    company: "QuickNode",
    position: "Technical Operations Engineer",
    duration: "2023 - Present",
    startDate: "2023-01",
    endDate: "Present",
    description:
      "Leading technical operations and infrastructure initiatives for a Web3 infrastructure provider. Responsible for DevOps, infrastructure scaling, and developer experience optimization.",
    achievements: [
      "Designed and implemented infrastructure scaling solutions supporting millions of RPC requests daily",
      "Reduced infrastructure costs by 35% through optimization and resource management",
      "Led migration of critical systems to Kubernetes for improved reliability",
      "Mentored junior engineers on blockchain infrastructure and DevOps practices",
    ],
    technologies: [
      "Go",
      "TypeScript",
      "Kubernetes",
      "Docker",
      "Ethereum",
      "PostgreSQL",
      "AWS",
    ],
    location: "Remote",
    type: "full-time",
    logo: "/images/companies/quicknode.svg",
  },
  {
    id: "web3-dev",
    company: "Web3 Infrastructure Startup",
    position: "Senior Full-Stack Engineer",
    duration: "2021 - 2023",
    startDate: "2021-03",
    endDate: "2023-01",
    description:
      "Built and maintained backend infrastructure for a Web3 platform. Developed smart contracts and created APIs for blockchain interaction.",
    achievements: [
      "Architected scalable microservices for blockchain data indexing",
      "Implemented smart contract testing and deployment pipelines",
      "Reduced API response times by 60% through caching and optimization",
      "Built developer documentation and SDKs for Web3 APIs",
    ],
    technologies: [
      "TypeScript",
      "Node.js",
      "Solidity",
      "Web3.js",
      "Ethers.js",
      "PostgreSQL",
      "Redis",
      "Docker",
    ],
    location: "Remote",
    type: "full-time",
    logo: "/images/companies/web3-startup.svg",
  },
  {
    id: "fullstack-dev",
    company: "Full-Stack Development Agency",
    position: "Senior Full-Stack Developer",
    duration: "2019 - 2021",
    startDate: "2019-06",
    endDate: "2021-03",
    description:
      "Led development of multiple web applications for enterprise clients. Managed teams and oversaw full development lifecycle from design to deployment.",
    achievements: [
      "Delivered 15+ production applications for enterprise clients",
      "Led cross-functional teams of 3-5 developers",
      "Implemented CI/CD pipelines reducing deployment time by 75%",
      "Established coding standards and best practices for the team",
    ],
    technologies: [
      "TypeScript",
      "Node.js",
      "React",
      "Angular",
      "AWS",
      "PostgreSQL",
      "MongoDB",
    ],
    location: "Remote",
    type: "full-time",
    logo: "/images/companies/agency.svg",
  },
  {
    id: "early-career",
    company: "Various Startups & Freelance",
    position: "Full-Stack Developer",
    duration: "2014 - 2019",
    startDate: "2014-01",
    endDate: "2019-06",
    description:
      "Early career building web applications and learning full-stack development. Worked with various startups and as a freelancer.",
    achievements: [
      "Completed 20+ web projects across diverse industries",
      "Mastered JavaScript ecosystem and backend technologies",
      "Built and launched 2 indie projects to modest success",
      "Transitioned from PHP/WordPress to modern JavaScript frameworks",
    ],
    technologies: [
      "JavaScript",
      "PHP",
      "WordPress",
      "jQuery",
      "MySQL",
      "Python",
      "CSS",
    ],
    location: "Mixed",
    type: "freelance",
    logo: "/images/companies/freelance.svg",
  },
];
