"use client";
import { convert } from "@/app/utility/subind";
import React, { useEffect, useState } from "react";

interface Option {
  label: string;
  value: string;
}

const options: Option[] = [
  { label: "Data Suite", value: "Data Suite" },
  { label: "Insight Report", value: "Insight Report" },
];

interface DynamicProps {
  [key: string]: any;
}

const NoSSR: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return <>{children}</>;
};

const PdfDescription: React.FC<DynamicProps> = ({ rep }) => {
  const [selectedOption, setSelectedOption] = React.useState<string>("single");
  let imageurl = rep?.linki;
  let des = rep?.desc;
  let title = rep?.title;
  let titleNew =
    title?.length > 80 ? `${rep?.title.substring(0, 80)}...` : title;
  let date = rep?.createdAt;

  let year = date?.substring(0, 4);
  let mon = date?.substring(5, 7);
  let month = convert(mon);

  return (
    <NoSSR>
      <div className="md:min-h-[500px] flex flex-col md:flex-row md:gap-0 gap-6 ">
        <div className="flex-[1] md:px-8 flex flex-col gap-5 md:gap-10 md:border-2 md:bg-slate-50 mt-10 md:mt-0">
          <div className="w-[100px] h-[10px] bg-red-500 md:mt-12"></div>
          <div className="my-0 font-bold md:text-3xl text-xl ">{rep?.title}</div>
          <div className="my-0 line-clamp-5 text-[14px]">{rep?.desc}</div>
          <div className=" border-t-2 border-gray-300 font-extralight"></div>
          <div className="bg-blue-500 md:p-3 p-2 w-[10rem] text-white flex justify-center items-center rounded-sm mb-5 md:mb-1">
            <span>
              {month} {year}{" "}
            </span>
          </div>
        </div>
        <div className="flex-[1] bg-blue-200">
          <div
            className="md:h-2/3 h-[15rem] flex items-center justify-center"
            style={{
              backgroundImage: `url(${rep?.linki})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="h-1/3 pt-2 flex flex-col gap-3 p-3 md:p-4">
            <span className="text-black">Choose your best option</span>
            <div className="flex items-center space-x-4 mb-4">
              {options.map((option, i) => (
                <div className="" key={i}>
                  <label
                    key={option.value}
                    className="flex group border-white border hover:cursor-pointer hover:border-red-300 items-center space-x-2 md:px-4 md:py-2 p-1 hover:bg-red-500 rounded-sm"
                  >
                    <input
                      type="radio"
                      value={option.value}
                      checked={selectedOption === option.value}
                      onChange={() => setSelectedOption(option.value)}
                      className="text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-red-700 group-hover:text-white text-[10px]">
                      {option.label}
                    </span>
                  </label>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <span className="md:text-2xl text-blue-600 font-bold">
                $ 1,299.00 USD
              </span>
              <button className=" bg-blue-500 font-font-semibold md:p-2 p-[5px] text-[8px] md:text-[15px] text-white rounded-sm hover:bg-blue-600 ease-in-out duration-300">
                 Download Sample
              </button>
            </div>
          </div>
        </div>
      </div>
    </NoSSR>
  );
};

export default PdfDescription;
