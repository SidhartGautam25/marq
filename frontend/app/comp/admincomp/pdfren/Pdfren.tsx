"use client";
import { Worker } from "@react-pdf-viewer/core";
import ReportContect from "../../../comp/report-contact/ReportContect"
import Image from "next/image";
import { Viewer } from "@react-pdf-viewer/core";
import { toolbarPlugin } from "@react-pdf-viewer/toolbar";
import { bookmarkPlugin } from "@react-pdf-viewer/bookmark";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { useState, useContext } from "react";
// Import styles
import "@react-pdf-viewer/toolbar/lib/styles/index.css";
// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import PdfDescription from "../pdfdescription/pdfdescription";
import { ReportContext, ReportContextType } from "@/app/context/reportContext";
import exp from "constants";
//this
interface ChildComponentProps {
  reports: Record<string, any>[];
}

//const Pdfren: React.FC<ChildComponentProps> = () => {
function Pdfren() {
  const [currentpage, setCurrentpage] = useState(0);
  const [num, setNum] = useState<Number>(1);

  const { state, dispatch } = useContext(ReportContext) as ReportContextType;
  let pdfurl = state.linkp;
  let turl = state.linkt;
  let furl = state.linkf;

  function click(n: Number) {
    setNum(n);
    console.log("num is ", n);
  }

  return (
    <div className="md:w-[85%] w-full">
      <div className="md:mt-7 flex justify-center">
        <PdfDescription rep={state} />
      </div>
      <div className="flex md:flex-row flex-col md:mt-8 mt-4">
        <div className="flex-[5]">
          <div className="flex justify-center">
            <div className="flex justify-between mb-5 md:mb-5 border-2 border-black cursor-pointer border-l-0 items-center md:font-bold md:w-[85%]">
              <div
                className={`flex justify-center items-center md:py-2 ease-in-out duration-700 md:w-[25%] border-r border-l-2 border-black ${
                  num === 1 ? "bg-slate-700 text-white" : "bg-white text-black"
                } md:p-3 p-[7px] sm:p-[9px] text-[9px] sm:text-[12px] md:text-[15px]`}
                onClick={() => {
                  click(1);
                }}
              >
                Report Description
              </div>
              <div
                className={`flex justify-center items-center md:py-2 ease-in-out duration-700 md:w-[25%] border-r border-l border-black ${
                  num === 2 ? "bg-slate-700 text-white" : "bg-white text-black"
                } md:p-3 p-[7px] sm:p-[9px] sm:text-[12px] text-[9px] md:text-[15px]`}
                onClick={() => {
                  click(2);
                }}
              >
                Table of Contents
              </div>
              <div
                className={`flex justify-center items-center md:py-2 ease-in-out duration-700 md:w-[25%] border-r border-l border-black ${
                  num === 3 ? "bg-slate-700 text-white" : "bg-white text-black"
                } md:p-3 p-[7px] sm:p-[9px] text-[9px] sm:text-[12px] md:text-[15px]`}
                onClick={() => {
                  click(3);
                }}
              >
                FAQs
              </div>
              <div
                className={`flex justify-center items-center md:py-2 ease-in-out duration-700 md:w-[25%] border-l border-black ${
                  num === 4 ? "bg-slate-700 text-white" : "bg-white text-black"
                } md:p-3 p-[7px] sm:p-[9px] text-[9px] sm:text-[12px] md:text-[15px]`}
                onClick={() => {
                  click(4);
                }}
              >
                Request Sample
              </div>
            </div>
          </div>
          <div className=" w-full">
            {/* {state.cid && reports ? `${reports[state.cid].link1}` : "nothing"} */}

            {num != 4 ? (
              <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                {num === 1 ? (
                  <Viewer
                    fileUrl={
                      pdfurl
                        ? pdfurl
                        : "https://res.cloudinary.com/dkzpbucfz/image/upload/v1713940823/pics/lu1fo2x4kk4v9qmd5r6s.pdf"
                    }
                    // fileUrl="https://res.cloudinary.com/dkzpbucfz/image/upload/v1713940823/pics/lu1fo2x4kk4v9qmd5r6s.pdf"
                    initialPage={currentpage}
                    onPageChange={({ currentPage }) =>
                      setCurrentpage(currentPage)
                    }
                  />
                ) : (
                  <span></span>
                )}

                {num === 2 ? (
                  <Viewer
                    fileUrl={
                      turl
                        ? turl
                        : "https://res.cloudinary.com/dkzpbucfz/image/upload/v1713940823/pics/lu1fo2x4kk4v9qmd5r6s.pdf"
                    }
                    // fileUrl="https://res.cloudinary.com/dkzpbucfz/image/upload/v1713940823/pics/lu1fo2x4kk4v9qmd5r6s.pdf"
                    initialPage={currentpage}
                    onPageChange={({ currentPage }) =>
                      setCurrentpage(currentPage)
                    }
                  />
                ) : (
                  <span></span>
                )}
                {num === 3 ? (
                  <Viewer
                    fileUrl={
                      furl
                        ? furl
                        : "https://res.cloudinary.com/dkzpbucfz/image/upload/v1713940823/pics/lu1fo2x4kk4v9qmd5r6s.pdf"
                    }
                    // fileUrl="https://res.cloudinary.com/dkzpbucfz/image/upload/v1713940823/pics/lu1fo2x4kk4v9qmd5r6s.pdf"
                    initialPage={currentpage}
                    onPageChange={({ currentPage }) =>
                      setCurrentpage(currentPage)
                    }
                  />
                ) : (
                  <span></span>
                )}
              </Worker>
            ) : (
              <span></span>
            )}
          </div>
        </div>
        <div className="w-full flex-[2] h-screen sticky top-0 flex justify-center mt-5 md:mt-0 md:justify-start px-5 md:px-0">
          <ReportContect/>
        </div>
      </div>
    </div>
  );
}

export default Pdfren;
