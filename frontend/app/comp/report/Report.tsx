"use client";
import Card from "../report-card/Card";
import Buttons from "../buttons-report/Buttons";
import Link from "next/link";
import Footer from "../footer/Footer";
import { Fragment, useEffect, useState } from "react";
import industries from "@/app/utility/subind";
import axios from "axios";
//this is report page

interface MyComponentProps {
  ind: string;
}

const Report: React.FC<MyComponentProps> = ({ ind }) => {
  ind = decodeURIComponent(ind as string);
  const sub = industries[ind];
  const [subind, setSubind] = useState([...sub]);
  const [reports, setReports] = useState<Record<string, any>[]>([]);

  useEffect(() => {
    // Code inside this function will run after every render
    // You can perform side effects, such as data fetching, subscriptions, or DOM manipulations here

    // For example, you can fetch data from an API
    const fetchReport = async () => {
      console.log("fetch report called");
      let url = `http://localhost:8800/api/getall/reports?industry=${ind}`;
      console.log(
        "url is ",
        `http://localhost:8800/api/getall/reports?industry=${ind}`
      );
      try {
        const daata = await axios.get(url);

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
            {reports.map((item, index) => {
              return (
                <Fragment key={index}>
                  <Card rep={item} />
                </Fragment>
              );
            })}
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
                    <svg
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 5h18a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2V7a2 2 0 012-2zm0 2v10h18V7m-18 0l9 5.5L21 7"
                      />
                    </svg>
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
