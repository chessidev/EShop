import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import Darkmode from "./Darkmode";

const links = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "Shop", url: "#shop" },
  { id: 3, name: "About", url: "#about" },
  { id: 4, name: "Blogs", url: "#blogs" },
];
const Navbar = () => {
  return (
    <nav>
      <div className="container py-4 flex items-center justify-between">
        {/* Links Section */}
        <div className="flex items-center gap-4">
          <a
            href="/"
            className=" tracking-widest uppercase font-semibold text-primary text-2xl sm:text-3xl"
          >
            eshop
          </a>
          <ul className="gap-4 hidden lg:flex">
            {links.map((link) => {
              return (
                <li
                  key={link.id}
                  className=" dark:hover:text-white font-semibold text-gray-500 hover:text-black duration-300 px-4 items-center"
                >
                  <a href={link.url}>{link.name}</a>
                </li>
              );
            })}
          </ul>
        </div>
        {/* Others Section */}
        <div className=" flex items-center gap-4">
          {/* Search Section */}
          <div className="group max-w-fit relative hidden sm:block">
            <input
              type="text"
              placeholder="Search"
              className="focus:outline-none dark:bg-gray-800 py-1 duration-300 group-hover:px-3 w-0 inline-block group-hover:w-[300px] group-hover:border border-gray-600 rounded-full"
            />
            <IoMdSearch className=" absolute top-1/2 text-xl text-gray-600 right-3 -translate-y-1/2 group-hover:text-primary" />
          </div>
          {/* Cart Section */}
          <button className="relative p-3">
            <FaCartShopping className="text-xl text-gray-600" />
            <span className=" absolute top-0 right-0 text-xs w-4 h-4 bg-primary rounded-full flex items-center justify-center text-white">
              4
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
