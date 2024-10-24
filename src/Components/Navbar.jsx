import { useState } from "react";
import { Code2 } from "lucide-react"; // Importamos el ícono

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="border-gray-700 bg-gray-800 fixed top-0 left-0 w-full z-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
          <div className="flex items-center justify-center gap-3">
            <span className="self-center text-2xl font-bold whitespace-nowrap text-white">
              Sergio Duran
            </span>
            <Code2 className="w-6 h-6 text-white" />

          </div>
          </a>
          <button
            onClick={onToggle}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}>
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-700 rounded-lg bg-gray-800 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-gray-800">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-green-700 rounded md:bg-transparent md:text-green-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#techstack"
                  className="block py-2 px-3 text-white rounded hover:bg-green-500 md:hover:bg-transparent md:border-0 md:hover:text-green-500"
                >
                  Tech Stack
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="block py-2 px-3 text-white rounded hover:bg-green-500 md:hover:bg-transparent md:border-0 md:hover:text-green-500"
                >
                  Projects
                </a>
              </li>
             
              <li>
                <a
                  href="#contact"
                  className="block py-2 px-3 text-white rounded hover:bg-green-500 md:hover:bg-transparent md:border-0 md:hover:text-green-500"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
