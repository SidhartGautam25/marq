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
      <div className="md:h-[500px] flex flex-col md:flex-row md:gap-0 gap-6 ">
        <div className="flex-[1] md:px-8 px-3 flex justify-center flex-col md:border-2 md:bg-slate-50">
          <div className="w-[100px] h-[10px] bg-red-500 md:mt-1 mt-10"></div>
          <div className="my-8 font-bold text-3xl ">{rep?.title}</div>
          <div className="my-4">{rep?.desc}</div>
          <div className=" border-t-2 border-gray-300 my-4 font-extralight"></div>
          <div className="bg-blue-400 p-3 w-[10rem] text-white flex justify-center items-center rounded-sm mb-5 md:mb-1">
            <span>
              {month} {year}{" "}
            </span>
          </div>
        </div>
        <div className="flex-[1] md:px-0 md:py-0 bg-blue-200">
          <div
            className="md:h-3/5 h-[15rem] flex items-center justify-center"
            style={{
              backgroundImage: `url(${rep?.linki})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="h-2/5 pt-2 flex flex-col gap-3 p-3 md:p-5">
            <span className="text-black">Choose your best option</span>
            <div className="flex items-center space-x-4 mb-4">
              {options.map((option, i) => (
                <div className="" key={i}>
                  <label
                    key={option.value}
                    className="flex group border-white border hover:cursor-pointer hover:border-red-300 items-center space-x-2 px-4 py-2 hover:bg-red-500"
                  >
                    <input
                      type="radio"
                      value={option.value}
                      checked={selectedOption === option.value}
                      onChange={() => setSelectedOption(option.value)}
                      className="text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-red-700 group-hover:text-white">
                      {option.label}
                    </span>
                  </label>
                </div>
              ))}
            </div>

            <span className="text-2xl text-blue-700 font-bold">
              $ 1,299.00 USD
            </span>
          </div>
        </div>
      </div>
    </NoSSR>
  );
};

export default PdfDescription;
