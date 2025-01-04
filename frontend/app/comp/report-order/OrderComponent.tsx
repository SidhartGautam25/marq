import { ReportContext, ReportContextType } from "@/app/context/reportContext";
import React, { useContext, useState } from "react";

const OrderComponent: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const { state, dispatch } = useContext(ReportContext) as ReportContextType;

  const handleOptionClick = (option: number) => {
    setSelectedOption(option === selectedOption ? null : option);
  };

  return (
    <div className="max-w-md mx-auto shadow-md bg-gray-50 p-2">
      <h2 className="text-xl font-semibold mb-6 text-center">
        Start Your Order
      </h2>
      <div>
        <div
          className={`mb-2 border rounded cursor-pointer transition-all duration-500 ease-in-out ${
            selectedOption === 1
              ? "bg-sky-950 text-white"
              : "bg-gray-700/10 text-black"
          }`}
          onClick={() => handleOptionClick(1)}
        >
          <div className="p-2 flex justify-between items-center">
            <span className="">
              1. Data Set {"("}Excel{")"} : ${state.pSingle}
            </span>
            <span
              className="text-xl ml-2 leading-none relative"
              style={{ top: "-3px" }}
            >
              {selectedOption === 1 ? "\u23F6" : "\u23F7"}
            </span>
          </div>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              selectedOption === 1 ? "max-h-40" : "max-h-0"
            }`}
          >
            <div className="mt-2 text-sm bg-white text-gray-600 p-2">
              Access well-organized market data in an easy-to-use Excel format,
              providing you with actionable, data-driven insights.
            </div>
          </div>
        </div>
        <div
          className={`mb-2 border rounded cursor-pointer transition-all duration-500 ease-in-out ${
            selectedOption === 2
              ? "bg-sky-950 text-white"
              : "bg-gray-700/10 text-black"
          }`}
          onClick={() => handleOptionClick(2)}
        >
          <div className="p-2 flex justify-between items-center">
            <span> 2. Complete Report : ${state.pTeam}</span>

            <span
              className="text-xl ml-2 leading-none relative"
              style={{ top: "-3px" }}
            >
              {selectedOption === 2 ? "\u23F6" : "\u23F7"}
            </span>
          </div>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              selectedOption === 2 ? "max-h-40" : "max-h-0"
            }`}
          >
            <div className="mt-2 text-sm bg-white text-gray-600 p-2">
              Gain in-depth market research findings and analysis presented in a
              clear, visually appealing PDF format.
            </div>
          </div>
        </div>
        <div
          className={`mb-2 border rounded cursor-pointer transition-all duration-500 ease-in-out ${
            selectedOption === 3
              ? "bg-sky-950 text-white"
              : "bg-gray-700/10 text-black"
          }`}
          onClick={() => handleOptionClick(3)}
        >
          <div className="p-2 flex justify-between items-center">
            <span> 3. All-Inclusive Package : ${state.pCorp}</span>

            <span
              className="text-xl ml-2 leading-none relative"
              style={{ top: "-3px" }}
            >
              {selectedOption === 3 ? "\u23F6" : "\u23F7"}
            </span>
          </div>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              selectedOption === 3 ? "max-h-40" : "max-h-0"
            }`}
          >
            <div className="mt-2 text-sm bg-white text-gray-600 p-2">
              Receive both the Excel Data Pack and the PDF Report, offering a
              comprehensive market research solution tailored to your needs.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderComponent;
