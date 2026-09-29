import { ArrowUpRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { personalInfo } from "@/app/data/personal";
import { Container } from "../layout/Container";
import { Reveal } from "../ui/Reveal";
import { CopyEmailButton } from "../ui/CopyEmailButton";
import { SocialLinks } from "../ui/SocialLinks";

export function ContactSection() {
  return (
    <section id="contact" className="pb-20 sm:pb-28">
      <Container>
        <Reveal>
          <Card className="relative gap-6 overflow-hidden rounded-3xl px-6 py-12 ring-border sm:px-12 sm:py-16 lg:px-20 lg:py-24">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-32 -right-20 size-96 rounded-full bg-operate/10 blur-3xl"
            />
            <p className="font-mono text-xs font-medium tracking-widest text-operate uppercase sm:text-[13px]">Contact</p>
            <h2 className="font-heading text-4xl font-bold tracking-[-0.035em] sm:text-6xl">Get in touch</h2>
            <p className="max-w-xl text-muted-foreground text-pretty sm:text-lg">
              Happy to talk about infrastructure and operations work, Go tooling, or anything you read here. Email is the
              best way to reach me.
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <Button asChild size="lg" className="h-12 px-6 text-[15px] font-semibold">
                <a href={`mailto:${personalInfo.email}`}>
                  <Mail /> {personalInfo.email}
                </a>
              </Button>
              <CopyEmailButton email={personalInfo.email} />
              <Button asChild variant="outline" size="lg" className="h-12 px-5 text-[15px]">
                <a href={personalInfo.cvUrl} target="_blank" rel="noopener noreferrer">
                  View CV <ArrowUpRight />
                </a>
              </Button>
            </div>
            <SocialLinks className="-ml-2" />
          </Card>
        </Reveal>
      </Container>
    </section>
  );
}
