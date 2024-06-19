import Image from "next/image";
// import blog1 from "@/public/blog1.png";
import blog2 from "@/public/blog2.png";
import blog3 from "@/public/blog3.png";
import blog4 from "@/public/blog4.png";
import { useEffect, useState } from "react";
import axios from "axios";

interface Rep {
  title: string;
  linki: string;
}

export default function Blogs() {
  const [report, setReports] = useState<Rep[]>([]);

  const dev_url = "http://localhost:8800";
  const prod_url = "https://admin-backend-1-ekoa.onrender.com";

  let url = `${dev_url}/api/getall/pin-report`;

  useEffect(() => {
    const fetchReport = async () => {
      try {
        const daata = await axios.get(url);
        if (daata) {
          setReports([...daata.data.reports]);
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
          <div className=" w-full h-full flex flex-col-reverse group bg-[url('/blog1.png')] bg-cover hover:scale-105 duration-1000">
            {/* <Image
            src={blog1}
            alt="blog1"
            className=" group-hover:scale-110 duration-1000  object-cover w-full h-full absolute flex justify-center mix-blend-overlay "
          ></Image> */}
            <div className=" bg-gradient-to-t from-white h-fit group-hover:translate-y-2 duration-1000 p-10 group-hover:text-blue-600 flex  flex-col ">
              <span className="group-hover:text-blue-600 ">April 12,2024</span>
              <h1 className="md:text-3xl text-xl font-medium group-hover:text-blue-600 ">
                McKinsey accelerates growth for Bottom Line, a nonprofit
                boosting graduation rates
              </h1>
            </div>
          </div>
        </div>
        {/* 2nd card and 3rd card */}
        <div className=" w-full md:w-1/2 lg:flex lg:flex-col">
          {/* 2nd card */}
          <div className="relative group h-[60%] lg:flex">
            <div className=" overflow-hidden w-full md:w-1/2">
              <Image
                src={blog2}
                className="duration-1000 group-hover:scale-110 h-full w-full"
                alt="blog2"
              ></Image>
            </div>
            <div className="absolute bg-gradient-to-t from-black  md:bg-none bottom-0 md:static p-10 group-hover:translate-y-2 duration-1000  group-hover:text-blue-600 w-full md:w-1/2 flex justify-center flex-col">
              <span className="group-hover:text-blue-600 font-semibold  text-white md:text-black">
                April 4,2024
              </span>
              <h1 className="group-hover:text-blue-600 text-xl text-white md:text-black">
                Marqstats and Google Cloud help companies tap into $4 trillion
                of business value with generative AI
              </h1>
            </div>
          </div>

          {/* 3rd card */}
          <div className="group md:h-[40%] h-auto w-full bg-[#1b1f29] text-white lg:flex lg:flex-col justify-center">
            <div className="lg:w-1/2 p-10 duration-1000 group-hover:translate-y-2 group-hover:text-blue-600">
              <div className="pt-40 md:pt-0 font-semibold group-hover:text-blue-600 ">
                April 2,2024
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
            <Image
              src={blog3}
              className="group-hover:scale-110 h-full duration-1000"
              alt="blog3"
            ></Image>
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
            <Image
              src={blog4}
              className="group-hover:scale-110 duration-1000"
              alt="blog4"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
