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
    id: "university",
    institution: "University of Applied Science and Technology",
    degree: "Bachelor of Science",
    field: "Computer Science",
    startYear: 2010,
    endYear: 2014,
    description:
      "Foundation in computer science with focus on software development and systems design.",
    logo: "/images/education/university.png",
    achievements: [
      "Dean's List for Academic Excellence (2013)",
      "President of Computer Science Club (2013-2014)",
    ],
  },
];

// Tech evolution timeline showing the progression of technologies used
export const techEvolution: TechEraEntry[] = [
  {
    period: "2014-2017",
    startYear: 2014,
    endYear: 2017,
    technologies: ["PHP", "JavaScript", "jQuery", "WordPress", "MySQL"],
    focus: "Web Development",
    description:
      "Early career building traditional web applications. Strong foundation in PHP and JavaScript, WordPress development for enterprise clients.",
  },
  {
    period: "2017-2021",
    startYear: 2017,
    endYear: 2021,
    technologies: ["Angular", "Node.js", "TypeScript", "React", "PostgreSQL"],
    focus: "Full-Stack JavaScript",
    description:
      "Transition to modern JavaScript frameworks and full-stack development. Mastered Angular and React for frontend, Node.js for backend.",
  },
  {
    period: "2021-2024",
    startYear: 2021,
    endYear: 2024,
    technologies: ["Go", "TypeScript", "Web3", "Solidity", "Kubernetes"],
    focus: "Blockchain & Infrastructure",
    description:
      "Specialization in blockchain technology and infrastructure. Go for performance-critical systems, Web3 development, and infrastructure scaling.",
  },
];

// Notable achievements and wins
export const achievements = [
  {
    title: "2x Hackathon Winner",
    year: 2020,
    description: "Won hackathons for innovative blockchain and Web3 projects",
  },
  {
    title: "10+ Years of Experience",
    year: 2024,
    description: "Over a decade of experience in software development",
  },
  {
    title: "9+ Major Projects",
    year: 2024,
    description:
      "Led and contributed to 9+ major projects across Web3, infrastructure, and full-stack development",
  },
  {
    title: "4 Companies",
    year: 2024,
    description:
      "Worked with startups and established companies in various roles",
  },
];
