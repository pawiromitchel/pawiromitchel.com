import type { Metadata } from "next";
import Link from "next/link";
import { readdirSync } from "fs";
import { join } from "path";
import { Navigation } from "@/app/components/layout/Navigation";
import { Footer } from "@/app/components/layout/Footer";
import { Container } from "@/app/components/layout/Container";

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
  } catch {
    throw new Error(`Blog post not found: ${slug}`);
  }
}

export async function generateMetadata(
  props: BlogPageProps
): Promise<Metadata> {
  const params = await props.params;
  const { metadata } = await getBlogPost(params.slug);

  return {
    title: `${metadata.title} - Pawiro Mitchel`,
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
    <>
      <Navigation />
      <main className="pt-24 pb-20 bg-background min-h-screen">
        <Container className="max-w-3xl">
          {/* Back button */}
          <div className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted hover:text-primary transition-colors"
            >
              <span>←</span> Back to all articles
            </Link>
          </div>

          <article>
            {/* Clean, Uncluttered Article Header */}
            <header className="mb-10">
              {/* Category & Date Eyebrow */}
              <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-primary mb-3">
                <span>{metadata.tags[0] || "Engineering"}</span>
                <span className="text-muted/40">•</span>
                <time dateTime={metadata.date} className="text-muted font-normal">
                  {new Date(metadata.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>
              </div>

              {/* Article Title */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-[1.2] mb-5">
                {metadata.title}
              </h1>

              {/* Author Byline & Tags Row */}
              <div className="flex flex-wrap items-center justify-between gap-3 py-3.5 border-y border-border/70 text-xs text-muted">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-foreground">Mitchel Pawirodinomo</span>
                  <span className="text-muted/40">•</span>
                  <span>Technical Operations Engineer</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {metadata.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-full bg-card-bg border border-border text-[11px] text-muted font-mono"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </header>

            {/* Article Content */}
            <div className="prose prose-invert prose-blue max-w-none text-muted leading-relaxed prose-headings:text-foreground prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:border-b prose-h2:border-border/40 prose-h2:pb-2 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:mb-5 prose-p:leading-relaxed prose-a:text-primary hover:prose-a:underline prose-code:text-primary-light prose-code:bg-card-bg prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none prose-pre:bg-[#0b0f17] prose-pre:border prose-pre:border-border prose-pre:rounded-xl prose-li:my-1">
              <Content />
            </div>

            {/* Post-article navigation */}
            <div className="mt-16 pt-8 border-t border-border flex justify-between items-center text-sm">
              <Link
                href="/blog"
                className="font-medium text-primary hover:underline"
              >
                ← Back to all articles
              </Link>
              <Link
                href="/#experience"
                className="font-medium text-muted hover:text-foreground transition-colors"
              >
                View Experience →
              </Link>
            </div>
          </article>
        </Container>
      </main>
      <Footer />
    </>
  );
}
