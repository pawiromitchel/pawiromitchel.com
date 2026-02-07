import React from "react";
import { Container } from "../layout/Container";
import { Card, CardTitle, CardDescription, CardImage } from "../ui/Card";
import { BadgeGroup } from "../ui/Badge";
import { SectionHeading } from "../ui/SectionHeading";
import { projects } from "@/app/data/projects";

export function ProjectsSection() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section id="projects" className="py-24 bg-background">
      <Container>
        <div className="mb-16">
          <SectionHeading subtitle="A selection of my recent work and side projects">
            Featured Projects
          </SectionHeading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <Card key={project.id} padding="none" hover className="flex flex-col overflow-hidden">
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-primary/5 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-6xl" role="img" aria-label={`${project.title} project icon`}>🚀</span>
                </div>
                {/* <CardImage src={project.image} alt={project.title} /> */}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="mb-4">
                  {project.description}
                </CardDescription>

                {/* Technologies */}
                <div className="mb-4 flex-1">
                  <BadgeGroup
                    badges={project.technologies.slice(0, 3)}
                    variant="primary"
                    size="sm"
                  />
                </div>

                {/* Links */}
                <div className="flex gap-2 pt-4 border-t border-border">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-dark transition-colors text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:rounded-md"
                    >
                      GitHub →
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-dark transition-colors text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:rounded-md"
                    >
                      Live Demo →
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
