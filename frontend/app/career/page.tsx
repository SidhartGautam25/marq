import { Footer, NavBar } from "../comp";
import Link from "next/link";
import Career from "../comp/career-card/Career";
import { Fragment } from "react";
export default function career() {
  interface obj {
    arr: string[];
    heading: string;
  }
  const data: obj[] = [
    {
      arr: [
        "Assess and analyze the status of potential candidates within the industry.",
        "Conduct thorough research on various sales opportunities and conduct analysis.",
        "Ensure regular updates of all sales-related information.",
        "Timely management and maintenance of client data.",
        "Engage in global outreach to prospective clients.",
        "Drive business development by generating leads through email campaigns, LinkedIn, and Facebook.",
        "Utilize diverse tools for data mining and database creation.",
      ],
      heading: "Senior Client Partner",
    },
    {
      arr: [
        "Conduct statistical analysis of data to identify significant trends and deliver project results aligned with research objectives.",
        "Interpret data to provide clients with clear guidance and recommendations. ",
        "Perform data cleaning, weighting, assessments, and primary analysis, as well as conduct SWOT analysis, PESTLE analysis, Porter Five Forces analysis, market sizing, and other related tasks.",
        "Engage in secondary research by reviewing reports, news articles, company annual reports, and paid databases to gather relevant information. ",
        "    Compile reports by evaluating economic trends, spending patterns, demographics, and industry-specific market trends.",
      ],
      heading: "Senior Analyst",
    },
    {
      arr: [
        "Thoroughly review research papers created by research professionals to ensure accuracy and comprehensiveness. ",
        "Rectify grammar, consistency, punctuation, spelling, format, layout, and style errors, while identifying any questionable content. ",
        "Verify the accuracy and syntax of links in publications and web content. Monitor project progress and establish priorities accordingly.",
        "Collaborate closely with Research Analysts, Research Managers, and Editors to ensure adherence to editorial quality standards.",
        "Consistently meet deadlines while contributing to the achievement of team goals and objectives.",
      ],
      heading: "Editorial Content Manager",
    },
  ];
  return (
    <>
      <div className="nav bg-gray-800">
        <NavBar />
      </div>
      <div className="">
        <div className="hover:bg-gradient-to-b hover:from-[rgb(10,9,9)] hover:to-black flex flex-col items-center gap-10 text-white p-5 md:p-0 bg-gradient-to-b from-[rgb(52,50,49)] to-black">
          <h1 className="md:text-6xl font-bold mt-8 text-5xl">
            Career with Marqstats
          </h1>
          <p className="md:text-2xl font-bold text-xl">
            work and grow with a smart team for the future
          </p>
          <div className="mb-10 flex gap-10">
            <Link href="/about">
              <button className="bg-white p-4 rounded-[5rem] text-gray-700 font-semibold hover:scale-105 ease-in duration-200 hover:font-bold">
                About Us
              </button>
            </Link>
            <Link href="/contact">
              <button className="bg-white p-4 rounded-[5rem] text-gray-700 font-semibold hover:scale-105 ease-in duration-200 hover:font-bold">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
          <span className="md:text-4xl font-bold md:mt-28 text-3xl mt-20 text-center">
            Job Positions Are Available To Apply:
          </span>
        </div>
        <div className=" w-full flex justify-center">
          {/* <hr className="bg-black"/> */}
          <div className="w-[90%] md:w-[73%] mt-10">
            {data.map((items, index) => {
              return (
              <Fragment key={index}>
                 <Career obj={items} key={index} />
              </Fragment>
            );
            })}
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}
