import Link from "next/link";
import { Navigation } from "../components/layout/Navigation";
import { Footer } from "../components/layout/Footer";
import { Container } from "../components/layout/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Card, CardTitle, CardDescription } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { readdirSync } from "fs";
import { join } from "path";

interface BlogMetadata {
  title: string;
  description: string;
  date: string;
  tags: string[];
}

async function getBlogPosts(): Promise<
  Array<{
    slug: string;
    metadata: BlogMetadata;
  }>
> {
  const blogsDir = join(process.cwd(), "app/blogs");
  const files = readdirSync(blogsDir);

  const posts: Array<{ slug: string; metadata: BlogMetadata }> = [];

  for (const file of files) {
    if (file.endsWith(".mdx") && !file.includes("[")) {
      try {
        const post = await import(`@/app/blogs/${file}`);
        const slug = file.replace(".mdx", "");
        posts.push({
          slug,
          metadata: post.metadata,
        });
      } catch (error) {
        console.error(`Error loading blog post: ${file}`);
      }
    }
  }

  // Sort by date, newest first
  return posts.sort(
    (a, b) =>
      new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
  );
}

export const metadata = {
  title: "Blog - Pawiro Mitchel",
  description:
    "Articles and tutorials about blockchain, Web3, infrastructure, and full-stack development",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <>
      <Navigation />
      <main className="pt-20 bg-background min-h-screen">
        <Container className="py-12">
          <SectionHeading
            centered
            subtitle="Thoughts and tutorials on blockchain, infrastructure, and development"
          >
            Blog
          </SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blogs/${post.slug}`}>
                <Card
                  padding="md"
                  hover
                  className="h-full flex flex-col justify-between"
                >
                  <div>
                    <CardTitle>{post.metadata.title}</CardTitle>
                    <CardDescription className="mb-4">
                      {post.metadata.description}
                    </CardDescription>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted mb-3">
                      {new Date(post.metadata.date).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {post.metadata.tags.map((tag) => (
                        <Badge key={tag} size="sm" variant="primary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          {posts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted text-lg">No blog posts yet.</p>
            </div>
          )}
        </Container>
      </main>
      <Footer />
    </>
  );
}
