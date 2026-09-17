import React from "react";
import { Container } from "../layout/Container";
import { Card, CardTitle, CardDescription } from "../ui/Card";
import { BadgeGroup } from "../ui/Badge";
import { SectionHeading } from "../ui/SectionHeading";
import { projects } from "@/app/data/projects";

const projectSnippets: Record<string, { prompt: string; output: string[] }> = {
  bcron: {
    prompt: "bcron list --active",
    output: [
      "● daemon active [pid: 4082]",
      "✓ 6 background tasks scheduled",
      "→ next: health_check (in 2m)",
    ],
  },
  forexsu: {
    prompt: "curl -s https://forexsu.co/api/rates",
    output: [
      "USD/SRD: 38.50  EUR/SRD: 41.80",
      "● 8 banking portals aggregated",
      "✓ PWA offline cache enabled",
    ],
  },
  "ftx-api-rest-extended": {
    prompt: "npm i ftx-api-rest-extended",
    output: [
      "+ ftx-api-rest-extended@latest",
      "const client = new FtxClient()",
      "✓ spot & futures endpoints ready",
    ],
  },
};

export function ProjectsSection() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section id="projects" className="py-24 bg-background">
      <Container>
        <div className="mb-16">
          <SectionHeading centered subtitle="A selection of my recent work, open-source tools, and applications">
            Featured Projects
          </SectionHeading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => {
            const snippet = projectSnippets[project.id];

            return (
              <Card key={project.id} padding="none" hover className="flex flex-col overflow-hidden group">
                {/* Visual Terminal Header */}
                <div className="bg-[#0b0f17] border-b border-border p-4 font-mono text-xs flex flex-col justify-between h-44 select-none">
                  {/* Window Bar */}
                  <div className="flex items-center justify-between pb-2.5 border-b border-white/5">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-[10px] font-semibold text-primary/80 uppercase tracking-wider px-2 py-0.5 rounded bg-primary/10">
                      {project.category}
                    </span>
                  </div>

                  {/* Terminal Content */}
                  <div className="py-2 flex-1 flex flex-col justify-center space-y-1.5">
                    <div className="text-primary font-semibold text-xs truncate">
                      <span className="text-muted mr-1.5">$</span>
                      {snippet ? snippet.prompt : `${project.title.toLowerCase()} --info`}
                    </div>
                    {(snippet ? snippet.output : [project.description.slice(0, 50) + "..."]).map((line, i) => (
                      <div key={i} className="text-muted text-[11px] truncate">
                        {line}
                      </div>
                    ))}
                  </div>

                  {/* Year Tag */}
                  <div className="text-[10px] text-muted/60 text-right font-sans">
                    Shipped {project.year}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <CardTitle className="group-hover:text-primary transition-colors text-lg">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="mb-5 flex-1 leading-relaxed">
                    {project.description}
                  </CardDescription>

                  {/* Technologies */}
                  <div className="mb-6">
                    <BadgeGroup
                      badges={project.technologies.slice(0, 5)}
                      variant="primary"
                      size="sm"
                    />
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 pt-4 border-t border-border mt-auto">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary-dark transition-colors text-sm font-medium flex items-center gap-1"
                      >
                        GitHub <span>→</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary-dark transition-colors text-sm font-medium flex items-center gap-1"
                      >
                        Live Demo <span>→</span>
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
