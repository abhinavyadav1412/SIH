import React, { useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import StickyCursor from "./components/StickyCursor";


import { useScroll } from "framer-motion";
import Footer from "./components/Footer";


const App = () => {
  /* Locomotive scroll instance */
  const stickyElement = useRef();
  const containerRef = useRef();
  const [elementHovered, setElementHovered] = useState(false);
  const { scrollYProgress } = useScroll({
    container: containerRef,
  });

  return (
    <div
      ref={containerRef}
      className=" bg-[#C2AE92] w-screen h-screen overflow-y-auto overflow-x-hidden"
    >
      <Navbar setElementHovered={setElementHovered} ref={stickyElement} />
      <Hero scrollYProgress={scrollYProgress} />
      <About/>
      <Marquee/>
      <Footer/>
      <StickyCursor
        elementHovered={elementHovered}
        stickyElement={stickyElement}
      />
    </div>
  );
};

export default App;
