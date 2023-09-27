import About from "@/components/sections/About";
import Intro from "@/components/sections/Intro";
import Projects from "@/components/sections/Projects";
import SectionDivider from "@/components/SectionDivider";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
