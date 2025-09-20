import { motion } from "framer-motion";
import { Power4 } from "gsap/all";
import React from "react";
import { IoMenu } from "react-icons/io5";

function Navbar() {
  return (
    <div className="w-full fixed z-[999]">
      <div className="max-w-screen-xl mx-auto text-black py-4 sm:py-10 sm:px-6 px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: Power4.easeInOut, duration: 1.2 }}
          className="logo flex items-center justify-between"
        >
          
          <h1 className="text-2xl font-bold tracking-wide">
            AYUCHAIN
          </h1>

          
          <span className="text-lg sm:hidden">
            <IoMenu />
          </span>

          {/* Navbar links */}
          <div className="links hidden sm:flex gap-6">
            {["Work", "Studio", "News", "Contact"].map((item, index) => (
              <a
                key={index}
                className="text-sm cursor-pointer hover:underline"
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Navbar;
