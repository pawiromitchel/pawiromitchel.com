import { Container } from "../layout/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Timeline, TimelineItem } from "../ui/Timeline";
import { education } from "@/app/data/education";

export function EducationSection() {
  return (
    <section id="education" className="py-24 bg-background">
      <Container className="max-w-3xl">
        <SectionHeading
          centered
          subtitle="My academic background and training"
        >
          Education
        </SectionHeading>

        <Timeline className="mt-16">
          {education.map((edu, idx) => (
            <TimelineItem
              key={edu.id}
              title={edu.institution}
              subtitle={`${edu.degree} in ${edu.field}`}
              date={`${edu.startYear} - ${edu.endYear}`}
              isLast={idx === education.length - 1}
            >
              {edu.description && (
                <p className="text-muted text-sm mb-3 leading-relaxed">
                  {edu.description}
                </p>
              )}
              {edu.achievements && edu.achievements.length > 0 && (
                <div className="mb-3">
                  <p className="text-xs font-semibold text-muted mb-1">
                    Highlights:
                  </p>
                  <ul className="list-disc list-inside text-xs text-muted space-y-0.5">
                    {edu.achievements.map((achievement, aidx) => (
                      <li key={aidx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </section>
  );
}
