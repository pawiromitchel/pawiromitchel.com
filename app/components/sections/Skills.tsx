import React from "react";
import Link from "next/link";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { SectionHeading } from "../ui/SectionHeading";
import { topSkills } from "@/app/data/skills";

export function SkillsSection() {
  // Group top skills by category
  const skillsByCategory = {
    languages: topSkills.filter((s) => s.category === "languages"),
    frameworks: topSkills.filter((s) => s.category === "frameworks"),
    web3: topSkills.filter((s) => s.category === "web3"),
    devops: topSkills.filter((s) => s.category === "devops"),
  };

  return (
    <section className="py-20 bg-white">
      <Container>
        <SectionHeading subtitle="Technologies and tools I work with daily">
          Key Skills & Expertise
        </SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
            categorySkills.length > 0 && (
              <div key={category} className="animate-fade-in-up">
                <h3 className="text-lg font-semibold text-foreground mb-4 capitalize">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
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

        {/* View All Button */}
        <div className="text-center">
          <Link href="/skills">
            <Button variant="secondary" size="lg">
              View All Skills
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
