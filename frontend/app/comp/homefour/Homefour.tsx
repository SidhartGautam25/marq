"use client";

import { CiCalendar } from "react-icons/ci";
import { useEffect, useState } from "react";
import { convert } from "@/app/utility/subind";
import { useRouter } from "next/navigation";
import { useContext } from "react";

import axios from "axios";
import { BlogContext, BlogContextType } from "@/app/context/blogContext";
import { my_url } from "@/app/utility/varr";
import { ReportContext, ReportContextType } from "@/app/context/reportContext";

export default function Homefour() {
  const [reports, setReports] = useState<Record<string, any>[]>([]);
  // const { state, dispatch } = useContext(BlogContext) as BlogContextType;
  // const dev_url = "http://localhost:8800";
  // const prod_url = "https://admin-backend-1-ekoa.onrender.com";
  // let url = `${my_url}/api/getall/latest-blog`;
  const { state, dispatch } = useContext(ReportContext) as ReportContextType;
  let page = 1;
  let url = `${my_url}/api/getall/report?page=${page}`;
  const router = useRouter();

  function clickfun(ind: number) {
    // router.push(`/insight/${blogs[ind]?.title}`);
    // dispatch({
    //   type: "SET_CURRENT",
    //   payload: {
    //     title: blogs[ind].title,
    //     desc: blogs[ind].desc,
    //     linkp: blogs[ind].linkp,
    //     createdAt: blogs[ind].createdAt,
    //     industry: blogs[ind].industry,
    //     subind: blogs[ind].subind,
    //     linkt: blogs[ind].linkt,
    //   },
    // });
    let rep = reports[ind];
    console.log("rep in homefour is ", rep);
    dispatch({
      type: "SET_CURRENT",
      payload: rep,
    });
    let temp = rep.slug.replace(/\s/g, "-");
    router.push(`/reports/${temp}`);
  }

  useEffect(() => {
    const fetchReport = async () => {
      try {
        const daata = await axios.get(url);
        if (daata) {
          // console.log("data in blogggggggggggggg section is ", daata);
          // let bloogs = daata.data.blogs;
          // dispatch({
          //   type: "SET_LATEST",
          //   payload: {
          //     title: bloogs[0].title,
          //     desc: bloogs[0].desc,
          //     linki: bloogs[0].linki,
          //     linkp: bloogs[0].linkp,
          //     createdAt: bloogs[0].createdAt,
          //     industry: bloogs[0].industry,
          //     subind: bloogs[0].subind,
          //     linkt: bloogs[0].linkt,
          //     linkf: bloogs[0].linkf,
          //   },
          // });
          setReports([...daata.data.reports]);

          // console.log("background is ", rep.length);
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
    <>
      <div className=" flex flex-col items-center bg-[url('/images/back10.jpg')] bg-no-repeat bg-cover">
        <div className="text-2xl lg:text-4xl text font-medium mt-6 lg:mt-4 border-b-4 border-r-4 rounded-full border-gray-300 p-3">
          Explore Our Latest Reports
        </div>
        <div className="cards flex flex-col md:flex-row justify-center mt-10">
          <div
            onClick={() => {
              clickfun(0);
            }}
            className="pb-8 card m-4 flex flex-col items-center border-2 border-gray-100 hover:scale-105 ease-in duration-300 drop-shadow-sm rounded-2xl"
          >
            <img
              src={reports[0]?.linki2}
              className="w-[23rem] h-[26rem]"
              alt="Picture of the author"
            />
            <p className="w-[20rem] mt-10 text-xl font-medium tracking-tight">
              {reports[0]?.title}
            </p>
            <div className="date flex m-8 text-blue-600">
              <CiCalendar className="w-[20px] h-[20px] mr-2" />
              <span className="">
                {convert(reports[0]?.createdAt.substring(5, 7))}{" "}
                {reports[0]?.createdAt.substring(0, 4)}
              </span>
            </div>
          </div>
          <div
            onClick={() => {
              clickfun(1);
            }}
            className="card m-4 flex flex-col items-center border-2 border-gray-100 hover:scale-105 ease-in duration-300 drop-shadow-sm rounded-2xl"
          >
            <img
              src={reports[1]?.linki2}
              className="w-[23rem] h-[26rem]"
              alt=""
            />
            <p className="w-[20rem] mt-10 text-xl  font-medium tracking-tight">
              {reports[1]?.title}
            </p>
            <div className="date flex m-8 text-blue-600">
              <CiCalendar className="w-[20px] h-[20px] mr-2 " />
              <span className=" text-blue-600">
                {" "}
                {convert(reports[1]?.createdAt.substring(5, 7))}{" "}
                {reports[1]?.createdAt.substring(0, 4)}
              </span>
            </div>
          </div>
          <div
            onClick={() => {
              clickfun(2);
            }}
            className="card m-4 flex flex-col items-center border-2 border-gray-100 hover:scale-105 ease-in duration-300 drop-shadow-sm rounded-2xl"
          >
            <img
              src={reports[2]?.linki2}
              className=" w-[23rem] h-[26rem]"
              alt=""
            />
            <p className="w-[20rem] mt-10 text-xl  font-medium tracking-tight">
              {reports[2]?.title}
            </p>
            <div className="date flex mt-8 text-blue-600">
              <CiCalendar className="w-[20px] h-[20px] mr-2" />
              <span className=" text-blue-600">
                {" "}
                {convert(reports[2]?.createdAt.substring(5, 7))}{" "}
                {reports[2]?.createdAt.substring(0, 4)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
