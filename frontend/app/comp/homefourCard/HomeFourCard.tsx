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
      className="card mx-2 flex flex-col items-center hover:scale-105 ease-in duration-300 drop-shadow-sm rounded-2xl cursor-pointer shadow-md mb-8"
    >
      <div className="">
        <img
          src={image}
          className="w-[23rem] h-[13rem] object-cover rounded-tl-2xl rounded-tr-2xl"
          alt="Report"
        />
      </div>
      <div className="px-3 pb-6 ">
        <div className="flex mt-4 justify-between items-center">
          <div className="text-red-700">Automative</div>
          <div className="date flex m-2 text-blue-600">
            <CiCalendar className="w-[20px] h-[20px] mr-2" />
            <span className="text-blue-600">
              {convert(date?.substring(5, 7))} {date?.substring(0, 4)}
            </span>
          </div>
        </div>
        <div className="w-[20rem] text-xl font-medium tracking-tight line-clamp-3">
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
