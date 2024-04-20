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
        <div className="p-10 flex flex-col md:flex-row md:py-20 md:w-1/2 md:pr-10 md:p-10 ">
          <p className="flex items-center justify-center  md:px-24 text-4xl font-semibold leading-tight">
            With a team of global experts, we generate intelligence spanning
            across industries, sectors, and markets using detailed insights of
            how businesses across the world operate.
          </p>
          <div className="">
            <Image
              src={about} // Replace with the path to your image
              alt="Office"
              className="  md:absolute md:inset-y-0 md:right-0  md:pt-20 md:pr-36"
            />
          </div>
        </div>
        <div className=" px-10 md:px-36 md:mt-20">
          <p className=" text-lg text-center pt-20 text-[#434856] ">
            Ever since the founding of the firm, every member of Marqstat
            Intelligence team has been striving to provide services that make us
            a Partner to our clients. It is our policy to work closely with each
            client with a sense of commitment on a long-term basis, all the
            while ensuring that we deliver increased value. The maximization of
            this value and the performance of our customers constitute the core
            of our philosophy, thereby ensuring the constant ascending course of
            the company at the global level.
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
