import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { formatDate, getPost, getPostSlugs, getPosts } from "@/lib/posts";
import { personalInfo } from "@/app/data/personal";
import { Container } from "@/app/components/layout/Container";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const { metadata } = await getPost(slug);
  return {
    title: metadata.title,
    description: metadata.description,
    alternates: { canonical: `/blogs/${slug}` },
    openGraph: {
      type: "article",
      title: metadata.title,
      description: metadata.description,
      publishedTime: metadata.date,
      authors: [personalInfo.name],
      tags: metadata.tags,
      url: `/blogs/${slug}`,
      images: ["/opengraph-image.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.description,
      images: ["/opengraph-image.png"],
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const { Content, metadata, readingMinutes } = await getPost(slug);
  const posts = await getPosts();
  const index = posts.findIndex((p) => p.slug === slug);
  const newer = posts[index - 1];
  const older = posts[index + 1];

  return (
    <Container className="max-w-3xl py-12 sm:py-16">
      <Link
        href="/blog"
        className="mb-10 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-4" /> All posts
      </Link>

      <article>
        <header className="mb-10 border-b pb-8">
          <p className="font-mono text-xs text-muted-foreground">
            <time dateTime={metadata.date}>{formatDate(metadata.date, "long")}</time> · {readingMinutes} min read
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">{metadata.title}</h1>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">{metadata.description}</p>
          <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Tags">
            {metadata.tags.map((tag) => (
              <li key={tag}>
                <Badge variant="secondary" className="font-normal">
                  {tag}
                </Badge>
              </li>
            ))}
          </ul>
        </header>

        <div className="prose prose-neutral max-w-none dark:prose-invert prose-headings:font-semibold prose-headings:tracking-tight prose-h2:mt-12 prose-a:text-brand prose-a:underline-offset-4 prose-code:font-normal prose-code:before:content-none prose-code:after:content-none prose-img:rounded-xl prose-img:border">
          <Content />
        </div>
      </article>

      <footer className="mt-16 border-t pt-8">
        <p className="text-sm text-muted-foreground">
          Written by <span className="font-medium text-foreground">{personalInfo.name}</span>, {personalInfo.title} at{" "}
          {personalInfo.currentCompany}. Questions or corrections?{" "}
          <a href={`mailto:${personalInfo.email}`} className="text-brand underline-offset-4 hover:underline">
            Email me
          </a>
          .
        </p>
        <nav aria-label="More posts" className="mt-8 grid gap-4 sm:grid-cols-2">
          {older && (
            <Link href={`/blogs/${older.slug}`} className="group rounded-xl border p-4 transition-colors hover:bg-accent/50">
              <span className="text-xs text-muted-foreground">Older</span>
              <span className="mt-1 block text-sm font-medium group-hover:text-brand">{older.metadata.title}</span>
            </Link>
          )}
          {newer && (
            <Link
              href={`/blogs/${newer.slug}`}
              className="group rounded-xl border p-4 text-right transition-colors hover:bg-accent/50 sm:col-start-2"
            >
              <span className="text-xs text-muted-foreground">Newer</span>
              <span className="mt-1 block text-sm font-medium group-hover:text-brand">{newer.metadata.title}</span>
            </Link>
          )}
        </nav>
      </footer>
    </Container>
  );
}
