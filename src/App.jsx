import React from 'react';
import { ScrollTrigger, SplitText } from 'gsap/all';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import gsap from 'gsap';
import Cocktails from './components/Services.jsx';
import About from './components/About';
import Art from './components/Art';
import Menu from './components/Menu';
import Contact from "./components/Contact.jsx";
import Projects from "./components/Projects.jsx";
import Services from "./components/Services.jsx";




gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
        <Projects />
      <About />
      <Art />
      <Menu />
        <Contact />
    </main>
  ) 
}

export default App
