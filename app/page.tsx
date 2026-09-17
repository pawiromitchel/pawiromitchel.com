import { Navigation } from "./components/layout/Navigation";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { Stats } from "./components/sections/Stats";
import { ExperienceSection } from "./components/sections/Experience";
import { ProjectsSection } from "./components/sections/Projects";
import { SkillsSection } from "./components/sections/Skills";
import { EducationSection } from "./components/sections/Education";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        <Hero />
        <Stats />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
      </main>
      <Footer />
    </>
  );
}
