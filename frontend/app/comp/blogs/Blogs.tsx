"use client";
import Image from "next/image";
// import blog1 from "@/public/blog1.png";
import blog2 from "@/public/blog2.png";
import blog3 from "@/public/blog3.png";
import blog4 from "@/public/blog4.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { convert } from "@/app/utility/subind";

interface Rep {
  title: string;
  linki: string;
  createdAt: any;
}

export default function Blogs() {
  const [report, setReport] = useState<Rep[]>([]);

  const dev_url = "http://localhost:8800";
  const prod_url = "https://admin-backend-1-ekoa.onrender.com";

  let url = `${dev_url}/api/getall/pinned-report`;
  const [back, setBack] = useState("");
  let background;

  let year1 = "",
    month1 = "",
    year2 = "",
    month2 = "",
    year3 = "",
    month3 = "",
    year4 = "",
    month4 = "",
    year5 = "",
    month5 = "";

  // const date = rep.createdAt;
  // const year = date?.substring(0, 4);
  // const mon = date?.substring(5, 7);
  // const month = convert(mon);

  useEffect(() => {
    const fetchReport = async () => {
      try {
        console.log("request has been sent");
        const daata = await axios.get(url);
        if (daata) {
          console.log("data in blog section is ", daata);
          let rep = daata.data.reports;
          setReport([...daata.data.reports]);
          background = "bg-[url(" + daata.data.reports[0]?.linki + ")]";
          setBack(daata.data.reports[0]?.linki);
          console.log("background is ", background);
          if (rep.length >= 5) {
            year1 = rep[0].substring(0, 4);
            year2 = rep[1].substring(0, 4);
            year3 = rep[2].substring(0, 4);
            year4 = rep[3].substring(0, 4);
            year5 = rep[4].substring(0, 4);
            month1 = convert(rep[0].substring(5, 7));
            month2 = convert(rep[1].substring(5, 7));
            month3 = convert(rep[2].substring(5, 7));
            month4 = convert(rep[3].substring(5, 7));
            month5 = convert(rep[5].substring(5, 7));
          }
        }
      } catch (err) {}
    };
    fetchReport();

    // You can also return a cleanup function from useEffect
    // This cleanup function will be executed before the component is unmounted or re-rendered
    return () => {
      // Code inside this cleanup function will run before the component is unmounted or re-rendered
      // You can perform cleanup tasks here, such as unsubscribing from subscriptions or clearing timers
    };
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row">
        {/* 1st card */}
        <div className="overflow-hidden w-full md:w-1/2 h-[24rem] md:h-auto">
          <div
            style={{ backgroundImage: `url(${back})` }}
            className="w-full h-full flex flex-col-reverse group   bg-cover hover:scale-105 duration-1000"
          >
            {/* <img
              src={report[0]?.linki}
              alt="blog1"
              className=" group-hover:scale-110 duration-1000  object-cover w-full h-full absolute flex justify-center mix-blend-overlay "
            /> */}

            <div className=" bg-gradient-to-t from-white h-fit group-hover:translate-y-2 duration-1000 p-10 group-hover:text-blue-600 flex  flex-col ">
              <span className="group-hover:text-blue-600 text-black ">
                {month1} {year1}
              </span>
              <h1 className="md:text-3xl text-xl font-medium group-hover:text-blue-600 ">
                {report[0]?.title}
              </h1>
            </div>
          </div>
        </div>
        {/* 2nd card and 3rd card */}
        <div className=" w-full md:w-1/2 lg:flex lg:flex-col">
          {/* 2nd card */}
          <div className="relative group h-[60%] lg:flex">
            <div className=" overflow-hidden w-full md:w-1/2">
              <img
                src={report[1]?.linki}
                className="duration-1000 group-hover:scale-110 h-full w-full"
                alt="blog2"
              />
            </div>
            <div className="absolute bg-gradient-to-t from-black  md:bg-none bottom-0 md:static p-10 group-hover:translate-y-2 duration-1000  group-hover:text-blue-600 w-full md:w-1/2 flex justify-center flex-col">
              <span className="group-hover:text-blue-600 font-semibold  text-white md:text-black">
                {month2} {year2}
              </span>
              <h1 className="group-hover:text-blue-600 text-xl text-white md:text-black">
                {report[1]?.title}
              </h1>
            </div>
          </div>

          {/* 3rd card */}
          <div className="group md:h-[40%] h-auto w-full bg-[#1b1f29] text-white lg:flex lg:flex-col justify-center">
            <div className="lg:w-1/2 p-10 duration-1000 group-hover:translate-y-2 group-hover:text-blue-600">
              <div className="pt-40 md:pt-0 font-semibold group-hover:text-blue-600 ">
                {month3} {year3}
              </div>
              <h1 className="text-xl group-hover:text-blue-600 ">
                Marqstats is ecosystem of strategic alliances brings the power
                of generative AI to clients
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="md:h-[400px] h-auto flex md:flex-row flex-col">
        {/* 4th card */}
        <div className="flex md:w-1/2 w-full group md:flex-row overflow-hidden flex-col-reverse relative">
          <div className=" md:bg-none absolute md:static bg-gradient-to-t from-black text-white md:text-black justify-center  duration-1000 p-10 group-hover:translate-y-2 group-hover:text-blue-600 flex flex-col md:w-1/2">
            <span className=" font-semibold group-hover:text-blue-600 ">
              March 26,2024
            </span>
            <h1 className="text-xl group-hover:text-blue-600 ">
              Marqstats convenes leaders to prepare for AI effect on New York
              region and beyond
            </h1>
          </div>
          <div className=" overflow-hidden md:w-1/2">
            <img
              src={report[3]?.linki}
              className="group-hover:scale-110 h-full duration-1000"
              alt="blog3"
            />
          </div>
        </div>

        {/* 5th card */}
        <div className="relative group md:w-1/2 flex overflow-hidden  md:flex-row flex-col-reverse">
          <div className="flex flex-col md:w-1/2 justify-end absolute bg-gradient-to-t from-white md:static text-white md:text-black">
            <div className="p-10 group-hover:translate-y-2 duration-1000 flex flex-col">
              <span className="font-semibold group-hover:text-blue-600 ">
                March 15,2024
              </span>
              <h1 className="text-xl group-hover:text-blue-600 ">
                Marqstats and Celonis bring the power of process mining to
                business transformations
              </h1>
            </div>
            <div className=" flex bg-blue-600 hover:bg-blue-700 p-5 w-full">
              <button className="px-5 text-white font-semibold">
                Read more on our Blog <span>-{">"} </span>
              </button>
            </div>
          </div>
          <div className="md:w-1/2 overflow-hidden">
            <img
              src={report[4]?.linki}
              className="group-hover:scale-110 duration-1000"
              alt="blog4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
