import { ReportContext, ReportContextType } from "@/app/context/reportContext";
import React, { useContext, useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const Faq = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);
  const { state, dispatch } = useContext(ReportContext) as ReportContextType;

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqData = state?.faqs;

  return (
    <div id="faq" className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">FAQs</h2>
      {faqData?.map((item: any, index: any) => (
        <div key={index} className="border-b border-gray-200 mb-4">
          <div
            className="flex justify-between items-center p-4 bg-gray-100 cursor-pointer"
            onClick={() => toggleQuestion(index)}
          >
            <h3 className="font-medium">{item?.question}</h3>
            {openQuestion === index ? (
              <MdKeyboardArrowUp className="text-xl" />
            ) : (
              <MdKeyboardArrowDown className="text-xl" />
            )}
          </div>
          {openQuestion === index && (
            <div className="p-4 bg-white">
              <p>{item?.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
