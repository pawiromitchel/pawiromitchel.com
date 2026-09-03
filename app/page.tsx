import { Navigation } from "./components/layout/Navigation";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { ExperienceSection } from "./components/sections/Experience";
import { ProjectsSection } from "./components/sections/Projects";
import { EducationSection } from "./components/sections/Education";

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="pt-16">
        <Hero />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
      </main>
      <Footer />
    </>
  );
}
