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
      <h2 className="text-xl font-semibold mb-6 text-center">Place An Order</h2>
      <div>
        <div
          className={`mb-2 border rounded cursor-pointer transition-all duration-500 ease-in-out ${
            selectedOption === 1
              ? "bg-sky-950 text-white"
              : "bg-gray-700/10 text-black"
          }`}
          onClick={() => handleOptionClick(1)}
        >
          <div className="p-2">1. Data Only (MS Excel) : ${state.pSingle}</div>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              selectedOption === 1 ? "max-h-40" : "max-h-0"
            }`}
          >
            <div className="mt-2 text-sm bg-white text-gray-600 p-2">
              Access market data conveniently organized in an Excel spreadsheet
              for data-driven insights
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
          <div className="p-2">2. Full Report (PDF) : ${state.pTeam}</div>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              selectedOption === 2 ? "max-h-40" : "max-h-0"
            }`}
          >
            <div className="mt-2 text-sm bg-white text-gray-600 p-2">
              Gain comprehensive market research findings and analysis in a
              visually appealing PDF format.
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
          <div className="p-2">
            3. Complete - Report + Data : ${state.pCorp}
          </div>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              selectedOption === 3 ? "max-h-40" : "max-h-0"
            }`}
          >
            <div className="mt-2 text-sm bg-white text-gray-600 p-2">
              Receive both an Excel Data Pack and a PDF Report for a complete
              market research solution
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderComponent;
