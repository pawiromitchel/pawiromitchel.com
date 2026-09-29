import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { skillGroups, type SkillGroup } from "@/app/data/skills";
import { personalInfo } from "@/app/data/personal";
import { Container } from "../layout/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { HoverLift } from "../ui/HoverLift";

const toneBorder: Record<SkillGroup["tone"], string> = {
  operate: "border-t-operate",
  build: "border-t-build-bar",
  neutral: "border-t-subtle",
};

export function AboutSection() {
  return (
    <section id="about" className="pt-20 pb-16 sm:pt-28 sm:pb-20">
      <Container>
        <SectionHeading eyebrow="About" title="A bit more about me" />
        <Reveal className="max-w-3xl space-y-5 text-muted-foreground sm:text-lg">
          <p className="text-pretty">
            I started out building websites and mobile apps in Suriname, then spent five years at Alembo turning a legacy
            desktop application into a web app the whole team could work on. In 2022 I joined{" "}
            {personalInfo.currentCompany} in support, and I&apos;ve since moved into technical operations, where I work on
            the node infrastructure behind its blockchain APIs.
          </p>
          <p className="text-pretty">
            Outside work I build the tools I want to use: a self-hosted finance ledger, a friendlier cron, a terminal
            market dashboard. I write up how each one works on the blog.
          </p>
        </Reveal>

        <h3 className="mt-14 mb-6 font-mono text-xs font-medium tracking-widest text-subtle uppercase sm:text-[13px]">
          Tools I use
        </h3>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.label} delay={i * 0.06} className={cn(group.tone === "neutral" && "sm:max-lg:col-span-2")}>
              <HoverLift lift={3} className="h-full">
                <Card className={cn("h-full gap-4 rounded-2xl border-t-[3px] p-6 ring-border sm:p-7", toneBorder[group.tone])}>
                  <h4 className="text-base font-semibold">{group.label}</h4>
                  <ul className="space-y-1.5 text-[15px] text-muted-foreground">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </Card>
              </HoverLift>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
