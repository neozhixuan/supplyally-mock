import "./App.css";
import React from "react";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Track from "./pages/Track";
import Statistics from "./pages/Statistics";

function App() {
  const [nameInput, setNameInput] = useState("");
  const [finalName, setFinalName] = useState("Guest");
  const [error, setError] = useState("");
  const [page, setPage] = useState(0);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameInput(e.target.value);
  };
  const validationCheck = () => {
    if (nameInput === "") {
      setError("Please enter a name.");
    } else if (nameInput.length < 3) {
      setError("Please enter your full name.");
    } else {
      setFinalName(nameInput);
      setNameInput("");
      setError("");
      setPage(1);
    }
  };
  const resetApp = () => {
    setFinalName("Guest");
    setPage(0);
  };
  return (
    <div className="App">
      <div className="h-screen flex-col">
        <Navbar
          nameProp={finalName}
          pageProp={page}
          setPage={setPage}
          resetApp={resetApp}
        />
        {page === 0 && (
          <div className="w-full bg-gray-100 flex flex-1 h-auto py-[10%] justify-center items-center">
            <div className="bg-white p-5 flex flex-col space-y-3 w-80">
              <p className="font-black text-xl my-3">Login</p>
              <input
                onChange={handleChange}
                type="text"
                placeholder="Enter user name"
                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-sm bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500"
              />
              <button
                onClick={validationCheck}
                type="button"
                data-testid="login-button"
                className="text-white w-full focus:outline-none font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2 bg-gray-800 hover:bg-gray-700 focus:ring-1 focus:ring-gray-900 border-gray-700"
              >
                Login
              </button>
              <span className="text-left text-sm text-red-500">
                {error !== "" && error}
              </span>
            </div>
          </div>
        )}
        {page === 1 && <Track />}
        {page === 2 && <Statistics setPage={setPage} />}
        {/*  */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
