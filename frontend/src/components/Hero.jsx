import { motion } from "framer-motion";
import React from "react";
import heroBackground from "../assets/logos/newhero.png";

function Hero() {
  // Add some sample content for animation
  const paraText = [
    "Welcome to Ayuchain",
    "Blockchain-based Traceability for Ayurvedic Herbs"
  ];

  const headingText = ["Ayuchain"];

  return (
    <div className="w-full relative h-[150vh] sm:h-[155vh]">
      {/* Background Image */}
      <div className="picture h-full w-full overflow-hidden">
        <img
          data-scroll
          data-scroll-speed="-1"
          className="h-1000 w-full object-cover object-bottom"
          src={heroBackground}
          alt="Ayuchain Background"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#C2AE92] to-transparent" />

      {/* Text Content */}
      <div className="para absolute mt-80 font-[poppins] text-black px-6 sm:px-32 sm:py-20 top-0">
        {/* Animated Paragraphs */}
        {paraText.map((item, index) => (
          <p
            key={index}
            className="text-lg sm:text-2xl opacity-80 leading-5 overflow-hidden tracking-tight"
          >
            <motion.span
              initial={{ rotate: 90, y: "100%", opacity: 0 }}
              animate={{ rotate: 0, y: 0, opacity: 1 }}
              transition={{
                ease: [0.22, 1, 0.36, 1],
                duration: 0.8,
                delay: index * 0.2,
              }}
              className="inline-block origin-left"
            >
              {item}
            </motion.span>
          </p>
        ))}

        {/* Animated Heading */}
        <div className="headings my-14 sm:my-14">
          <h1 className="text-7xl sm:text-[16vw] tracking-tighter overflow-hidden py-5 leading-1 sm:leading-none">
            {headingText.map((item, index) => (
              <motion.div
                key={index}
                initial={{ rotate: 90, y: "100%", opacity: 0 }}
                animate={{ rotate: 0, y: 0, opacity: 1 }}
                transition={{
                  ease: [0.22, 1, 0.36, 1],
                  duration: 0.8,
                  delay: 1.5 + index * 0.2,
                }}
                className="inline-block origin-left"
              >
                {item}
              </motion.div>
            ))}
          </h1>
        </div>

        {/* Second Paragraph */}
        <div className="para2 text-lg sm:w-[40%] leading-6 tracking-tight mb-5">
          Experience full transparency in Ayurvedic supply chains.
        </div>
      </div>
    </div>
  );
}

export default Hero;
