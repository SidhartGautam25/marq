import Image from "next/image";
import cheak from "@/public/assets/check-mark-svgrepo-com.svg";
import file from "@/public/assets/file.svg";
import lock from "@/public/assets/lock.svg";

export default function Homesix() {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="text-2xl font-medium text-center w-[96vw] md:w-auto md:text-4xl text md:font-medium mt-8">
          Exceeding expectations | Delivering excellence
        </div>
        <div className="mt-10 text-gray-700 md:text-xl pl-5 pr-5 text-center w-[96vw] md:w-auto ">
          Client satisfaction is at the core of our mission, and we strive to
          exceed expectations with unwavering dedication.
        </div>
        <div className="cards flex w-[96vw] md:w-auto flex-col md:flex-row justify-center mt-10">
          <div className="card ml-1 mr-1 m-4 text-gray-500 flex flex-col items-center border-2 border-gray-300 hover:bg-blue-700 hover:text-white drop-shadow-lg  p-10 bg-white ease-in duration-300">
            <Image
              src={cheak}
              alt="cheak"
              className="md:w-10 md:h-10 w-8 h-9 text-blue-600"
            />
            <span className="text-xl text-black font-600 mt-5">Quality</span>
            <p className="w-[20rem] mt-5 text-xl leading-8">
              Our unwavering commitment lies in delivering information with
              unparalleled accuracy. Through meticulous quality checking
              processes, we empower you with the insights necessary for
              data-driven decision making at the highest level, enabling your
              success.
            </p>
          </div>
          <div className="card ml-1 mr-1 m-4 text-gray-500 flex flex-col items-center border-2 border-gray-300 hover:bg-blue-700 hover:text-white drop-shadow-lg  p-10 bg-white ease-in duration-300">
            <Image
              src={file}
              alt="cheak"
              className="md:w-10 md:h-10 w-8 h-9 text-blue-600"
            />
            <span className="text-xl text-black font-600 mt-5">
              Transparency
            </span>
            <p className="w-[20rem] mt-5 text-xl leading-8">
              Unlike majority of the industry that hide their sources behind
              proprietary models, we proudly disclose the origins of our
              information. This transparency builds trust and confidence,
              ensuring that you can rely on the accuracy and reliability of our
              data.
            </p>
          </div>
          <div className="card ml-1 mr-1 m-4 text-gray-500 flex flex-col items-center border-2 border-gray-300 hover:bg-blue-700 hover:text-white drop-shadow-lg  p-10 bg-white ease-in duration-200">
            <Image
              src={lock}
              alt="cheak"
              className="md:w-10 md:h-10 w-8 h-9 text-blue-600"
            />
            <span className="text-xl text-black font-600 mt-5">Security</span>
            <p className="w-[20rem] mt-5 text-xl leading-8">
              We give utmost priority to the protection of your information and
              to keep it confidential at every level. At Marqstats, our
              commitment to data security is unwavering, and we diligently
              adhere to international and domestic laws governing data
              protection and privacy.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
