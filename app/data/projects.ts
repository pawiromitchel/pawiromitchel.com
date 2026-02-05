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
    id: "bcron",
    title: "bcron",
    description: "Modern task scheduler with interactive TUI for managing scheduled commands",
    longDescription:
      "A modern command scheduler featuring an interactive terminal UI for managing scheduled tasks on Unix-like systems. Features flexible scheduling with timezone support, background daemon for reliable execution, complete execution history, macOS desktop notifications, and concurrent task execution.",
    image: "/images/projects/bcron.jpg",
    technologies: ["Go", "Shell", "CLI", "TUI", "Cron"],
    category: "infrastructure",
    githubUrl: "https://github.com/pawiromitchel/bcron",
    featured: true,
    year: 2026,
  },
  {
    id: "pawiromitchel-com",
    title: "Personal Portfolio Website",
    description: "Professional portfolio and blog platform built with Next.js",
    longDescription:
      "Developed a responsive personal website showcasing projects, experience, and technical expertise. Built with modern web technologies for optimal performance and user experience.",
    image: "/images/projects/portfolio.jpg",
    technologies: ["HTML", "Next.js", "TypeScript", "Tailwind CSS", "React"],
    category: "fullstack",
    githubUrl: "https://github.com/pawiromitchel/pawiromitchel.com",
    liveUrl: "https://pawiromitchel.com",
    featured: true,
    year: 2024,
  },
  {
    id: "ftx-api-rest-extended",
    title: "FTX API REST Extended",
    description: "Extended version of the FTX REST API package with additional functions",
    longDescription:
      "An extended version of the ftx-api-rest package made by askmike. Decided to write specific functions focused on spot and future trading features.",
    image: "/images/projects/ftx-api.jpg",
    technologies: ["JavaScript", "Node.js", "Cryptocurrency", "API"],
    category: "fullstack",
    githubUrl: "https://github.com/pawiromitchel/ftx-api-rest-extended",
    featured: true,
    year: 2021,
  },
  {
    id: "ftx-telegram-trader",
    title: "FTX Telegram Trader",
    description: "Telegram bot to create orders on FTX cryptocurrency exchange",
    longDescription:
      "A Telegram bot that allows users to create buy and sell orders on the FTX cryptocurrency exchange through simple bot commands.",
    image: "/images/projects/ftx-trader.jpg",
    technologies: ["JavaScript", "Node.js", "Telegram Bot API", "Cryptocurrency"],
    category: "fullstack",
    githubUrl: "https://github.com/pawiromitchel/ftx-telegram-trader",
    featured: true,
    year: 2021,
  },
  {
    id: "defimaxi",
    title: "DefiMaxi",
    description: "A bot for DeFi purposes",
    longDescription:
      "A decentralized finance bot designed to assist with various DeFi operations and automation tasks.",
    image: "/images/projects/defimaxi.jpg",
    technologies: ["JavaScript", "Web3.js", "Blockchain", "DeFi"],
    category: "web3",
    githubUrl: "https://github.com/pawiromitchel/DefiMaxi",
    featured: true,
    year: 2021,
  },
  {
    id: "gas-tracker",
    title: "Gas Tracker",
    description: "A simple gas tracker for Ethereum",
    longDescription:
      "A simple utility to track Ethereum gas prices in real-time. Helps users monitor network congestion and make informed decisions about transaction timing.",
    image: "/images/projects/gas-tracker.jpg",
    technologies: ["HTML", "JavaScript", "Ethereum", "Web3.js"],
    category: "web3",
    githubUrl: "https://github.com/pawiromitchel/Gas-Tracker",
    featured: false,
    year: 2021,
  },
  {
    id: "ftx-dca-script",
    title: "FTX DCA Script",
    description: "A DCA script for FTX exchange",
    longDescription:
      "A Dollar Cost Averaging (DCA) script for automated trading on the FTX cryptocurrency exchange. Useful for implementing consistent investment strategies.",
    image: "/images/projects/ftx-dca.jpg",
    technologies: ["JavaScript", "Node.js", "FTX API", "Cryptocurrency"],
    category: "fullstack",
    githubUrl: "https://github.com/pawiromitchel/ftx-dca-script",
    featured: false,
    year: 2021,
  },
  {
    id: "suriname-fx-scraper",
    title: "Suriname FX Exchange Data Scraper",
    description: "Web scraper for Surinamese foreign exchange data",
    longDescription:
      "Responsible for designing and developing a webscraper that periodically scrapes URLs and posts the results via a Telegram bot to a private group. Useful for monitoring FX rates and market changes.",
    image: "/images/projects/fx-scraper.jpg",
    technologies: ["JavaScript", "Node.js", "Web Scraping", "Telegram API"],
    category: "fullstack",
    featured: false,
    year: 2022,
  },
  {
    id: "blog-platform",
    title: "Blog Platform",
    description: "Content management system for technical articles and posts",
    longDescription:
      "A blog platform for publishing technical articles and sharing knowledge. Built with modern web technologies to provide a clean reading experience.",
    image: "/images/projects/blog.jpg",
    technologies: ["Next.js", "TypeScript", "React", "Markdown"],
    category: "fullstack",
    featured: false,
    year: 2023,
  },
  {
    id: "automation-tools",
    title: "Automation Tools Suite",
    description: "Collection of CLI tools for development and operations automation",
    longDescription:
      "A suite of command-line tools designed to automate common development and operational tasks. Tools for building, deploying, and managing applications.",
    image: "/images/projects/automation.jpg",
    technologies: ["JavaScript", "Node.js", "CLI", "Automation"],
    category: "fullstack",
    featured: false,
    year: 2022,
  },
];
