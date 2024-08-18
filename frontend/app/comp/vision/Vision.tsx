import Link from "next/link";
import React from "react";
export default function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center md:mx-20 lg:mx-5 lg:px-4 md:px-10 lg:py-10 ">
      <div className="flex-1 ml-5 mb-16 lg:my-10 lg:m-10 ">
        <h2 className="text-xl md:text-2xl font-semibold uppercase mb-10 text-blue-600">
          Our Vision
        </h2>
        <p className="text-3xl md:text-4xl font-bold">
        We have a clear mission: to deliver the highest quality data-driven outcomes for sustainable business growth and long-term success.
        </p>
      </div>
      <div className="flex-1 mx-5 lg:m-10 lg:mt-20 ">
        <p className="text-md md:text-md mb-6">
        Across industries and regions, today's competitive environment is more unpredictable than ever, with disruptions from all directions.
        </p>
        <p className="text-md md:text-md mb-6">

        We immerse ourselves in our clients' perspectives, delivering measurable outcomes, not just projects, to unlock their business's full potential. Our data-driven solutions enhance client capabilities, while our unwavering commitment to integrity ensures we always do the right thing.

        </p>
        <Link href="/about">
        <button className="btn-blue mt-10 lg:mt-0 text-sm pr-8 pl-8 font-bold flex items-center border-[1px] rounded border-blue-500 p-3 hover:bg-blue-500 text-blue-500 hover:text-white">
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
        </Link>
      </div>
    </div>
  );
}
