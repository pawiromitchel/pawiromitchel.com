import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  // Add markdown plugins here, with defaults for GFM and syntax highlighting
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
