import Image from "next/image";
import React from "react";
import industrialImage from "@/public/industrial-image.jpg";

export default function Industry() {
  return (
    <div className="flex flex-col md:flex-row items-center">
      <div className="md:flex-1 md:p-4 p-2 text-left">
        <p className="md:text-3xl text-xl md:leading-10 leading-8 font-semibold mb-4">
          Increasing disposable income and urbanization has paved the path for
          robust growth of industries across the world. In an increasingly
          competitive environment, use our solutions to leverage opportunities
          and gain a strategic advantage.
        </p>
        {/* <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
          View All Services
          <span> →</span>
        </button> */}
      </div>
      <div className="md:flex-1 md:p-4 p-2">
        {/* Ensure the path to the image is correct */}
        <Image
          src={industrialImage}
          alt="Industrial landscape"
          layout="responsive"
          objectFit="cover"
        />
      </div>
    </div>
  );
}
