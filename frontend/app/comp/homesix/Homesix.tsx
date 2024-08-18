import Image from "next/image";
import cheak from "@/public/assets/check-mark-svgrepo-com.svg";
import file from "@/public/assets/file.svg";
import lock from "@/public/assets/lock.svg";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaRegFile } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
export default function Homesix() {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="text-2xl font-medium text-center w-[96vw] md:w-auto md:text-4xl text md:font-medium mt-8">
        Transforming Visions | Realizing Excellence
        </div>
        <div className="mt-10 text-gray-700 md:text-xl pl-5 pr-5 text-center w-[96vw] md:w-auto ">
        Our mission is client satisfaction; we strive to surpass expectations with steadfast dedication.
        </div>
        <div className="cards flex w-[96vw] md:w-auto flex-col md:flex-row justify-center mt-10">
          <div className="card ml-1 mr-1 m-4 text-gray-500 flex flex-col items-center border-2 border-gray-300 hover:bg-blue-500 hover:text-white drop-shadow-lg  p-10 bg-white ease-in duration-300">
            <div className="flex flex-col items-center">
            <FaRegCircleCheck className="md:w-10 md:h-10 w-8 h-9"/>
            
            <span className="text-xl font-bold mt-5">Quality</span>
            </div>
            <p className="w-[20rem] mt-5 text-xl leading-8 text-center">
            Our unwavering commitment is to deliver information with unmatched accuracy. Through meticulous quality checks, we provide insights essential for high-level data-driven decision making, empowering your success.
            </p>
          </div>
          <div className="card ml-1 mr-1 m-4 text-gray-500 flex flex-col items-center border-2 border-gray-300 hover:bg-blue-500 hover:text-white drop-shadow-lg  p-10 bg-white ease-in duration-300">
            <div className="flex flex-col items-center">
            <FaRegFile className="md:w-10 md:h-10 w-8 h-9"/>

            <span className="text-xl  font-bold mt-5">
              Transparency
            </span>
            </div>
            <p className="w-[20rem] mt-5 text-xl leading-8  text-center">
            Unlike many in the industry who conceal their sources behind proprietary models, we openly disclose the origins of our information. This transparency builds trust and confidence, ensuring the reliability and accuracy of our data.
            </p>
          </div>
          <div className="card ml-1 mr-1 m-4 text-gray-500 flex flex-col items-center border-2 border-gray-300 hover:bg-blue-500 hover:text-white drop-shadow-lg  p-10 bg-white ease-in duration-200">
            <div className="flex flex-col items-center">
              <MdLockOutline className="md:w-10 md:h-10 w-8 h-9 font-bold"/>
              <span className="text-xl font-bold mt-5">Security</span>
            </div>
            <p className="w-[20rem] mt-5 text-xl leading-8  text-center">
            We prioritize the protection and confidentiality of your information at every level. At Marqstats, our commitment to data security is unwavering, strictly adhering to international and domestic data protection and privacy laws.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
