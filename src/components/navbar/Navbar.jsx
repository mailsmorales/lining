import React, { useState } from "react";
import Logo from "../../assets/img/Logo.png";
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";

export const NavBar = () => {
  const menuItems = [
    {
      title: "Главная",
      url: "/",
    },
    {
      title: "Мужское",
      subMenu: [
        {
          title: "Кроссовки",
          url: "Sneakers",
        },
        {
          title: "Одежда",
          url: "Clothing",
        },
        {
          title: "Аксессуары",
          url: "Accessories",
        },
        {
          title: "Для баскетбола",
          url: "Basketball",
        },
      ],
    },
    {
      title: "Женские",
    },
    {
      title: "Lining Wade",
      url: "/",
    },
    {
      title: "О Li-Ning",
      url: "/",
    },
  ];

  const renderMenuItmes = menuItems.map((menu, index) => (
    // <li className="p-4" key={item.title}>
    //   <a href={item.path}>{item.title}</a>
    // </li>
    <li className="p-4" key={index}>
      <a href={menu.url}>{menu.title}</a>
    </li>
  ));

  const renderMenuSideBar = menuItems.map((item) => (
    <li className="p-4 border-b border-white hover:text-black" key={item.title}>
      <a href={item.path}>{item.title}</a>
    </li>
  ));

  // const listItem = [
  //   {
  //     title: "Кроссовки",
  //     path: '/'
  //   },
  //   {
  //     title: "Одежда",
  //     path: '/'
  //   },
  //   {
  //     title: "Аксессуары",
  //     path: '/'
  //   },
  //   {
  //     title: "Для баскетбола",
  //     path: '/'
  //   },
  // ];

  // const renderListItem = listItem.map((item) => (
  //   <li className="" key={item.title}>
  //     <a href={item.path}>{item.title}</a>
  //   </li>
  // ));

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 mx-auto max-w-[1230px] px-6 text-white">
      <img src={Logo} alt="" />
      <nav>
        <ul className="flex bg-red-500 hidden md:flex uppercase cursor-pointer">
          {renderMenuItmes}
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
          <ul className="uppercase cursor-pointer p-4">{renderMenuSideBar}</ul>
        </nav>
      </div>
    </div>
  );
};
