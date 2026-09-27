import { readdirSync, readFileSync } from "fs";
import { join } from "path";

export interface PostMetadata {
  title: string;
  description: string;
  date: string;
  tags: string[];
}

export interface PostSummary {
  slug: string;
  metadata: PostMetadata;
  readingMinutes: number;
}

const postsDir = join(process.cwd(), "app/blogs");

export function getPostSlugs(): string[] {
  return readdirSync(postsDir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

function readingMinutes(slug: string): number {
  const source = readFileSync(join(postsDir, `${slug}.mdx`), "utf8");
  const words = source.replace(/```[\s\S]*?```/g, " ").split(/\s+/).length;
  return Math.max(1, Math.round(words / 230));
}

export async function getPost(slug: string) {
  const post = await import(`@/app/blogs/${slug}.mdx`);
  return {
    Content: post.default as React.ComponentType,
    metadata: post.metadata as PostMetadata,
    readingMinutes: readingMinutes(slug),
  };
}

// All posts, newest first.
export async function getPosts(): Promise<PostSummary[]> {
  const posts = await Promise.all(
    getPostSlugs().map(async (slug) => {
      const { metadata, readingMinutes } = await getPost(slug);
      return { slug, metadata, readingMinutes };
    })
  );
  return posts.sort(
    (a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
  );
}

export function formatDate(date: string, month: "short" | "long" = "short") {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month,
    day: "numeric",
    timeZone: "UTC",
  });
}
