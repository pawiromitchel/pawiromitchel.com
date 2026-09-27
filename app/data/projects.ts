export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  postSlug?: string;
  year: number;
}

// Shown in order on the homepage; the first one gets the large card.
export const projects: Project[] = [
  {
    id: "cashly",
    title: "Cashly",
    tagline: "Self-hosted finance for fiat and crypto",
    description:
      "A private ledger that parses bank notification emails, tracks multi-currency cash and crypto balances, and projects runway. A Go daemon on SQLite, a Next.js client, and a Gemini-powered assistant for market analysis and automation.",
    image: "/images/projects/cashly-site.jpg",
    imageAlt: "Cashly landing page with net worth, monthly spend and runway cards",
    stack: ["Go", "Next.js", "SQLite", "Tailwind", "Gemini"],
    liveUrl: "https://cashlyfinance.com/",
    postSlug: "building-cashly-multi-asset-financial-intelligence-engine",
    year: 2026,
  },
  {
    id: "apexcv",
    title: "ApexCV Builder",
    tagline: "A calm resume builder",
    description:
      "Guided CV editor with a live preview, multiple templates, PDF export and shareable links. No account needed.",
    image: "/images/projects/apexcv.jpg",
    imageAlt: "ApexCV Builder landing page showing the editor next to a live CV preview",
    stack: ["Go", "Next.js", "SQLite", "Tailwind"],
    liveUrl: "https://apexcvbuilder.com/",
    year: 2026,
  },
  {
    id: "bcron",
    title: "bcron",
    tagline: "Cron with logs, a daemon and a TUI",
    description:
      "A Go replacement for crontab: timezone-aware schedules, a background daemon, full run history and desktop notifications, all managed from an interactive terminal UI.",
    image: "/images/projects/bcron.jpg",
    imageAlt: "bcron terminal UI listing scheduled jobs and their last runs",
    stack: ["Go", "Bubble Tea", "Linux"],
    githubUrl: "https://github.com/pawiromitchel/bcron",
    postSlug: "architecting-bcron-go-tui-task-scheduler",
    year: 2026,
  },
  {
    id: "cryptowatcher",
    title: "CryptoWatcher",
    tagline: "Stocks-widget dashboard for the terminal",
    description:
      "Keyboard-driven market dashboard with Braille sparklines, routing crypto and equity tickers across several price feeds.",
    image: "/images/projects/cryptowatcher.jpg",
    imageAlt: "CryptoWatcher terminal grid of crypto and stock tickers with sparklines",
    stack: ["Go", "Bubble Tea", "Lipgloss"],
    githubUrl: "https://github.com/pawiromitchel/cryptowatcher",
    postSlug: "building-cryptowatcher-macos-stocks-terminal-dashboard",
    year: 2026,
  },
  {
    id: "forexsu",
    title: "ForexSU",
    tagline: "Exchange rates from 8 Surinamese banks",
    description:
      "Installable PWA that scrapes USD and EUR rates from local banks every few minutes and works offline.",
    image: "/images/projects/forexsu.jpg",
    imageAlt: "ForexSU table comparing USD and EUR buy and sell rates per bank",
    stack: ["TypeScript", "Node.js", "PWA"],
    liveUrl: "https://forexsu.co/",
    postSlug: "resilient-scraping-and-pwa-architecture-forexsu",
    year: 2026,
  },
];
