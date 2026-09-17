import React from "react";
import { Container } from "../layout/Container";
import { Badge } from "../ui/Badge";
import { SectionHeading } from "../ui/SectionHeading";
import { skillsByCategory } from "@/app/data/skills";

const categoryLabels: Record<string, string> = {
  languages: "Languages",
  frameworks: "Frameworks & Libraries",
  web3: "Web3 & Blockchain",
  devops: "DevOps & Infrastructure",
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-background border-t border-border/50">
      <Container>
        <div className="mb-16">
          <SectionHeading centered subtitle="Technologies, frameworks, and infrastructure tools I engineer with">
            Technical Skills & Expertise
          </SectionHeading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {Object.entries(skillsByCategory).map(([category, items]) => (
            items.length > 0 && (
              <div
                key={category}
                className="p-6 rounded-2xl bg-card-bg border border-border transition-all duration-300 hover:border-primary/40 hover:shadow-lg"
              >
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary inline-block" />
                  {categoryLabels[category] || category}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {items.map((skill) => (
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
      </Container>
    </section>
  );
}
