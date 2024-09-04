import React from "react";
import Image from "next/image";

interface InsightCardProps {
  imageSrc: string;
  title: string;
  // description: string;
  category: string;
}
const InsightCard: React.FC<InsightCardProps> = ({
  imageSrc,
  title,
  // description,
  category,
}) => {
  return (
    <div className=" flex gap-2 flex-col md:w-[435px] shadow-lg h-[520px]">
      <img
        className="w-full md:h-[360px] h-[250px] object-cover"
        src={imageSrc}
        alt={title}
        width={500}
        height={400}
      />
      <div className="p-4 flex flex-col gap-5">
        <div className="font-bold text-[18px] line-clamp-2 text-gray-600">{title}</div>
        {/* <p className="text-gray-700 text-base">{description}</p> */}
        <div className="mt-5 mb-2">
        <span className=" bg-gray-200 rounded-full font-semibold text-gray-700 px-5 py-2">
          {category}
        </span>
      </div>
      </div>
      
    </div>
  );
};
export default InsightCard;
