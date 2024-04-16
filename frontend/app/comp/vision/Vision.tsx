import React from "react";
export default function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center md:mx-20 mx-5 px-4 md:px-10 py-10 ">
      <div className="flex-1 m-10">
        <h2 className="text-xl md:text-2xl font-semibold uppercase mb-10 text-blue-600">
          Our Vision
        </h2>
        <p className="text-3xl md:text-4xl font-bold">
          We have a clear mission: to deliver the highest quality outcome for a
          sustainable growth.
        </p>
      </div>
      <div className="flex-1 m-10 mt-20">
        <p className="text-md md:text-md mb-6">
          Across industries and regions, the competitive environment today is
          far more unpredictable than it was even a decade ago, with disruption
          arising from all directions.
        </p>
        <p className="text-md md:text-md mb-6">
          We put ourselves in our clients’ shoes, selling outcomes, not projects
          to unlock the full potential of their business. Our solutions build
          our clients’ capabilities, and our values mean we do the right thing —
          always.
        </p>
        <button className="btn-blue text-sm pr-8 pl-8 font-bold flex items-center border-[1px] rounded border-blue-500 p-3 hover:bg-blue-500 text-blue-500 hover:text-white">
          Read More
          <svg
            className="ml-2 w-4 h-4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
