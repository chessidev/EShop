import React from "react";
import light_mode from "../../assets/website/light-mode-button.webp";
import dark_mode from "../../assets/website/dark-mode-button.webp";

const html = document.documentElement; // Select the html element

const Darkmode = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") || "light"
  );
  React.useEffect(() => {
    if (theme === "dark") {
      html.classList.add("dark");
      html.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.add("light");
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);
  return (
    <div className="relative cursor-pointer">
      <img
        src={light_mode}
        alt="light mode"
        className={`w-12 relative z-10 duration-300 ${
          theme === "light" ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => {
          if (theme === "light") {
            setTheme("dark");
          } else {
            setTheme("light");
          }
        }}
      />
      <img
        src={dark_mode}
        alt="dark mode"
        className={`w-12 absolute top-0 left-0`}
      />
    </div>
  );
};

export default Darkmode;
