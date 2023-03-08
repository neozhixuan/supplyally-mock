import "./App.css";
import React from "react";
import Navbar from "./Navbar";
import Track from "./Track";
import { useState } from "react";

function App() {
  const [nameInput, setNameInput] = useState("");
  const [finalName, setFinalName] = useState("Guest");
  const [error, setError] = useState("");
  const [page, setPage] = useState(0);
  const handleChange = (e) => {
    setNameInput(e.target.value);
  };
  const validationCheck = () => {
    if (nameInput == "") {
      setError("Please enter a name.");
    } else if (nameInput.length < 3) {
      setError("Please enter your full name.");
    } else {
      setFinalName(nameInput);
      setPage(1);
    }
  };

  return (
    <div className="App">
      <div className="h-screen flex-col">
        <Navbar nameProp={finalName} pageProp={page} />
        {/* setPage={setPage} */}
        {page == 0 && (
          <div className="w-full bg-gray-100 flex flex-1 h-[70%] justify-center items-center">
            <div className="bg-white p-5 flex flex-col space-y-3 w-80">
              <p className="font-black text-xl my-3">Login</p>
              <input
                onChange={handleChange}
                type="text"
                id="small-input"
                placeholder="Enter user name"
                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-sm bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500"
              />
              <button
                onClick={validationCheck}
                type="button"
                className="text-white w-full focus:outline-none font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2 bg-gray-800 hover:bg-gray-700 focus:ring-1 focus:ring-gray-900 border-gray-700"
              >
                Login
              </button>
              <span className="text-left text-sm text-red-500">
                {error != "" && error}
              </span>
            </div>
          </div>
        )}
        {page == 1 && <Track />}
        {/*  */}
        <footer className="p-4 shadow md:px-6 md:py-8 bg-gray-900">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a href="/" className="flex items-center mb-4 sm:mb-0">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                SupplyAlly
              </span>
            </a>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="flex md:flex-row flex-col text-left md:space-x-4">
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
              Version 1.0.0
            </span>
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
              Last updated 20 Dec 2021
            </span>
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2022 Government of Singapore.
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
