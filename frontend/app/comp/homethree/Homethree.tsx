import Link from "next/link";

export default function Homethree() {
  return (
    <>
      <div className="w-full  md:p-10 flex lg:justify-center bg-[url('/images/back2.jpg')] ">
        <div className="main w-[100%] lg:w-[85%] flex flex-col lg:flex-row  gap-6 lg:gap-20">
          <div className="left lg:w-1/2 p-5 ">
            <p className=" mb-8 lg:mb-16 text-2xl lg:text-3xl font-bold lg:leading-[50px]">
              The global market is defined by its complexity and fluidity.
              That&apos;s where we come in.Marqstats offers a range of solutions
              to support your goal.
            </p>
            <Link href="/services">
            <button className="btn-blue text-sm pr-10 md:pr-6 pl-6 font-semibold flex items-center border-[1px] rounded border-blue-500 p-3 hover:bg-blue-500 text-blue-500 hover:text-white">
              VIEW ALL SERVICES
              <svg
                className="ml-2 w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
            </Link>
          </div>
          <div className="right lg:w-1/2 flex flex-col lg:gap-2 ">
            <div className="strap  flex justify-between items-center p-5 ease-in duration-400 hover:border-b border-blue-500">
              <span className="text-[2rem] md:text-3xl">
                Industry Expertise
              </span>
              <svg
                className="ml-2 w-7 h-7"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </div>
            <div className="strap  flex justify-between items-center p-5 ease-in duration-400 hover:border-b border-blue-500">
              <span className="text-3xl">Market Assessment</span>
              <svg
                className="ml-2 w-7 h-7"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </div>
            <div className="strap  flex justify-between items-center p-5 ease-in duration-400 hover:border-b border-blue-500">
              <span className="text-3xl">Data Resource</span>
              <svg
                className="ml-2 w-7 h-7"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </div>
            <div className="strap  flex justify-between items-center p-5 ease-in duration-400 hover:border-b border-blue-500">
              <span className="text-3xl">Business Consulting</span>
              <svg
                className="ml-2 w-7 h-7"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
