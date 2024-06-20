"use client";
import Card from "../report-card/Card";
import Buttons from "../buttons-report/Buttons";
import Link from "next/link";
import Footer from "../footer/Footer";
import { Fragment, useEffect, useState } from "react";
import { industries } from "@/app/utility/subind";
import axios from "axios";
import load from "@/public/assets/load.gif";
import Image from "next/image";
import { IoMdMail } from "react-icons/io";
//this is report page

interface MyComponentProps {
  ind: string;
}

const Report: React.FC<MyComponentProps> = ({ ind }) => {
  console.log("before encodinf ", ind);
  ind = decodeURIComponent(ind as string);
  console.log("after encodinf ", ind);
  const sub = industries[ind];
  const [subind, setSubind] = useState([...sub]);
  const [reports, setReports] = useState<Record<string, any>[]>([]);
  const dev_url = "http://localhost:8800";
  const prod_url = "https://admin-backend-1-ekoa.onrender.com";
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState(1);
  const [len, setLen] = useState(1);
  const [end, setEnd] = useState(1);
  const [subquery, setSubquery] = useState<String>("none");
  const [query, setQuery] = useState(false);
  const [qreport, setQreport] = useState([]);
  const [qpage, setQpage] = useState(1);
  const [qlen, setQlen] = useState(1);
  const [qend, setQend] = useState(1);

  function next() {
    if (query) {
      if (qpage < end) {
        setQpage(qpage + 1);
      }
      return;
    }
    if (page < end) {
      setPage(page + 1);
    }
  }

  function prev() {
    if (query) {
      if (qpage > 1) {
        setQpage(qpage - 1);
      }
      return;
    }
    if (page > 1) {
      setPage(page - 1);
    }
  }

  async function func(sub: String) {
    console.log("sub ind is selected");
    setQuery(true);
    setSubquery(sub);
    try {
      setLoading(true);
      let url = `${dev_url}/api/getall/reports?industry=${ind}&page=${qpage}&subind=${sub}`;
      const daata = await axios.get(url);
      setLoading(false);
      if (daata) {
        console.log("daaaaaattatatata is ", daata);
        setReports([...daata.data.reports]);
        console.log(reports.length);
        setLen(daata.data.len);
        setEnd(Math.floor(daata.data.len / 5 + 1));
      }
    } catch (err) {
      console.log("some error occured");
    }
  }

  useEffect(() => {
    // Code inside this function will run after every render
    // You can perform side effects, such as data fetching, subscriptions, or DOM manipulations here

    // For example, you can fetch data from an API
    const fetchReport = async () => {
      console.log("fetch report called");
      let url;
      if (subquery == "none") {
        url = `${dev_url}/api/getall/reports?industry=${ind}&page=${page}`;
      } else {
        url = `${dev_url}/api/getall/reports?industry=${ind}&page=${qpage}&subind=${subquery}`;
      }
      //let url = `${dev_url}/api/getall/reports?industry=${ind}&page=${page}&subind=${query}`;
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
          setReports([...daata.data.reports]);
          console.log(reports.length);
          setLen(daata.data.len);
          setEnd(Math.floor(daata.data.len / 5 + 1));
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
  }, [page, qpage]);

  return (
    <>
      <div className="main bg-gray-100 p-3 md:p-0">
        <div className="main2 mt-8 md:flex sm:flex md:mt-10 flex-row-reverse">
          <div className="right flex-[2] flex flex-col gap-3 bg-blue-100 p-3 md:mr-8">
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
                {query ? qpage : page} To {end}
              </span>
              <button
                className="bg-black text-white p-2 w-[5rem]"
                onClick={next}
              >
                NEXT
              </button>
            </div>
          </div>
          <div className="left flex-[1] flex justify-center">
            <div className="w-[80%] flex flex-col gap-11 items-center pb-6">
              <div className="">
                <div className="titel flex justify-center text-2xl font-semibold">
                  <span className="md:mt-0 mt-6">Sub Industries </span>
                </div>
                <div className="buttans flex flex-col items-center">
                  {subind.map((item, index) => {
                    return (
                      <Fragment key={index}>
                        <div
                          onClick={() => {
                            func(item);
                          }}
                        >
                          <Buttons link="" heading={item} />
                        </div>
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
                      Obtain a personalized market intelligence solution
                      designed specifically for your business
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
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Report;
