import Image from "next/image";
export default function Comp1() {
  return (
    <>
      <div className="relative">
        <div className="w-full h-[100vh] flex flex-col gap-14 bg-[url('/assets/industry-nav.jpg')] justify-center">
          <div className="flex flex-col gap-10 ml-32 w-[50rem]">
            <div className="flex gap-6">
              <div className="bg-white w-[3rem] h-[1px] mt-3"></div>
              <div className="font-semibold text-gray-100">
                Accelerate with Our Auto Expertise{" "}
              </div>
            </div>
            <div className="md:text-6xl text-3xl font-bold text-white flex flex-col gap-6">
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
        <div className="flex justify-center items-center w-full h-[20rem] ">
          <div className="w-[70%] flex flex-col justify-center items-center bottom-14 gap-8 p-16 shadow-2xl absolute bg-white">
            <div className="text-3xl font-semibold text-gray-600">
              Unleashing Auto Industrys Potential
            </div>
            <div className="w-[65%] text-center text-gray-600">
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
