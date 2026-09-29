import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "./components/layout/Container";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-start justify-center py-24">
      <p className="font-mono text-sm text-operate">404</p>
      <h1 className="mt-2 font-heading text-4xl font-bold tracking-[-0.03em]">This page doesn&apos;t exist</h1>
      <p className="mt-3 text-muted-foreground">The link may be old, or the post may have moved.</p>
      <div className="mt-8 flex gap-2">
        <Button asChild>
          <Link href="/">Go home</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/blog">Read the blog</Link>
        </Button>
      </div>
    </Container>
  );
}
