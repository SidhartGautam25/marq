import React, { useState } from 'react';

const OrderComponent: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleOptionClick = (option: number) => {
    setSelectedOption(option === selectedOption ? null : option);
  };

  return (
    <div className="max-w-md mx-auto shadow-md bg-gray-50 p-2">
      <h2 className="text-2xl font-bold mb-4 text-center">Place An Order</h2>
      <div>
        <div
          className={` mb-2 border rounded cursor-pointer  ${selectedOption === 1 ? 'bg-sky-950 text-white' : 'bg-gray-700/10 text-black'}`}
          onClick={() => handleOptionClick(1)}
        >
          <div className="text-lg font-semibold p-2">1. Data Only (MS Excel)</div>
          {selectedOption === 1 && (
            <div className="mt-2 text-sm bg-white text-gray-600 p-2">
              Access market data conveniently organized in an Excel spreadsheet for data-driven insights
            </div>
          )}
        </div>
        <div
          className={` mb-2 border rounded cursor-pointer  ${selectedOption === 2 ? 'bg-sky-950 text-white' : 'bg-gray-700/10 text-black'}`}
          onClick={() => handleOptionClick(2)}
        >
          <div className="text-lg font-semibold p-2">2. Full Report (PDF)</div>
          {selectedOption === 2 && (
            <div className="mt-2 text-sm bg-white text-gray-600 p-2">
              Gain comprehensive market research findings and analysis in a visually appealing PDF format.
            </div>
          )}
        </div>
        <div
          className={` mb-2 border rounded cursor-pointer ${selectedOption === 3 ? 'bg-sky-950 text-white' : 'bg-gray-700/10 text-black'}`}
          onClick={() => handleOptionClick(3)}
        >
          <div className="text-lg font-semibold p-2">3. Complete - Report + Data</div>
          {selectedOption === 3 && (
            <div className="mt-2 text-sm bg-white text-gray-600 p-2">
              Receive both an Excel Data Pack and a PDF Report for a complete market research solution
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderComponent;
