"use client";
import React, { useState } from "react";
interface FaqItem {
  que: string;
  ans: string;
}
interface getprops {
  heading: string;
  para: string;
  arr: FaqItem[];
}
export default function Faq({ heading, para, arr }: getprops) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <div className="w-[36rem] p-6 mb-5 md:my-5 flex flex-col items-center gap-6 shadow-2xl bg-white">
        <div className="text-2xl font-semibold text-blue-900">{heading}</div>
        <div className="text-center text-gray-500 leading-7">{para}</div>
        <div className="w-full">
          {arr.map((faq, index) => (
            <div key={index} className="mb-4">
              <div
                onClick={() => toggleItem(index)}
                className="cursor-pointer text-blue-900 font-semibold py-2 px-4 border-b flex justify-between items-center"
              >
                <span>{faq.que}</span>
                <span>{openIndex === index ? "▲" : "▼"}</span>
              </div>
              <div style={{
                    maxHeight: openIndex === index ? "500px" : "0", // adjust this value based on your content
                    overflow: "hidden",
                    transition: "all 0.3s ease-in",
                    paddingTop: openIndex === index ? "0.2rem" : "0",
                    paddingBottom: openIndex === index ? "0.2rem" : "0",
                    marginTop: openIndex === index ? "0.2rem" : "0",
                    marginBottom: openIndex === index ? "0.2rem" : "0",
                  }}>

              {openIndex === index && (
                  <div
                  className={`mt-2 p-4 text-gray-500`}
                  
                  >
                  {faq.ans}
                </div>
              )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
//mt-2 p-4 text-gray-500
