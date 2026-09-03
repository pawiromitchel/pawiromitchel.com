import type { Metadata } from "next";
import { Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pawiromitchel.com"),
  title: {
    default: "Pawiro Mitchel - Blockchain Infrastructure Engineer | Web3 Developer",
    template: "%s | Pawiro Mitchel",
  },
  description:
    "Portfolio of Pawiro Mitchel, a blockchain infrastructure engineer and Web3 developer with 10+ years of experience in Web3, DevOps, and full-stack development. Specializing in Ethereum, Node.js, Go, and cloud infrastructure.",
  keywords: [
    "blockchain",
    "Web3",
    "infrastructure",
    "developer",
    "engineer",
    "Node.js",
    "Go",
    "Golang",
    "Ethereum",
    "DevOps",
    "full-stack",
    "cloud infrastructure",
    "Kubernetes",
    "Docker",
    "smart contracts",
    "distributed systems",
  ],
  authors: [{ name: "Pawiro Mitchel", url: "https://pawiromitchel.com" }],
  creator: "Pawiro Mitchel",
  publisher: "Pawiro Mitchel",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pawiromitchel.com",
    siteName: "Pawiro Mitchel - Portfolio",
    title: "Pawiro Mitchel - Blockchain Infrastructure Engineer | Web3 Developer",
    description:
      "Portfolio of Pawiro Mitchel, a blockchain infrastructure engineer and Web3 developer with 10+ years of experience in Web3, DevOps, and full-stack development. Specializing in Ethereum, Node.js, Go, and cloud infrastructure.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pawiro Mitchel - Blockchain Infrastructure Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@pawiromitchel",
    creator: "@pawiromitchel",
    title: "Pawiro Mitchel - Blockchain Infrastructure Engineer | Web3 Developer",
    description:
      "Portfolio of Pawiro Mitchel, a blockchain infrastructure engineer and Web3 developer with 10+ years of experience in Web3, DevOps, and full-stack development.",
    images: ["/twitter-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "verification_token",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://pawiromitchel.com/#person",
        name: "Pawiro Mitchel",
        url: "https://pawiromitchel.com",
        image: {
          "@type": "ImageObject",
          url: "https://pawiromitchel.com/profile.jpg",
          width: 400,
          height: 400,
        },
        sameAs: [
          "https://github.com/pawiromitchel",
          "https://linkedin.com/in/pawiromitchel",
          "https://twitter.com/pawiromitchel",
        ],
        jobTitle: "Blockchain Infrastructure Engineer",
        worksFor: {
          "@type": "Organization",
          name: "Web3 Industry",
        },
        knowsAbout: [
          "Blockchain",
          "Web3",
          "Ethereum",
          "Node.js",
          "Go",
          "DevOps",
          "Cloud Infrastructure",
          "Full-stack Development",
        ],
        description:
          "Blockchain infrastructure engineer and Web3 developer with 10+ years of experience in Web3, DevOps, and full-stack development.",
      },
      {
        "@type": "WebSite",
        "@id": "https://pawiromitchel.com/#website",
        url: "https://pawiromitchel.com",
        name: "Pawiro Mitchel - Portfolio",
        description:
          "Portfolio of Pawiro Mitchel, a blockchain infrastructure engineer and Web3 developer.",
        publisher: {
          "@id": "https://pawiromitchel.com/#person",
        },
        inLanguage: "en-US",
      },
      {
        "@type": "ProfilePage",
        "@id": "https://pawiromitchel.com/#profilepage",
        url: "https://pawiromitchel.com",
        name: "Pawiro Mitchel - Blockchain Infrastructure Engineer | Web3 Developer",
        isPartOf: {
          "@id": "https://pawiromitchel.com/#website",
        },
        about: {
          "@id": "https://pawiromitchel.com/#person",
        },
        description:
          "Portfolio of Pawiro Mitchel, a blockchain infrastructure engineer and Web3 developer with 10+ years of experience in Web3, DevOps, and full-stack development.",
        inLanguage: "en-US",
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon-32x32.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${poppins.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
