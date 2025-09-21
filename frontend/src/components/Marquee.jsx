import React from "react";
import { motion } from "framer-motion";
import Logo1 from "../assets/logos/blockchain.svg";
import Logo3 from "../assets/logos/javascript.svg";
import Logo4 from "../assets/logos/next-js.svg";
import Logo5 from "../assets/logos/nodejs.svg";
import Logo6 from "../assets/logos/reactjs.svg";
import Logo7 from "../assets/logos/solidity.svg";
import Logo8 from "../assets/logos/tailwindcss.svg";
import Logo9 from "../assets/logos/typescript.svg";
import Logo10 from "../assets/logos/vitejs.svg";

const Logos = [
  Logo1,
  Logo3,
  Logo4,
  Logo5,
  Logo6,
  Logo7,
  Logo8,
  Logo9,
  Logo10,
];

const Marquee = () => {
  return React.createElement(
    "div",
    { className: "mt-28 flex w-full py-8 gap-20 overflow-hidden" },
    React.createElement(
      motion.div,
      {
        initial: { x: "0" },
        animate: { x: "-100%" },
        transition: { ease: "linear", duration: 80, repeat: Infinity },
        className: "flex pr-16 flex-shrink-0 gap-36"
      },
      Logos.map((Logo, index) =>
        React.createElement("img", {
          key: index,
          src: Logo,
          className: "w-32 flex-shrink-0"
        })
      )
    ),
    React.createElement(
      motion.div,
      {
        initial: { x: "0" },
        animate: { x: "-100%" },
        transition: { ease: "linear", duration: 80, repeat: Infinity },
        className: "flex pr-16 flex-shrink-0 gap-36"
      },
      Logos.map((Logo, index) =>
        React.createElement("img", {
          key: index,
          src: Logo,
          className: "w-32 flex-shrink-0"
        })
      )
    )
  );
};

export default Marquee;