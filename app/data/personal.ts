export const siteUrl = "https://pawiromitchel.com";

export const personalInfo = {
  name: "Mitchel Pawirodinomo",
  handle: "pawiromitchel",
  title: "Technical Operations Engineer",
  currentRole: "Technical Operations Engineer II",
  currentCompany: "QuickNode",
  currentCompanyUrl: "https://www.quicknode.com",
  headline: "I keep blockchain infrastructure fast and boring.",
  bio: "I work on QuickNode's blockchain node infrastructure: leading our Kubernetes migration, rolling out client upgrades and new chains, and sharing on-call. Before that I spent years shipping web platforms, and I still build Go tools and self-hosted products on the side.",
  location: "Para, Suriname",
  timezone: "UTC−3",
  email: "pawiromitchel@gmail.com",
  cvUrl: "https://apexcvbuilder.com/view/mitchel-cv",
  social: {
    github: "https://github.com/pawiromitchel",
    linkedin: "https://www.linkedin.com/in/mitchel-pawirodinomo",
    x: "https://x.com/pawiromitchel",
  },
};

export const profileImage = "/pfp.jpg";
export const headshotImage = "/headshot.jpg";

// Default social share card, generated at build time by app/og.png/route.tsx.
export const shareImage = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: `${personalInfo.name}, ${personalInfo.title} at ${personalInfo.currentCompany}`,
};
