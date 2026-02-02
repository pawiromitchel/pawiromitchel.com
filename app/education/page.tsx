import { Navigation } from "../components/layout/Navigation";
import { Footer } from "../components/layout/Footer";
import { Container } from "../components/layout/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Card, CardTitle, CardDescription } from "../components/ui/Card";
import { HorizontalTimeline, HorizontalTimelineItem } from "../components/ui/Timeline";
import { education, techEvolution } from "@/app/data/education";

export const metadata = {
  title: "Education - Pawiro Mitchel",
  description: "My educational background and professional development journey",
};

export default function EducationPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20 bg-background min-h-screen">
        <Container className="py-12">
          {/* Education */}
          <div className="mb-20">
            <SectionHeading
              centered
              subtitle="My academic background and training"
            >
              Education
            </SectionHeading>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {education.map((edu) => (
                <Card key={edu.id} padding="md">
                  <CardTitle>{edu.institution}</CardTitle>
                  <p className="text-primary font-semibold text-sm mb-2">
                    {edu.degree} in {edu.field}
                  </p>
                  <CardDescription>
                    {edu.startYear} - {edu.endYear}
                  </CardDescription>
                  {edu.description && (
                    <p className="text-muted text-sm mt-3">{edu.description}</p>
                  )}
                  {edu.achievements && edu.achievements.length > 0 && (
                    <ul className="list-disc list-inside text-sm text-muted mt-3 space-y-1">
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  )}
                </Card>
              ))}
            </div>
          </div>

          {/* Tech Evolution */}
          <div>
            <SectionHeading
              centered
              subtitle="How my technology expertise has evolved over time"
            >
              Technology Evolution
            </SectionHeading>

            <div className="overflow-x-auto">
              <HorizontalTimeline>
                {techEvolution.map((era, index) => (
                  <HorizontalTimelineItem
                    key={index}
                    period={era.period}
                    title={era.focus}
                    description={era.description}
                    technologies={era.technologies}
                    isActive={index === techEvolution.length - 1}
                  />
                ))}
              </HorizontalTimeline>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
