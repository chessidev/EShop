import { FaLinkedin, FaLocationArrow, FaSquareGithub } from "react-icons/fa6";
import Button from "../Shared/Button";
import { FaFacebookSquare } from "react-icons/fa";
import { IoMdPhonePortrait } from "react-icons/io";

const Footer = () => {
  const visitGitHub = () => {
    window.open("https://github.com/eng-youssef-elsayed", "_blank");
  };

  return (
    <footer className="bg-gray-200 md:bg-white dark:bg-gray-950">
      <div className="container pt-5 pb-20 md:grid grid-cols-[auto_auto] justify-between">
        <article className="px-4 py-8">
          <a
            href="/"
            className="text-2xl font-semibold tracking-widest uppercase text-primary sm:text-3xl"
          >
            eshop
          </a>
          <p className="pt-3 text-gray-600 dark:text-white/70 max-w-[250px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
            alias cum
          </p>
          <p className="pt-4 mb-4 text-gray-500 max-w-fit">
            Made with 💖 by Youssef Elsayed
          </p>
          <Button text="visit my gitHub account" onClickHandler={visitGitHub} />
        </article>
        <div className="grid grid-cols-2 sm:grid-cols-3">
          <div className="px-4 py-8 ">
            <h3 className="mb-3 text-xl font-bold dark:text-white">
              Important Links
            </h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
              <li className="hover:text-black dark:hover:text-white">
                <a href="/">Home</a>
              </li>
              <li className="hover:text-black dark:hover:text-white">
                <a href="/">About</a>
              </li>
              <li className="hover:text-black dark:hover:text-white">
                <a href="/">Conatct</a>
              </li>
              <li className="hover:text-black dark:hover:text-white">
                <a href="/">Blogs</a>
              </li>
            </ul>
          </div>
          <div className="px-4 py-8 ">
            <h3 className="mb-3 text-xl font-bold dark:text-white">
              Quick Links
            </h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
              <li className="hover:text-black dark:hover:text-white">
                <a href="/">Home</a>
              </li>
              <li className="hover:text-black dark:hover:text-white">
                <a href="/">About</a>
              </li>
              <li className="hover:text-black dark:hover:text-white">
                <a href="/">Conatct</a>
              </li>
              <li className="hover:text-black dark:hover:text-white">
                <a href="/">Blogs</a>
              </li>
            </ul>
          </div>
          <article className="px-4 py-8 dark:text-white">
            <h3 className="mb-3 text-xl font-bold">Address</h3>
            <div className="flex items-center gap-3">
              <FaLocationArrow className="min-w-4" />
              <p>Giza, Egypt</p>
            </div>
            <div className="flex items-center gap-3 my-6">
              <IoMdPhonePortrait className="min-w-4" />
              <p>+201114809161</p>
            </div>
            <ul className="flex items-center gap-3">
              <li>
                <a href="https://www.linkedin.com/in/eng-youssef-elsayed/">
                  <FaLinkedin className="text-3xl duration-300 hover:text-primary" />
                </a>
              </li>
              <li>
                <a href="https://github.com/eng-youssef-elsayed">
                  <FaSquareGithub className="text-3xl duration-300 hover:text-primary" />
                </a>
              </li>
              <li>
                <a href="https://web.facebook.com/engyoussefelsayed">
                  <FaFacebookSquare className="text-3xl duration-300 hover:text-primary" />
                </a>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
