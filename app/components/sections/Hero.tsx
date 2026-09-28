import type { CSSProperties } from "react";
import Image from "next/image";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { personalInfo, profileImage } from "@/app/data/personal";
import { Container } from "../layout/Container";
import { CopyEmailButton } from "../ui/CopyEmailButton";
import { SocialLinks } from "../ui/SocialLinks";
import { SplitText } from "../ui/SplitText";
import { Spotlight } from "../ui/Spotlight";
import { PointerTilt } from "../ui/PointerTilt";

// Staggers the hero entrance (see .animate-enter in globals.css).
const enter = (ms: number, className?: string) => ({
  className: cn("animate-enter", className),
  style: { "--delay": ms } as CSSProperties,
});

export function Hero() {
  return (
    <section className="relative -mt-16 overflow-hidden pt-16">
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0 -z-10 opacity-60" />
      <Spotlight className="pointer-events-none absolute inset-0 -z-10" />
      <Container className="grid items-center gap-10 py-16 sm:py-24 md:grid-cols-[1fr_auto] md:gap-16">
        <div>
          <div {...enter(0)}>
            <a
              href={personalInfo.currentCompanyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-6 inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-xs text-muted-foreground shadow-xs transition-colors hover:text-foreground"
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-60 motion-reduce:hidden" />
                <span className="relative inline-flex size-2 rounded-full bg-success" />
              </span>
              {personalInfo.currentRole} at {personalInfo.currentCompany}
            </a>
          </div>

          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl">
            <SplitText text={personalInfo.name} delay={80} />
          </h1>
          <div {...enter(420)}>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground text-pretty sm:text-xl">
              <span className="text-foreground">{personalInfo.title}</span> keeping blockchain node infrastructure
              reliable at {personalInfo.currentCompany}. On the side I build Go tools and self-hosted products.
            </p>
          </div>

          <div {...enter(500)}>
            <p className="mt-4 flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="size-4" />
              {personalInfo.location} · Remote · {personalInfo.timezone}
            </p>
          </div>

          <div {...enter(580, "mt-8 flex flex-wrap items-center gap-2")}>
            <Button asChild size="lg" className="h-10 px-4">
              <a href={`mailto:${personalInfo.email}`}>
                <Mail /> Email me
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-10 px-4">
              <a href={personalInfo.cvUrl} target="_blank" rel="noopener noreferrer">
                View CV <ArrowUpRight />
              </a>
            </Button>
            <CopyEmailButton email={personalInfo.email} />
            <SocialLinks className="ml-1" />
          </div>
        </div>

        <div {...enter(200, "order-first md:order-none")}>
          <PointerTilt>
            <div className="relative size-24 overflow-hidden rounded-2xl border bg-card shadow-sm sm:size-32 md:size-56">
              <Image
                src={profileImage}
                alt={`Illustrated avatar of ${personalInfo.name}`}
                fill
                priority
                sizes="(min-width: 768px) 224px, 128px"
                className="object-cover"
              />
            </div>
          </PointerTilt>
        </div>
      </Container>
    </section>
  );
}
