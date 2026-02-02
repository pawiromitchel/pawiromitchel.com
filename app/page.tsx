import { Navigation } from "./components/layout/Navigation";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { Stats } from "./components/sections/Stats";
import { ProjectsSection } from "./components/sections/Projects";
import { SkillsSection } from "./components/sections/Skills";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        <Hero />
        <Stats />
        <ProjectsSection />
        <SkillsSection />
      </main>
      <Footer />
    </>
  );
}
