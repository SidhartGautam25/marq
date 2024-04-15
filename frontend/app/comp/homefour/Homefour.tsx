import Image from "next/image";
import img1 from "../../../public/assets/img1.jpg";
import ins1 from "@/public/images/insight1.png";
import ins2 from "@/public/images/insight2.png";
import ins3 from "@/public/images/insight3.png";
import calender from "@/public/assets/calendar.png";
export default function Homefour() {
  return (
    <>
      <div className=" flex flex-col items-center ">
        <h1 className="text-4xl text font-medium mt-4">
          Explore Our Latest Insights
        </h1>
        <div className="cards flex justify-center mt-10">
          <div className="card m-4 flex flex-col items-center border-2 border-gray-100 hover:scale-105 ease-in duration-300 drop-shadow-lg rounded-2xl">
            <Image
              src={ins1}
              className="w-[25rem] h-[27rem]"
              alt="Picture of the author"
            />
            <p className="w-[20rem] mt-10 text-xl">
              Navigating the Future: The Rise of Electric Two-Wheelers in
              Indonesia
            </p>
            <div className="date flex m-8">
              <Image
                src={calender}
                alt="calender"
                className="w-[20px] h-[20px] mr-4 "
              />
              <span className="font-medium text-blue-600">6 april 2023</span>
            </div>
          </div>
          <div className="card m-4 flex flex-col items-center border-2 border-gray-100 hover:scale-105 ease-in duration-300 drop-shadow-lg rounded-2xl">
            <Image src={ins2} className="w-[25rem] h-[27rem]" alt="" />
            <p className="w-[20rem] mt-10 text-xl">
              Swappable Electric Vehicle Battery Market
            </p>
            <div className="date flex m-8">
              <Image
                src={calender}
                alt="calender"
                className="w-[20px] h-[20px] mr-4"
              />
              <span className="font-medium text-blue-600">6 april 2023</span>
            </div>
          </div>
          <div className="card m-4 flex flex-col items-center border-2 border-gray-100 hover:scale-105 ease-in duration-300 drop-shadow-lg rounded-2xl">
            <Image src={ins3} className=" w-[25rem] h-[27rem]" alt="" />
            <p className="w-[20rem] mt-10 text-xl">
              How Generative AI Could Revolutionize the Auto Industry
            </p>
            <div className="date flex m-8">
              <Image
                src={calender}
                alt="calender"
                className="w-[20px] h-[20px] mr-4"
              />
              <span className="font-medium text-blue-600">6 april 2023</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
