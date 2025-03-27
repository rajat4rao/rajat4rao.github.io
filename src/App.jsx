import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import Home from "@pages/Home";
import About from "@pages/About";
import Projects from "@pages/Projects";
import Contact from "@pages/Contact";
import Education from "@pages/Education";
import Skills from "@pages/Skills";
import Experience from "@pages/Experience";
import { Element } from "react-scroll";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="px-8 md:px-10">
        <Element name="home">
          <Home />
        </Element>
        <Element name="about">
          <About />
        </Element>
        <Element name="experience">
          <Experience />
        </Element>
        <Element name="skills">
          <Skills />
        </Element>
        <Element name="education">
          <Education />
        </Element>
        <Element name="projects">
          <Projects />
        </Element>
      </main>
      <Footer />
    </div>
  );
}

export default App;