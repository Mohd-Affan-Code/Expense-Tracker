import React, { useState, useEffect } from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";

function Header() {
  const [theme, setTheme] = useState("light");

  // Dark mode toggle logic
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    setTheme(savedTheme);

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    localStorage.setItem("theme", newTheme);
  };

  return (
    <header className="flex items-center justify-between px-4 py-2 ">
      <h1 className="text-xl md:text-2xl font-bold text-white dark:text-white tracking-wide">
        Home Expenses
      </h1>
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition"
      >
        {theme === "light" ? (
          <IoMoonOutline className="text-white text-2xl" />
        ) : (
          <IoSunnyOutline className="text-white text-2xl" />
        )}
      </button>
    </header>
  );
}

export default Header;
