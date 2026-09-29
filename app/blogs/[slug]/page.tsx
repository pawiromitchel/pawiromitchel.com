import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { getPost, getPostSlugs, getPosts } from "@/lib/posts";
import { headshotImage, personalInfo, siteUrl } from "@/app/data/personal";
import { Container } from "@/app/components/layout/Container";
import { HoverLift } from "@/app/components/ui/HoverLift";
import { ReadingProgress } from "@/app/components/ui/ReadingProgress";

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
  const image = { url: `/blogs/${slug}/og.png`, width: 1200, height: 630, alt: metadata.title };
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
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.description,
      images: [image],
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
  const url = `${siteUrl}/blogs/${slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: metadata.title,
    description: metadata.description,
    datePublished: metadata.date,
    keywords: metadata.tags.join(", "),
    url,
    mainEntityOfPage: url,
    image: `${url}/og.png`,
    author: { "@id": `${siteUrl}/#person` },
    publisher: { "@id": `${siteUrl}/#person` },
    inLanguage: "en",
  };

  return (
    <Container className="max-w-3xl py-12 sm:py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ReadingProgress />
      <Link
        href="/blog"
        className="mb-12 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-4" /> All posts
      </Link>

      <article>
        <header className="mb-12 border-b pb-10">
          <p className="animate-enter font-mono text-xs tracking-widest text-operate uppercase sm:text-[13px]">
            <time dateTime={metadata.date}>{metadata.date.replaceAll("-", ".")}</time> · {readingMinutes} min read
          </p>
          <h1
            className="animate-enter mt-4 font-heading text-4xl leading-[1.05] font-bold tracking-[-0.03em] text-balance sm:text-5xl"
            style={{ "--delay": 80 } as CSSProperties}
          >
            {metadata.title}
          </h1>
          <p
            className="animate-enter mt-5 text-lg leading-relaxed text-muted-foreground text-pretty"
            style={{ "--delay": 160 } as CSSProperties}
          >
            {metadata.description}
          </p>
          <div className="animate-enter mt-7 flex flex-wrap items-center justify-between gap-4" style={{ "--delay": 240 } as CSSProperties}>
            <div className="flex items-center gap-3">
              <Image
                src={headshotImage}
                alt=""
                width={40}
                height={40}
                className="size-10 rounded-full object-cover object-[50%_20%]"
              />
              <div className="text-sm leading-tight">
                <p className="font-medium">{personalInfo.name}</p>
                <p className="text-subtle">
                  {personalInfo.title} at {personalInfo.currentCompany}
                </p>
              </div>
            </div>
            <ul className="flex flex-wrap gap-1.5" aria-label="Tags">
              {metadata.tags.map((tag) => (
                <li key={tag}>
                  <Badge variant="outline" className="font-mono font-normal text-muted-foreground">
                    {tag}
                  </Badge>
                </li>
              ))}
            </ul>
          </div>
        </header>

        <div className="prose prose-neutral max-w-none dark:prose-invert prose-headings:font-heading prose-headings:font-bold prose-headings:tracking-[-0.02em] prose-h2:mt-14 prose-a:text-operate prose-a:underline-offset-4 prose-code:font-normal prose-code:before:content-none prose-code:after:content-none prose-img:rounded-xl prose-img:border sm:prose-lg">
          <Content />
        </div>
      </article>

      <footer className="mt-20 border-t pt-10">
        <p className="text-muted-foreground">
          Written by <span className="font-medium text-foreground">{personalInfo.name}</span>, {personalInfo.title} at{" "}
          {personalInfo.currentCompany}. Questions or corrections?{" "}
          <a href={`mailto:${personalInfo.email}`} className="text-operate underline-offset-4 hover:underline">
            Email me
          </a>
          .
        </p>
        <nav aria-label="More posts" className="mt-8 grid gap-4 sm:grid-cols-2">
          {older && (
            <HoverLift lift={3}>
              <Link href={`/blogs/${older.slug}`} className="group flex h-full flex-col rounded-2xl border bg-card p-5">
                <span className="flex items-center gap-1.5 font-mono text-xs text-subtle">
                  <ArrowLeft className="size-3.5" /> Older
                </span>
                <span className="mt-2 font-medium text-balance transition-colors group-hover:text-operate">
                  {older.metadata.title}
                </span>
              </Link>
            </HoverLift>
          )}
          {newer && (
            <HoverLift lift={3} className="sm:col-start-2">
              <Link href={`/blogs/${newer.slug}`} className="group flex h-full flex-col items-end rounded-2xl border bg-card p-5 text-right">
                <span className="flex items-center gap-1.5 font-mono text-xs text-subtle">
                  Newer <ArrowRight className="size-3.5" />
                </span>
                <span className="mt-2 font-medium text-balance transition-colors group-hover:text-operate">
                  {newer.metadata.title}
                </span>
              </Link>
            </HoverLift>
          )}
        </nav>
      </footer>
    </Container>
  );
}
