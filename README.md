# Pawiro Mitchel - Portfolio Website

A modern, responsive portfolio website showcasing blockchain engineering expertise and web development projects. Built with Next.js 16, TypeScript, and Tailwind CSS.

**Live**: [pawiromitchel.com](https://pawiromitchel.com)

## 🚀 Features

- **Single-Page App Design**: All content sections on one page for optimal UX
- **Dark Theme**: Modern dark color scheme with blue accent
- **Responsive Design**: Mobile-first approach, works on all devices
- **Blog System**: MDX-powered blog with dynamic routing
- **Type-Safe**: Full TypeScript coverage
- **Static Generation**: Optimized for performance with Next.js static generation
- **Component Library**: Reusable UI components (Button, Card, Badge, Timeline, etc.)
- **GitHub Pages Ready**: Automated deployment workflow

## 📋 Tech Stack

- **Framework**: Next.js 16.1.6
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Content**: MDX (Markdown + React)
- **Fonts**: Poppins, Geist
- **Deployment**: GitHub Pages

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/pawiromitchel/pawiromitchel.com.git
cd pawiromitchel.com

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
app/
├── components/
│   ├── layout/         (Navigation, Footer, Container)
│   ├── sections/       (Hero, Stats, Experience, Projects, Skills, Education)
│   └── ui/             (Button, Card, Badge, Timeline, etc.)
├── data/               (Personal, experience, projects, skills, education)
├── blog/               (Blog index page)
├── blogs/              (Dynamic blog posts with MDX)
├── page.tsx            (Home page)
├── layout.tsx          (Root layout)
└── globals.css         (Tailwind theme)

.ai/
├── claude.md           (Project documentation)
└── workflow.md         (Development workflow guidelines)
```

## 📝 Creating Blog Posts

Blog posts are written in MDX format and stored in `app/blogs/`:

```bash
# Create a new blog post
touch app/blogs/my-post.mdx
```

Blog posts should include frontmatter metadata:

```mdx
---
title: "Post Title"
date: "2026-02-02"
description: "Post description"
---

Your content here...
```

## 🎨 Customization

### Colors
Edit `app/globals.css` to modify the color scheme:
- Primary accent: Blue
- Dark background: #0a0a0a
- Light text: #ededed

### Content
Update data files in `app/data/`:
- `personal.ts` - Name, bio, contact info, social links
- `experience.ts` - Work experience and achievements
- `projects.ts` - Portfolio projects
- `skills.ts` - Skills and certifications
- `education.ts` - Education history

### Profile Picture
Replace `public/pfp.jpg` with your own profile image.

## 🚀 Deployment

### GitHub Pages
The project includes an automated GitHub Pages deployment workflow:

```bash
git push  # Automatically deploys on push to main
```

### Other Platforms
Can be deployed to Vercel, Netlify, or any Node.js hosting:

```bash
npm run build
npm start
```

## 📚 Development Workflow

See [.ai/workflow.md](.ai/workflow.md) for development guidelines and best practices.

See [.ai/claude.md](.ai/claude.md) for comprehensive project documentation.

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📖 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [MDX Documentation](https://mdxjs.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## 📄 License

MIT License - feel free to use this as a template for your own portfolio!

## 🤝 Contributing

This is a personal portfolio website, but feel free to fork and customize it for your own use.

---

Built by Mitchel Pawirodinomo | Technical Operations Engineer @ QuickNode
