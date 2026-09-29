import { ArrowUp, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { experience, earlierRoles, type RoleKind } from "@/app/data/experience";
import { personalInfo } from "@/app/data/personal";
import { Container } from "../layout/Container";
import { sectionLinkClass } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

const kindBadge: Record<RoleKind, { label: string; className: string }> = {
  ops: { label: "Ops", className: "bg-operate text-operate-foreground" },
  support: { label: "Support", className: "border-operate bg-transparent text-operate" },
  dev: { label: "Dev", className: "bg-build-bar text-[#2a1b04]" },
};

// Every role gets its own entry, newest first. A role's own stack wins; otherwise the
// company stack goes under the first role that doesn't have one.
const entries = experience.flatMap((job) => {
  const companyStackAt = job.roles.findIndex((role) => !role.stack);
  return job.roles.map((role, i) => ({
    ...role,
    key: `${job.id}-${role.title}`,
    company: job.company,
    companyUrl: job.url,
    stack: role.stack ?? (i === companyStackAt ? job.stack : undefined),
    // Splitting roles hides the total time at a company, so the newest role says it.
    tenure: i === 0 && job.roles.length > 1 ? `At ${job.company} since ${job.period.split(" – ")[0]}` : undefined,
  }));
});

export function ExperienceSection() {
  return (
    <section id="experience" className="border-t py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="mb-3 font-mono text-xs font-medium tracking-widest text-operate uppercase sm:text-[13px]">
            Experience
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-[-0.03em] text-balance sm:text-[44px] sm:leading-[1.05]">
            From web platforms to node infrastructure
          </h2>
          <p className="mt-5 text-muted-foreground">Where I&apos;ve worked, newest first.</p>
          <a href={personalInfo.cvUrl} target="_blank" rel="noopener noreferrer" className={cn(sectionLinkClass, "mt-6")}>
            Full CV <ArrowUpRight className="size-4" />
          </a>
        </div>

        <div>
          <ol className="border-t">
            {entries.map((role) => (
              <li key={role.key} className="border-b">
                <Reveal className="grid gap-3 py-8 sm:grid-cols-[170px_minmax(0,1fr)] sm:gap-8">
                  <div className="flex items-center gap-3 sm:flex-col sm:items-start">
                    <span className="font-mono text-[13px]">{role.period}</span>
                    <Badge
                      className={cn(
                        "h-auto rounded-[5px] px-2 py-0.5 font-mono text-[11px] tracking-wider uppercase",
                        kindBadge[role.kind].className
                      )}
                    >
                      {kindBadge[role.kind].label}
                    </Badge>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold sm:text-xl">
                      {role.title}{" "}
                      <span className="font-normal text-subtle">
                        ·{" "}
                        {role.companyUrl ? (
                          <a
                            href={role.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-colors hover:text-foreground"
                          >
                            {role.company}
                          </a>
                        ) : (
                          role.company
                        )}
                      </span>
                    </h3>
                    {role.tenure && <p className="mt-1 text-sm text-subtle">{role.tenure}</p>}
                    {role.promotedFrom && (
                      <p className="mt-1.5 flex items-center gap-1 font-mono text-xs text-operate">
                        <ArrowUp className="size-3.5" /> promoted from {role.promotedFrom}
                      </p>
                    )}
                    <ul className="mt-3 list-disc space-y-1.5 pl-[18px] text-[15px] leading-relaxed text-muted-foreground marker:text-subtle">
                      {role.highlights.map((point) => (
                        <li key={point} className="text-pretty">
                          {point}
                        </li>
                      ))}
                    </ul>
                    {role.stack && (
                      <p className="mt-4 font-mono text-xs text-subtle lowercase">{role.stack.join(" · ")}</p>
                    )}
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>

          <div className="grid gap-3 pt-6 text-sm sm:grid-cols-[170px_minmax(0,1fr)] sm:gap-8">
            <span className="font-mono text-[13px] text-subtle">also</span>
            <ul className="space-y-2 text-muted-foreground">
              {earlierRoles.map((job) => (
                <li key={job.id}>
                  <span className="font-medium text-foreground">{job.roles[0].title}</span> · {job.company}
                  {job.type && ` (${job.type.toLowerCase()})`} · {job.period.slice(-4)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
