import React from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";

import LocomotiveScroll from 'locomotive-scroll';



function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="h-screen w-full ">
      <Navbar />
      <Landing />
    
    </div>
  );
}

export default App;
