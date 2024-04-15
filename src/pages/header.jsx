import { MenuIcon, Moon,  Sun } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsopen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    document.documentElement.classList.toggle("dark"); // Toggle dark mode globally
    setIsopen(isOpen);
  };

  const downloadFile = () => {
    const pdfUrl = "PurbarunMondal.pdf";
    const element = document.createElement("a");
    element.href = pdfUrl;
    element.download = "PurbarunMondal_Resume.pdf";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <>
      <header className="dark:bg-black bg-slate-200 px-10 lg:py-2 2xl:py-4 hidden lg:flex justify-end lg:gap-8 2xl:gap-10 items-center text-slate-600 dark:text-slate-400">
        <nav>
          <ul className="list-none flex lg:gap-10 2xl:gap-16 items-center lg:text-lg 2xl:text-2xl font-bold">
            <li className="dark:hover:text-rose-500 hover:text-[#91a31d]">
              <Link to="/">Home</Link>
            </li>
            <li className="dark:hover:text-rose-500 hover:text-[#91a31d]">
              <Link to="/about">About</Link>
            </li>
            <li className="dark:hover:text-rose-500 hover:text-[#91a31d]">
              <Link to="/projects">Work</Link>
            </li>
            <li className="dark:hover:text-rose-500 hover:text-[#91a31d]">
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div>
          <ul className="list-none flex lg:gap-8 2xl:gap-12 items-center">
            <li className="border-l-2 h-10 border-slate-400"></li>
            <li
              className="cursor-pointer hidden dark:block"
              onClick={toggleDarkMode}
            >
              <Sun color="white" size={20} />
            </li>
            <li
              className="cursor-pointer dark:hidden block"
              onClick={toggleDarkMode}
            >
              <Moon color="black" size={20} />
            </li>
            <li>
              <button
                className="lg:p-1 2xl:p-2 rounded-md dark:text-zinc-100 text-gray-800 font-bold dark:bg-rose-500 dark:shadow-lg shadow-md bg-[#b7c84c] dark:shadow-rose-500/50 shadow-[#070703] transition delay-150 duration-200 ease-in-out hover:-translate-y-1 hover:shadow-none"
                onClick={downloadFile}
              >
                Resume
              </button>
            </li>
          </ul>
        </div>
      </header>

      {/* Mobile nav*/}
      <nav className="sm:hidden border-b-2">
        <div className="flex justify-between p-2">
          <div className="flex gap-3 items-center">
            <img src="/images/profile-pic.png" alt="" className="w-12 h-12" />
            <h3 className="text-xl font-bold text-[#a5b923] dark:text-rose-500">My Portfolio</h3>
          </div>
          <div className="block dark:hidden">
            <MenuIcon
              color="#a5b923"
              size={40}
              onClick={() => {
                setIsopen(!isOpen);
              }}
            />
          </div>
          <div className="hidden dark:block">
            <MenuIcon
              color="red"
              size={40}
              onClick={() => {
                setIsopen(!isOpen);
              }}
            />
          </div>
        </div>
        {isOpen && (
          <div className="xl:hidden absolute w-full h-screen flex flex-col items-center pt-20 dark:bg-black bg-slate-200 text-slate-600 dark:text-slate-400">
            <ul className="flex flex-col items-center gap-12 text-3xl font-semibold">
              <li
                className="cursor-pointer hidden dark:block"
                onClick={toggleDarkMode}
              >
                <Sun color="white" size={30} />
              </li>
              <li
                className="cursor-pointer dark:hidden block"
                onClick={toggleDarkMode}
              >
                <Moon color="black" size={30} />
              </li>
              <li
                className="dark:hover:text-rose-500 hover:text-[#91a31d]"
                onClick={() => {
                  setIsopen(!isOpen);
                }}
              >
                <Link to="/">Home</Link>
              </li>
              <li
                className="dark:hover:text-rose-500 hover:text-[#91a31d]"
                onClick={() => {
                  setIsopen(!isOpen);
                }}
              >
                <Link to="/about">About</Link>
              </li>
              <li
                className="dark:hover:text-rose-500 hover:text-[#91a31d]"
                onClick={() => {
                  setIsopen(!isOpen);
                }}
              >
                <Link to="/projects">Work</Link>
              </li>
              <li
                className="dark:hover:text-rose-500 hover:text-[#91a31d]"
                onClick={() => {
                  setIsopen(!isOpen);
                }}
              >
                <Link to="/Contact">Contact</Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
