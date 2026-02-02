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

interface GroupedExperience {
  company: string;
  positions: typeof experiences;
  startDate: string;
  endDate: string | "Present";
  location: string;
}

function groupExperiencesByCompany(exps: typeof experiences): GroupedExperience[] {
  const grouped: { [key: string]: GroupedExperience } = {};

  exps.forEach((exp) => {
    if (!grouped[exp.company]) {
      grouped[exp.company] = {
        company: exp.company,
        positions: [],
        startDate: exp.startDate,
        endDate: exp.endDate,
        location: exp.location,
      };
    }
    grouped[exp.company].positions.push(exp);

    // Update earliest start date and latest end date
    if (exp.startDate < grouped[exp.company].startDate) {
      grouped[exp.company].startDate = exp.startDate;
    }
    if (exp.endDate === "Present" || exp.endDate > grouped[exp.company].endDate) {
      grouped[exp.company].endDate = exp.endDate;
    }
  });

  return Object.values(grouped).sort((a, b) => {
    const aEnd = a.endDate === "Present" ? "2999-12" : a.endDate;
    const bEnd = b.endDate === "Present" ? "2999-12" : b.endDate;
    return bEnd.localeCompare(aEnd);
  });
}

function calculateDuration(startDate: string, endDate: string | "Present"): string {
  const start = new Date(startDate + "-01");
  const end = endDate === "Present" ? new Date() : new Date(endDate + "-01");

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  const parts = [];
  if (years > 0) parts.push(`${years} yr${years !== 1 ? "s" : ""}`);
  if (months > 0) parts.push(`${months} mo${months !== 1 ? "s" : ""}`);

  return parts.join(" ");
}

export default function ExperiencePage() {
  const groupedExperiences = groupExperiencesByCompany(experiences);

  return (
    <>
      <Navigation />
      <main className="pt-20 bg-background min-h-screen">
        <Container className="py-12">
          <SectionHeading centered subtitle="10+ years of experience in full-stack and blockchain development">
            Professional Experience
          </SectionHeading>

          <Timeline className="max-w-3xl mx-auto">
            {groupedExperiences.map((group, groupIdx) => (
              <TimelineItem
                key={group.company}
                title={
                  <div className="flex items-center gap-3">
                    {group.positions[0]?.logo && (
                      <img
                        src={group.positions[0].logo}
                        alt={group.company}
                        className="w-10 h-10 rounded object-contain"
                      />
                    )}
                    <span>{group.company}</span>
                  </div>
                }
                subtitle={calculateDuration(group.startDate, group.endDate)}
                date={group.location}
                isLast={groupIdx === groupedExperiences.length - 1}
              >
                {/* Positions under this company */}
                <div className="space-y-6 mt-4">
                  {group.positions
                    .sort((a, b) => b.startDate.localeCompare(a.startDate))
                    .map((exp, idx) => (
                      <div key={exp.id}>
                        <h4 className="text-base font-semibold text-foreground mb-1">
                          {exp.position}
                        </h4>
                        <p className="text-sm text-muted mb-3">
                          {exp.duration}
                        </p>

                        <p className="text-muted text-sm mb-3 leading-relaxed">
                          {exp.description}
                        </p>

                        <div className="mb-3">
                          <p className="text-xs font-semibold text-muted mb-1">
                            Key Achievements:
                          </p>
                          <ul className="list-disc list-inside text-xs text-muted space-y-0.5">
                            {exp.achievements.map((achievement, aidx) => (
                              <li key={aidx}>{achievement}</li>
                            ))}
                          </ul>
                        </div>

                        <BadgeGroup badges={exp.technologies} variant="primary" size="sm" />

                        {idx < group.positions.length - 1 && (
                          <div className="mt-6 pt-6 border-t border-border" />
                        )}
                      </div>
                    ))}
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
