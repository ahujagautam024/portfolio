import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Contact from "./Components/Contact";
import SocialLinks from "./Components/SocialLinks";
import Projects from "./Components/Projects";

function App() {
  return (
    <div className="bg-white dark:bg-gray-800 transition-colors duration-300">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
