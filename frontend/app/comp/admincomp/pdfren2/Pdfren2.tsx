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
import Relatedreport from "../relatedreport/Relatedreport";
import { my_url } from "@/app/utility/varr";
import axios from "axios";
import {
  CurrRelatedContext,
  CurrRelatedContextType,
} from "@/app/context/currRelated";
import MyShare from "../../share-button/share";
// import { Share } from "next/font/google";
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
  const { state3, dispatch3 } = useContext(
    CurrRelatedContext
  ) as CurrRelatedContextType;
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isModalOpen2, setIsModalOpen2] = useState<boolean>(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const toggleModal2 = () => {
    setIsModalOpen2(!isModalOpen2);
  };

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
  const { ref: relatedRef, inView: relatedInView } = useInView({
    threshold: 0.1,
  });

  const [ReqName, setReqName] = useState("");
  const [ReqEmail, setReqEmail] = useState("");
  const [ReqPhone, setReqPhone] = useState("");
  const [ReqCompany, setReqCompany] = useState("");
  const [ReqRequirement, setReqRequirement] = useState("");

  const handleRequestForm = async (e: any) => {
    e.preventDefault();
    console.log("on req form fucntion");
    console.log("state for handle Request form is ", state);
    try {
      let url = `${my_url}/api/mail/sendMail`;
      // try {
      console.log("requesting the server to send mail using this url ", url);
      console.log("url is ", url);
      const data = {
        text: `
    <p><strong>Name:</strong> ${ReqName}</p>
    <p><strong>Email:</strong> ${ReqEmail}</p>
    <p><strong>Phone:</strong> ${ReqPhone}</p>
    <p><strong>Requirement:</strong> ${ReqRequirement}</p>
    <p><strong>Company:</strong> ${ReqCompany}</p>
    <p><strong>Requested Report ID:</strong> ${state.id}</p>
    <p><strong>Requested Report Title:</strong> ${state.title}</p>
  `,
      };
      const daata = await axios.post(url, data);
      if (daata.data) {
        setReqName("");
        setReqCompany("");
        setReqPhone("");
        setReqRequirement("");
        setIsModalOpen(false);
      }
    } catch (err) {}
  };

  useEffect(() => {
    const myfun = async () => {
      let related = state?.related ?? ["", "", ""];
      console.log("related eeeeports are ", related);
      // const [rel, setRel] = useState<Record<string, any>[]>([]);

      let url = `${my_url}/api/getall/reports/related`;
      // try {
      console.log("requesting related report for this in card section ", url);
      console.log("url is ", url);
      const daata = await axios.get(url, {
        params: {
          f: related[0] ?? "",
          s: related[1] ?? "",
          t: related[2] ?? "",
        },
      });

      console.log("daata on related report section is ", daata);
      if (daata) {
        // setLoading(false);
        // console.log("daaaaaattatatata is ", daata.data);
        // setRel([...daata.data]);
        // setLen(daata.data.len);

        dispatch3({
          type: "SET_CURR_REL",
          payload: daata.data,
        });
      }
    };

    myfun();

    return () => {
      // Code inside this cleanup function will run before the component is unmounted or re-rendered
      // You can perform cleanup tasks here, such as unsubscribing from subscriptions or clearing timers
    };
  }, []);

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
    else if (relatedInView) setCurrentTab("relatedreport");
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
    relatedInView,
  ]);

  return (
    <NoSSR>
      <div className="w-full">
        <div className="md:mt-7 md:mb-5">
          <PdfDescription rep={state} />
        </div>
        <div className="flex">
          <div className="left w-[20%] md:block hidden">
            <div className="bg-white shadow-lg p-4 sticky top-0">
              <nav className="space-y-1">
                <div
                  className="text-gray-900 cursor-pointer flex items-center p-2 hover:bg-gray-200"
                  onClick={() => setDropdownOpen(!isDropdownOpen)}
                >
                  <span className="uppercase">Report Details</span>
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
                          ? "bg-gray-700/10"
                          : "hover:bg-gray-700/10"
                      }`}
                      onClick={() => setCurrentTab("snap")}
                    >
                      Statistics {"&"} Highlights
                    </a>
                    <a
                      href="#overview"
                      className={`block text-gray-600 p-2 ${
                        currentTab === "overview"
                          ? "bg-gray-700/10"
                          : "hover:bg-gray-700/10"
                      }`}
                      onClick={() => setCurrentTab("overview")}
                    >
                      Key Takeaways
                    </a>
                    <a
                      href="#keymar"
                      className={`block text-gray-600 p-2 ${
                        currentTab === "keymar"
                          ? "bg-gray-700/10"
                          : "hover:bg-gray-700/10"
                      }`}
                      onClick={() => setCurrentTab("keymar")}
                    >
                      Market Insights
                    </a>
                    <a
                      href="#compt"
                      className={`block text-gray-600 p-2 ${
                        currentTab === "compt"
                          ? "bg-gray-700/10"
                          : "hover:bg-gray-700/10"
                      }`}
                      onClick={() => setCurrentTab("compt")}
                    >
                      Competitive Landscape
                    </a>
                    <a
                      href="#players"
                      className={`block text-gray-600 p-2 ${
                        currentTab === "players"
                          ? "bg-gray-700/10"
                          : "hover:bg-gray-700/10"
                      }`}
                      onClick={() => setCurrentTab("players")}
                    >
                      Major Players
                    </a>
                    <a
                      href="#recent"
                      className={`block text-gray-600 p-2 ${
                        currentTab === "recent"
                          ? "bg-gray-700/10"
                          : "hover:bg-gray-700/10"
                      }`}
                      onClick={() => setCurrentTab("recent")}
                    >
                      Latest Developments
                    </a>
                  </div>
                )}
                <div className="flex flex-col">
                  <a
                    href="#toc"
                    className={`text-gray-900 p-2  ${
                      currentTab === "toc"
                        ? "bg-gray-700/10"
                        : "hover:bg-gray-700/10"
                    }`}
                    onClick={() => setCurrentTab("toc")}
                  >
                    TABLE OF CONTENTS
                  </a>
                  <a
                    href="#scope"
                    className={`block text-gray-900 p-2 uppercase  ${
                      currentTab === "scope"
                        ? "bg-gray-700/10"
                        : "hover:bg-gray-700/10"
                    }`}
                    onClick={() => setCurrentTab("scope")}
                  >
                    Study Scope {"&"} Focus
                  </a>
                  <a
                    href="#faq"
                    className={`block text-gray-900 p-2 uppercase ${
                      currentTab === "faq"
                        ? "bg-gray-700/10"
                        : "hover:bg-gray-700/10"
                    }`}
                    onClick={() => setCurrentTab("faq")}
                  >
                    Frequently Asked Questions
                  </a>
                  <a
                    href="#relatedreport"
                    className={`block text-gray-900 p-2 ${
                      currentTab === "relatedreport"
                        ? "bg-gray-700/10"
                        : "hover:bg-gray-700/10"
                    }`}
                    onClick={() => setCurrentTab("relatedreport")}
                  >
                    RELATED REPORT
                  </a>
                </div>
                <div>
                  <button
                    className="mt-6 w-full bg-red-600 text-white p-3 rounded"
                    onClick={toggleModal}
                  >
                    Request Sample
                  </button>
                  {isModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                      <div className="relative p-5 border bg-gray-50 rounded-md w-[90%] md:w-[50%]">
                        <button
                          onClick={toggleModal}
                          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
                        >
                          &times;
                        </button>
                        <h1 className="text-center text-2xl">
                          Request Sample Form
                        </h1>
                        <form action="" className="flex flex-col gap-5">
                          <div className="flex flex-col">
                            <label htmlFor="name">
                              Name<span className="text-red-600">*</span>
                            </label>
                            <input
                              type="text"
                              // placeholder="Enter Name "
                              className="focus:outline-none p-3 border rounded-md"
                              id="name"
                              value={ReqName}
                              onChange={(e) => setReqName(e.target.value)}
                            />
                          </div>
                          <div className="flex flex-col">
                            <label htmlFor="email">
                              Emails<span className="text-red-600">*</span>
                            </label>
                            <input
                              type="email"
                              // placeholder="Enter email "
                              className="focus:outline-none p-3 border rounded-md"
                              id="email"
                              value={ReqEmail}
                              onChange={(e) => setReqEmail(e.target.value)}
                            />
                          </div>
                          <div className="flex flex-col">
                            <label htmlFor="contact">
                              Contact Number
                              {/* <span className="text-red-600">*</span> */}
                            </label>
                            <input
                              type="number"
                              placeholder="(Country code)-Phone-Number"
                              className="focus:outline-none p-3 border rounded-md"
                              id="contact"
                              value={ReqPhone}
                              onChange={(e) => setReqPhone(e.target.value)}
                            />
                          </div>
                          <div className="flex flex-col">
                            <label htmlFor="contact">
                              Company Names
                              {/* <span className="text-red-600">*</span> */}
                            </label>
                            <input
                              // type="number"
                              // placeholder="(Country code)-Company Name"
                              className="focus:outline-none p-3 border rounded-md"
                              id="contact"
                              value={ReqCompany}
                              onChange={(e) => setReqCompany(e.target.value)}
                            />
                          </div>
                          <div className="flex flex-col">
                            <label htmlFor="requirements">
                              Do you have any specific requirements?
                              {/* <span className="text-red-600">*</span> */}
                            </label>
                            <textarea
                              placeholder=""
                              className="focus:outline-none p-3 border rounded-md min-h-[12rem]"
                              id="requirements"
                              value={ReqRequirement}
                              onChange={(e) =>
                                setReqRequirement(e.target.value)
                              }
                            />
                          </div>
                          <button
                            onClick={handleRequestForm}
                            className="bg-slate-500 w-[5rem] p-2 rounded-md text-white hover:bg-slate-800 transition duration-300"
                          >
                            Submit
                          </button>
                        </form>
                      </div>
                    </div>
                  )}
                </div>
              </nav>
            </div>
          </div>
          <div className="right md:w-[60%] w-full">
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
              <section ref={relatedRef}>
                <Relatedreport />
              </section>
            </div>
          </div>
          <div className="w-[20%] md:block hidden">
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
              <div
                className="flex justify-center bg-white text-black p-2 md:p-3 rounded-[10px]  mt-8 w-full"
                onClick={toggleModal2}
              >
                <button className="flex gap-8 ">
                  Contact Us
                  <IoMdMail className=" text-xl" />
                </button>
                {isModalOpen2 && (
                  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="relative p-5 border bg-gray-50 rounded-md w-[90%] md:w-[50%]">
                      <button
                        onClick={toggleModal2}
                        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
                      >
                        &times;
                      </button>
                      <h1 className="text-center text-2xl">
                        Get In Touch With us
                      </h1>
                      <form action="" className="flex flex-col gap-5">
                        <div className="flex flex-col">
                          <label htmlFor="name">
                            Names<span className="text-red-600">*</span>
                          </label>
                          <input
                            type="text"
                            // placeholder="Enter Name "
                            className="focus:outline-none p-3 border rounded-md"
                            id="name"
                          />
                        </div>
                        <div className="flex flex-col">
                          <label htmlFor="email">
                            Email<span className="text-red-600">*</span>
                          </label>
                          <input
                            type="email"
                            // placeholder="Enter email "
                            className="focus:outline-none p-3 border rounded-md"
                            id="email"
                          />
                        </div>
                        <div className="flex flex-col">
                          <label htmlFor="contact">
                            Contact Number
                            {/* <span className="text-red-600">*</span> */}
                          </label>
                          <input
                            type="number"
                            placeholder="(Country code)-Phone-Number"
                            className="focus:outline-none p-3 border rounded-md"
                            id="contact"
                          />
                        </div>
                        <div className="flex flex-col">
                          <label htmlFor="contact">
                            Company Names
                            {/* <span className="text-red-600">*</span> */}
                          </label>
                          <input
                            type="number"
                            // placeholder="(Country code)-Company Name"
                            className="focus:outline-none p-3 border rounded-md"
                            id="contact"
                          />
                        </div>
                        <div className="flex flex-col">
                          <label htmlFor="requirements">
                            How can we assist you?
                            {/* <span className="text-red-600">*</span> */}
                          </label>
                          <textarea
                            placeholder=""
                            className="focus:outline-none p-3 border rounded-md min-h-[12rem]"
                            id="requirements"
                          />
                        </div>
                        <button className="bg-slate-500 w-[5rem] p-2 rounded-md text-white hover:bg-slate-800 transition duration-300">
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                )}
              </div>
              <MyShare />
            </div>
          </div>
        </div>
        <div>
          <button
            className="mt-6 w-full bg-sky-950 md:bg-red-600 text-white p-3 rounded md:hidden block bottom-0 left-0 fixed"
            onClick={toggleModal}
          >
            Request Sample
          </button>
          {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="relative p-5 border bg-gray-50 rounded-md w-[90%] md:w-[50%]">
                <button
                  onClick={toggleModal}
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
                >
                  &times;
                </button>
                <h1 className="text-center text-2xl">Request Sample Form</h1>
                <form action="" className="flex flex-col gap-5">
                  <div className="flex flex-col">
                    <label htmlFor="name">
                      Name<span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      // placeholder="Enter Name "
                      className="focus:outline-none p-3 border rounded-md"
                      id="name"
                      value={ReqName}
                      onChange={(e) => setReqName(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="email">
                      Email<span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      // placeholder="Enter email "
                      className="focus:outline-none p-3 border rounded-md"
                      id="email"
                      value={ReqEmail}
                      onChange={(e) => setReqEmail(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="contact">
                      Contact Number
                      {/* <span className="text-red-600">*</span> */}
                    </label>
                    <input
                      type="number"
                      placeholder="(Country code)-Phone-Number"
                      className="focus:outline-none p-3 border rounded-md"
                      id="contact"
                      value={ReqPhone}
                      onChange={(e) => setReqPhone(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="contact">
                      Company Name
                      {/* <span className="text-red-600">*</span> */}
                    </label>
                    <input
                      // type="number"
                      // placeholder="(Country code)-Company Name"
                      className="focus:outline-none p-3 border rounded-md"
                      id="contact"
                      value={ReqCompany}
                      onChange={(e) => setReqCompany(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="requirements">
                      Do you have any specific requirements?
                      {/* <span className="text-red-600">*</span> */}
                    </label>
                    <textarea
                      placeholder=""
                      className="focus:outline-none p-3 border rounded-md min-h-[12rem]"
                      id="requirements"
                    />
                  </div>
                  <button
                    onClick={handleRequestForm}
                    className="bg-slate-500 w-[5rem] p-2 rounded-md text-white hover:bg-slate-800 transition duration-300"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </NoSSR>
  );
}

export default Pdfren2;
