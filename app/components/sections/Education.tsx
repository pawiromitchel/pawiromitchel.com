import { Award, BadgeCheck, GraduationCap, Languages } from "lucide-react";
import { awards, certifications, education, type Credential } from "@/app/data/education";
import { languages } from "@/app/data/skills";

function CredentialGroup({
  icon: Icon,
  label,
  items,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  items: Credential[];
}) {
  return (
    <div className="rounded-xl border bg-card p-5">
      <h3 className="mb-4 flex items-center gap-2 text-sm font-medium">
        <Icon className="size-4 text-brand" />
        {label}
      </h3>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={`${item.title}-${item.year}`} className="text-sm">
            <p className="font-medium">{item.title}</p>
            <p className="text-muted-foreground">
              {item.issuer}
              {item.year && ` · ${item.year}`}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Credentials() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <CredentialGroup icon={GraduationCap} label="Education" items={education} />
      <CredentialGroup icon={Award} label="Awards" items={awards} />
      <CredentialGroup icon={BadgeCheck} label="Certification" items={certifications} />
      <CredentialGroup
        icon={Languages}
        label="Languages"
        items={languages.map((l) => ({ title: l.name, issuer: l.level }))}
      />
    </div>
  );
}
