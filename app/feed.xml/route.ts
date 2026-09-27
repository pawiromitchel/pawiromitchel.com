import { getPosts } from "@/lib/posts";
import { personalInfo, siteUrl } from "../data/personal";

export const dynamic = "force-static";

const escape = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export async function GET() {
  const posts = await getPosts();
  const items = posts
    .map((post) => {
      const url = `${siteUrl}/blogs/${post.slug}`;
      return `    <item>
      <title>${escape(post.metadata.title)}</title>
      <link>${url}</link>
      <guid>${url}</guid>
      <pubDate>${new Date(post.metadata.date).toUTCString()}</pubDate>
      <description>${escape(post.metadata.description)}</description>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escape(personalInfo.name)}</title>
    <link>${siteUrl}/blog</link>
    <description>Writing on infrastructure, Go tooling and side projects.</description>
    <language>en</language>
${items}
  </channel>
</rss>`;

  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
