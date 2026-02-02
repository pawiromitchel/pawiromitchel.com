
# Portfolio Website Structure

## Project Setup
- **Framework**: Next.js
- **Blog**: MDX
- **Styling**: Tailwind CSS (recommended)

## Directory Structure
```
├── pages/
│   ├── index.tsx                 # Home/Hero
│   ├── about.tsx                 # About me
│   ├── projects/
│   │   ├── index.tsx             # Projects listing
│   │   └── [slug].tsx            # Project detail (dynamic)
│   ├── blog/
│   │   ├── index.tsx             # Blog listing
│   │   └── [slug].tsx            # Blog post (dynamic)
│   └── contact.tsx               # Contact form
├── content/
│   ├── projects/                 # Project data
│   │   ├── project-1.mdx
│   │   └── project-2.mdx
│   └── blog/                      # MDX blog posts
│       ├── post-1.mdx
│       └── post-2.mdx
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Navigation.tsx
│   ├── ProjectCard.tsx
│   └── ProjectDetail.tsx
└── public/
    └── assets/                   # Images, icons
```

## Key Pages
1. **Home** - Hero section, intro, featured projects
2. **About** - Background in SWE, Support Eng, DevOps/Web3
3. **Projects** - Dynamic portfolio showcase with title, description, link
4. **Blog** - Articles on Web3, technical topics
5. **Contact** - Email form or links

## Implementation Tips
- Use `next-mdx-remote` or `@next/mdx` for MDX setup
- Create utilities to parse projects and blog posts
- Add frontmatter (title, description, link, tags) to project MDX files
- Implement dark mode support

