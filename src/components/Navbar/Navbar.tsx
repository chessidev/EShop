import { useContext, useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import Darkmode from "./Darkmode";
import { ShoppingCartContext } from "../Shared/ShoppingCartContext";

type NavbarProps = {
  setOrderPopup: (value: boolean) => void;
};

const links = [
  { id: 1, name: "Home", url: "./" },
  { id: 2, name: "Shop", url: "/#shop" },
  { id: 3, name: "About", url: "/#about" },
  { id: 4, name: "Blogs", url: "/#blogs" },
];
const DropdownLinks = [
  { id: 1, name: "Trending Products", url: "/#" },
  { id: 2, name: "Best Selling", url: "/#" },
  { id: 3, name: "Top Rated", url: "/#" },
];

const Navbar = ({ setOrderPopup }: NavbarProps) => {
  const { cartCount } = useContext(ShoppingCartContext);

  const showPopup = () => {
    setOrderPopup(true);
  };

  return (
    <nav className="z-[100] fixed top-0 left-0 w-full backdrop-blur-3xl bg-white/50 dark:bg-gray-900/50">
      <div className="container flex items-center justify-between py-4">
        {/* Links Section */}
        <div className="flex items-center gap-4">
          <a
            href="./"
            className="text-2xl font-semibold tracking-widest uppercase text-primary sm:text-3xl"
          >
            eshop
          </a>
          <ul className="hidden gap-4 lg:flex">
            {links.map((link) => {
              return (
                <li
                  key={link.id}
                  className="items-center px-4 font-semibold text-gray-600 duration-300 dark:text-gray-400 dark:hover:text-white hover:text-black"
                >
                  <a href={link.url}>{link.name}</a>
                </li>
              );
            })}
            {/* Dropdown Section */}
            <li className="relative px-4 font-semibold text-gray-600 duration-300 dark:text-gray-400 group hover:text-black dark:hover:text-white">
              <div className="flex items-center gap-1">
                Quick Links
                <FaCaretDown className="duration-300 group-hover:rotate-180" />
              </div>
              <div className=" hidden group-hover:block px-2 absolute left-0 top-full pt-4 pb-2 bg-white shadow-md dark:shadow-primary/50 dark:bg-gray-900 w-[200px] z-[101] rounded-md group-hover:text-gray-600 dark:group-hover:text-gray-400">
                <ul className="space-y-2">
                  {DropdownLinks.map((link) => {
                    return (
                      <li
                        key={link.id}
                        className="px-2 py-2 duration-200 rounded-md hover:bg-primary/20 hover:text-black dark:hover:text-white"
                      >
                        <a href={link.url}>{link.name}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>
          </ul>
        </div>
        {/* Others Section */}
        <div className="flex items-center gap-4 ">
          {/* Search Section */}
          <div className="relative hidden group max-w-fit sm:block">
            <input
              type="text"
              placeholder="Search"
              className=" dark:placeholder:text-gray-900 dark:group-hover:placeholder:text-gray-500 dark:focus:placeholder:text-gray-500 placeholder:text-white group-hover:placeholder:text-gray-500 focus:placeholder:text-gray-500 caret-primary dark:text-white focus:outline-none dark:bg-gray-800 py-1 duration-300 group-hover:pl-3 focus:pl-3 group-hover:pr-8 focus:pr-8 w-0 inline-block focus:w-[170px] group-hover:w-[170px] xl:focus:w-[300px] xl:group-hover:w-[300px] group-hover:border focus:border border-primary rounded-full"
            />
            <IoMdSearch className="absolute text-xl text-gray-500 -translate-y-1/2 cursor-pointer top-1/2 right-3 group-hover:text-primary" />
          </div>
          {/* Cart Section */}
          <button className="relative p-3" onClick={showPopup}>
            <FaCartShopping className="text-xl text-gray-500" />
            <span
              className={`absolute top-0 right-0 items-center justify-center w-5 h-5 text-xs text-white rounded-full bg-primary ${
                cartCount === 0 ? "hidden" : "flex"
              }`}
            >
              {cartCount < 100 ? cartCount : 99}
            </span>
          </button>
          {/* Dark Mode */}
          <Darkmode />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
