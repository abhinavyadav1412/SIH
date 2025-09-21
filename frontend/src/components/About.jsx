import React, { useEffect, useRef, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import "../styles/about.css";

const projectDetails = [
  {
    title: "Blockchain Integration",
    description:
      "Secure herbs data with immutable blockchain technology.",
    url: "https://cdn.refokus.com/website/Arqitel/Arqitel%20project%20video%204_3.webm",
    hoverColor: "bg-[#5355ee]",
    services: [
      "Custom Ledger Development",
      "Seamless Onboarding",
      "Data Migration & Security",
    ],
  },
  {
    title: "Herb Authentication",
    description:
      "Verify herb authenticity with tamper-proof blockchain records.",
    url: "https://cdn.refokus.com/website/Cula_promo_new_4_3.mp4",
    hoverColor: "bg-[#4a576b]",
    services: ["Digital Product Identity", "Certificate of Analysis", "Geotagging & Timestamping"],
  },
  {
    title: "QR Code Tracking",
    description:
      "Real-time QR tracking from manufacturer to consumer(Adds immediacy/time sensitivity)",
    url: "https://cdn.refokus.com/website/TTR/TTR%20project%20video%204_3_H.264.webm",
    hoverColor: "bg-[#46289a]",
    services: ["Unique Code Generation", "Consumer-Facing Journey Page", "Brand Story Integration"],
  },
  {
    title: "Supply Chain Visibility",
    description:
      "Real-time monitoring of ayurvedic herbs supply chains with Compliance",
    url: "https://cdn.refokus.com/website/Maniv-Compressed.mp4",
    hoverColor: "bg-[#2a9c6c]",
    services: ["Real-Time Tracking Dashboard", "Stakeholder Portals", "Condition Monitoring"],
  },
  {
    title: "Data Analytics",
    description:
      "Predictive insights from your supply chain data(Adds future-focused capability)",
    url: "https://cdn.refokus.com/website/YIR%20website%202022%204_3_VP9.webm",
    services: [
      "Performance Reporting",
      "Consumer Engagement Metrics",
      "Predictive Insights",
    ],
    hoverColor: "bg-[#382865]",
  },
  {
    title: "Smart Contracts",
    description:
      "Automate trustless transactions via smart contracts(Blockchain terminology for credibility)",
    url: "https://cdn.refokus.com/website/2022/videos/summon.webm",
    services: ["Automated Supplier Payments", "Compliance Automation", "Royalty & Payout Management"],
    hoverColor: "bg-[#22636d]",
  },
];

const About = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const [topOffset, setTopOffset] = useState(0);

  const rowRefs = useRef([]);

  // Create spring animations for smooth movement
  const springConfig = { damping: 25, stiffness: 150 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  // Transform mouse position to preview position with boundaries
  const previewX = useTransform(mouseX, [0, 2000], [-50, 50]);
  const previewY = useTransform(mouseY, [-200, 200], [-30, 30]);

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const row = rowRefs.current[hoveredIndex];

    if (!row) return;

    const rect = row.getBoundingClientRect();

    // Calculate mouse position relative to row center
    const relativeY = clientY - (rect.top + rect.height / 2);

    // Update spring animations
    mouseX.set(clientX);
    mouseY.set(relativeY);
  };

  const handleMouseLeave = (e) => {
    // Only reset if we're not entering the preview div
    const relatedTarget = e.relatedTarget;
    if (!relatedTarget?.classList?.contains("preview-overlay")) {
      setHoveredIndex(0);
      mouseX.set(0);
      mouseY.set(0);
    }
  };

  useEffect(() => {
    // Calculate the offset based on the positions of row elements
    if (rowRefs.current[hoveredIndex]) {
      const rowElement = rowRefs.current[hoveredIndex];
      const containerTop = rowRefs.current[0].offsetTop;
      const rowTop = rowElement.offsetTop;
      const rowHeight = rowElement.offsetHeight;

      // Position the preview div centered vertically on the hovered row
      const previewHeight = 440; // Height of preview div
      setTopOffset(rowTop - containerTop + (rowHeight - previewHeight) / 2);
    } else {
      setTopOffset(0);
    }
  }, [hoveredIndex]);
  return (
    <div className=" w-full mt-32 mb-24 relative">
      {projectDetails.map((project, index) => (
        <motion.div
          ref={(el) => (rowRefs.current[index] = el)}
          key={index}
          className={`w-full px-[88.5px] transit flex justify-between ${
            index !== projectDetails.length - 1
              ? `border-[0.5px] border-x-0 border-t-0 border-solid border-white`
              : ``
          } 
        ${
          index === hoveredIndex ? `${project.hoverColor}` : ``
        } transition-colors duration-300`}
          initial={false}
          animate={{
            paddingTop: index === hoveredIndex ? 69 : 40,
            paddingBottom: index === hoveredIndex ? 69 : 40,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          onHoverStart={() => setHoveredIndex(index)}
          onMouseMove={handleMouse}
          onMouseLeave={handleMouseLeave}
        >
          <div className=" flex flex-col justify-around items-start gap-16">
            <p className=" text-white font-Satoshi font-medium text-4xl leading-5">{`${project.title}`}</p>
            <div className=" flex flex-col ">
              {project.services.map((service, ind) => (
                <p key={ind} className=" text-white font-Satoshi font-normal text-xs uppercase leading-5">
                  {service}
                </p>
              ))}
            </div>
          </div>
          <div className=" flex flex-col justify-around items-start gap-16 max-w-lg">
            <p className=" text-white font-Satoshi font-light text-lg leading-5 w-full">
              {project.description}
            </p>

            <a
              href="#"
              className={`link link--iocaste self-end transition-opacity duration-300 ${
                index === hoveredIndex ? " opacity-100" : " opacity-0"
              }`}
            >
              <span className=" text-white font-light">View Case Study</span>
              <svg
                className="link__graphic link__graphic--slide"
                width="300%"
                height="100%"
                viewBox="0 0 1200 60"
                preserveAspectRatio="none"
              >
                <path d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"></path>
              </svg>
            </a>
          </div>
        </motion.div>
      ))}
      <motion.div
        className={`absolute pointer-events-none bg-white w-[585px] h-[440px] z-10 overflow-hidden rounded-xl left-[28%] `}
        animate={{
          top: topOffset,
        }}
        style={{
          x: previewX,
          y: previewY,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      >
        <motion.div
          animate={{
            y: -hoveredIndex * 440,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          {projectDetails.map((project, ind) => (
            <video
              key={ind}
              src={project.url}
              muted
              autoPlay
              playsInline
              loop
              controls={false}
              className=" object-cover min-w-[585px] min-h-[440px] preview-overlay"
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;