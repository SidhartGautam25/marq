import { ReportContext, ReportContextType } from "@/app/context/reportContext";
import React, { useContext } from "react";

const MajorPlayers = () => {
  const { state, dispatch } = useContext(ReportContext) as ReportContextType;
  const data = state?.mp;
  return (
    <div id="players" className="container mx-auto p-4">
      <h1 className="text-xl font-semibold mb-4">{state?.mpTitle}</h1>
      <table className="min-w-full bg-white border border-gray-400">
        {/* <thead className="border border-gray-200">
          <tr>
            <th className="py-2 px-4 border">ID</th>
            <th className="py-2 px-4 border">Name</th>
          </tr>
        </thead> */}
        <tbody>
          {data?.map((item: any, ind: any) => (
            <tr key={ind}>
              <td className="py-2 px-2 w-16 border">{ind + 1}.</td>
              <td className="py-2 px-4 border">{item}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MajorPlayers;
