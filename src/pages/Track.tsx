import React from "react";
import { useState } from "react";
import TrackerDates from "../components/TrackerDates";
import { BUTTON } from "../theme";

const Track = () => {
  const [trackPage, setTrackPage] = useState(0);
  const [trackInput, setTrackInput] = useState("");
  const [tracked, setTracked] = useState(0);
  const [error, setError] = useState("");

  const TrackingData = [
    {
      date: "Monday, 13 Feb",
      time: "2:22 PM",
      details: "Package in transit. Flight containing package has departed.",
    },
    {
      date: "Sunday, 12 Feb",
      time: "5:09 PM",
      details: "Parcel left the carrier facility.",
    },
    {
      date: "Friday, 10 Feb",
      time: "8:41 AM",
      details: "Parcel arrived at a carrier facility.",
    },
  ];

  const returnHandler = (): void => {
    setTracked(0);
    setTrackPage(0);
    setError("");
    setTrackInput("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTrackInput(e.target.value);
  };
  const trackValidationCheck = (): void => {
    if (trackInput.length < 11 || trackInput.length > 11) {
      setError("Please enter your 11 digit tracking ID.");
    } else {
      setError("");
      setTrackPage(1);
    }
  };

  return (
    <div className="w-full bg-gray-100 flex flex-1 h-auto p-[10%] justify-center items-center">
      {trackPage === 0 ? (
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
            data-testid="trackinput"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-sm bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500"
          />
          <button
            type="button"
            data-testid="trackbutton"
            onClick={trackValidationCheck}
            className={`${BUTTON.buttonDark}`}
          >
            Check
          </button>
          <span className="text-left text-sm text-red-500">
            {error !== "" && error}
          </span>
        </div>
      ) : (
        <div className="w-[60%]">
          <div className="bg-white flex flex-col rounded-md shadow-lg">
            <div className="bg-blue-900 rounded-t-md flex space-x-3 p-3">
              <p className="text-4xl">📦</p>
              <div className="flex flex-col text-left">
                <p className="text-white font-thin">Tracking ID</p>
                <p className="text-white font-bold">{trackInput}</p>
              </div>
            </div>
            <div className="flex flex-col space-y-5 p-5 text-left">
              {TrackingData.map((item, idx) => (
                <TrackerDates
                  key={idx}
                  date={item.date}
                  time={item.time}
                  details={item.details}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-content-left my-8">
            <div className="flex">
              <input
                type="checkbox"
                data-testid="checkbox"
                onChange={tracked ? () => setTracked(0) : () => setTracked(1)}
              />
              <p className="ml-2">Mark as tracked.</p>
            </div>
            <div className="text-left text-red-600">{error}</div>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between">
            <button
              className={`${BUTTON.buttonLight} w-full mt-1 md:mt-0 md:w-[20%] order-last md:order-first`}
              onClick={returnHandler}
            >
              Back
            </button>
            <button
              data-testid="submit"
              className={`${BUTTON.buttonDark} w-full md:w-[20%]`}
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
