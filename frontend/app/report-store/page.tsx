"use client";
import Image from "next/image";
import car from "@/public/assets/report.jpg";

import { NavBar } from "../comp";
import { useContext, useState } from "react";
import { ReportContext, ReportContextType } from "@/app/context/reportContext";
import Report from "../comp/report-two/Reporttwo";
import Report2 from "../comp/report-two/Reporttwo";

export default function Page() {
  const [industry, setIndustry] = useState("all");
  console.log("industry is   ", industry);

  const { state, dispatch } = useContext(ReportContext) as ReportContextType;

  return (
    <>
      <div className="bg-gray-900">
        <NavBar />
      </div>
      <div className="main bg-gray-100">
        <div className="">
          <Image
            src={car}
            alt="top photo"
            className="w-full h-[15rem] object-cover"
          />
        </div>
        <div className="flex justify-center mt-5">
          <span className="self-center text-2xl font-medium">
            Latest Published Reports
          </span>
        </div>
        <Report2 />
      </div>
    </>
  );
}
