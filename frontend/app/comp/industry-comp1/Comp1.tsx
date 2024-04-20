import Image from "next/image";
export default function Comp1() {
  return (
    <>
      <div className="md:relative">
        <div className="w-full md:h-[100vh] flex flex-col gap-14 bg-[url('/assets/industry-nav.jpg')]  justify-center">
          <div className="flex flex-col gap-7 md:gap-10 md:ml-32 md:w-[50rem] p-5 mb-10">
            <div className="flex gap-6">
              <div className="bg-white md:w-[3rem] w-[2rem] h-[1px] mt-3"></div>
              <div className="font-semibold text-gray-100">
                Accelerate with Our Auto Expertise{" "}
              </div>
            </div>
            <div className="md:text-6xl text-3xl font-bold text-white flex flex-col gap-3 md:gap-6">
              <div>Driving the Future:</div>
              <div>Insights And Analysis In</div>
              <div>The Automotive Industry</div>
            </div>
            <div className="text-gray-100">
              Uncover emerging trends, navigate industry challenges, and make
              informed decisions as we explore the latest developments shaping
              the future of mobility. Get ready to accelerate your knowledge and
              drive your business towards a brighter future with our
              industry-leading research and analysis.
            </div>
            <button className="ease-in duration-200 hover:bg-gray-700 p-4 w-[10rem] rounded-[6rem] bg-blue-500 border border-white text-white">
              Book Now
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center w-full md:h-[23rem]">
          <div className="md:w-[70%] w-[90%] flex flex-col justify-center items-center md:bottom-14 gap-8 md:p-16 shadow-2xl md:absolute bg-white mt-10">
            <div className="text-3xl font-semibold text-gray-600 text-center mt-10">
              Unleashing Auto Industrys Potential
            </div>
            <div className="w-[65%] text-center text-gray-600 pb-10 md:pb-0">
              Digitization, Connectivity, increasing automation, and new
              business models have revolutionized other industries, and
              automotive industry is no exception. Navigating the fast-moving
              automotive sector can be complex, but our in-depth research will
              provide insights for short-term operational monitoring, mid-term
              tactical planning and long-term strategic initiatives that can
              unlock significant opportunities and mitigate risks.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
