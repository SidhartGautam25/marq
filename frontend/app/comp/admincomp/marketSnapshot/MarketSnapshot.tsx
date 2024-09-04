import React from "react";
import { useState, useContext } from "react";
import { ReportContext, ReportContextType } from "@/app/context/reportContext";

const MarketSnapshot = () => {
  const { state, dispatch } = useContext(ReportContext) as ReportContextType;
  const data = state?.msTable;

  return (
    <div id="snap" className="container mx-auto p-4">
      <h1 className="text-xl font-semibold mb-4">{state?.msHeading}</h1>

      <div className="h-5"></div>
      <div
        // className="mt-6 border border-gray-300 p-4 min-h-[200px]"
        dangerouslySetInnerHTML={{ __html: state?.msDesc }}
      />
    </div>
  );
};

export default MarketSnapshot;
