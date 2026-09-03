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
  endYear: number | "Present";
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
      "Bachelor's degree in Computer Software Engineering focusing on software architecture, algorithms, database systems, and application engineering.",
    logo: "/images/education/uast.png",
    achievements: [
      "Completed software engineering and systems architecture curriculum",
      "Built multiple web and database application engineering projects",
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
      "Foundation in software development, programming fundamentals, database design, and web technologies.",
    logo: "/images/education/natuurtech.png",
    achievements: [
      "Foundation in computer programming and software development",
      "Database management and relational schema design",
    ],
  },
];

// Tech evolution timeline showing progression of technologies
export const techEvolution: TechEraEntry[] = [
  {
    period: "2012–2017",
    startYear: 2012,
    endYear: 2017,
    technologies: ["PHP", "JavaScript", "WordPress", "MySQL", "Ionic"],
    focus: "Web Development & CMS",
    description:
      "Built web applications, client portals, and mobile client interfaces with PHP, JavaScript, and custom CMS extensions.",
  },
  {
    period: "2017–2022",
    startYear: 2017,
    endYear: 2022,
    technologies: ["Angular", "Node.js", "TypeScript", "C#", "MySQL"],
    focus: "Full-Stack Development & Legacy Modernization",
    description:
      "Led migration of desktop software to modern web platforms. Expanded full-stack JavaScript expertise across Node.js backend services and Angular/React frontends.",
  },
  {
    period: "2022–Present",
    startYear: 2022,
    endYear: "Present",
    technologies: ["Go", "TypeScript", "Kubernetes", "Docker", "Web3", "Solidity"],
    focus: "Web3 & Infrastructure Engineering",
    description:
      "Focused on Web3 RPC infrastructure, DevOps workflows, container orchestration, and building Go/TypeScript developer tools at scale.",
  },
];

export const achievements = [
  {
    title: "Hackathon Participant",
    year: 2016,
    description: "Competed in GT&T Hackathon 2016, Hackomation 2017, and Suriname Hackathon 2018",
  },
  {
    title: "10+ Years Engineering Experience",
    year: 2026,
    description: "Over a decade of software engineering, backend systems, and technical infrastructure experience",
  },
  {
    title: "14+ Production Projects",
    year: 2026,
    description:
      "Engineered and shipped projects across Web3 infrastructure, Go tools, and full-stack web platforms",
  },
];
