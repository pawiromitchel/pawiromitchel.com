import type { Metadata } from "next";
import { getPosts } from "@/lib/posts";
import { shareImage } from "../data/personal";
import { Container } from "../components/layout/Container";
import { PostList } from "../components/sections/Writing";

const description = "Write-ups on infrastructure, Go tooling and the side projects I build and self-host.";

export const metadata: Metadata = {
  title: "Writing",
  description,
  alternates: { canonical: "/blog", types: { "application/rss+xml": "/feed.xml" } },
  openGraph: { title: "Writing", description, url: "/blog", type: "website", images: [shareImage] },
  twitter: { card: "summary_large_image", title: "Writing", description, images: [shareImage] },
};

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <Container className="py-16 sm:py-24">
      <header className="mb-12 max-w-2xl">
        <p className="mb-3 font-mono text-xs font-medium tracking-widest text-build uppercase sm:text-[13px]">Writing</p>
        <h1 className="font-heading text-4xl font-bold tracking-[-0.03em] sm:text-5xl">Notes from building things</h1>
        <p className="mt-4 text-muted-foreground text-pretty sm:text-lg">
          How my side projects work under the hood, plus infrastructure and tooling notes. {posts.length} posts so far.
        </p>
      </header>
      {posts.length > 0 ? (
        <PostList posts={posts} />
      ) : (
        <p className="text-muted-foreground">No posts yet.</p>
      )}
    </Container>
  );
}
