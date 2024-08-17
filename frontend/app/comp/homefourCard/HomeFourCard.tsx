import React from "react";
import { CiCalendar } from "react-icons/ci";
import { convert } from "@/app/utility/subind";

type CardProps = {
  image: string;
  title: string;
  date: string;
  desc:string;
  onClick: () => void;
};

const HomeFourCard = ({ image, title, date,desc, onClick }: CardProps) => {
  return (
    <div
      onClick={onClick}
      className="card mx-2 flex flex-col items-center hover:scale-105 ease-in duration-300 drop-shadow-sm cursor-pointer mb-8"
    >
      <div className="">
        <img
          src={image}
          className="w-[21rem] h-[12rem] object-cover"
          alt="Report"
        />
      </div>
      <div className=" pb-6 w-[21rem]">
        <div className="flex mt-4 justify-between items-center">
          <div className="text-red-700">Automative</div>
          <div className="date flex m-2 text-blue-600">
            <CiCalendar className="w-[20px] h-[20px] mr-2" />
            <span className="text-blue-600">
              {convert(date?.substring(5, 7))} {date?.substring(0, 4)}
            </span>
          </div>
        </div>
        <div className=" text-[18px] tracking-tight line-clamp-3 font-semibold">
          {title}
        </div>
        <p className="mt-3 line-clamp-3">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default HomeFourCard;
