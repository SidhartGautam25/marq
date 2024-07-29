import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const Faq = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqData = [
    {
      question: "How big is the North America Inflight Catering Market?",
      answer:
        "The North America Inflight Catering Market size is expected to reach USD 3.11 billion in 2024 and grow at a CAGR of 12.86% to reach USD 5.70 billion by 2029.",
    },
    {
      question:
        "What is the current North America Inflight Catering Market size?",
      answer:
        "In 2024, the North America Inflight Catering Market size is expected to reach USD 3.11 billion.",
    },
    {
      question:
        "Who are the key players in North America Inflight Catering Market?",
      answer:
        "The key players include ABC Catering, XYZ Foods, and Delta Services among others.",
    },
    {
      question:
        "What years does this North America Inflight Catering Market cover, and what was the market size in 2023?",
      answer:
        "The market analysis covers the years from 2023 to 2029. The market size in 2023 was USD 2.75 billion.",
    },
  ];

  return (
    <div id="faq" className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">FAQs</h2>
      {faqData.map((item, index) => (
        <div key={index} className="border-b border-gray-200 mb-4">
          <div
            className="flex justify-between items-center p-4 bg-gray-100 cursor-pointer"
            onClick={() => toggleQuestion(index)}
          >
            <h3 className="font-medium">{item.question}</h3>
            {openQuestion === index ? (
              <MdKeyboardArrowUp className="text-xl" />
            ) : (
              <MdKeyboardArrowDown className="text-xl" />
            )}
          </div>
          {openQuestion === index && (
            <div className="p-4 bg-white">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
