import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/Logo.png";
import { NavLinks } from "./NavLinks";

export const NavBar = () => {
  
  return <nav className="bg-purple-700">
  <div className="flex items-center font-medium justify-around">
    <div>
      <img src={Logo} alt="logo" className="md:cursor-pointer h-9" />
    </div>
    <ul className="md:flex hidden uppercase items-center gap-8 text-white">
      <li>
        <Link to="/" className="py-7 px-3 inline-block">
          Главная
        </Link>
      </li>
      <NavLinks />
    </ul>
  </div>
</nav>;
};
