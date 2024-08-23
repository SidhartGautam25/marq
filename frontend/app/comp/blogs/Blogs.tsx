"use client";

import { useEffect, useState } from "react";
import { ReportContext, ReportContextType } from "@/app/context/reportContext";
import { useContext } from "react";
import axios from "axios";
import { convert } from "@/app/utility/subind";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { my_url } from "@/app/utility/varr";
import { BlogContext, BlogContextType } from "@/app/context/blogContext";
interface Rep {
  [key: string]: any;
}

export default function Blogs() {
  const [blog, setBlog] = useState<Rep[]>([]);
  //year and month states
  const [year1, setyear1] = useState<string>("");
  const [month1, setmonth1] = useState<string>("");
  const [year2, setyear2] = useState<string>("");
  const [month2, setmonth2] = useState<string>("");
  const [year3, setyear3] = useState<string>("");
  const [month3, setmonth3] = useState<string>("");
  const [year4, setyear4] = useState<string>("");
  const [month4, setmonth4] = useState<string>("");
  const [year5, setyear5] = useState<string>("");
  const [month5, setmonth5] = useState<string>("");

  // const dev_url = "http://localhost:8800";
  // const prod_url = "https://admin-backend-1-ekoa.onrender.com";

  // let url = `${my_url}/api/getall/pinned-report`;
  const [back, setBack] = useState("");
  let background;
  const { state, dispatch } = useContext(BlogContext) as BlogContextType;
  const router = useRouter();
  function clickfun(rep: Record<string, any>) {
    dispatch({
      type: "SET_CURRENT",
      payload: {
        title: rep.title,
        // desc: rep.desc,
        // linkt: rep.linki1,
        linkp: rep.linkp,
        createdAt: rep.createdAt,
        industry: rep.industry,
        subind: rep.subind,
        linkt: rep.linkt,
        // linkf: rep.linkf,
        cpage: 0,
      },
    });
    let temp = rep.title.replace(/\s/g, "-");
    router.push(`/insight/${temp}`);
  }

  // const date = rep.createdAt;
  // const year = date?.substring(0, 4);
  // const mon = date?.substring(5, 7);
  // const month = convert(mon);

  useEffect(() => {
    let url = `${my_url}/api/getall/blogs`;
    const fetchReport = async () => {
      try {
        console.log("request has been sent");
        const daata = await axios.get(url);
        if (daata) {
          console.log("data in blog section is ", daata);
          let rep = daata.data.blogs;
          setBlog([...daata.data.blogs]);
          background = "bg-[url(" + daata.data.blogs[0]?.linkt + ")]";
          setBack(daata.data.blogs[0]?.linkt);
          // console.log("background is ", rep.length);
          if (rep.length > 4) {
            setyear1(rep[0].createdAt.substring(0, 4));
            setyear2(rep[1].createdAt.substring(0, 4));
            setyear3(rep[2].createdAt.substring(0, 4));
            setyear4(rep[3].createdAt.substring(0, 4));
            setyear5(rep[4].createdAt.substring(0, 4));
            setmonth1(convert(rep[0].createdAt.substring(5, 7)));
            setmonth2(convert(rep[1].createdAt.substring(5, 7)));
            setmonth3(convert(rep[2].createdAt.substring(5, 7)));
            setmonth4(convert(rep[3].createdAt.substring(5, 7)));
            setmonth5(convert(rep[4].createdAt.substring(5, 7)));
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
    <div className="flex flex-col items-center">
      <span className="text-2xl lg:text-4xl mt-6 lg:mt-4 p-3 border-b-2 border-gray-300 text-center">
        Discover Our Latest Insights
      </span>
      <div className="flex flex-col md:flex-row mt-5 cursor-pointer">
        {/* 1st card */}
        <div
          className="overflow-hidden w-full md:w-1/2 h-[24rem] md:h-auto"
          onClick={() => {
            clickfun(blog[0]);
          }}
        >
          <div
            style={{ backgroundImage: `url(${back})` }}
            className="w-full h-full flex flex-col-reverse group   md:bg-cover hover:scale-105 duration-1000 bg-contain"
          >
            {/* <img
              src={report[0]?.linki}
              alt="blog1"
              className=" group-hover:scale-110 duration-1000  object-cover w-full h-full absolute flex justify-center mix-blend-overlay "
            /> */}

            <div className=" bg-gradient-to-t from-white h-fit group-hover:translate-y-2 duration-1000 p-10 group-hover:text-blue-600 flex  flex-col ">
              <span className="group-hover:text-blue-600 text-black font-bold md:text-xl text-sm  mb-3">
                {month1} {year1}
              </span>
              <h1 className="md:text-3xl text-xl font-medium group-hover:text-blue-600 ">
                {blog[0]?.title}
              </h1>
            </div>
          </div>
        </div>
        {/* 2nd card and 3rd card */}
        <div className=" w-full md:w-1/2 lg:flex lg:flex-col">
          {/* 2nd card */}
          <div
            className="relative group h-[60%] lg:flex"
            onClick={() => {
              clickfun(blog[1]);
            }}
          >
            <div className=" overflow-hidden w-full md:w-1/2">
              <img
                src={blog[1]?.linkt}
                className="duration-1000 group-hover:scale-110 h-full w-full"
                alt="blog2"
              />
            </div>
            <div className="absolute bg-gradient-to-t from-black  md:bg-none bottom-0 md:static p-10 group-hover:translate-y-2 duration-1000  group-hover:text-blue-600 w-full md:w-1/2 flex justify-center flex-col">
              <span className="group-hover:text-blue-600 font-semibold  text-white md:text-black md:text-xl text-sm  mb-3">
                {month2} {year2}
              </span>
              <h1 className="group-hover:text-blue-600 text-xl text-white md:text-black">
                {blog[1]?.title}
              </h1>
            </div>
          </div>

          {/* 3rd card */}
          <div
            className="group md:h-[40%] h-auto w-full bg-[#1b1f29] text-white lg:flex lg:flex-col justify-center"
            onClick={() => {
              clickfun(blog[2]);
            }}
          >
            <div className="lg:w-1/2 p-10 duration-1000 group-hover:translate-y-2 group-hover:text-blue-600">
              <div className="pt-40 md:pt-0 font-bold group-hover:text-blue-600 mb-3 md:text-xl text-sm">
                {month3} {year3}
              </div>
              <h1 className="text-xl group-hover:text-blue-600 ">
                {blog[2]?.title}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="md:h-[400px] h-auto flex md:flex-row flex-col cursor-pointer">
        {/* 4th card */}
        <div
          className="flex md:w-1/2 w-full group md:flex-row overflow-hidden flex-col-reverse relative"
          onClick={() => {
            clickfun(blog[3]);
          }}
        >
          <div className=" md:bg-none absolute md:static bg-gradient-to-t from-black text-white md:text-black justify-center  duration-1000 p-10 group-hover:translate-y-2 group-hover:text-blue-600 flex flex-col md:w-1/2 z-50">
            <span className=" font-semibold group-hover:text-blue-600 md:text-xl text-sm  mb-3">
              {month4} {year4}
            </span>
            <h1 className="text-xl group-hover:text-blue-600 ">
              {blog[3]?.title}
            </h1>
          </div>
          <div className=" overflow-hidden md:w-1/2">
            <img
              src={blog[3]?.linkt}
              className="group-hover:scale-110 h-full duration-1000 md:w-full"
              alt="blog3"
            />
          </div>
        </div>

        {/* 5th card */}
        <div className="relative group md:w-1/2 flex overflow-hidden  md:flex-row flex-col-reverse">
          <div className="flex flex-col md:w-1/2 justify-end absolute bg-gradient-to-t from-white md:static text-white md:text-black z-50">
            <div
              className="p-10 group-hover:translate-y-2 duration-1000 flex flex-col"
              onClick={() => {
                clickfun(blog[4]);
              }}
            >
              <span className="font-semibold group-hover:text-blue-600 md:text-xl text-sm mb-3">
                {month5} {year5}
              </span>
              <h1 className="text-xl group-hover:text-blue-600 ">
                {blog[4]?.title}
              </h1>
            </div>
            <div className=" flex bg-blue-600 hover:bg-blue-700 p-5 w-full">
              <Link href="/report-store">
                <button className="px-5 text-white font-semibold flex gap-3">
                  Read more on our Blog <span>-{">"} </span>
                </button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 overflow-hidden">
            <img
              src={blog[4]?.linkt}
              className="group-hover:scale-110 duration-1000 md:h-full md:w-full"
              alt="blog4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
