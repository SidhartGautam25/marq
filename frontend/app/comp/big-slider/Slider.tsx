"use client";
import React, { useState } from "react";
import img1 from "@/public/blog1.png";
import img2 from "@/public/blog2.png";
import img3 from "@/public/blog3.png";
import Image from "next/image";
const images = [img1, img2, img3];

const Slider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const PrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const NextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-[100vw] mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-[80vh] object-cover flex-shrink-0"
            style={{ minWidth: "100%" }}
          />
        ))}
      </div>
      <button
        onClick={PrevClick}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-transparent text-gray-300 p-2 rounded-full shadow-lg h-[3rem] w-[3rem] focus:outline-none hover:text-gray-400 text-5xl ease-in-out duration-300"
      >
        {"<"}
      </button>
      <button
        onClick={NextClick}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-transparent text-gray-300 p-2 rounded-full shadow-lg h-[3rem] w-[3rem] focus:outline-none hover:text-gray-400 text-5xl ease-in-out duration-300"
      >
        {">"}
      </button>
    </div>
  );
};

export default Slider;
