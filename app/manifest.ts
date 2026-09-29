import type { MetadataRoute } from "next";
import { personalInfo } from "./data/personal";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${personalInfo.name} · ${personalInfo.title}`,
    short_name: personalInfo.name,
    description: "Portfolio, projects and writing.",
    start_url: "/",
    display: "browser",
    background_color: "#0e0f10",
    theme_color: "#0e0f10",
    icons: [
      { src: "/icon.svg", type: "image/svg+xml", sizes: "any" },
      { src: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" },
    ],
  };
}
