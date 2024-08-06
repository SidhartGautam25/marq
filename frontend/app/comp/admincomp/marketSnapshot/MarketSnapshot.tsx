import React from "react";
import { useState, useContext } from "react";
import { ReportContext, ReportContextType } from "@/app/context/reportContext";

const MarketSnapshot = () => {
  const { state, dispatch } = useContext(ReportContext) as ReportContextType;
  const data = state?.msTable;

  return (
    <div id="snap" className="container mx-auto p-4">
      <h1 className="text-xl font-semibold mb-4">{state?.msHeading}</h1>
      <table className="min-w-full bg-white border border-gray-400">
        <thead className="border border-gray-200">
          <tr>
            {/* <th className="py-2 px-4 border">ID</th> */}
            <th className="py-2 px-4 border">Report Attribute</th>
            <th className="py-2 px-4 border">Details</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item: any, ind: any) => (
            <tr key={ind}>
              {/* <td className="py-2 px-4 border">{ind + 1}</td> */}
              <td className="py-2 px-4 border">{item.key}</td>
              <td className="py-2 px-4 border">{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="h-5"></div>
      <div
        // className="mt-6 border border-gray-300 p-4 min-h-[200px]"
        dangerouslySetInnerHTML={{ __html: state?.msDesc }}
      />
    </div>
  );
};

export default MarketSnapshot;
