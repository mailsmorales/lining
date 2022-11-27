import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/Logo.png";
import { BaseButton } from "../ui/button/BaseButton";
import { NavLinks } from "./NavLinks";

export const NavBar = () => {
  return (
    <nav className="bg-purple-700">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full">
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
        <div className="md:block hidden">
          <BaseButton name="Войти" />
        </div>
        {/* Mobile nav */}
        <ul className={`md:hidden bg-purple-700 absolute w-full h-full bottom-0 py-24 pl-4 text-white`}>
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Главная
            </Link>
          </li>
          <NavLinks />
          <div className="py-5">
          <BaseButton name="Войти" />
          </div>
        </ul>
      </div>
    </nav>
  );
};
