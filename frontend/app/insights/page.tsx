"use client";
import Image from "next/image";
import { Footer, Insight, NavBar } from "../comp";
import Slide1 from "@/public/buss1.jpg";

import { BlogContext, BlogContextType } from "../context/blogContext";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { my_url } from "../utility/varr";
import axios from "axios";
// import { BlogContext, BlogContextType } from "@/app/context/blogContext";

const NoSSR: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return <>{children}</>;
};

export default function Home() {
  const { state, dispatch } = useContext(BlogContext) as BlogContextType;
  const router = useRouter();
  const [latest, setLatest] = useState<Record<string, any>>({});

  function latestClicked() {
    console.log("latest blog get clicked");
    dispatch({
      type: "SET_CURRENT",
      payload: {
        title: state.title,
        linkp: state.linkp,
        createdAt: state.createdAt,
        industry: state.industry,
        subind: state.subind,
        linkt: state.linkt,
      },
    });
    router.push(`/insights/${state.title}`);
  }

  useEffect(() => {
    // Code inside this function will run after every render
    // You can perform side effects, such as data fetching, subscriptions, or DOM manipulations here

    // For example, you can fetch data from an API
    // const dev_url = "http://localhost:8800";
    // const prod_url = "https://admin-backend-1-ekoa.onrender.com";
    const fetchLatest = async () => {
      console.log("fetch report called");
      //  console.log(
      //    "params slug is  in insight is ",
      //    decodeURIComponent(params.slug)
      //  );
      let url = `${my_url}/api/getall/blog/latest`;

      //let url = `${dev_url}/api/getall/reports?industry=${ind}&page=${page}&subind=${query}`;

      try {
        console.log("request senttttttt");
        const daata = await axios.get(url);
        console.log("data is in insgiht ", daata);
        let LatestBlogs = daata.data.data[0];
        // let item: Record<string, any>;
        //  relatedBlogs = relatedBlogs.filter(
        //    (item: Record<string, any>) => item.title !== state.ctitle
        //  );
        setLatest(LatestBlogs);
        console.log("related reports are ", daata);
        console.log("latest reporttttttt is ", daata.data.data[0]);
      } catch (err) {}
    };
    fetchLatest();

    // You can also return a cleanup function from useEffect
    // This cleanup function will be executed before the component is unmounted or re-rendered
    return () => {
      // Code inside this cleanup function will run before the component is unmounted or re-rendered
      // You can perform cleanup tasks here, such as unsubscribing from subscriptions or clearing timers
    };
  }, []);

  return (
    <NoSSR>
      <div className="">
        <div className=" bg-gray-900">
          <NavBar />
        </div>
        <div className="h-44 md:h-72 flex items-center relative">
          <div className="absolute inset-0">
            <Image src={Slide1} alt="" className="h-full w-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <h1 className="text-4xl ml-12 md:text-7xl text-white font-bold z-50">
            Insight
          </h1>
        </div>
        <hr className="w-full h-[2px] my-3 md:my-6 bg-gray-400" />
        <div
          className="flex flex-col md:flex-row items-center bg-white md:p-8 md:mx-10 px-3 cursor-pointer"
          onClick={latestClicked}
        >
          <div className="md:w-1/3 md:h-1/2 w-full h-full">
            <img
              src={latest?.linkt}
              alt="Featured Insight"
              width={400}
              height={100}
              className="object-cover h-[14rem]"
            />
          </div>
          <div className="md:w-2/3 w-full md:pl-8 pl-0 mt-4 md:mt-0">
            <h4 className="text-sm font-semibold text-gray-500">
              Latest Insight
            </h4>
            <h2 className="md:text-3xl font-bold mt-2 text-xl">
              {latest?.title}
            </h2>

            <a
              href="#"
              className="text-blue-500 font-semibold mt-2 inline-block text-[12px] md:text-xl"
            >
              Learn More
            </a>
          </div>
        </div>
        <hr className="w-full h-[2px] my-6 bg-gray-400" />
        <Insight />
        <hr className="w-full h-[2px] my-6 bg-gray-400" />

        <Footer />
      </div>
    </NoSSR>
  );
}
