import React, { useState } from "react";
import Logo from "../../assets/img/Logo.png";
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";

export const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 mx-auto max-w-[1230px] px-6 text-white">
      <img src={Logo} alt="" />
      <nav>
        <ul className="flex bg-red-500 hidden md:flex uppercase cursor-pointer">
          
        </ul>
      </nav>
      <div className="flex cursor-pointer">
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>
        <div className="ml-3 hover:ml-52 transition-all">
          <AiOutlineSearch size={25} />
        </div>
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-white-600 bg-red-600 text-white ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <img className="m-4" src={Logo} alt="" />
        <nav>
          <ul className="uppercase cursor-pointer p-4"></ul>
        </nav>
      </div>
    </div>
  );
};
