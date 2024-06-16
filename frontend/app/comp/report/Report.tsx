"use client";
import Card from "../report-card/Card";
import Buttons from "../buttons-report/Buttons";
import Link from "next/link";
import Footer from "../footer/Footer";
import { Fragment, useEffect, useState } from "react";
import {industries} from "@/app/utility/subind";
import axios from "axios";
import load from "@/public/assets/load.gif"
import Image from "next/image";
import { IoMdMail } from "react-icons/io";
//this is report page

interface MyComponentProps {
  ind: string;
}

const Report: React.FC<MyComponentProps> = ({ ind }) => {
  ind = decodeURIComponent(ind as string);
  const sub = industries[ind];
  const [subind, setSubind] = useState([...sub]);
  const [reports, setReports] = useState<Record<string, any>[]>([]);
  const dev_url = "http://localhost:8800";
  const prod_url = "https://admin-backend-1-ekoa.onrender.com";
  const [loading,setLoading] =useState<boolean>(true);
  useEffect(() => {
    // Code inside this function will run after every render
    // You can perform side effects, such as data fetching, subscriptions, or DOM manipulations here

    // For example, you can fetch data from an API
    const fetchReport = async () => {
      console.log("fetch report called");
      let url = `${prod_url}/api/getall/reports?industry=${ind}`;
      console.log(
        "url is ",
        `http://localhost:8800/api/getall/reports?industry=${ind}`
      );
      try {
        const daata = await axios.get(url);
        setLoading(false);

        console.log("daata on leftb hero is ", daata.data);
        if (daata) {
          console.log("daaaaaattatatata is ", daata);
          setReports([...daata.data]);
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
      <div className="main bg-gray-100 p-3 md:p-0">
        <div className="main2 mt-8 md:flex sm:flex md:mt-10 flex-row-reverse">
          <div className="right flex-[10] flex flex-col gap-3 bg-blue-100 p-3 md:mr-8">
            {loading && <div className="flex justify-center mt-4"><Image src={load} alt="load gif" className="w-[4rem]"/></div>}
            {reports.map((item, index) => {
              return (
                <Fragment key={index}>
                  <Card rep={item} />
                </Fragment>
              );
            })}
            <div className={`flex justify-center gap-5 items-center mt-5 ${loading?"hidden": "block"}`}>
              <button className=" bg-black text-white p-2 w-[5rem]">PREVIES</button>
              <span className="">1 To 50</span>
              <button className="bg-black text-white p-2 w-[5rem]">NEXT</button>
            </div>
          </div>
          <div className="left flex-[4]">
            <div className="p-5 pt-0">
              <div className="titel flex justify-center text-2xl font-semibold">
                <span className="md:mt-0 mt-6">Sub Industries </span>
              </div>
              <div className="buttans flex flex-col items-center">
                {subind.map((item, index) => {
                  return (
                    <Fragment key={index}>
                      <Buttons link="" heading={item} />
                    </Fragment>
                  );
                })}
              </div>
            </div>
            <div className="p-5 md:p-14">
              <div className="bg-black text-white p-4 md:p-8 flex flex-col gap-10">
                <div className="flex flex-col gap-5">
                  <span>CUSTOMIZED REPORT SOLUTION</span>
                  <p>
                    Obtain a personalized market intelligence solution designed
                    specifically for your business
                  </p>
                  <ul className="list-disc flex flex-col gap-3">
                    <li>
                      Choose customized report sections that align with your
                      requirements
                    </li>
                    <li>
                      Receive a report tailored to your specific needs and
                      preferences
                    </li>
                  </ul>
                </div>
                <Link
                  className="flex justify-center bg-white text-black p-2 md:p-3 rounded-[10px]  mt-8"
                  href="/contact"
                >
                  <button className="flex gap-5 ">
                    Contact Us
                    <IoMdMail className=" text-xl"/>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Report;
