import React, { forwardRef } from "react";
import Logo from "../assets/ayuchain.png";
import HeaderButton from "./HeaderButton";

const Navbar = forwardRef((props, ref) => {
  const { setElementHovered } = props;
  return (
    <div className="absolute top-0 left-0 right-0 z-50 flex justify-between items-center mx-auto max-w-screen-2xl py-6 px-6 sm:px-10">
      <img className="w-[15vw]" src={Logo} alt="AyuChain Logo" />
      <div className="text-white flex gap-2">
        <HeaderButton setElementHovered={setElementHovered} ref={ref} />
      </div>
    </div>
  );
});

export default Navbar;