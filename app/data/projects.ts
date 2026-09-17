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
    id: "cashly",
    title: "Cashly",
    description: "Multi-asset personal finance & portfolio intelligence engine with an autonomous AI copilot",
    longDescription:
      "A self-hosted financial operating system featuring a Go backend daemon, Next.js 14 web client, automated bank email ingestion, multi-asset portfolio tracking (fiat, DeFi vaults, tokenized equities), and an autonomous Gemini AI copilot.",
    image: "/images/projects/cashly.png",
    technologies: ["Go", "Next.js", "SQLite", "Gemini AI", "Cloudflare", "Fintech"],
    category: "fullstack",
    liveUrl: "https://cashlyfinance.com/",
    featured: true,
    year: 2026,
  },
  {
    id: "bcron",
    title: "bcron",
    description: "Modern Go CLI & background daemon with sub-10ms trigger overhead and an interactive TUI",
    longDescription:
      "A modern CLI task scheduler built in Go featuring an interactive terminal UI for Unix systems. Supports timezone-aware crontab scheduling, background execution daemon, full execution logging, and desktop notifications.",
    image: "/images/projects/bcron.jpg",
    technologies: ["Go", "CLI", "TUI", "Cron", "Linux"],
    category: "infrastructure",
    githubUrl: "https://github.com/pawiromitchel/bcron",
    featured: true,
    year: 2026,
  },
  {
    id: "cryptowatcher",
    title: "CryptoWatcher",
    description: "macOS Stocks-style terminal dashboard with high-definition Braille sparklines and multi-feed routing",
    longDescription:
      "A keyboard-driven real-time terminal dashboard built in Go using Bubble Tea and Lipgloss. Inspired by the macOS Stocks widget, featuring 3-row sub-pixel Braille line charts, 24h price range sliders, and multi-feed routing across Coinbase, CoinGecko, and equity markets.",
    image: "/images/projects/cryptowatcher.png",
    technologies: ["Go", "Bubble Tea", "Lipgloss", "TUI", "CLI", "Web3"],
    category: "infrastructure",
    githubUrl: "https://github.com/pawiromitchel/cryptowatcher",
    featured: true,
    year: 2026,
  },
  {
    id: "forexsu",
    title: "ForexSU",
    description: "Real-time PWA aggregator querying 8 bank portals with 5-minute sync and offline caching",
    longDescription:
      "A Progressive Web App aggregating real-time foreign exchange rates across major Surinamese banking institutions. Features automated 5-minute data refresh, offline caching via Service Workers, dark mode, and multi-currency transfer conversions.",
    image: "/images/projects/forexsu.jpg",
    technologies: ["TypeScript", "PWA", "Service Workers", "Node.js", "Web Scraping"],
    category: "fullstack",
    liveUrl: "https://forexsu.co/",
    featured: true,
    year: 2026,
  },
  {
    id: "pawiromitchel-com",
    title: "Portfolio & Engineering Blog",
    description: "Personal website and technical blog built with Next.js 16 and MDX",
    longDescription:
      "A single-page developer portfolio and blog platform built with Next.js 16, TypeScript, Tailwind CSS v4, and MDX. Optimized for static site generation and deployed automatically via GitHub Actions.",
    image: "/images/projects/portfolio.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React", "MDX"],
    category: "fullstack",
    githubUrl: "https://github.com/pawiromitchel/pawiromitchel.com",
    liveUrl: "https://pawiromitchel.com",
    featured: false,
    year: 2024,
  },
  {
    id: "ftx-api-rest-extended",
    title: "FTX API REST Extended",
    description: "Extended REST API trading library for Node.js with 10k+ downloads on npm",
    longDescription:
      "An extended open-source Node.js library for trading operations on FTX REST APIs, implementing missing spot, futures, and subaccount management helper functions.",
    image: "/images/projects/ftx-api.jpg",
    technologies: ["JavaScript", "Node.js", "REST API", "npm"],
    category: "fullstack",
    githubUrl: "https://github.com/pawiromitchel/ftx-api-rest-extended",
    liveUrl: "https://www.npmjs.com/package/ftx-api-rest-extended",
    featured: true,
    year: 2021,
  },
  {
    id: "ftx-telegram-trader",
    title: "FTX Telegram Trader",
    description: "Telegram interface for executing crypto exchange orders",
    longDescription:
      "A lightweight Telegram bot interface enabling real-time order creation, account balance checks, and trade management via automated bot commands.",
    image: "/images/projects/ftx-trader.jpg",
    technologies: ["JavaScript", "Node.js", "Telegram API", "Cryptocurrency"],
    category: "fullstack",
    githubUrl: "https://github.com/pawiromitchel/ftx-telegram-trader",
    featured: false,
    year: 2021,
  },
  {
    id: "defimaxi",
    title: "DefiMaxi",
    description: "DeFi automation tool for monitoring on-chain liquidity and yields",
    longDescription:
      "An automated bot designed to monitor decentralized liquidity pools, track yield farm metrics, and notify users of key on-chain opportunities.",
    image: "/images/projects/defimaxi.jpg",
    technologies: ["JavaScript", "Web3.js", "Ethereum", "DeFi"],
    category: "web3",
    githubUrl: "https://github.com/pawiromitchel/DefiMaxi",
    featured: false,
    year: 2021,
  },
  {
    id: "gas-tracker",
    title: "Gas Tracker",
    description: "Ethereum real-time gas price monitor",
    longDescription:
      "A lightweight browser utility providing real-time Ethereum gas price tracking and gas cost estimates across standard, fast, and instant transaction speeds.",
    image: "/images/projects/gas-tracker.jpg",
    technologies: ["JavaScript", "Ethereum", "Web3.js", "HTML/CSS"],
    category: "web3",
    githubUrl: "https://github.com/pawiromitchel/Gas-Tracker",
    featured: false,
    year: 2021,
  },
  {
    id: "ftx-dca-script",
    title: "FTX DCA Script",
    description: "Automated Dollar-Cost-Averaging script for exchange trading",
    longDescription:
      "A automated trading script implementing disciplined Dollar-Cost-Averaging (DCA) strategies on exchange orderbooks with custom interval scheduling.",
    image: "/images/projects/ftx-dca.jpg",
    technologies: ["JavaScript", "Node.js", "REST API", "Cryptocurrency"],
    category: "fullstack",
    githubUrl: "https://github.com/pawiromitchel/ftx-dca-script",
    featured: false,
    year: 2021,
  },
  {
    id: "suriname-fx-scraper",
    title: "Suriname FX Exchange Scraper",
    description: "Automated FX rate scraper and alert notification bot",
    longDescription:
      "Automated web scraping service that periodically checks local exchange rates across bank portals and broadcasts rate changes to Telegram channels.",
    image: "/images/projects/fx-scraper.jpg",
    technologies: ["JavaScript", "Node.js", "Web Scraping", "Telegram API"],
    category: "fullstack",
    featured: false,
    year: 2022,
  },
];
