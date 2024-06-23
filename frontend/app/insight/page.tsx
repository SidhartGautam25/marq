"use client";
import Image from "next/image";
import { Footer, Insight, NavBar } from "../comp";
import Slide1 from "@/public/buss1.jpg";

import { BlogContext, BlogContextType } from "../context/blogContext";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
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
    router.push(`/insight/${state.title}`);
  }

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
        <hr className="w-full h-[2px] my-6 bg-gray-400" />
        <div
          className="flex flex-col md:flex-row items-center bg-white p-8"
          onClick={latestClicked}
        >
          <div className="md:w-1/2 w-full">
            <img
              src={state.linkt}
              alt="Featured Insight"
              width={700}
              height={300}
              className="object-cover"
            />
          </div>
          <div className="md:w-1/2 w-full md:pl-8 pl-0 mt-4 md:mt-0">
            <h4 className="text-sm font-semibold text-gray-500">
              Latest Insight
            </h4>
            <h2 className="text-3xl font-bold mt-2">{state.title}</h2>

            <a
              href="#"
              className="text-blue-500 font-semibold mt-4 inline-block"
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
