"use client";
import { useState, useContext, useEffect, ReactNode } from "react";
import Link from "next/link";
import { IoMdMail } from "react-icons/io";
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
import ReportContect from "../../report-contact/ReportContect";
import { useInView } from "react-intersection-observer";
import OrderComponent from "../../report-order/OrderComponent";
// import Faq from "../../faq-card/Faq";

const NoSSR: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return <>{children}</>;
};

function Pdfren2() {
  const [currentTab, setCurrentTab] = useState<string>("snap"); // Initialize to "snap"
  const [isDropdownOpen, setDropdownOpen] = useState(true);

  const { state } = useContext(ReportContext) as ReportContextType;

  // Intersection observers for each section
  const { ref: snapRef, inView: snapInView } = useInView({ threshold: 0.1 });
  const { ref: overviewRef, inView: overviewInView } = useInView({
    threshold: 0.1,
  });
  const { ref: keymarRef, inView: keymarInView } = useInView({
    threshold: 0.1,
  });
  const { ref: comptRef, inView: comptInView } = useInView({ threshold: 0.1 });
  const { ref: playersRef, inView: playersInView } = useInView({
    threshold: 0.1,
  });
  const { ref: recentRef, inView: recentInView } = useInView({
    threshold: 0.1,
  });
  const { ref: tocRef, inView: tocInView } = useInView({ threshold: 0.1 });
  const { ref: scopeRef, inView: scopeInView } = useInView({ threshold: 0.1 });
  const { ref: faqRef, inView: faqInView } = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (snapInView) setCurrentTab("snap");
    else if (overviewInView) setCurrentTab("overview");
    else if (keymarInView) setCurrentTab("keymar");
    else if (comptInView) setCurrentTab("compt");
    else if (playersInView) setCurrentTab("players");
    else if (recentInView) setCurrentTab("recent");
    else if (tocInView) setCurrentTab("toc");
    else if (scopeInView) setCurrentTab("scope");
    else if (faqInView) setCurrentTab("faq");
  }, [
    snapInView,
    overviewInView,
    keymarInView,
    comptInView,
    playersInView,
    recentInView,
    tocInView,
    scopeInView,
    faqInView,
  ]);

  return (
    <NoSSR>
      <div className="w-full">
        <div className="md:mt-7 md:mb-5">
          <PdfDescription rep={state} />
        </div>
        <div className="flex">
          <div className="left w-[20%]">
            <div className="bg-white shadow-lg p-4 sticky top-0">
              <nav className="space-y-1">
                <div
                  className="text-gray-900 cursor-pointer flex items-center p-2 hover:bg-gray-200"
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
                  <div className="flex flex-col ml-5">
                    <a
                      href="#snap"
                      className={`block text-gray-600 p-2 ${
                        currentTab === "snap"
                          ? "bg-gray-300"
                          : "hover:bg-gray-200"
                      }`}
                      onClick={() => setCurrentTab("snap")}
                    >
                      Market Snapshot
                    </a>
                    <a
                      href="#overview"
                      className={`block text-gray-600 p-2 ${
                        currentTab === "overview"
                          ? "bg-gray-300"
                          : "hover:bg-gray-200"
                      }`}
                      onClick={() => setCurrentTab("overview")}
                    >
                      Market Overview
                    </a>
                    <a
                      href="#keymar"
                      className={`block text-gray-600 p-2 ${
                        currentTab === "keymar"
                          ? "bg-gray-300"
                          : "hover:bg-gray-200"
                      }`}
                      onClick={() => setCurrentTab("keymar")}
                    >
                      Key Market Trends
                    </a>
                    <a
                      href="#compt"
                      className={`block text-gray-600 p-2 ${
                        currentTab === "compt"
                          ? "bg-gray-300"
                          : "hover:bg-gray-200"
                      }`}
                      onClick={() => setCurrentTab("compt")}
                    >
                      Competitive Landscape
                    </a>
                    <a
                      href="#players"
                      className={`block text-gray-600 p-2 ${
                        currentTab === "players"
                          ? "bg-gray-300"
                          : "hover:bg-gray-200"
                      }`}
                      onClick={() => setCurrentTab("players")}
                    >
                      Major Players
                    </a>
                    <a
                      href="#recent"
                      className={`block text-gray-600 p-2 ${
                        currentTab === "recent"
                          ? "bg-gray-300"
                          : "hover:bg-gray-200"
                      }`}
                      onClick={() => setCurrentTab("recent")}
                    >
                      Recent Developments
                    </a>
                  </div>
                )}
                <div className="flex flex-col">
                  <a
                    href="#toc"
                    className={`text-gray-900 p-2  ${
                      currentTab === "toc" ? "bg-gray-300" : "hover:bg-gray-200"
                    }`}
                    onClick={() => setCurrentTab("toc")}
                  >
                    TABLE OF CONTENTS
                  </a>
                  <a
                    href="#scope"
                    className={`block text-gray-900 p-2  ${
                      currentTab === "scope"
                        ? "bg-gray-300"
                        : "hover:bg-gray-200"
                    }`}
                    onClick={() => setCurrentTab("scope")}
                  >
                    SCOPE OF THE REPORT
                  </a>
                  <a
                    href="#faq"
                    className={`block text-gray-900 p-2 ${
                      currentTab === "faq" ? "bg-gray-300" : "hover:bg-gray-200"
                    }`}
                    onClick={() => setCurrentTab("faq")}
                  >
                    FREQUENTLY ASKED QUESTIONS
                  </a>
                </div>
                <Link href="/request-sample">
                  <button className="mt-6 w-full bg-red-600 text-white p-3 rounded">
                    Request Sample
                  </button>
                </Link>
              </nav>
            </div>
          </div>
          <div className="right w-[60%]">
            <div className="bg-white shadow-lg p-6 pt-0">
              <section ref={snapRef}>
                <MarketSnapshot />
              </section>
              <section ref={overviewRef}>
                <MarketOverview />
              </section>
              <section ref={keymarRef}>
                <KeyMarket />
              </section>
              <section ref={comptRef}>
                <ComptetiveLandscape />
              </section>
              <section ref={playersRef}>
                <MajorPlayers />
              </section>
              <section ref={recentRef}>
                <RecentDevelopments />
              </section>
              <section ref={tocRef}>
                <Toc />
              </section>
              <section ref={scopeRef}>
                <ScopeReport />
              </section>
              <section ref={faqRef}>
                <Faq />
              </section>
            </div>
          </div>
          <div className="w-[20%]">
            <OrderComponent />
            <ReportContect />
            <div className="bg-black text-white p-6 md:p-8 flex flex-col gap-12 items-center w-[100%] mt-10 sticky top-0">
              <div className="flex flex-col gap-5 ">
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
        </div>
      </div>
    </NoSSR>
  );
}

export default Pdfren2;
