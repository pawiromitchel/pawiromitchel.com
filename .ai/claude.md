# Portfolio Website Development

**Project**: pawiromitchel.com - Blockchain Engineer Portfolio
**Status**: Active Development
**Last Updated**: February 2, 2026

## Current Status

### Architecture
- **Framework**: Next.js 16.1.6 with App Router
- **Styling**: Tailwind CSS v4 with typography plugin
- **Content**: MDX support with sample blog post
- **Theme**: Dark theme with blue accent color
- **Structure**: Single-page app (SPA) with responsive design

### Content Profile
- **Name**: Mitchel Pawirodinomo
- **Title**: Technical Operations Engineer | Web3 Developer
- **Current Role**: Technical Operations Engineer at QuickNode
- **Experience**: 10+ years
- **Companies**: 5 organizations (CareerIT, Bit Dynamics, Alembo, INFINITRI, QuickNode)
- **Key Skills**: TypeScript, Go, Python, Web3, Kubernetes, DevOps
- **Social**: GitHub, LinkedIn, Twitter
- **Tech Timeline**: 2014-2017 (PHP/WordPress) → 2017-2021 (Angular/Node.js) → 2021-present (Go/TypeScript/Web3)

### Recent Changes
- ✅ Changed primary color from teal (#54ca95) to blue
- ✅ Implemented dark theme for better readability
- ✅ Restructured to single-page app with improved UX
- ✅ Added profile picture to hero section
- ✅ GitHub Pages deployment workflow configured
- ✅ Fixed email in "Get In Touch" button to pawiromitchel@gmail.com

## Project Structure

### Pages
- **`/`** - Home page (single-page app with all content sections)
- **`/blog`** - Blog index with article listings
- **`/blogs/[slug]`** - Dynamic blog post pages with MDX support

### Components
**UI Components** (`app/components/ui/`):
- Button (primary, secondary, ghost variants)
- Card with sub-components (CardImage, CardTitle, CardDescription)
- Badge & BadgeGroup
- SectionHeading with accent lines
- Timeline (vertical & horizontal)
- AnimatedText

**Layout Components** (`app/components/layout/`):
- Navigation (fixed header, mobile hamburger menu)
- Footer (social links, copyright)
- Container (responsive max-width wrapper)

**Section Components** (`app/components/sections/`):
- Hero (profile intro, CTAs, profile picture)
- Stats (key metrics display)
- Experience (company timeline)
- Projects (portfolio grid)
- Skills (categorized skills)
- Education (education timeline)

### Data Layer (`app/data/`)
- `personal.ts` - Personal info, social links, stats, contact email
- `experience.ts` - 5 companies with dates, descriptions, achievements, tech stack
- `projects.ts` - Portfolio projects with descriptions and links
- `skills.ts` - 50+ skills across categories + certifications
- `education.ts` - Education history and tech evolution

## Tech Stack

- **Framework**: Next.js 16.1.6 with App Router
- **UI**: React 19.2.3
- **Styling**: Tailwind CSS v4 (CSS-based configuration)
- **Content**: MDX support (@next/mdx, @mdx-js/loader, @mdx-js/react)
- **Language**: TypeScript (fully typed)
- **Fonts**: Poppins, Geist Sans/Mono
- **Deployment**: GitHub Pages with automated workflow

## Design System

**Color Scheme** (Dark Theme):
- Primary Accent: Blue (current color focus)
- Background: #0a0a0a (dark)
- Foreground: #ededed (light text)
- Secondary text: #999999
- Border: subtle, dark-themed
- Card Background: Dark with subtle contrast

**Typography**:
- Primary Font: Poppins
- Heading hierarchy: h1-h6 with proper sizing
- Line height: 1.75 for readability
- Font weights: 300, 400, 500, 600, 700
- Responsive sizing with breakpoints

**Spacing & Layout**:
- Section Padding: py-24 (7.5rem)
- Component gaps: gap-12 (3rem)
- Container: max-w-6xl mx-auto with responsive padding
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Mobile-first responsive approach

## Architectural Decisions

1. **Single Page App**: All content sections on home page for better UX and faster navigation
2. **Component Organization**: Separated into layout, sections, and UI components for maintainability
3. **Data Layer**: TypeScript interfaces and separate data files for type safety and reusability
4. **MDX for Blog**: Markdown + React for flexible blog post content
5. **Dark Theme**: Default dark theme for modern, eye-friendly interface
6. **Static Generation**: Next.js static generation for optimal performance and deployment
7. **Tailwind CSS v4**: CSS-based configuration for simpler setup and better tree-shaking
8. **Mobile-First Design**: Responsive from smallest screens up, testing on mobile first

## File Structure

```
pawiromitchel.com/
├── app/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navigation.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Container.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── Stats.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Skills.tsx
│   │   │   └── Education.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── Badge.tsx
│   │       ├── SectionHeading.tsx
│   │       ├── Timeline.tsx
│   │       └── AnimatedText.tsx
│   ├── data/
│   │   ├── personal.ts
│   │   ├── experience.ts
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   └── education.ts
│   ├── blog/
│   │   └── page.tsx
│   ├── blogs/
│   │   ├── [slug]/
│   │   │   └── page.tsx
│   │   └── welcome.mdx
│   ├── page.tsx           (Home - single page app)
│   ├── layout.tsx         (Root layout)
│   └── globals.css        (Tailwind + theme)
├── public/
│   ├── pfp.jpg           (Profile picture)
│   └── [other assets]
├── .ai/
│   ├── claude.md         (This file - project notes)
│   └── workflow.md       (Development workflow guidelines)
├── package.json
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

## Implementation Status

### ✅ Completed
- **Foundation**: Next.js 16, TypeScript, Tailwind CSS v4 setup
- **Data Layer**: All personal, experience, projects, skills, education data structured
- **UI Components**: Full component library (Button, Card, Badge, Timeline, etc.)
- **Layout**: Navigation with mobile menu, Footer, responsive Container
- **Home Page**: Single-page app with all sections integrated
- **Blog System**: MDX support with sample blog post (welcome.mdx)
- **Dark Theme**: Implemented dark color scheme for better readability
- **Responsive Design**: Mobile-first design, tested across breakpoints
- **Profile Picture**: Added to hero section (pfp.jpg)
- **Contact Email**: Updated to pawiromitchel@gmail.com
- **Deployment**: GitHub Pages workflow configured
- **Type Safety**: Full TypeScript coverage, no build errors

### Latest Commits
- 445e77f - feat: add profile picture to hero section
- cd18072 - fix: update github pages deployment workflow
- cadf3db - refactor: restructure to single-page app with improved UX
- 162f983 - feat: change primary color from teal to blue
- 19ae747 - feat: switch to dark theme for better readability

## Next Steps & Roadmap

### Content & Blog
- [ ] Migrate existing blog posts to MDX format
- [ ] Add blog post images and assets
- [ ] Implement blog post categories/tags
- [ ] Add estimated read time to posts

### Design & UX
- [ ] Fine-tune dark theme colors for better contrast
- [ ] Add scroll animations with Intersection Observer
- [ ] Implement page transitions
- [ ] Add loading states where needed

### Performance & SEO
- [ ] Run Lighthouse audit
- [ ] Optimize images and assets
- [ ] Add sitemap.xml
- [ ] Implement structured data (JSON-LD)
- [ ] Verify all metadata is complete

### Testing & Quality
- [ ] Cross-browser testing
- [ ] Mobile device testing
- [ ] Accessibility audit (WCAG compliance)
- [ ] Form validation testing
- [ ] Performance benchmarking

### Deployment & Maintenance
- [ ] Test GitHub Pages deployment
- [ ] Set up proper domain configuration
- [ ] Add analytics tracking
- [ ] Create maintenance documentation

## Build & Routes

**Routes Generated**:
- `/` - Home page (all content on single page)
- `/blog` - Blog index
- `/blogs/[slug]` - Dynamic blog posts with SSG

**Build Status**:
- ✓ Clean build with no errors or warnings
- ✓ All TypeScript files type-checked
- ✓ Static generation optimized
- ✓ Image optimization enabled
- ✓ Mobile responsive verified

## Development Guidelines

### Code Standards
- TypeScript for type safety
- React functional components with hooks
- Component-level organization
- Tailwind CSS for styling
- Mobile-first responsive design
- Semantic HTML for accessibility

### Component Patterns
- Export named components
- Props interfaces for type safety
- Reusable, composable UI elements
- Consistent spacing and sizing
- Accessible color contrasts

### Performance Considerations
- Static generation where possible
- Image optimization via Next.js
- CSS-based Tailwind (no runtime overhead)
- Code splitting for blog routes
- Efficient re-renders with proper React patterns

---

## Quick Reference

**Setup & Dependencies**:
- `npm install` - Install dependencies
- `npm run dev` - Start development server
- `npm run build` - Production build
- `npm run lint` - Run linting

**File Locations**:
- Components: `app/components/`
- Data: `app/data/`
- Blog posts: `app/blogs/` (MDX files)
- Styles: `app/globals.css`
- Public assets: `public/`

**Key Files**:
- Contact email: `app/data/personal.ts` (line 9)
- Experience data: `app/data/experience.ts`
- Projects data: `app/data/projects.ts`
- Hero section: `app/components/sections/Hero.tsx` (Get In Touch button)
