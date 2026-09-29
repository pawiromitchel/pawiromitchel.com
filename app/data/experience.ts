// What kind of work a role was: building software, supporting it, or running it.
export type RoleKind = "dev" | "support" | "ops";

export interface Role {
  title: string;
  period: string;
  kind: RoleKind;
  promotedFrom?: string;
  highlights: string[];
  // Overrides the company stack when roles at one company used different tools.
  stack?: string[];
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
        kind: "ops",
        promotedFrom: "Senior Support Engineer, 2025",
        highlights: [
          "Leading the migration of our node infrastructure to Kubernetes, to make deployments easier to scale and manage.",
          "Run and upgrade nodes on a fleet serving 79 chains and 138 networks, including Solana, Ethereum, Bitcoin, Base and Robinhood Chain.",
          "Roll out client releases and hard forks, bring new chains into production, and share on-call.",
        ],
      },
      {
        title: "Senior Support Engineer",
        period: "Feb 2022 – Aug 2025",
        kind: "support",
        promotedFrom: "Support Engineer, 2023",
        highlights: [
          "Resolved technical issues for developers across Zendesk, Slack, Discord and X within SLA.",
          "Picked up DevOps and infrastructure work across multiple chains: system upgrades, configuration changes and infrastructure health.",
        ],
        stack: ["Docker", "Ansible", "Pylon", "Zendesk", "Discord", "JavaScript", "Go", "Python"],
      },
    ],
    stack: [
      "Kubernetes",
      "Docker",
      "Linux",
      "CI/CD",
      "Prometheus",
      "VictoriaMetrics",
      "Grafana",
      "Datadog",
      "Tailscale",
      "Go",
    ],
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
        kind: "dev",
        highlights: [
          "Led the migration of a legacy desktop application to a modern web app, bringing double-entry data capture and customer review into a single flow. More of the team could contribute, which roughly tripled development speed.",
          "Built an in-house import tool that loads datasets of millions of records into the application for data entry.",
          "Built and maintained websites and mobile apps, from development and content management to keeping the servers up.",
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
        kind: "dev",
        highlights: [
          "Built client websites, e-commerce stores and Ionic mobile apps.",
          "Set up and maintained the servers that hosted client websites.",
        ],
      },
    ],
    stack: ["WordPress", "Magento", "PHP", "AngularJS", "Ionic", "Linux"],
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
        kind: "dev",
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
        kind: "dev",
        highlights: ["Web modules and Linux server automation with shell scripts."],
      },
    ],
    stack: ["Linux", "Bash"],
  },
  {
    id: "suralco",
    company: "Suralco",
    location: "Suriname",
    period: "2014",
    roles: [
      {
        title: "IT Assistant",
        period: "2014",
        kind: "support",
        highlights: [],
      },
    ],
    stack: [],
  },
];
