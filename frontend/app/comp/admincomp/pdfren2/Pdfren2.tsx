"use client";
import { useState, useContext } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import PdfDescription from "../pdfdescription/pdfdescription";
import { ReportContext, ReportContextType } from "@/app/context/reportContext";
// Import styles
import "@react-pdf-viewer/toolbar/lib/styles/index.css";
import "@react-pdf-viewer/core/lib/styles/index.css";
import MarketSnapshot from "../marketSnapshot/MarketSnapshot";
import MarketOverview from "../marketOverview/MarketOverview";
import KeyMarket from "../keyMarket/KeyMarket";
import ComptetiveLandscape from "../competitiveLandscape/ComptetiveLandscape";
import MajorPlayers from "../majorPlayers/MajorPlayers";
import RecentDevelopments from "../recentDevelopments/RecentDevelopments";
import Toc from "../toc/Toc";
import ScopeReport from "../scopeReport/ScopeReport";
import Faq from "../faq/Faq";
// import Faq from "../../faq-card/Faq";

interface ChildComponentProps {
  reports: Record<string, any>[];
}

function Pdfren2() {
  const [currentpage, setCurrentpage] = useState(0);
  const [num, setNum] = useState<Number>(1);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const { state, dispatch } = useContext(ReportContext) as ReportContextType;
  let pdfurl = state.linkp;
  let turl = state.linkt;
  let furl = state.linkf;

  function click(n: Number) {
    setNum(n);
    console.log("num is ", n);
  }

  return (
    <div className="w-full">
      <div className="md:mt-7">
        <PdfDescription rep={state} />
      </div>
      <div className="flex my-10">
        <div className="left w-1/4">
          <div className="w-full bg-white shadow-lg p-4 sticky top-0">
            <nav className="space-y-6">
              <div
                className="text-gray-900 cursor-pointer flex items-center"
                onClick={() => setDropdownOpen(!isDropdownOpen)}
              >
                <span>ABOUT THIS REPORT</span>
                {isDropdownOpen ? (
                  <MdKeyboardArrowUp className="ml-2 text-xl" />
                ) : (
                  <MdKeyboardArrowDown className="ml-2 text-xl" />
                )}
              </div>
              {isDropdownOpen && (
                <div className="space-y-2 flex flex-col ml-5 mt-2 gap-2">
                  <a href="#snap" className="block text-gray-600">
                    Market Snapshot
                  </a>
                  <a href="#overview" className="block text-gray-600">
                    Market Overview
                  </a>
                  <a href="#keymar" className="block text-gray-600">
                    Key Market Trends
                  </a>
                  <a href="#compt" className="block text-gray-600">
                    Competitive Landscape
                  </a>
                  <a href="#players" className="block text-gray-600">
                    Major Players
                  </a>
                  <a href="#recent" className="block text-gray-600">
                    Recent Developments
                  </a>
                </div>
              )}
              <div className="flex gap-5 flex-col">
                <a href="#toc" className=" text-gray-900">
                  TABLE OF CONTENTS
                </a>
                <a href="#scope" className="block  text-gray-900">
                  SCOPE OF THE REPORT
                </a>
                <a href="#faq" className="block text-gray-900">
                  FREQUENTLY ASKED QUESTIONS
                </a>
              </div>
              <button className="mt-6 w-full bg-red-600 text-white p-3 rounded">
                <i className="fas fa-download"></i> Download PDF
              </button>
            </nav>
          </div>
        </div>
        <div className="right w-3/4 m-2">
          <div className="w-full bg-white shadow-lg p-4">
            <MarketSnapshot />
            <MarketOverview />
            <KeyMarket />
            <ComptetiveLandscape />
            <MajorPlayers />
            <RecentDevelopments />
            <Toc />
            <ScopeReport />
            <Faq />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pdfren2;
