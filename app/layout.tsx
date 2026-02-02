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
  title: "Pawiro Mitchel - Blockchain Infrastructure Engineer | Web3 Developer",
  description:
    "Portfolio of Pawiro Mitchel, a blockchain infrastructure engineer and Web3 developer with 10+ years of experience in Web3, DevOps, and full-stack development.",
  keywords: [
    "blockchain",
    "Web3",
    "infrastructure",
    "developer",
    "engineer",
    "Node.js",
    "Go",
    "Ethereum",
  ],
  authors: [{ name: "Pawiro Mitchel" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pawiromitchel.com",
    siteName: "Pawiro Mitchel",
    title: "Pawiro Mitchel - Blockchain Infrastructure Engineer",
    description:
      "Portfolio of Pawiro Mitchel, a blockchain infrastructure engineer and Web3 developer.",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@pawiromitchel",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
