import { Award, BadgeCheck, GraduationCap, Languages } from "lucide-react";
import { Card } from "@/components/ui/card";
import { awards, certifications, education, type Credential } from "@/app/data/education";
import { languages } from "@/app/data/skills";
import { Container } from "../layout/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

const groups: { icon: React.ComponentType<{ className?: string }>; label: string; items: Credential[] }[] = [
  { icon: GraduationCap, label: "Education", items: education },
  { icon: Award, label: "Awards", items: awards },
  { icon: BadgeCheck, label: "Certification", items: certifications },
  { icon: Languages, label: "Languages", items: languages.map((l) => ({ title: l.name, issuer: l.level })) },
];

export function CredentialsSection() {
  return (
    <section id="credentials" className="pb-20 sm:pb-28">
      <Container>
        <SectionHeading eyebrow="Credentials" tone="build" title="Education, awards and certifications" />
        <div className="grid items-start gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {groups.map(({ icon: Icon, label, items }, i) => (
            <Reveal key={label} delay={i * 0.06}>
              <Card className="gap-5 rounded-2xl p-6 ring-border sm:p-7">
                <h3 className="flex items-center gap-2.5 text-base font-semibold">
                  <Icon className="size-5 text-operate" />
                  {label}
                </h3>
                <ul className="space-y-3.5">
                  {items.map((item) => (
                    <li key={`${item.title}-${item.issuer}-${item.year}`}>
                      <p className="text-[15px] font-medium">{item.title}</p>
                      <p className="mt-0.5 text-sm text-muted-foreground">
                        {item.issuer}
                        {item.year && ` · ${item.year}`}
                      </p>
                      {item.note && <p className="mt-0.5 text-sm text-subtle">{item.note}</p>}
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
