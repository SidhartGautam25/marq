import React from "react";
import Link from "next/link";
import { IoMdMail } from "react-icons/io";
import { PiPhoneThin } from "react-icons/pi";
import { PiEnvelopeOpenThin } from "react-icons/pi";
const ReportContect = () => {
  return (
    <div className="md:w-[82%]">
      <div className="">
        <div className="uppercase px-5 py-3 bg-sky-950 text-white">
          contect with our sales team
        </div>
        <div className="flex p-3 gap-5">
          <div className="w-[4rem] h-[4rem] rounded-full flex justify-center items-center text-5xl text-blue-600 border-2 border-blue-500 hover:bg-blue-500 hover:text-white ease-in-out duration-300">
            <PiPhoneThin />
          </div>
          <div className="flex flex-col justify-between">
            <div className="text-blue-500 font-bold">Call Us</div>
            <div className="">+91-93418-00264</div>
          </div>
        </div>
        <div className="flex p-3 gap-5">
          <div className="w-[4rem] h-[4rem] rounded-full border-2 border-blue-500 flex justify-center items-center text-5xl text-blue-500 hover:bg-blue-500 hover:text-white ease-in-out duration-300">
            <PiEnvelopeOpenThin />
          </div>
          <div className="flex flex-col justify-between">
            <div className="text-blue-500 font-bold">Email Us</div>
            <div className="">Sales@marq-stats.com</div>
          </div>
        </div>
      </div>
      <div className="bg-black text-white p-6 md:p-8 flex flex-col gap-10 items-center w-[100%] mt-10">
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
              Receive a report tailored to your specific needs and preferences
            </li>
          </ul>
        </div>
        <Link
          className="flex justify-center bg-white text-black p-2 md:p-3 rounded-[10px]  mt-8 w-full"
          href="/contact"
        >
          <button className="flex gap-8 ">
            Contact Us
            <IoMdMail className=" text-xl" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ReportContect;
