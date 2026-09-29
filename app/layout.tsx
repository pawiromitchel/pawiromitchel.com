import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import { Providers } from "./components/Providers";
import { Navigation } from "./components/layout/Navigation";
import { Footer } from "./components/layout/Footer";
import { headshotImage, personalInfo, shareImage, siteUrl } from "./data/personal";
import { awards, certifications, education } from "./data/education";
import "./globals.css";

// Bricolage for headings, Plex Sans for body copy, Plex Mono for dates and labels.
const bricolage = Bricolage_Grotesque({ variable: "--font-bricolage", subsets: ["latin"], weight: ["500", "700"] });
const plexSans = IBM_Plex_Sans({ variable: "--font-plex-sans", subsets: ["latin"], weight: ["400", "500", "600"] });
const plexMono = IBM_Plex_Mono({ variable: "--font-plex-mono", subsets: ["latin"], weight: ["400", "500"] });

const title = `${personalInfo.name} · ${personalInfo.title}`;
const description =
  "Technical Operations Engineer at QuickNode, software engineer before that. I run blockchain node infrastructure, lead a Kubernetes migration and build Go tools.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: `%s · ${personalInfo.name}` },
  description,
  applicationName: personalInfo.name,
  authors: [{ name: personalInfo.name, url: siteUrl }],
  creator: personalInfo.name,
  keywords: [
    "Technical Operations Engineer",
    "Site Reliability",
    "Infrastructure",
    "Kubernetes",
    "Blockchain nodes",
    "Go",
    "QuickNode",
    "Suriname",
  ],
  alternates: { canonical: "/", types: { "application/rss+xml": "/feed.xml" } },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: personalInfo.name,
    title,
    description,
    images: [shareImage],
  },
  twitter: {
    card: "summary_large_image",
    creator: `@${personalInfo.handle}`,
    title,
    description,
    images: [shareImage],
  },
  icons: { apple: "/apple-touch-icon.png" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf8" },
    { media: "(prefers-color-scheme: dark)", color: "#0e0f10" },
  ],
};

// Person + WebSite for search engines. Blog posts add their own BlogPosting.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: personalInfo.name,
      jobTitle: personalInfo.currentRole,
      worksFor: { "@type": "Organization", name: personalInfo.currentCompany, url: personalInfo.currentCompanyUrl },
      url: siteUrl,
      image: `${siteUrl}${headshotImage}`,
      email: `mailto:${personalInfo.email}`,
      address: { "@type": "PostalAddress", addressLocality: "Para", addressCountry: "SR" },
      alumniOf: education.map((e) => ({ "@type": "EducationalOrganization", name: e.issuer })),
      hasCredential: certifications.map((c) => ({ "@type": "EducationalOccupationalCredential", name: c.title })),
      award: awards.map((a) => `${a.title}, ${a.issuer} ${a.year}`),
      knowsAbout: ["Kubernetes", "Blockchain node infrastructure", "Site reliability", "Go", "TypeScript", "Linux"],
      knowsLanguage: ["English", "Dutch"],
      sameAs: Object.values(personalInfo.social),
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: personalInfo.name,
      description,
      publisher: { "@id": `${siteUrl}/#person` },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bricolage.variable} ${plexSans.variable} ${plexMono.variable}`} suppressHydrationWarning>
      <body className="min-h-dvh">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:bg-background focus:px-3 focus:py-2 focus:text-sm focus:shadow"
          >
            Skip to content
          </a>
          <Navigation />
          <main id="main">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
