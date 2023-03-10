import React from "react";
import { useState } from "react";
import TrackerDates from "./components/TrackerDates";

const Track = () => {
  const [trackPage, setTrackPage] = useState(0);
  const [trackInput, setTrackInput] = useState("");
  const [tracked, setTracked] = useState(0);
  const [error, setError] = useState("");

  const classNames = {
    buttonDark:
      "text-white w-full focus:outline-none font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2 bg-gray-800 hover:bg-gray-700 focus:ring-1 focus:ring-gray-900 border-gray-700",
    buttonLight:
      "w-full font-medium ring-gray-900 ring-1 rounded-md text-sm px-5 py-2.5 mr-2 mb-2 bg-white hover:bg-gray-700 hover:text-white border-gray-700",
  };

  const returnHandler = () => {
    setTracked(0);
    setTrackPage(0);
    setError("");
    setTrackInput("");
  };

  const handleChange = (e) => {
    setTrackInput(e.target.value);
  };
  const trackValidationCheck = () => {
    if (trackInput.length < 11 || trackInput.length > 11) {
      setError("Please enter your 11 digit tracking ID.");
    } else {
      setError("");
      setTrackPage(1);
    }
  };

  return (
    <div className="w-full bg-gray-100 flex flex-1 h-full justify-center items-center">
      {trackPage == 0 ? (
        <div className="bg-white p-5 flex flex-col space-y-2 w-72 rounded-md shadow-lg">
          <p className="text-left my-3">
            <p className=" font-black text-xl mb-2">Track parcel</p>
            <span className=" text-sm">
              Key in individual package number to track
            </span>
          </p>
          <span className="text-left font-bold text-sm mb-1">Tracking ID</span>
          <input
            onChange={handleChange}
            type="text"
            id="small-input"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-sm bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500"
          />
          <button
            type="button"
            onClick={trackValidationCheck}
            className={`${classNames.buttonDark}`}
          >
            Check
          </button>
          <span className="text-left text-sm text-red-500">
            {error != "" && error}
          </span>
        </div>
      ) : (
        <div className="w-[60%]">
          <div className="bg-white flex flex-col rounded-md shadow-lg">
            <div className="bg-blue-900 rounded-t-md flex space-x-3 p-3">
              <p className="text-4xl">📦</p>
              <div className="flex flex-col text-left">
                <p className="text-white font-thin">Tracking ID</p>
                <p className="text-white font-bold">1234567000T</p>
              </div>
            </div>
            <div className="flex flex-col space-y-5 p-5 text-left">
              <TrackerDates
                date={"Monday, 13 Feb"}
                time={"2:22 PM"}
                details={
                  "Package in transit. Flight containing package has departed."
                }
              />
              <TrackerDates
                date={"Sunday, 12 Feb"}
                time={"5:09 PM"}
                details={"Parcel left the carrier facility"}
              />
              <TrackerDates
                date={"Friday, 10 Feb"}
                time={"8:41 AM"}
                details={"Parcel arrived at a carrier facility"}
              />
            </div>
          </div>
          <div className="flex flex-col justify-content-left my-8">
            <div className="flex">
              <input
                type="checkbox"
                onChange={tracked ? () => setTracked(0) : () => setTracked(1)}
              />
              <p className="ml-2">Mark as tracked.</p>
            </div>
            <div className="text-left text-red-600">{error}</div>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between">
            <button
              className={`${classNames.buttonLight} w-full mt-1 md:mt-0 md:w-[20%] order-last md:order-first`}
              onClick={returnHandler}
            >
              Back
            </button>
            <button
              className={`${classNames.buttonDark} w-full md:w-[20%]`}
              onClick={
                tracked
                  ? returnHandler
                  : () => setError("Please indicate tracking status.")
              }
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Track;
