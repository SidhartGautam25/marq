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
  let imageurl;
  let des;
  let title;
  let titleNew;

  let date;

  let year;
  let mon;
  let month;

  useEffect(() => {
    imageurl = rep?.linki;
    des = rep?.desc;
    title = rep?.title;
    titleNew = title?.length > 80 ? `${rep?.title.substring(0, 80)}...` : title;
    date = rep?.createdAt;

    year = date?.substring(0, 4);
    mon = date?.substring(5, 7);
    month = convert(mon);

    return () => {};
  }, []);

  return (
    <NoSSR>
      <div className="h-[500px] flex shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
        <div className="w-1/2 px-8 flex justify-center flex-col border-2 bg-slate-50">
          <div className="w-[100px] h-[10px] bg-red-500"></div>
          <div className="my-8 font-bold text-3xl ">{rep?.title}</div>
          <div className="my-4">{rep?.desc}</div>
          <div className=" border-t-2 border-gray-300 my-4 font-extralight"></div>
          <div className="bg-blue-400 p-3 w-[10rem] text-white flex justify-center items-center rounded-sm">
            <span>
              {month} {year}{" "}
            </span>
          </div>
        </div>
        <div className="w-1/2 px-6 py-6 bg-blue-200">
          <div
            className="h-3/5 flex items-center justify-center"
            style={{
              backgroundImage: `url(${rep?.linki})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="h-2/5 pt-2">
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
