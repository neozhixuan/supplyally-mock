import React from "react";
import { BUTTON } from "../theme";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type TrackerPaginationProps = {
  setPage: (pageNumber: number) => void;
};

const Statistics = (props: TrackerPaginationProps) => {
  const IDData = [
    {
      id: "11190738200",
      date: "12 Feb 2023, 12:23PM",
    },
    {
      id: "11168320300",
      date: "12 Feb 2023, 12:23PM",
    },
    {
      id: "11189020500",
      date: "12 Feb 2023, 12:23PM",
    },
    {
      id: "11191537500",
      date: "12 Feb 2023, 12:23PM",
    },
    {
      id: "11152118400",
      date: "12 Feb 2023, 12:23PM",
    },
  ];

  return (
    <div className="w-full bg-gray-100 flex h-auto p-[5%] justify-center items-center">
      <div className="w-[70%] flex flex-col">
        <p className="font-bold mb-5 text-2xl">Statistics</p>
        <div className="flex flex-col space-y-2 mb-5">
          <p className="text-xs">You tracked</p>
          <p className="font-bold text-5xl">211</p>
          <p className="text-xs">Last tracked at 6:30PM</p>
          <div className="flex flex-row justify-center items-center">
            <button>
              {" "}
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>

            <span className="mx-3">14 Feb 2023</span>
            <button>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
        <div className="w-full bg-white rounded-lg">
          <div className="flex">
            <div className="flex-1 font-bold text-left p-3">Tracking ID</div>
            <div className="flex-1 font-bold text-left p-3">
              Last Updated Date
            </div>
          </div>
          {IDData.map((item, idx) => (
            <div className="flex" key={idx}>
              <div className="flex-1 text-left p-3">{item.id}</div>
              <div className="flex-1 text-left p-3">{item.date}</div>
            </div>
          ))}
        </div>
        <div className="flex justify-end mt-5 mb-8">
          <button
            onClick={() => props.setPage(1)}
            className={`${BUTTON.buttonDark} w-full md:w-[20%]`}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
