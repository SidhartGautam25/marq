import React from "react";
import ele from "@/public/assets/tech.jpg";
import Image from "next/image";

export default function Insightcomp2card() {
  return (
    <div className="bg-stone-200 shadow-xl hover:scale-105 hover:shadow-2xl ease-in-out duration-300 shadow-gray-400 hover:shadow-gray-700">
      <Image
        src={ele}
        alt="ele"
        className="w-full pt-0 h-48 object-cover"
        width={100}
        height={100}
      />
      <div className="font-semibold m-3">
        Acclerating Technology Adoption in Government
      </div>
      <div className="font-medium my-6 pb-4 m-3">Case Study</div>
    </div>
  );
}
