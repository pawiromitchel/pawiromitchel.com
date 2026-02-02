import { Navigation } from "../components/layout/Navigation";
import { Footer } from "../components/layout/Footer";
import { Container } from "../components/layout/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
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

          <div className="max-w-3xl mx-auto space-y-12">
            {groupedExperiences.map((group) => (
              <div key={group.company} className="border-l-2 border-primary pl-6">
                {/* Company Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-1">
                    {group.company}
                  </h3>
                  <p className="text-muted text-sm">
                    {calculateDuration(group.startDate, group.endDate)} • {group.location}
                  </p>
                </div>

                {/* Positions under this company */}
                <div className="space-y-8">
                  {group.positions
                    .sort((a, b) => b.startDate.localeCompare(a.startDate))
                    .map((exp, idx) => (
                      <div key={exp.id}>
                        <div className="mb-4">
                          <h4 className="text-lg font-semibold text-foreground mb-1">
                            {exp.position}
                          </h4>
                          <p className="text-sm text-muted">
                            {exp.duration}
                          </p>
                        </div>

                        <p className="text-muted text-sm mb-4 leading-relaxed">
                          {exp.description}
                        </p>

                        <div className="mb-4">
                          <p className="text-sm font-semibold text-muted mb-2">
                            Key Achievements:
                          </p>
                          <ul className="list-disc list-inside text-sm text-muted space-y-1">
                            {exp.achievements.map((achievement, aidx) => (
                              <li key={aidx}>{achievement}</li>
                            ))}
                          </ul>
                        </div>

                        <BadgeGroup badges={exp.technologies} variant="primary" size="sm" />

                        {idx < group.positions.length - 1 && (
                          <div className="mt-8 pt-8 border-t border-border" />
                        )}
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
