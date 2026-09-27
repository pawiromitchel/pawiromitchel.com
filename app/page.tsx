import { getPosts } from "@/lib/posts";
import { Hero } from "./components/sections/Hero";
import { Highlights } from "./components/sections/Stats";
import { ProjectsSection } from "./components/sections/Projects";
import { ExperienceSection } from "./components/sections/Experience";
import { WritingSection } from "./components/sections/Writing";
import { AboutSection } from "./components/sections/Skills";
import { ContactSection } from "./components/sections/Contact";

export default async function Home() {
  const posts = await getPosts();

  return (
    <>
      <Hero />
      <Highlights />
      <ProjectsSection />
      <ExperienceSection />
      <WritingSection posts={posts.slice(0, 3)} />
      <AboutSection />
      <ContactSection />
    </>
  );
}
