# Pawiro Mitchel — Portfolio & Resume

Personal website and software engineering portfolio of Mitchel Pawirodinomo, Technical Operations Engineer at QuickNode.

**Live Website**: [pawiromitchel.com](https://pawiromitchel.com)

## Overview

This repository contains the source code for my personal website, engineering portfolio, and technical blog. It showcases my work in Web3 infrastructure, backend systems, automation, and full-stack development.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Content**: MDX
- **Deployment**: GitHub Pages

## Local Development

### Prerequisites

- Node.js 18+
- npm

### Setup

```bash
# Clone the repository
git clone https://github.com/pawiromitchel/pawiromitchel.com.git
cd pawiromitchel.com

# Install dependencies
npm install

# Run local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

## Available Scripts

- `npm run dev` — Starts the Next.js development server
- `npm run build` — Builds the static export for production deployment
- `npm run start` — Serves the production build locally
- `npm run lint` — Runs ESLint code quality checks

## Project Structure

```text
app/
├── components/      # UI components & section layouts
├── data/            # Structured resume data (experience, projects, skills, education)
├── blog/            # Blog index page
├── blogs/           # Dynamic MDX blog posts
├── page.tsx         # Portfolio homepage
└── globals.css      # Tailwind CSS entrypoint
```

## License

MIT
