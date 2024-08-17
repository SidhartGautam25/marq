"use client"
import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { my_url } from "@/app/utility/varr";
import { ReportContext, ReportContextType } from "@/app/context/reportContext";
import HomeFourCard from "../homefourCard/HomeFourCard";

export default function Homefour2() {
  const [reports, setReports] = useState<Record<string, any>[]>([]);
  const { state, dispatch } = useContext(ReportContext) as ReportContextType;
  const router = useRouter();
  let page = 1;
  let url = `${my_url}/api/getall/report?page=${page}`;
  let report3=[reports[0],reports[1],reports[2],reports[3]];
  const handleClick = (ind: number) => {
    let rep = reports[ind];
    dispatch({
      type: "SET_CURRENT",
      payload: rep,
    });
    
    let temp = rep.slug.replace(/\s/g, "-");
    router.push(`/report/${temp}`);
  };

  useEffect(() => {
    const fetchReport = async () => {
      try {
        const daata = await axios.get(url);
        if (daata) {
          setReports([...daata.data.reports]);
          
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchReport();
    console.log("report homefore",reports);
  }, []);

  return (
    <div className="flex flex-col items-center bg-[url('/images/back10.jpg')] bg-no-repeat bg-cover">
      <div className="text-2xl lg:text-4xl font-medium mt-6 lg:mt-4 border-b-4 border-r-4 rounded-full border-gray-300 p-3">
        Explore Our Latest Reports
      </div>
      <div className="cards flex flex-col md:flex-row justify-center mt-10 px-3 gap-2">
        {report3.map((report, index) => (
          <HomeFourCard
            key={report?.slug}
            image={report?.linki2}
            title={report?.title}
            date={report?.createdAt}
            desc={report?.metaDesc}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
}
