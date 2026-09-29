import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { projects, type Project } from "@/app/data/projects";
import { personalInfo } from "@/app/data/personal";
import { Container } from "../layout/Container";
import { SectionHeading, sectionLinkClass } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { HoverLift } from "../ui/HoverLift";

// Leads the stack line: whether the project is a public repo or a hosted product.
function projectKind(project: Project) {
  return project.githubUrl ? "open source" : "live site";
}

function ProjectLinks({ project }: { project: Project }) {
  const linkClass = "inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-operate";
  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
      {project.liveUrl && (
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
          Visit site <ArrowUpRight className="size-4" />
        </a>
      )}
      {project.githubUrl && (
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
          Source <ArrowUpRight className="size-4" />
        </a>
      )}
      {project.postSlug && (
        <Link href={`/blogs/${project.postSlug}`} className={linkClass}>
          Write-up <ArrowRight className="size-4" />
        </Link>
      )}
    </div>
  );
}

function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <HoverLift className="h-full">
      <Card
        className={cn(
          "group h-full gap-0 rounded-2xl py-0 ring-border transition-shadow duration-300 hover:shadow-lg hover:shadow-black/10",
          featured && "md:grid md:grid-cols-[1.3fr_1fr]"
        )}
      >
        <div
          className={cn(
            "relative aspect-[16/10] overflow-hidden border-b bg-muted",
            featured && "md:aspect-auto md:min-h-[420px] md:border-r md:border-b-0"
          )}
        >
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes={featured ? "(min-width: 768px) 640px, 100vw" : "(min-width: 768px) 560px, 100vw"}
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        </div>
        <div className={cn("flex flex-1 flex-col gap-3 p-6 sm:p-7", featured && "md:justify-center md:gap-4 md:p-10")}>
          <p className="text-sm text-subtle">{project.tagline}</p>
          <h3
            className={cn(
              "font-semibold tracking-tight",
              featured ? "font-heading text-3xl font-bold sm:text-[34px]" : "text-[22px]"
            )}
          >
            {project.title}
          </h3>
          <p className={cn("leading-relaxed text-muted-foreground text-pretty", featured ? "text-base" : "text-[15px]")}>
            {project.description}
          </p>
          <div className="mt-auto flex flex-wrap items-center justify-between gap-x-6 gap-y-3 pt-2">
            <p className="font-mono text-xs text-subtle lowercase">
              <span className="text-operate">{projectKind(project)}</span> · {project.stack.join(" · ")}
            </p>
            <ProjectLinks project={project} />
          </div>
        </div>
      </Card>
    </HoverLift>
  );
}

export function ProjectsSection() {
  const [featured, ...rest] = projects;

  return (
    <section id="work" className="border-y bg-surface py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Side projects"
          tone="build"
          title="Things I build and run myself"
          description="Side projects I design, build and host on my own small, boring infrastructure. Lately, mostly Go."
          action={
            <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" className={sectionLinkClass}>
              More on GitHub <ArrowUpRight className="size-4" />
            </a>
          }
        />
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal className="md:col-span-2">
            <ProjectCard project={featured} featured />
          </Reveal>
          {rest.map((project, i) => (
            <Reveal key={project.id} delay={(i % 2) * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
