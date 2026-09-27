import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "./components/Providers";
import { Navigation } from "./components/layout/Navigation";
import { Footer } from "./components/layout/Footer";
import { personalInfo, siteUrl } from "./data/personal";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const title = `${personalInfo.name} · ${personalInfo.title}`;
const description =
  "Technical Operations Engineer at QuickNode working on blockchain node infrastructure, Kubernetes and Go tooling. Portfolio, projects and writing.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: `%s · ${personalInfo.name}` },
  description,
  authors: [{ name: personalInfo.name, url: siteUrl }],
  creator: personalInfo.name,
  keywords: [
    "Technical Operations Engineer",
    "Infrastructure",
    "Kubernetes",
    "Go",
    "Blockchain",
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
  },
  twitter: {
    card: "summary_large_image",
    creator: `@${personalInfo.handle}`,
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fcfcfd" },
    { media: "(prefers-color-scheme: dark)", color: "#111318" },
  ],
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personalInfo.name,
  jobTitle: personalInfo.title,
  worksFor: { "@type": "Organization", name: personalInfo.currentCompany },
  url: siteUrl,
  email: `mailto:${personalInfo.email}`,
  address: { "@type": "PostalAddress", addressCountry: "SR" },
  sameAs: Object.values(personalInfo.social),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body className="min-h-dvh">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
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
