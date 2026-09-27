import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  options: {
    remarkPlugins: ["remark-gfm"],
    // Plugin options must be plain JSON so Turbopack can serialize them.
    rehypePlugins: [
      [
        "rehype-pretty-code",
        { theme: { light: "github-light", dark: "github-dark-dimmed" }, keepBackground: false, defaultLang: { block: "plaintext" } },
      ],
    ],
  },
});

const nextConfig: NextConfig = withMDX({
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  output: "export",
  basePath: "",
  images: {
    unoptimized: true,
  },
});

export default nextConfig;
