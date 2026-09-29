import { readFile } from "fs/promises";
import { join } from "path";
import { ImageResponse } from "next/og";
import { personalInfo } from "@/app/data/personal";
import { getPost } from "./posts";

// Build-time images: the Open Graph cards and the Apple touch icon. They're served from
// route handlers with a .png path (app/og.png, app/blogs/[slug]/og.png,
// app/apple-touch-icon.png) because GitHub Pages picks the content type from the
// extension, and crawlers skip images served without one. Colors match globals.css.
export const og = {
  size: { width: 1200, height: 630 },
  background: "#0e0f10",
  foreground: "#edeeef",
  muted: "#a0a6ad",
  border: "#272b30",
  operate: "#4fc27f",
};

type FontSpec = { name: string; family: string; weight: 400 | 500 | 700 };

const fonts: FontSpec[] = [
  { name: "Bricolage Grotesque", family: "Bricolage+Grotesque:opsz,wght@96,700", weight: 700 },
  { name: "IBM Plex Sans", family: "IBM+Plex+Sans:wght@400", weight: 400 },
  { name: "IBM Plex Sans", family: "IBM+Plex+Sans:wght@500", weight: 500 },
  { name: "IBM Plex Mono", family: "IBM+Plex+Mono:wght@400", weight: 400 },
];

// Google Fonts hands plain fetches a TrueType file, which is what the renderer needs.
async function loadFont({ family }: FontSpec): Promise<ArrayBuffer> {
  const css = await (await fetch(`https://fonts.googleapis.com/css2?family=${family}`)).text();
  const url = css.match(/src: url\((.+?)\) format\('(?:truetype|opentype)'\)/)?.[1];
  if (!url) throw new Error(`No TrueType source for ${family}`);
  return (await fetch(url)).arrayBuffer();
}

let cachedFonts: Promise<{ name: string; data: ArrayBuffer; weight: 400 | 500 | 700; style: "normal" }[]> | undefined;

// Loaded once per build. If the network is down the images fall back to the built-in font.
function ogFonts() {
  cachedFonts ??= Promise.all(
    fonts.map(async (font) => ({ name: font.name, data: await loadFont(font), weight: font.weight, style: "normal" as const }))
  ).catch(() => []);
  return cachedFonts;
}

async function headshotDataUrl() {
  const file = await readFile(join(process.cwd(), "public/headshot.jpg"));
  return `data:image/jpeg;base64,${file.toString("base64")}`;
}

// Site address with the green dot, used top-left on every card.
function Brand() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: "IBM Plex Mono", fontSize: 24, color: og.muted }}>
      <div style={{ width: 12, height: 12, borderRadius: 6, background: og.operate }} />
      pawiromitchel.com
    </div>
  );
}

// Dark card with a faint green glow in the top-right corner.
function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 72,
        background: og.background,
        backgroundImage: "radial-gradient(circle at 92% 8%, rgba(79,194,127,0.16), rgba(14,15,16,0) 45%)",
        color: og.foreground,
        fontFamily: "IBM Plex Sans",
      }}
    >
      {children}
    </div>
  );
}

// Home page card: the hero headline, name and role, and the headshot.
export async function homeImage() {
  const [fonts, headshot] = await Promise.all([ogFonts(), headshotDataUrl()]);

  return new ImageResponse(
    (
      <Frame>
        <div style={{ display: "flex", gap: 56, alignItems: "center", flexGrow: 1 }}>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%", flexGrow: 1 }}>
            <Brand />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontFamily: "Bricolage Grotesque",
                fontWeight: 700,
                fontSize: 64,
                lineHeight: 1.02,
                letterSpacing: "-0.03em",
              }}
            >
              <span>I ship software.</span>
              <span style={{ color: og.operate }}>I also run blockchain infra.</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <span style={{ fontSize: 30, fontWeight: 500 }}>{personalInfo.name}</span>
              <span style={{ fontSize: 24, color: og.muted }}>
                {personalInfo.currentRole} at {personalInfo.currentCompany}
              </span>
            </div>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element -- drawn by next/og, not the browser */}
          <img
            src={headshot}
            alt=""
            width={330}
            height={440}
            style={{ objectFit: "cover", objectPosition: "50% 20%", borderRadius: 28, border: `2px solid ${og.border}` }}
          />
        </div>
      </Frame>
    ),
    { ...og.size, fonts }
  );
}

// Blog post card: date and reading time, the title, and a byline with the headshot.
export async function postImage(slug: string) {
  const [{ metadata, readingMinutes }, fonts, headshot] = await Promise.all([getPost(slug), ogFonts(), headshotDataUrl()]);

  return new ImageResponse(
    (
      <Frame>
        <Brand />
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <span style={{ fontFamily: "IBM Plex Mono", fontSize: 24, color: og.operate, letterSpacing: "0.06em" }}>
            {`WRITING · ${metadata.date.replaceAll("-", ".")} · ${readingMinutes} MIN`}
          </span>
          <span
            style={{
              fontFamily: "Bricolage Grotesque",
              fontWeight: 700,
              fontSize: metadata.title.length > 48 ? 58 : 68,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              maxWidth: 1000,
            }}
          >
            {metadata.title}
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {/* eslint-disable-next-line @next/next/no-img-element -- drawn by next/og, not the browser */}
          <img
            src={headshot}
            alt=""
            width={64}
            height={64}
            style={{ objectFit: "cover", objectPosition: "50% 20%", borderRadius: 32 }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 26, fontWeight: 500 }}>{personalInfo.name}</span>
            <span style={{ fontSize: 22, color: og.muted }}>
              {personalInfo.title} at {personalInfo.currentCompany}
            </span>
          </div>
        </div>
      </Frame>
    ),
    { ...og.size, fonts }
  );
}

// Same monogram as icon.svg, drawn full-bleed because iOS rounds the corners itself.
export async function appleTouchIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          background: og.background,
          color: og.foreground,
          fontFamily: "Bricolage Grotesque",
          fontWeight: 700,
          fontSize: 84,
          letterSpacing: "-0.05em",
        }}
      >
        PM
        <div style={{ position: "absolute", top: 20, right: 20, width: 20, height: 20, borderRadius: 10, background: og.operate }} />
      </div>
    ),
    { width: 180, height: 180, fonts: await ogFonts() }
  );
}
