import Image from "next/image";
import React from "react";
import buss1 from "@/public/buss1.jpg";
import buss2 from "@/public/buss2.jpg";

export default function Buss() {
  return (
    <div className="flex flex-col items-center justify-center md:py-12 py-3">
      <div className="w-full p-4 flex flex-col md:flex-row items-center md:items-start">
        <Image
          src={buss2}
          alt="Strategy Writing"
          width={700}
          height={400}
          objectFit="contain"
        />
        <div className="md:m-8 mt-2 flex flex-col md:gap-10 gap-6">
          <div>
            <h3 className="text-2xl font-semibold md:mb-4 mb-2">Mission</h3>
            <p className="font-medium">
              To help our clients understand the ever-transforming global
              economy.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold  md:mb-4 mb-2">Vision</h3>
            <p className="font-medium">
              To provide unparalleled service that creates a positive change for
              our clients.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold md:mb-4 mb-2">Values</h3>
            <p className="font-medium">
              To preserve client confidence and build enduring relationships.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full p-4 flex flex-col-reverse md:flex-row justify-between items-center ">
        <div className="md:m-8 my-6 mx-3">
          <h3 className="text-3xl font-semibold md:mb-4 mb-2">
            Our consulting solutions are inclusive of:
          </h3>
          <ul className="list-disc list-inside font-medium text-[18px] text-gray-600 italic flex flex-col gap-2 ml-6">
            <li>Growth Strategy</li>
            <li>Market Study</li>
            <li>Real Time Insights</li>
            <li>In-house Sector Experts</li>
            <li>Dedicated Analysts</li>
            <li>24*7 Support</li>
            <li>Access to Industry Database</li>
          </ul>
        </div>
        <Image
          src={buss1}
          alt="Handshake"
          width={700}
          height={400}
          objectFit="contain"
        />
      </div>
    </div>
  );
}
