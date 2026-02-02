export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: "web3" | "infrastructure" | "fullstack";
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  year: number;
}

export const projects: Project[] = [
  {
    id: "eth-indexer",
    title: "Ethereum Data Indexer",
    description: "High-performance blockchain data indexing service for Web3 applications",
    longDescription:
      "Built a scalable Ethereum data indexer that processes and stores blockchain data for real-time querying. Handles millions of transactions per day with sub-second query latency.",
    image: "/images/projects/eth-indexer.jpg",
    technologies: ["Go", "TypeScript", "PostgreSQL", "Redis", "Kubernetes"],
    category: "infrastructure",
    githubUrl: "https://github.com/pawiromitchel/eth-indexer",
    featured: true,
    year: 2023,
  },
  {
    id: "web3-sdk",
    title: "Web3 JavaScript SDK",
    description: "Comprehensive SDK for building Web3 applications with type safety",
    longDescription:
      "Developed a feature-rich JavaScript SDK that simplifies Web3 development. Includes utilities for contract interaction, wallet management, and transaction handling with full TypeScript support.",
    image: "/images/projects/web3-sdk.jpg",
    technologies: ["TypeScript", "Ethers.js", "Web3.js", "Jest", "Webpack"],
    category: "web3",
    githubUrl: "https://github.com/pawiromitchel/web3-sdk",
    liveUrl: "https://www.npmjs.com/package/web3-sdk",
    featured: true,
    year: 2022,
  },
  {
    id: "defi-protocol",
    title: "DeFi Lending Protocol",
    description: "Smart contract-based lending protocol with risk management",
    longDescription:
      "Designed and implemented a DeFi lending protocol with collateral management, liquidation mechanisms, and governance features. Audited for security and deployed on mainnet.",
    image: "/images/projects/defi-protocol.jpg",
    technologies: ["Solidity", "Hardhat", "OpenZeppelin", "Web3.js", "TypeScript"],
    category: "web3",
    githubUrl: "https://github.com/pawiromitchel/defi-protocol",
    featured: true,
    year: 2022,
  },
  {
    id: "api-gateway",
    title: "Blockchain API Gateway",
    description: "Scalable API gateway for blockchain RPC requests with caching",
    longDescription:
      "Built an API gateway that abstracts multiple blockchain networks, provides rate limiting, caching, and analytics. Serves millions of requests monthly with 99.9% uptime.",
    image: "/images/projects/api-gateway.jpg",
    technologies: ["Node.js", "Express", "Redis", "Docker", "Prometheus"],
    category: "infrastructure",
    featured: true,
    year: 2023,
  },
  {
    id: "nft-marketplace",
    title: "NFT Marketplace Platform",
    description: "Full-stack NFT marketplace with auction and trading features",
    longDescription:
      "Developed a complete NFT marketplace including smart contracts, backend API, and React frontend. Features include auctions, collection management, and royalty handling.",
    image: "/images/projects/nft-marketplace.jpg",
    technologies: ["React", "Node.js", "Solidity", "PostgreSQL", "Tailwind CSS"],
    category: "web3",
    liveUrl: "https://nft-marketplace-example.com",
    featured: false,
    year: 2021,
  },
  {
    id: "monitoring-dashboard",
    title: "Infrastructure Monitoring Dashboard",
    description: "Real-time monitoring and alerting system for blockchain infrastructure",
    longDescription:
      "Created a comprehensive monitoring dashboard for infrastructure health, using Prometheus, Grafana, and custom alerting. Tracks metrics across multiple nodes and services.",
    image: "/images/projects/monitoring-dashboard.jpg",
    technologies: ["React", "Node.js", "Prometheus", "Grafana", "TimescaleDB"],
    category: "infrastructure",
    featured: false,
    year: 2023,
  },
  {
    id: "token-launchpad",
    title: "Token Launchpad Platform",
    description: "Platform for launching ERC-20 tokens with vesting and allocation",
    longDescription:
      "Built a token launchpad allowing projects to deploy and manage token sales. Includes vesting schedules, whitelist management, and KYC integration.",
    image: "/images/projects/token-launchpad.jpg",
    technologies: ["Solidity", "React", "Node.js", "PostgreSQL", "Web3.js"],
    category: "web3",
    featured: false,
    year: 2022,
  },
  {
    id: "cli-tools",
    title: "Blockchain CLI Tools",
    description: "Command-line tools for blockchain development and deployment",
    longDescription:
      "Suite of CLI tools for developers to interact with blockchain networks, deploy contracts, and manage accounts. Supports multiple chains and includes offline signing.",
    image: "/images/projects/cli-tools.jpg",
    technologies: ["TypeScript", "Node.js", "Commander.js", "Web3.js"],
    category: "web3",
    githubUrl: "https://github.com/pawiromitchel/blockchain-cli",
    featured: false,
    year: 2021,
  },
  {
    id: "web-app",
    title: "Enterprise Web Application",
    description: "Large-scale SaaS application for project management",
    longDescription:
      "Developed a production web application serving thousands of users. Includes real-time collaboration features, advanced search, and complex state management.",
    image: "/images/projects/web-app.jpg",
    technologies: ["React", "Node.js", "PostgreSQL", "Socket.io", "Docker"],
    category: "fullstack",
    featured: false,
    year: 2020,
  },
];
