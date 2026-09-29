"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { personalInfo } from "@/app/data/personal";
import { Container } from "./Container";
import { ThemeToggle } from "../ui/ThemeToggle";

const links = [
  { id: "work", label: "Work", href: "/#work" },
  { id: "experience", label: "Career", href: "/#experience" },
  { id: "writing", label: "Writing", href: "/blog" },
  { id: "about", label: "About", href: "/#about" },
];

function useActiveSection(enabled: boolean) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled) return;
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [enabled]);

  return enabled ? active : null;
}

export function Navigation() {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  // The sheet restores scroll position as it closes, so navigate once it has closed.
  const pendingHref = useRef<string | null>(null);
  const isHome = pathname === "/";
  const onBlog = pathname.startsWith("/blog");
  const activeSection = useActiveSection(isHome);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (id: string) => (id === "writing" ? onBlog || activeSection === id : activeSection === id);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        scrolled ? "border-border bg-background/80 backdrop-blur-lg" : "border-transparent bg-transparent"
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-semibold tracking-tight"
          aria-label={`${personalInfo.name}, home`}
        >
          <span aria-hidden className="size-2 rounded-full bg-operate" />
          {personalInfo.name}
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              aria-current={isActive(link.id) ? "true" : undefined}
              className={cn(
                "relative rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground",
                isActive(link.id) && "text-foreground"
              )}
            >
              {isActive(link.id) && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 -z-10 rounded-md bg-accent"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.45 }}
                />
              )}
              {link.label}
            </Link>
          ))}
          <div className="ml-2 flex items-center gap-1 border-l pl-3">
            <ThemeToggle />
            <Button asChild size="sm" variant="outline" className="ml-1 h-8 px-3">
              <Link href="/#contact">Get in touch</Link>
            </Button>
          </div>
        </nav>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-72 p-6"
              onCloseAutoFocus={(event) => {
                const href = pendingHref.current;
                if (!href) return;
                event.preventDefault();
                pendingHref.current = null;
                const [path, hash] = href.split("#");
                if (hash && pathname === (path || "/")) {
                  // Radix releases its scroll lock only after the close animation, so wait it out.
                  setTimeout(() => {
                    history.pushState(null, "", `#${hash}`);
                    document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
                  }, 350);
                } else {
                  router.push(href);
                }
              }}
            >
              <SheetTitle className="text-base">{personalInfo.name}</SheetTitle>
              <SheetDescription className="sr-only">Site navigation</SheetDescription>
              <nav aria-label="Mobile" className="mt-4 flex flex-col gap-1">
                {[...links, { id: "contact", label: "Get in touch", href: "/#contact" }].map((link) => (
                  <Link
                    key={link.id}
                    href={link.href}
                    onClick={(event) => {
                      event.preventDefault();
                      pendingHref.current = link.href;
                      setMenuOpen(false);
                    }}
                    className={cn(
                      "rounded-md px-3 py-2.5 text-base text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
                      link.id === "contact" && "mt-4 bg-primary text-center text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
}
