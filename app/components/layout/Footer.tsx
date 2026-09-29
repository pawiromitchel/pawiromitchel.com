import Link from "next/link";
import { Rss } from "lucide-react";
import { personalInfo } from "@/app/data/personal";
import { Container } from "./Container";
import { SocialLinks } from "../ui/SocialLinks";

export function Footer() {
  return (
    <footer className="border-t">
      <Container className="flex flex-col gap-4 py-8 font-mono text-xs text-subtle sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {personalInfo.name}
        </p>
        <div className="flex items-center gap-1">
          <Link
            href="/feed.xml"
            className="inline-flex size-9 items-center justify-center rounded-md transition-colors hover:bg-accent hover:text-foreground"
            aria-label="RSS feed"
          >
            <Rss className="size-4" />
          </Link>
          <SocialLinks />
        </div>
      </Container>
    </footer>
  );
}
