import { Navigation } from "../components/layout/Navigation";
import { Footer } from "../components/layout/Footer";
import { Container } from "../components/layout/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Card, CardTitle, CardDescription } from "../components/ui/Card";
import { BadgeGroup } from "../components/ui/Badge";
import { projects } from "@/app/data/projects";

export const metadata = {
  title: "Projects - Pawiro Mitchel",
  description: "Portfolio of my Web3, infrastructure, and full-stack projects",
};

export default function ProjectsPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20 bg-background min-h-screen">
        <Container className="py-12">
          <SectionHeading centered subtitle="A collection of my professional and side projects">
            All Projects
          </SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} padding="md" hover>
                <div className="mb-4 w-full h-40 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center">
                  <span className="text-5xl">🚀</span>
                </div>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="mb-4">
                  {project.longDescription}
                </CardDescription>

                <BadgeGroup
                  badges={project.technologies}
                  variant="primary"
                  size="sm"
                />

                <div className="flex gap-3 mt-4 pt-4 border-t border-border">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-dark transition-colors text-sm font-medium"
                    >
                      GitHub →
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-dark transition-colors text-sm font-medium"
                    >
                      Live Demo →
                    </a>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
