import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { projects, type Project } from "@/app/data/projects";
import { personalInfo } from "@/app/data/personal";
import { Container } from "../layout/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { GitHubIcon } from "../ui/BrandIcons";

function ProjectLinks({ project }: { project: Project }) {
  const linkClass =
    "relative z-10 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground";
  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
      {project.liveUrl && (
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
          <ArrowUpRight className="size-4" /> Visit site
        </a>
      )}
      {project.githubUrl && (
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
          <GitHubIcon className="size-3.5" /> Source
        </a>
      )}
      {project.postSlug && (
        <Link href={`/blogs/${project.postSlug}`} className={linkClass}>
          <BookOpen className="size-4" /> Write-up
        </Link>
      )}
    </div>
  );
}

function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-xl border bg-card shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md",
        featured && "md:grid md:grid-cols-[1.35fr_1fr]"
      )}
    >
      <div className={cn("relative aspect-[16/10] overflow-hidden border-b bg-muted", featured && "md:aspect-auto md:border-r md:border-b-0")}>
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes={featured ? "(min-width: 768px) 560px, 100vw" : "(min-width: 768px) 480px, 100vw"}
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className={cn("flex flex-1 flex-col gap-4 p-5 sm:p-6", featured && "md:justify-center md:p-8")}>
        <div>
          <p className="text-xs font-medium text-muted-foreground">{project.tagline}</p>
          <h3 className={cn("mt-1 font-semibold tracking-tight", featured ? "text-2xl" : "text-lg")}>
            {project.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">{project.description}</p>
        </div>
        <ul className="flex flex-wrap gap-1.5" aria-label="Built with">
          {project.stack.map((tech) => (
            <li key={tech}>
              <Badge variant="secondary" className="font-normal">
                {tech}
              </Badge>
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-1">
          <ProjectLinks project={project} />
        </div>
      </div>
    </article>
  );
}

export function ProjectsSection() {
  const [featured, ...rest] = projects;

  return (
    <section id="work" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Selected work"
          title="Things I've built and run"
          description="Side projects I design, build and host myself, mostly in Go on small, boring infrastructure."
          action={
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              More on GitHub <ArrowUpRight className="size-4" />
            </a>
          }
        />
        <div className="grid gap-5 md:grid-cols-2">
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
