import logo from "./svg/supplyAlly-logo.svg";
import React from "react";
import { useState } from "react";
const classNames = {
  navbarItems:
    "font-semibold block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0",
};

const Navbar = ({ nameProp, pageProp, setPage, resetApp }) => {
  const [open, setOpen] = useState(0);
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <div className="flex items-center">
          <a href="/">
            <img
              src={logo}
              className="h-5 mr-3 ml-4 sm:ml-0 sm:h-6"
              alt="SupplyAlly"
            />
          </a>
          <a
            href="#"
            onClick={nameProp != "Guest" && (() => setPage(1))}
            className={`${
              pageProp == 1 ? "text-md text-blue-600" : "text-gray-700"
            } ${classNames.navbarItems} ml-8 hidden md:block`}
            aria-current="page"
          >
            Track
          </a>
          <a
            href="#"
            onClick={nameProp != "Guest" && (() => setPage(2))}
            className={`${
              pageProp == 2 ? "text-md text-blue-600" : "text-gray-700"
            }
            ${classNames.navbarItems} ml-8 hidden md:block`}
            aria-current="page"
          >
            Statistics
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          onClick={open ? () => setOpen(0) : () => setOpen(1)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={`${
            open ? "block" : "hidden"
          }  md:block w-full md: md:w-auto`}
          id="navbar-default"
        >
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-4 md:mt-0 md:border-0 md:bg-white">
            <li>
              <a
                href="#"
                onClick={nameProp != "Guest" && (() => setPage(1))}
                className={`${
                  pageProp == 1 ? "text-md text-blue-600" : "text-gray-700"
                } ${classNames.navbarItems} ${
                  open ? "block" : "hidden"
                } md:hidden`}
                aria-current="page"
              >
                Track
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={nameProp != "Guest" && (() => setPage(2))}
                className={`${
                  pageProp == 2 ? "text-md text-blue-600" : "text-gray-700"
                }
            ${classNames.navbarItems}${open ? "block" : "hidden"} md:hidden`}
                aria-current="page"
              >
                Statistics
              </a>
            </li>
            <li>
              <a href="#" className={`${classNames.navbarItems}`}>
                <span role="img" aria-label="sheep">
                  👋
                </span>{" "}
                <span className="font-normal">Hi</span> {nameProp}
              </a>
            </li>
            <span className={`${open ? "hidden" : "block"} md:block`}>|</span>
            <li>
              <a
                onClick={resetApp}
                href="#"
                className={`${classNames.navbarItems}`}
              >
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
