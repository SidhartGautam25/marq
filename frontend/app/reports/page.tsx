"use client";
import Image from "next/image";
import car from "@/public/assets/report.jpg";

import { NavBar } from "../comp";
import { useContext, useState } from "react";
import { ReportContext, ReportContextType } from "@/app/context/reportContext";
import Report from "../comp/report-two/Reporttwo";
import Report2 from "../comp/report-two/Reporttwo";
import Head from "next/head";

export default function Page() {
  const [industry, setIndustry] = useState("all");
  console.log("industry is   ", industry);

  const { state, dispatch } = useContext(ReportContext) as ReportContextType;

  return (
    <>
      <Head>
        {/* <title>Report Store - Marqstats</title> */}
        <meta
          name="description"
          content="Browse and download various reports from our company store."
        />
        <meta
          name="keywords"
          content="reports, company store, download reports, business reports, PDF reports"
        />
        <meta name="robots" content="noindex, follow" />
        <meta property="og:title" content="Report Store - Your Company Name" />
        <meta
          property="og:description"
          content="Browse and download various reports from our company store."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.marqstats.com/report-store"
        />
        {/* <meta
          property="og:image"
          content="https://www.yourcompany.com/images/report-store-thumbnail.jpg"
        /> */}
      </Head>
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
