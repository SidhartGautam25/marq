import Image from "next/image";
import React from "react";
import serv1 from "@/public/serv1.jpg";
import serv2 from "@/public/serv2.jpg";
import serv3 from "@/public/serv3.jpg";
import serv4 from "@/public/serv4.jpg";

export default function Automative() {
  return (
    <div className="bg-white md:py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Automotive & Transportation</h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
            <Image
              src={serv1}
              alt="Digitization"
              width={500}
              height={300}
              layout="responsive"
            />
            <p className="my-8">
              Digitization, connectivity, increasing automation, and new
              business models have revolutionized other industries, and
              automotive industry is no exception.
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
            <Image
              src={serv2}
              alt="automobile"
              width={500}
              height={300}
              layout="responsive"
            />
            <p className="my-8">
              The automobile industry is a significant contributor to the global
              economy. Driven by innovation, the sector is always in a tough
              competition to improve processes and introduce new technology.
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
            <Image
              src={serv3}
              alt="entrepreneur"
              width={500}
              height={300}
              layout="responsive"
            />
            <p className="my-8">
              The need for businesses is to focus on knowledge optimization to
              adapt and grow. Whether you are an investor, manufacturer or
              entrepreneur, we can help you shape your business strategy going
              forward.
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
            <Image
              src={serv4}
              alt="monitoring"
              width={500}
              height={300}
              layout="responsive"
            />
            <p className="my-8">
              Our in-depth research provides insights for short-term operational
              monitoring and long-term strategic initiatives that can unlock
              significant opportunities and mitigate risks.
            </p>
          </div>
          {/* ... Repeat for each service ... */}
        </div>
      </div>
    </div>
  );
}
