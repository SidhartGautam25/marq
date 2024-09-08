import Image from "next/image";
import about from "@/public/about.png";
import { NavBar, Footer } from "../comp";
import Blogs from "../comp/blogs/Blogs";

export default function About() {
  return (
    <div>
        <div className="bg-[#1B1F29]">
        <NavBar />
        </div>
      <div className="flex flex-col relative  ">
        <div className="h-32 bg-[#1B1F29] md:h-52  flex items-center">
          <h1 className="p-10 font-semibold  text-2xl md:text-7xl md:font-bold mb-4 text-white md:px-36">
            About Us
          </h1>
        </div>
        <div className="p-5 flex flex-col-reverse md:flex-row md:py-20 md:w-1/2 md:pr-10 md:p-10 ">
          <p className="flex items-center justify-center  md:px-24 md:text-4xl text-2xl font-semibold leading-tight mt-6">
          With a team of global experts, we provide intelligence that spans industries, sectors, and markets, offering detailed insights into how businesses operate worldwide.
          </p>
          <div className="">
            <Image
              src={about} // Replace with the path to your image
              alt="Office"
              className="  md:absolute md:inset-y-0 md:right-0  md:pt-20 md:pr-36"
            />
          </div>
        </div>
        <div className=" px-5 md:px-36 md:mt-20">
          <p className=" text-lg md:text-center md:pt-20 text-[#434856] ">
          Since our founding, every member of the Marqstats team has been dedicated to becoming a true partner to our clients. We are committed to working closely with each client on a long-term basis, ensuring we consistently deliver enhanced value. Maximizing this value and driving our client&apos;s success are at the heart of our philosophy, supporting our continual growth and leadership on a global scale.
          </p>
          <div className="font-semibold mt-4 flex gap-2 justify-center">
            <button className="px-2 my-2 border-r-2 border-black">
              EVALUATE
            </button>
            <button className="px-2 my-2 border-r-2 border-black">
              ENHANCE
            </button>
            <button className="px-2 my-2">EVOLVE</button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
