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
    <div className="max-w-sm flex gap-4 flex-col rounded overflow-hidden shadow-lg">
      <img
        className="w-full"
        src={imageSrc}
        alt={title}
        width={500}
        height={400}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        {/* <p className="text-gray-700 text-base">{description}</p> */}
      </div>
      <div className="px-6 pt-4 pb-8">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {category}
        </span>
      </div>
    </div>
  );
};
export default InsightCard;
