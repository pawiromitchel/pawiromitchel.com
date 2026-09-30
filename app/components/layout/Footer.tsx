import { personalInfo } from "@/app/data/personal";
import { Container } from "./Container";
import { SocialLinks } from "../ui/SocialLinks";

export function Footer() {
  return (
    <footer className="border-t">
      <Container className="flex flex-col gap-4 py-8 font-mono text-xs text-subtle sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {personalInfo.name}
        </p>
        <SocialLinks />
      </Container>
    </footer>
  );
}
