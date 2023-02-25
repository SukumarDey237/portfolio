import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contacts/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  },[]);
  return (
    <>
      <Navbar />
      <main className="container-fluid">
        <div data-aos="fade-up">
          <Home />
        </div>
        <div data-aos="fade">
          <About />
        </div>
        <div data-aos="fade">
          <Skills />
        </div>
        <div data-aos="fade">
          <Projects />
        </div>
        <div data-aos="fade">
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
