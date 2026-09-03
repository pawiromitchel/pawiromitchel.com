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
    id: "quicknode-tox",
    company: "QuickNode",
    position: "Technical Operations Engineer",
    duration: "Aug 2025 - Present",
    startDate: "2025-08",
    endDate: "Present",
    description:
      "Managing infrastructure reliability, performance optimization, and DevOps workflows at QuickNode to deliver high-availability RPC services across global blockchain networks.",
    achievements: [
      "Optimized RPC node infrastructure for high availability and low-latency response times across multiple blockchain networks",
      "Automated operational monitoring, incident response workflows, and deployment processes",
      "Maintained infrastructure reliability and cost efficiency across production Kubernetes clusters",
    ],
    technologies: [
      "Web3",
      "Kubernetes",
      "Docker",
      "DevOps",
      "Go",
      "Linux",
      "Prometheus",
    ],
    location: "Miami, Florida, United States - Remote",
    type: "full-time",
    logo: "/images/companies/quicknode.svg",
  },
  {
    id: "quicknode-web3",
    company: "QuickNode",
    position: "Senior Web3 Support Engineer",
    duration: "Apr 2022 - Aug 2025",
    startDate: "2022-04",
    endDate: "2025-08",
    description:
      "Provided high-tier technical support for Web3 developers and enterprise clients, troubleshooting complex RPC API requests, node indexing issues, and smart contract integrations under strict SLAs.",
    achievements: [
      "Diagnosed and resolved complex RPC node, Web3 API, and infrastructure issues for enterprise developers",
      "Maintained 99%+ SLA compliance for developer support response and resolution metrics",
      "Authored technical documentation and client-facing troubleshooting guides for Web3 infrastructure",
    ],
    technologies: [
      "Web3",
      "Ethereum",
      "RPC Infrastructure",
      "Node.js",
      "TypeScript",
    ],
    location: "Miami, Florida, United States - Remote",
    type: "full-time",
    logo: "/images/companies/quicknode.svg",
  },
  {
    id: "infinitri",
    company: "INFINITRI",
    position: "Web3 Lead Developer",
    duration: "Feb 2022 - Dec 2022",
    startDate: "2022-02",
    endDate: "2022-12",
    description:
      "Led Web3 development and smart contract architecture for Infinitri's proof-of-concept platform.",
    achievements: [
      "Architected proof-of-concept Web3 application logic and smart contract interfaces",
      "Guided technical direction and mentored engineers on blockchain integration standards",
      "Designed decentralized application (dApp) backend integrations",
    ],
    technologies: ["Solidity", "Web3.js", "Smart Contracts", "Ethereum", "TypeScript"],
    location: "Suriname - Remote",
    type: "contract",
    logo: "/images/companies/infinitri.svg",
  },
  {
    id: "alembo",
    company: "Alembo B.V.",
    position: "Lead Software Engineer",
    duration: "Feb 2017 - Feb 2022",
    startDate: "2017-02",
    endDate: "2022-02",
    description:
      "Led the migration of internal core desktop tools from C# to a modern web application using Angular and MySQL, resulting in a 3x development throughput increase and seamless cross-team collaboration.",
    achievements: [
      "Architected web-based data transcription platform (DETA) replacing legacy desktop software",
      "Accelerated developer onboarding and feature delivery velocity by 3x through modern web architecture",
      "Managed team workflows and introduced continuous integration and code review standards",
    ],
    technologies: [
      "Angular",
      "TypeScript",
      "MySQL",
      "C#",
      "Node.js",
    ],
    location: "Suriname",
    type: "full-time",
    logo: "/images/companies/alembo.svg",
  },
  {
    id: "bitdynamics",
    company: "Bit Dynamics N.V.",
    position: "Web Developer",
    duration: "Aug 2016 - Feb 2017",
    startDate: "2016-08",
    endDate: "2017-02",
    description:
      "Developed and maintained responsive web applications, custom e-commerce stores, and cross-platform mobile apps for client projects.",
    achievements: [
      "Developed custom web applications and mobile clients using Ionic Framework and AngularJS",
      "Built responsive client sites and e-commerce platforms with custom extensions",
      "Ensured web application performance, cross-browser compatibility, and security",
    ],
    technologies: [
      "Ionic Framework",
      "AngularJS",
      "WordPress",
      "JavaScript",
      "PHP",
    ],
    location: "Suriname",
    type: "full-time",
    logo: "/images/companies/bitdynamics.svg",
  },
  {
    id: "careerit",
    company: "CareerIT NV",
    position: "Intern Application Developer",
    duration: "Mar 2016 - Jul 2016",
    startDate: "2016-03",
    endDate: "2016-07",
    description:
      "Application development internship focused on web projects, Linux system administration, and shell scripting.",
    achievements: [
      "Built web modules and automated server setup routines using Linux shell scripts",
      "Gained hands-on experience in database management, web publishing, and system administration",
    ],
    technologies: ["Linux", "Shell/Bash", "WordPress", "MySQL"],
    location: "Suriname",
    type: "freelance",
    logo: "/images/companies/careerit.svg",
  },
];
