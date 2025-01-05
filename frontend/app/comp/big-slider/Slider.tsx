"use client";
import React, { useState } from "react";

import Image from "next/image";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";
// const images = [img1, img2, img3,img4,img5,img6,img7,img8];
interface getprops {
  images: any[];
}
const Slider = ({ images }: getprops) => {
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
      {/* old one */}
      {/* in new design,image is not taking the total width */}
      {/* <div
        className="flex transition-transform duration-500 ease-in-out w-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="md:h-[80vh] object-fill min-w-full"
          />
        ))}
      </div> */}
      <div className="w-full h-[84vh] flex justify-center items-center overflow-hidden ">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`, // Move one image at a time
            width: `${images.length * 100}%`, // Total width based on images
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="flex justify-center items-center "
              style={{
                width: "100%", // Each slide takes full width
                flexShrink: 0, // Prevents shrinking
              }}
            >
              <div className="w-[80vw] h-[80vh] flex justify-center items-center rounded-lg shadow-lg overflow-hidden ">
                <Image
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full " // Ensures image fits without cropping
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <FaChevronLeft
        onClick={PrevClick}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-transparent text-gray-400 p-2 rounded-full focus:outline-none hover:text-gray-500 md:text-6xl text-4xl ease-in-out duration-300"
      />
      {/* <button
        onClick={PrevClick}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-transparent text-gray-400 p-2 rounded-full focus:outline-none hover:text-gray-500 text-6xl ease-in-out duration-300"
      >
        {"<"}
      </button> */}
      <FaChevronRight
        onClick={NextClick}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-transparent text-gray-400 p-2 rounded-full focus:outline-none hover:text-gray-500 md:text-6xl text-4xl ease-in-out duration-300"
      />
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
