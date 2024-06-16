"use client";
import { Worker } from "@react-pdf-viewer/core";
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
import Sidebtn from "../sidebtn/Sidebtn";
import PdfDescription from "../pdfdescription/pdfdescription";
import { ReportContext, ReportContextType } from "@/app/context/reportContext";
import exp from "constants";
import Form from "../../report-form/Form";
//this
interface ChildComponentProps {
  reports: Record<string, any>[];
}

//const Pdfren: React.FC<ChildComponentProps> = () => {
function Pdfren() {
  // const bookmarkPluginInstance = bookmarkPlugin();
  // const { Bookmarks } = bookmarkPluginInstance;
  // const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const [currentpage, setCurrentpage] = useState(0);

  const { state, dispatch } = useContext(ReportContext) as ReportContextType;
  let pdfurl = state.linkp;
  // let left = state.linki;
  // let right = state.linki;
  return (
    <div className="w-full">
      {/* <Bookmarks /> */}
      {/* {bar ? (
        // <Image
        //   src={left}
        //   alt="left icon"
        //   className="h-[30px] w-[30px] self-center ease-in duration-300"
        //   onClick={() => setbar(!bar)}
        // />
      ) : (
        // <Image
        //   src={right}
        //   alt=""
        //   className="h-[30px] w-[30px] self-center ease-in duration-300"
        //   onClick={() => setbar(!bar)}
        // />
      )} */}

      <div className="">
        <PdfDescription rep={state} />
      </div>
      <div className="flex justify-center">
        <div className="flex justify-between p-4">
          <button className="w-[235px] border bg-slate-700 p-3 text-white" >Report Description</button>
          <button className="w-[235px] border bg-slate-700 p-3 text-white">Table of Contents</button>
          <button className="w-[235px] border bg-slate-700 p-3 text-white">FAQs</button>
          <button className="w-[235px] border bg-slate-700 p-3 text-white">Request Sample</button>
        </div>
      </div>
      <Form/>
      <div className="flex w-full">
        <div className="border w-full">
          {/* {state.cid && reports ? `${reports[state.cid].link1}` : "nothing"} */}
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            <Viewer
              fileUrl={
                pdfurl
                  ? pdfurl
                  : "https://res.cloudinary.com/dkzpbucfz/image/upload/v1713940823/pics/lu1fo2x4kk4v9qmd5r6s.pdf"
              }
              // fileUrl="https://res.cloudinary.com/dkzpbucfz/image/upload/v1713940823/pics/lu1fo2x4kk4v9qmd5r6s.pdf"
              initialPage={currentpage}
              onPageChange={({ currentPage }) => setCurrentpage(currentPage)}
            />
          </Worker>
        </div>
      </div>
    </div>
  );
}

export default Pdfren;
