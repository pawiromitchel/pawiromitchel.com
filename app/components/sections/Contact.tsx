import { ArrowUpRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/app/data/personal";
import { Container } from "../layout/Container";
import { Reveal } from "../ui/Reveal";
import { CopyEmailButton } from "../ui/CopyEmailButton";
import { SocialLinks } from "../ui/SocialLinks";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <Container>
        <Reveal className="relative overflow-hidden rounded-2xl border bg-card px-6 py-12 text-center shadow-sm sm:px-12 sm:py-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 -top-24 mx-auto h-48 w-2/3 rounded-full bg-brand/15 blur-3xl"
          />
          <p className="mb-2 font-mono text-xs font-medium tracking-wider text-brand uppercase">Contact</p>
          <h2 className="text-2xl font-semibold tracking-tight text-balance sm:text-3xl">Let&apos;s talk</h2>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground text-pretty">
            Open to conversations about infrastructure and operations roles, advisory work, or anything you read here.
            Email is the fastest way to reach me.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <Button asChild size="lg" className="h-10 px-4">
              <a href={`mailto:${personalInfo.email}`}>
                <Mail /> {personalInfo.email}
              </a>
            </Button>
            <CopyEmailButton email={personalInfo.email} />
            <Button asChild variant="outline" size="lg" className="h-10 px-4">
              <a href={personalInfo.cvUrl} target="_blank" rel="noopener noreferrer">
                View CV <ArrowUpRight />
              </a>
            </Button>
          </div>
          <SocialLinks className="mt-6 justify-center" />
        </Reveal>
      </Container>
    </section>
  );
}
