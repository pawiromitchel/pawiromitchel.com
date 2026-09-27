export interface Role {
  title: string;
  period: string;
  highlights: string[];
}

export interface Company {
  id: string;
  company: string;
  url?: string;
  location: string;
  period: string;
  type?: "Contract" | "Internship";
  roles: Role[];
  stack: string[];
}

// Main career history, newest first. Mirrors the CV.
export const experience: Company[] = [
  {
    id: "quicknode",
    company: "QuickNode",
    url: "https://www.quicknode.com",
    location: "Miami, FL · Remote",
    period: "Feb 2022 – Present",
    roles: [
      {
        title: "Technical Operations Engineer II",
        period: "Aug 2025 – Present",
        highlights: [
          "Leading the Kubernetes migration to modernize the infrastructure architecture and make deployments scale.",
          "Own blockchain client upgrades and new chain deployments, and share the on-call rotation that keeps node infrastructure up.",
        ],
      },
      {
        title: "Senior Support Engineer",
        period: "Feb 2022 – Aug 2025",
        highlights: [
          "Resolved technical issues for developers across Zendesk, Slack, Discord and X within SLA.",
          "Picked up DevOps and infrastructure work across multiple chains: system upgrades, configuration changes and infrastructure health.",
        ],
      },
    ],
    stack: ["Kubernetes", "Docker", "Linux", "Prometheus", "Go"],
  },
  {
    id: "alembo",
    company: "Alembo",
    location: "Suriname",
    period: "Feb 2017 – Feb 2022",
    roles: [
      {
        title: "Lead Software Engineer",
        period: "Feb 2017 – Feb 2022",
        highlights: [
          "Proposed and led the migration of an internal C# desktop tool to an Angular + MySQL web app, tripling development speed by letting more developers contribute.",
          "Led server deployments and built websites, web apps and mobile apps.",
        ],
      },
    ],
    stack: ["Angular", "TypeScript", "MySQL", "C#", "Node.js"],
  },
  {
    id: "bitdynamics",
    company: "BitDynamics",
    location: "Suriname",
    period: "Aug 2016 – Feb 2017",
    roles: [
      {
        title: "Web Developer",
        period: "Aug 2016 – Feb 2017",
        highlights: [
          "Built client websites, e-commerce stores and Ionic mobile apps.",
        ],
      },
    ],
    stack: ["AngularJS", "Ionic", "PHP"],
  },
];

// Shorter side and early roles, shown as one-liners.
export const earlierRoles: Company[] = [
  {
    id: "infinitri",
    company: "Infinitri",
    location: "Remote",
    period: "Feb 2022 – Dec 2022",
    type: "Contract",
    roles: [
      {
        title: "Web3 Lead Developer",
        period: "Feb 2022 – Dec 2022",
        highlights: ["Smart contract and dApp architecture for a proof-of-concept platform."],
      },
    ],
    stack: ["Solidity", "TypeScript"],
  },
  {
    id: "careerit",
    company: "CareerIT",
    location: "Suriname",
    period: "Mar 2016 – Jul 2016",
    type: "Internship",
    roles: [
      {
        title: "Application Developer Intern",
        period: "Mar 2016 – Jul 2016",
        highlights: ["Web modules and Linux server automation with shell scripts."],
      },
    ],
    stack: ["Linux", "Bash"],
  },
];
