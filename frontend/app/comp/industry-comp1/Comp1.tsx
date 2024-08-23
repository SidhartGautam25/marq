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
              Accelerate with Our Expertise{" "}
              </div>
            </div>
            <div className="md:text-6xl text-3xl font-bold text-white flex flex-col gap-3 md:gap-6">
              <div>Driving the Future:</div>
              <div>Automotive Industry Insights and Analysis</div>
              {/* <div>The Automotive Industry</div> */}
            </div>
            <div className="text-gray-100">
            Stay ahead of the curve by uncovering emerging trends, navigating industry challenges, and making informed decisions. Our cutting-edge research and analysis equip you with the knowledge to drive your business towards a brighter future in the ever-evolving world of mobility.
            </div>
            {/* <button className="ease-in duration-200 hover:bg-gray-700 p-4 w-[10rem] rounded-[6rem] bg-blue-500 border border-white text-white">
              Book Now
            </button> */}
          </div>
        </div>
        <div className="flex justify-center items-center w-full md:h-[23rem]">
          <div className="md:w-[70%] w-[90%] flex flex-col justify-center items-center md:bottom-14 gap-8 md:p-16 shadow-2xl md:absolute bg-white mt-10">
            <div className="text-3xl font-semibold text-gray-600 text-center mt-10">
            Unlocking the Full Potential of the Automotive Industry
            </div>
            <div className="w-[65%] text-center text-gray-600 pb-10 md:pb-0">
            As digitization, connectivity, automation, and innovative business models transform the automotive industry, navigating this dynamic landscape requires expert guidance. Our comprehensive research provides actionable insights for short-term operational excellence, mid-term tactical planning, and long-term strategic success. Empower your business to seize opportunities and mitigate risks with our in-depth analysis.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
