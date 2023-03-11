import { useState } from "react";
import { NAVBAR } from "../theme";

type navbarProps = {
  nameProp: string;
  pageProp: number;
  setPage: (pageNumber: number) => void;
  resetApp: () => void;
};

const Navbar = ({ nameProp, pageProp, setPage, resetApp }: navbarProps) => {
  const [open, setOpen] = useState(0);
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <div className="flex items-center">
          <a href="/">
            <img
              src={require("../imgs/supplyAlly-logo.png")}
              className="h-5 mr-3 ml-4 sm:h-5"
              alt="SupplyAlly"
            />
          </a>
          <a
            href="#"
            onClick={nameProp != "Guest" && (() => setPage(1))}
            className={`${
              pageProp == 1 ? "text-md text-blue-600" : "text-gray-700"
            } ${NAVBAR.navbarItems} ml-8 hidden md:block`}
          >
            Track
          </a>
          <a
            href="#"
            onClick={nameProp != "Guest" && (() => setPage(2))}
            className={`${
              pageProp == 2 ? "text-md text-blue-600" : "text-gray-700"
            }
            ${NAVBAR.navbarItems} ml-8 hidden md:block`}
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
                } ${NAVBAR.navbarItems} ${
                  open ? "block" : "hidden"
                } md:hidden text-left`}
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
            ${NAVBAR.navbarItems}${
                  open ? "block" : "hidden"
                } md:hidden text-left`}
                aria-current="page"
              >
                Statistics
              </a>
            </li>
            <li className="hidden md:block">
              <a href="#" className={`${NAVBAR.navbarItems}`}>
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
                className={`${NAVBAR.navbarItems} text-left border`}
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
