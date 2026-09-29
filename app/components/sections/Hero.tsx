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

const LINE_ONE = "I used to ship the software.";
const LINE_TWO = "Now I keep it running.";
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
          {/* Who and where first; the tagline below carries the story. */}
          <div {...enter(0, "flex flex-wrap items-center gap-x-4 gap-y-3")}>
            <h1 className="text-lg font-semibold tracking-tight sm:text-xl">{personalInfo.name}</h1>
            <a
              href={personalInfo.currentCompanyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-xs text-muted-foreground shadow-xs transition-colors hover:text-foreground sm:text-[13px]"
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-operate opacity-60 motion-reduce:hidden" />
                <span className="relative inline-flex size-2 rounded-full bg-operate" />
              </span>
              {personalInfo.currentRole} at {personalInfo.currentCompany}
            </a>
          </div>

          <p className="font-heading text-[2.75rem] leading-[0.98] font-bold tracking-[-0.035em] text-balance sm:text-6xl lg:text-[84px]">
            <span className="block">
              <SplitText text={LINE_ONE} delay={80} stagger={LETTER_STAGGER} />
            </span>
            <span className="block text-operate">
              <SplitText text={LINE_TWO} delay={80 + LINE_ONE.length * LETTER_STAGGER} stagger={LETTER_STAGGER} />
            </span>
          </p>

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
            {personalInfo.location} · Remote · {personalInfo.timezone}
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
