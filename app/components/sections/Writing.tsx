import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { PostSummary } from "@/lib/posts";
import { Container } from "../layout/Container";
import { SectionHeading, sectionLinkClass } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

export function PostList({ posts }: { posts: PostSummary[] }) {
  return (
    <ul className="border-t">
      {posts.map((post, i) => (
        <li key={post.slug} className="border-b">
          <Reveal delay={Math.min(i, 4) * 0.04}>
            <Link
              href={`/blogs/${post.slug}`}
              className="group grid gap-1.5 py-6 sm:grid-cols-[150px_minmax(0,1fr)_80px] sm:items-baseline sm:gap-8 sm:py-7"
            >
              <time dateTime={post.metadata.date} className="font-mono text-[13px] text-subtle">
                {post.metadata.date.replaceAll("-", ".")}
                <span className="sm:hidden"> · {post.readingMinutes} min</span>
              </time>
              <div>
                <h3 className="text-lg font-semibold tracking-tight text-balance transition-colors group-hover:text-operate sm:text-xl">
                  {post.metadata.title}
                </h3>
                <p className="mt-1.5 line-clamp-2 text-[15px] leading-relaxed text-muted-foreground text-pretty">
                  {post.metadata.description}
                </p>
              </div>
              <span className="hidden items-center justify-end gap-1.5 font-mono text-xs whitespace-nowrap text-subtle sm:flex">
                {post.readingMinutes} min
                <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}

export function WritingSection({ posts }: { posts: PostSummary[] }) {
  return (
    <section id="writing" className="pb-20 sm:pb-28">
      <Container>
        <SectionHeading
          eyebrow="Writing"
          tone="build"
          title="Notes from building things"
          action={
            <Link href="/blog" className={sectionLinkClass}>
              All posts <ArrowRight className="size-4" />
            </Link>
          }
        />
        <PostList posts={posts} />
      </Container>
    </section>
  );
}
