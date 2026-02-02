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
      "Technical Operations Engineer at QuickNode, a leading Web3 infrastructure provider. Responsible for optimizing infrastructure, managing DevOps, and ensuring reliable service delivery for millions of RPC requests.",
    achievements: [
      "Streamlined technical operations for improved system reliability",
      "Optimized infrastructure for better performance and cost efficiency",
      "Managed DevOps and infrastructure scaling for Web3 services",
      "Provided technical support for Web3 developers and users",
    ],
    technologies: [
      "Web3",
      "Blockchain",
      "DevOps",
      "Infrastructure",
      "Technical Support",
    ],
    location: "Miami, Florida, United States - Remote",
    type: "full-time",
    logo: "/images/companies/quicknode.svg",
  },
  {
    id: "quicknode-web3",
    company: "QuickNode",
    position: "Senior Web3 Support Engineer",
    duration: "Apr 2022 - Sep 2025",
    startDate: "2022-04",
    endDate: "2025-09",
    description:
      "Provided multi-platform customer support on Zendesk, Slack, Discord, and Twitter, swiftly resolving technical issues while ensuring compliance with Service Level Agreements (SLAs). Worked with blockchain infrastructure and Web3 developers.",
    achievements: [
      "Resolved technical issues across multiple platforms (Zendesk, Slack, Discord, Twitter)",
      "Maintained excellent Service Level Agreement (SLA) compliance",
      "Supported Web3 developers and blockchain infrastructure users",
      "Contributed to improving customer satisfaction and retention",
    ],
    technologies: [
      "Technical Reviews",
      "Zendesk",
      "Discord",
      "Slack",
      "Twitter",
      "Web3",
      "Blockchain",
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
      "Contributed to building the foundation of Infinitri's proof-of-concept app. Brought technical knowledge of blockchain and shared it with the team as a Web3 Lead Developer.",
    achievements: [
      "Built foundation of Infinitri's proof-of-concept app",
      "Shared blockchain technical expertise with team",
      "Contributed to Web3 architecture and development",
      "Mentored team on blockchain best practices",
    ],
    technologies: ["DAO", "Data Analysis", "Blockchain", "Web3", "Smart Contracts"],
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
      "Proposed and led the migration of an internal desktop tool from C# to a web-based application using Angular and MySQL. This resulted in a 3x increase in development speed by enabling training and collaboration. Also designed and built DETA software for high-quality data transcription.",
    achievements: [
      "Led migration of desktop tool to web-based application (C# to Angular/MySQL)",
      "Achieved 3x increase in development speed through modernization",
      "Designed and built DETA software for data transcription",
      "Managed team and established software development best practices",
    ],
    technologies: [
      "Pentaho",
      "Angular",
      "MySQL",
      "C#",
      "Node.js",
      "TypeScript",
      "Web Development",
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
      "Developed and maintained customer websites built with WordPress, Joomla, and Magento. Developed and maintained mobile applications for the company.",
    achievements: [
      "Developed and maintained customer websites on WordPress, Joomla, and Magento",
      "Developed and maintained mobile applications",
      "Built responsive web designs for multiple clients",
      "Ensured website performance and security",
    ],
    technologies: [
      "Ionic Framework",
      "AngularJS",
      "WordPress",
      "Magento",
      "Joomla",
      "JavaScript",
      "CSS",
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
      "Internship as Application Developer working on various development projects. Learned Linux Administration and WordPress development.",
    achievements: [
      "Completed application development projects",
      "Learned Linux Administration",
      "Gained WordPress development experience",
      "Contributed to team projects and code reviews",
    ],
    technologies: ["Linux", "WordPress", "Web Development", "Databases"],
    location: "Suriname",
    type: "freelance",
    logo: "/images/companies/careerit.svg",
  },
];
