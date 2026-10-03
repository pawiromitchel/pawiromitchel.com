import type { CSSProperties } from "react";
import Image from "next/image";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { headshotImage, personalInfo } from "@/app/data/personal";
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

const GREETING = "Hello!";
const LETTER_STAGGER = 18;

function Highlight({ children }: { children: React.ReactNode }) {
  return <span className="font-medium text-foreground">{children}</span>;
}

export function Hero() {
  return (
    <section className="relative -mt-16 overflow-hidden pt-16">
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0 -z-10 opacity-50" />
      <Spotlight className="pointer-events-none absolute inset-0 -z-10" />
      <Container className="grid items-center gap-10 py-16 sm:py-24 md:grid-cols-[minmax(0,1fr)_280px] md:gap-12 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-16">
        <div className="flex flex-col gap-7 sm:gap-8">
          <h1 className="font-heading flex flex-col gap-5 sm:gap-6">
            <span className="text-[2.75rem] leading-[0.98] font-bold tracking-[-0.035em] sm:text-6xl lg:text-[84px]">
              <SplitText text={GREETING} delay={80} stagger={LETTER_STAGGER} />{" "}
              <span aria-hidden className="animate-wave inline-block" style={{ "--delay": 600 } as CSSProperties}>
                👋
              </span>
            </span>
            <span
              {...enter(
                350,
                "text-[2rem] leading-[1.05] font-bold tracking-[-0.03em] text-balance sm:text-5xl lg:text-[56px]",
              )}
            >
              I&apos;m <span className="text-operate">{personalInfo.name}</span>
            </span>
            <span
              {...enter(
                500,
                "flex flex-wrap items-center gap-x-3 gap-y-1 text-lg font-medium tracking-tight text-muted-foreground sm:text-2xl",
              )}
            >
              <span className="relative flex size-2.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-operate opacity-60 motion-reduce:hidden" />
                <span className="relative inline-flex size-2.5 rounded-full bg-operate" />
              </span>
              <span>
                {personalInfo.currentRole} @{" "}
                <a
                  href={personalInfo.currentCompanyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground underline decoration-border decoration-2 underline-offset-4 transition-colors hover:decoration-operate"
                >
                  {personalInfo.currentCompany}
                </a>
              </span>
            </span>
          </h1>

          <p {...enter(650, "max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty sm:text-[19px]")}>
            Ten years in, from building <Highlight>web platforms</Highlight> to running{" "}
            <Highlight>blockchain node infrastructure</Highlight> at {personalInfo.currentCompany}. I lead our{" "}
            <Highlight>Kubernetes migration</Highlight>, roll out <Highlight>client upgrades and new chains</Highlight>,
            and share <Highlight>on-call</Highlight>. On the side I still build <Highlight>Go tools</Highlight> and{" "}
            <Highlight>self-hosted products</Highlight>.
          </p>

          <div {...enter(750, "flex flex-wrap items-center gap-2")}>
            <Button asChild size="lg" className="h-11 px-5 text-[15px] font-semibold">
              <a href={`mailto:${personalInfo.email}`}>
                <Mail /> Email me
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-11 px-5 text-[15px]">
              <a href={personalInfo.cvUrl} target="_blank" rel="noopener noreferrer">
                View CV <ArrowUpRight />
              </a>
            </Button>
            <CopyEmailButton email={personalInfo.email} />
            <Separator orientation="vertical" className="mx-2 hidden h-7 sm:block" />
            <SocialLinks />
          </div>

          <p {...enter(820, "flex items-center gap-1.5 text-sm text-subtle")}>
            <MapPin className="size-4" />
            Suriname <span aria-hidden>🇸🇷</span>
          </p>
        </div>

        <div {...enter(300, "order-first md:order-none")}>
          <PointerTilt max={6}>
            <div className="relative aspect-square w-28 overflow-hidden rounded-2xl border bg-card shadow-sm sm:w-36 md:aspect-[34/42] md:w-full">
              <Image
                src={headshotImage}
                alt={`Photo of ${personalInfo.name}`}
                fill
                priority
                sizes="(min-width: 1024px) 340px, (min-width: 768px) 280px, 144px"
                className="object-cover object-[50%_20%]"
              />
            </div>
          </PointerTilt>
        </div>
      </Container>
    </section>
  );
}
