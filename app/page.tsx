import Nav from "@/components/Nav";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Demo from "@/components/Demo";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative">
      <ScrollProgress />
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Demo />
      <Experience />
      <Skills />
      <Contact />
    </main>
  );
}
