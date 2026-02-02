import { Navigation } from "../components/layout/Navigation";
import { Footer } from "../components/layout/Footer";
import { Container } from "../components/layout/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Timeline, TimelineItem } from "../components/ui/Timeline";
import { BadgeGroup } from "../components/ui/Badge";
import { experiences } from "@/app/data/experience";

export const metadata = {
  title: "Experience - Pawiro Mitchel",
  description: "My professional experience in blockchain, Web3, and full-stack development",
};

export default function ExperiencePage() {
  return (
    <>
      <Navigation />
      <main className="pt-20 bg-background min-h-screen">
        <Container className="py-12">
          <SectionHeading centered subtitle="10+ years of experience in full-stack and blockchain development">
            Professional Experience
          </SectionHeading>

          <Timeline className="max-w-3xl mx-auto">
            {experiences.map((exp, index) => (
              <TimelineItem
                key={exp.id}
                title={exp.company}
                subtitle={exp.position}
                date={exp.duration}
                description={exp.description}
                isLast={index === experiences.length - 1}
              >
                <div className="mt-4">
                  <p className="text-sm font-semibold text-muted mb-2">
                    Key Achievements:
                  </p>
                  <ul className="list-disc list-inside text-sm text-muted space-y-1 mb-4">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                  <BadgeGroup badges={exp.technologies} variant="primary" />
                </div>
              </TimelineItem>
            ))}
          </Timeline>
        </Container>
      </main>
      <Footer />
    </>
  );
}
