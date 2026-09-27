import { ArrowUpRight } from "lucide-react";
import { experience, earlierRoles } from "@/app/data/experience";
import { personalInfo } from "@/app/data/personal";
import { Container } from "../layout/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

export function ExperienceSection() {
  return (
    <section id="experience" className="border-t bg-card/40 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="From web platforms to node infrastructure"
          action={
            <a
              href={personalInfo.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Full CV <ArrowUpRight className="size-4" />
            </a>
          }
        />

        <ol className="divide-y border-y">
          {experience.map((job) => (
            <li key={job.id}>
              <Reveal className="grid gap-4 py-8 md:grid-cols-[220px_1fr] md:gap-10">
                <div>
                  <h3 className="font-semibold">
                    {job.url ? (
                      <a href={job.url} target="_blank" rel="noopener noreferrer" className="hover:text-brand">
                        {job.company}
                      </a>
                    ) : (
                      job.company
                    )}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{job.period}</p>
                  <p className="text-sm text-muted-foreground">{job.location}</p>
                </div>

                <div className="space-y-6">
                  {job.roles.map((role, i) => (
                    <div key={role.title} className={job.roles.length > 1 ? "relative border-l pl-5" : undefined}>
                      {job.roles.length > 1 && (
                        <span
                          aria-hidden
                          className={`absolute top-1.5 -left-[5px] size-2.5 rounded-full border-2 border-background ${
                            i === 0 ? "bg-brand" : "bg-muted-foreground/40"
                          }`}
                        />
                      )}
                      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                        <h4 className="font-medium">{role.title}</h4>
                        {job.roles.length > 1 && (
                          <span className="font-mono text-xs text-muted-foreground">{role.period}</span>
                        )}
                      </div>
                      <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-muted-foreground">
                        {role.highlights.map((point) => (
                          <li key={point} className="flex gap-2.5">
                            <span aria-hidden className="mt-2.5 h-px w-2.5 shrink-0 bg-muted-foreground/50" />
                            <span className="text-pretty">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <p className="font-mono text-xs text-muted-foreground">{job.stack.join(" · ")}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        <div className="mt-10">
          <h3 className="mb-3 text-sm font-medium text-muted-foreground">Also</h3>
          <ul className="space-y-2 text-sm">
            {earlierRoles.map((job) => (
              <li key={job.id} className="flex flex-wrap items-baseline gap-x-2">
                <span className="font-medium">{job.roles[0].title}</span>
                <span className="text-muted-foreground">
                  · {job.company} ({job.type}) · {job.period}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
