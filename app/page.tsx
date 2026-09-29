import { getPosts } from "@/lib/posts";
import { Hero } from "./components/sections/Hero";
import { CareerBar } from "./components/sections/CareerBar";
import { Highlights } from "./components/sections/Stats";
import { ExperienceSection } from "./components/sections/Experience";
import { ProjectsSection } from "./components/sections/Projects";
import { AboutSection } from "./components/sections/Skills";
import { CredentialsSection } from "./components/sections/Education";
import { WritingSection } from "./components/sections/Writing";
import { ContactSection } from "./components/sections/Contact";

export default async function Home() {
  const posts = await getPosts();

  return (
    <>
      <Hero />
      <CareerBar />
      <Highlights />
      <ExperienceSection />
      <ProjectsSection />
      <AboutSection />
      <CredentialsSection />
      <WritingSection posts={posts.slice(0, 3)} />
      <ContactSection />
    </>
  );
}
