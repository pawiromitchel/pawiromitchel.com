import React from "react";
import { Container } from "../layout/Container";
import { personalInfo } from "@/app/data/personal";

interface StatItemProps {
  number: number | string;
  label: string;
}

function StatItem({ number, label }: StatItemProps) {
  return (
    <div className="text-center">
      <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
        {number}
      </div>
      <p className="text-muted font-medium">{label}</p>
    </div>
  );
}

export function Stats() {
  const stats = [
    {
      number: `${personalInfo.stats.yearsExperience}+`,
      label: "Years of Experience",
    },
    {
      number: personalInfo.stats.companiesWorked,
      label: "Companies Worked",
    },
    {
      number: `${personalInfo.stats.projectsCompleted}+`,
      label: "Projects Completed",
    },
    {
      number: personalInfo.stats.hackathonWins,
      label: "Hackathon Wins",
    },
  ];

  return (
    <section className="py-24 bg-white border-y border-border">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="animate-fade-in-up" style={{
              animationDelay: `${index * 100}ms`
            }}>
              <StatItem number={stat.number} label={stat.label} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
