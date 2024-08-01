import { ReportContext, ReportContextType } from "@/app/context/reportContext";
import React, { useContext } from "react";

const Toc = () => {
  const { state, dispatch } = useContext(ReportContext) as ReportContextType;
  return (
    <div id="toc" className="container mx-auto p-4">
      <h1 className="text-xl font-semibold mb-4">Table of Content</h1>
      <div
        // className="mt-6 border border-gray-300 p-4 min-h-[200px]"
        dangerouslySetInnerHTML={{ __html: state?.toc }}
      />
    </div>
  );
};

export default Toc;
