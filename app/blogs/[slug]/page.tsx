import type { Metadata } from "next";
import { readdirSync } from "fs";
import { join } from "path";

interface BlogPost {
  title: string;
  description: string;
  date: string;
  tags: string[];
}

interface BlogPageProps {
  params: Promise<{
    slug: string;
  }>;
}

async function getBlogPost(slug: string): Promise<{
  content: React.ComponentType;
  metadata: BlogPost;
}> {
  try {
    const post = await import(`@/app/blogs/${slug}.mdx`);
    return {
      content: post.default,
      metadata: post.metadata,
    };
  } catch (error) {
    throw new Error(`Blog post not found: ${slug}`);
  }
}

export async function generateMetadata(
  props: BlogPageProps
): Promise<Metadata> {
  const params = await props.params;
  const { metadata } = await getBlogPost(params.slug);

  return {
    title: metadata.title,
    description: metadata.description,
  };
}

export async function generateStaticParams() {
  const blogsDir = join(process.cwd(), "app/blogs");
  const files = readdirSync(blogsDir);

  return files
    .filter((file) => file.endsWith(".mdx") && !file.includes("["))
    .map((file) => ({
      slug: file.replace(".mdx", ""),
    }));
}

export default async function BlogPage(props: BlogPageProps) {
  const params = await props.params;
  const { content: Content, metadata } = await getBlogPost(params.slug);

  return (
    <article className="prose prose-invert max-w-2xl mx-auto">
      <header className="mb-8">
        <h1>{metadata.title}</h1>
        <p className="text-gray-400 text-sm">
          {new Date(metadata.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <div className="flex gap-2 mt-4">
          {metadata.tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>
      <Content />
    </article>
  );
}
