import type { Metadata } from "next";
import { getPosts } from "@/lib/posts";
import { Container } from "../components/layout/Container";
import { PostList } from "../components/sections/Writing";

export const metadata: Metadata = {
  title: "Writing",
  description: "Write-ups on infrastructure, Go tooling and the side projects I build and self-host.",
  alternates: { canonical: "/blog" },
};

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <Container className="py-16 sm:py-24">
      <header className="mb-12 max-w-2xl">
        <p className="mb-2 font-mono text-xs font-medium tracking-wider text-brand uppercase">Writing</p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Notes from building things</h1>
        <p className="mt-3 text-muted-foreground text-pretty">
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
