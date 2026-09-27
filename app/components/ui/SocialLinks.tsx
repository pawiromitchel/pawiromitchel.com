import { personalInfo } from "@/app/data/personal";
import { cn } from "@/lib/utils";
import { GitHubIcon, LinkedInIcon, XIcon } from "./BrandIcons";

const socials = [
  { label: "GitHub", href: personalInfo.social.github, Icon: GitHubIcon },
  { label: "LinkedIn", href: personalInfo.social.linkedin, Icon: LinkedInIcon },
  { label: "X", href: personalInfo.social.x, Icon: XIcon },
];

export function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-1", className)}>
      {socials.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="inline-flex size-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
        >
          <Icon className="size-4" />
        </a>
      ))}
    </div>
  );
}
