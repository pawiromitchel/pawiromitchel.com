import { Navigation } from "../components/layout/Navigation";
import { Footer } from "../components/layout/Footer";
import { Container } from "../components/layout/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Badge } from "../components/ui/Badge";
import { Card, CardTitle, CardDescription } from "../components/ui/Card";
import { skillsByCategory, certifications } from "@/app/data/skills";

export const metadata = {
  title: "Skills - Pawiro Mitchel",
  description: "My technical skills, expertise, and certifications",
};

export default function SkillsPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        <Container className="py-12">
          <SectionHeading centered subtitle="Technical skills and expertise">
            Skills & Expertise
          </SectionHeading>

          {/* Skills by category */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
              categorySkills.length > 0 && (
                <div key={category}>
                  <h3 className="text-2xl font-bold text-foreground mb-6 capitalize">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {categorySkills.map((skill) => (
                      <Badge
                        key={skill.name}
                        variant="primary"
                        size="md"
                      >
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              )
            ))}
          </div>

          {/* Certifications */}
          {certifications.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Certifications
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                  <Card key={index} padding="md">
                    <CardTitle>{cert.name}</CardTitle>
                    <CardDescription>
                      {cert.issuer} • {cert.year}
                    </CardDescription>
                    {cert.credentialId && (
                      <p className="text-xs text-muted mt-3">
                        ID: {cert.credentialId}
                      </p>
                    )}
                  </Card>
                ))}
              </div>
            </div>
          )}
        </Container>
      </main>
      <Footer />
    </>
  );
}
