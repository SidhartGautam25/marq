export default function Homethree() {
  return (
    <>
      <div className="w-full my-10 p-10 flex justify-center items-center">
        <div className="main w-[85%] flex gap-20">
          <div className="left w-1/2 p-5">
            <p className=" mb-16 text-3xl font-bold leading-[50px]">
              The global market is defined by its complexity and fluidity.
              That&apos;s where we come in.Marqstats offers a range of solutions to
              support your goal.
            </p>
            <button className="btn-blue text-lg flex items-center border-2 border-blue-500 p-3 hover:bg-blue-500 text-blue-500 hover:text-white">
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
          </div>
          <div className="right w-1/2 flex flex-col gap-2">
            <div className="strap  flex justify-between items-center p-5 ease-in duration-400 hover:border-b border-blue-500">
                <span className="text-3xl">Industry Expertise</span>
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
