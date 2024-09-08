import Image from "next/image";
import React from "react";
import globalTechImage from "@/public/globalTechImage.jpg";

export default function Ict() {
  return (
    <>
      <h2 className="md:text-4xl text-2xl font-bold mb-10">
        Information and Communication Technology (ICT)
      </h2>
      <section className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2">
          {/* Ensure the path to the image is correct */}
          <Image
            src={globalTechImage}
            alt="Global Technology"
            layout="responsive"
            objectFit="cover"
            width={700}
            height={400}
          />
        </div>
        <div className="w-full md:w-1/2 py-3 md:p-8">
          <p className="text-base md:text-lg">
            Increasing competitive pressure in the tech industry is leading to
            sharpening attention on speed, agility and flexibility. The key to
            growth is the use of technology to make processes more efficient and
            effective. Make sustainable decisions at a time of unprecedented
            economic disruption using our critical capabilities in the areas of
            business intelligence.
          </p>
        </div>
      </section>
    </>
  );
}
