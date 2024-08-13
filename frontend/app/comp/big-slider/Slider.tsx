"use client";
import React, { useState } from "react";
import img1 from "@/public/Slide11.jpg";
import img2 from "@/public/Slide2.jpg";
import img3 from "@/public/Slide3.jpg";
import img4 from "@/public/Slide4.jpg";
import img5 from "@/public/Slide5.jpg";
import img6 from "@/public/Slide6.jpg";
import img7 from "@/public/Slide7.jpg";
import img8 from "@/public/Slide8.jpg";

import Image from "next/image";
import { FaChevronRight } from "react-icons/fa6"
import { FaChevronLeft } from "react-icons/fa6";
const images = [img1, img2, img3,img4,img5,img6,img7,img8];

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
    <div className="relative w-[100vw] mx-auto overflow-hidden shadow-md">
      <div
        className="flex transition-transform duration-500 ease-in-out w-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-[60vh] object-cover flex-shrink-0"
            style={{ minWidth: "100%" }}
          />
        ))}
      </div>
      <FaChevronLeft
      onClick={PrevClick}
      className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-transparent text-gray-400 p-2 rounded-full focus:outline-none hover:text-gray-500 text-6xl ease-in-out duration-300"/>
      {/* <button
        onClick={PrevClick}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-transparent text-gray-400 p-2 rounded-full focus:outline-none hover:text-gray-500 text-6xl ease-in-out duration-300"
      >
        {"<"}
      </button> */}
      <FaChevronRight 
      onClick={NextClick}
      className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-transparent text-gray-400 p-2 rounded-full focus:outline-none hover:text-gray-500 text-6xl ease-in-out duration-300"/>
      {/* <button
        onClick={NextClick}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-transparent text-gray-400 p-2 rounded-full focus:outline-none hover:text-gray-500 text-6xl ease-in-out duration-300"
      >
        {">"}
      </button> */}
    </div>
  );
};

export default Slider;
