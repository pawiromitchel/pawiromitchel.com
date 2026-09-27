import { skillGroups } from "@/app/data/skills";
import { personalInfo } from "@/app/data/personal";
import { Container } from "../layout/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { Credentials } from "./Education";

export function AboutSection() {
  return (
    <section id="about" className="border-t bg-card/40 py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="About" title="A bit more about me" />
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <Reveal className="space-y-5 text-muted-foreground">
            <p className="text-pretty">
              I started out building websites and mobile apps in Suriname, then spent five years at Alembo turning
              internal desktop tools into web apps that the whole team could work on. In 2022 I joined{" "}
              {personalInfo.currentCompany}, first in senior support and now in technical operations, where I work on
              the node infrastructure behind its blockchain APIs.
            </p>
            <p className="text-pretty">
              Outside work I build the tools I want to use: a self-hosted finance ledger, a friendlier cron, a
              terminal market dashboard. I write up how each one works on the blog.
            </p>

            <div className="space-y-4 pt-4">
              {skillGroups.map((group) => (
                <div key={group.label} className="grid gap-1 sm:grid-cols-[120px_1fr] sm:gap-4">
                  <h3 className="text-sm font-medium text-foreground">{group.label}</h3>
                  <p className="text-sm">{group.items.join(", ")}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <Credentials />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
