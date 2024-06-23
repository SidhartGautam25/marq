"use client";
import Card from "../report-card/Card";
import Buttons from "../buttons-report/Buttons";
import Link from "next/link";
import Footer from "../footer/Footer";
import { Fragment, useEffect, useState } from "react";
import { indus } from "@/app/utility/subind";
import axios from "axios";
import load from "@/public/assets/load.gif";
import Image from "next/image";
import { IoMdMail } from "react-icons/io";
import { my_url } from "@/app/utility/varr";
//this is report page

export default function Report2() {
  const [reports, setReports] = useState<Record<string, any>[]>([]);
  // const dev_url = "http://localhost:8800";
  // const prod_url = "https://admin-backend-1-ekoa.onrender.com";
  const [len, setLen] = useState(0);
  const [end, setEnd] = useState(1);
  console.log("your end is ", end);
  const [page, setPage] = useState(1);

  function next() {
    if (page < end) {
      setPage(page + 1);
    }
  }
  function prev() {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    // Code inside this function will run after every render
    // You can perform side effects, such as data fetching, subscriptions, or DOM manipulations here

    // For example, you can fetch data from an API
    console.log("this is rep two rep comp");
    const fetchReport = async () => {
      console.log("fetch report called");
      let url = `${my_url}/api/getall/report?page=${page}`;

      try {
        setLoading(true);
        const daata = await axios.get(url);

        console.log("daata on leftb hero is ", daata.data);
        if (daata) {
          setLoading(false);
          console.log("daaaaaattatatata is ", daata.data);
          setReports([...daata.data.reports]);
          setLen(daata.data.len);
          if (daata.data.len % 5 == 0) {
            setEnd(Math.floor(daata.data.len / 5));
          } else {
            setEnd(Math.floor(daata.data.len / 5 + 1));
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
  }, [page]);

  return (
    <>
      {/* <div>this is your functing component</div> */}
      <div className="main bg-gray-100 p-3 md:p-0">
        <div className="main2 mt-8 md:flex sm:flex md:mt-10 flex-row-reverse">
          <div className="right flex-[10] flex flex-col gap-3 bg-blue-100 p-3 md:mr-8">
            {loading && (
              <div className="flex justify-center mt-4">
                <Image src={load} alt="load gif" className="w-[4rem]" />
              </div>
            )}
            {reports.map((item, index) => {
              return (
                <Fragment key={index}>
                  <Card rep={item} />
                </Fragment>
              );
            })}
            <div
              className={`flex justify-center gap-5 items-center mt-5 ${
                loading ? "hidden" : "block"
              }`}
            >
              <button
                className=" bg-black text-white p-2 w-[5rem]"
                onClick={prev}
              >
                PREV
              </button>
              <span className="">
                {page} To {end}
              </span>
              <button
                className="bg-black text-white p-2 w-[5rem]"
                onClick={next}
              >
                NEXT
              </button>
            </div>
          </div>

          <div className="left flex-[4]">
            <div className="p-5 pt-0">
              <div className="titel flex justify-center text-2xl font-semibold">
                <span className="md:mt-0 mt-6">Industries </span>
              </div>
              <div className="buttans flex flex-col items-center">
                {indus.map((item, index) => {
                  return (
                    <Fragment key={index}>
                      <Buttons link={item.link} heading={item.head} />
                    </Fragment>
                  );
                })}
              </div>
            </div>
            <div className="p-5 md:p-14">
              <div className="bg-black text-white p-6 md:p-8 flex flex-col gap-10 items-center">
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
                    <IoMdMail className=" text-xl" />
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
}
