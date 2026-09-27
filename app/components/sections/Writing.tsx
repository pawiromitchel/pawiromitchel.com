import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { formatDate, type PostSummary } from "@/lib/posts";
import { Container } from "../layout/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

export function PostList({ posts }: { posts: PostSummary[] }) {
  return (
    <ul className="divide-y border-y">
      {posts.map((post, i) => (
        <li key={post.slug}>
          <Reveal delay={Math.min(i, 4) * 0.04}>
            <Link
              href={`/blogs/${post.slug}`}
              className="group grid gap-1 py-6 sm:grid-cols-[140px_1fr_auto] sm:gap-8"
            >
              <time dateTime={post.metadata.date} className="font-mono text-xs text-muted-foreground sm:pt-1">
                {formatDate(post.metadata.date)}
              </time>
              <div>
                <h3 className="font-medium tracking-tight text-balance transition-colors group-hover:text-brand">
                  {post.metadata.title}
                </h3>
                <p className="mt-1.5 line-clamp-2 text-sm text-muted-foreground text-pretty">
                  {post.metadata.description}
                </p>
              </div>
              <span className="hidden items-center gap-1 pt-1 text-xs whitespace-nowrap text-muted-foreground sm:flex">
                {post.readingMinutes} min
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
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
    <section id="writing" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Writing"
          title="Notes from building things"
          description="Long-form write-ups on the projects above, plus infrastructure and tooling notes."
          action={
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              All posts <ArrowRight className="size-4" />
            </Link>
          }
        />
        <PostList posts={posts} />
      </Container>
    </section>
  );
}
