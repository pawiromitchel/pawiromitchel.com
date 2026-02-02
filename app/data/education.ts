export interface EducationEntry {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startYear: number;
  endYear: number;
  description?: string;
  logo?: string;
  achievements?: string[];
}

export interface TechEraEntry {
  period: string;
  startYear: number;
  endYear: number;
  technologies: string[];
  focus: string;
  description: string;
}

export const education: EducationEntry[] = [
  {
    id: "uast",
    institution: "University of Applied Science and Technology Suriname",
    degree: "Bachelor's degree",
    field: "Computer Software Engineering",
    startYear: 2016,
    endYear: 2020,
    description:
      "Bachelor's degree in Computer Software Engineering with focus on software development, systems design, and application development. Foundation in modern software engineering practices.",
    logo: "/images/education/uast.png",
    achievements: [
      "Completed comprehensive software engineering curriculum",
      "Worked on multiple software development projects",
      "NoSQL expertise developed through coursework",
    ],
  },
  {
    id: "natuurtech",
    institution: "Natuurtechnisch Instituut",
    degree: "Diploma",
    field: "Application Development",
    startYear: 2012,
    endYear: 2016,
    description:
      "Foundation in application development. Studied programming fundamentals, database design, and web development. Prepared for higher education in computer science.",
    logo: "/images/education/natuurtech.png",
    achievements: [
      "Solid foundation in programming and application development",
      "Database design and SQL expertise",
      "Web development fundamentals",
    ],
  },
];

// Tech evolution timeline showing the progression of technologies used
export const techEvolution: TechEraEntry[] = [
  {
    period: "2012-2017",
    startYear: 2012,
    endYear: 2017,
    technologies: ["PHP", "JavaScript", "jQuery", "WordPress", "MySQL", "Joomla", "Magento"],
    focus: "Web Development & CMS",
    description:
      "Early career building traditional web applications and WordPress sites. Strong foundation in PHP and JavaScript, CMS platform development for clients. Mobile app development with Ionic.",
  },
  {
    period: "2017-2022",
    startYear: 2017,
    endYear: 2022,
    technologies: ["Angular", "Node.js", "TypeScript", "React", "PostgreSQL", "Pentaho"],
    focus: "Full-Stack JavaScript & Legacy Modernization",
    description:
      "Transition to modern JavaScript frameworks and full-stack development. Led migration of legacy desktop applications to web-based platforms, achieving 3x speed improvements. Mastered Angular and React for frontend, Node.js for backend.",
  },
  {
    period: "2022-Present",
    startYear: 2022,
    endYear: 2025,
    technologies: ["TypeScript", "Web3", "Solidity", "Blockchain", "Technical Support"],
    focus: "Web3 & Blockchain Infrastructure",
    description:
      "Specialization in Web3 and blockchain technology. Web3 development, smart contracts, and infrastructure support. Technical operations and developer experience optimization at QuickNode.",
  },
];

// Notable achievements and wins
export const achievements = [
  {
    title: "Hackathon Participant",
    year: 2016,
    description: "Participated in multiple hackathons including GT&T Hackathon 2016, Hackomation 2017, and Hackathon 2018",
  },
  {
    title: "10+ Years of Experience",
    year: 2024,
    description: "Over a decade of experience in software development from 2012 to present",
  },
  {
    title: "14+ Major Projects",
    year: 2024,
    description:
      "Led and contributed to 14+ major projects across Web3, infrastructure, and full-stack development",
  },
  {
    title: "5 Companies",
    year: 2024,
    description:
      "Worked with startups and established companies including QuickNode, INFINITRI, Alembo B.V., Bit Dynamics, and CareerIT",
  },
];
