import React from "react";
import Logo from "../../assets/img/Logo.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export const Navbar = () => {
  const menuItems = [
    "Главная",
    "Мужские",
    "Женские",
    "Lining Wade",
    "О Li-Ning",
  ];

  return (
    <div className="flex justify-between items-center h-24 mx-auto max-w-[1230px] px-6 text-white">
      <img src={Logo} alt="" />
      <ul className="flex bg-red-500 hidden uppercase">
        <li className="p-4">
          <a href="/">Главная</a>
        </li>
        <li className="p-4">Мужские</li>
        <li className="p-4">Женские</li>
        <li className="p-4">
          <a href="/">Lining Wade</a>
        </li>
        <li className="p-4">
          <a href="/">О Li-Ning</a>
        </li>
      </ul>
      <div>
        <AiOutlineMenu size={20} />
      </div>
      <div className="fixed left-0 top-0 w-[60%] h-full border-r border-r-white-600 bg-stone-300 text-white">
      <img className="m-4" src={Logo} alt="" />
        <ul className="uppercase">
          <li className="p-4">
            <a href="/">Главная</a>
          </li>
          <li className="p-4">Мужские</li>
          <li className="p-4">Женские</li>
          <li className="p-4">
            <a href="/">Lining Wade</a>
          </li>
          <li className="p-4">
            <a href="/">О Li-Ning</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
