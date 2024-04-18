import Image from "next/image";
import { Footer, NavBar, Term } from "../comp";
import Slide1 from "@/public/Slide1.png";

export default function Home() {
  return (
    <div className="">
      <div className=" bg-gray-900">
        <NavBar />
      </div>
      <div className="h-44 md:h-72 flex items-center justify-center relative">
        <div className="absolute inset-0">
          <Image src={Slide1} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <h1 className="text-4xl md:text-7xl text-white  font-bold z-50">
          Terms & Conditions
        </h1>
      </div>
      <div className="lg:mx-36 xl:mx-36 mx-4 md:mx-20">
        <Term />
      </div>
      <Footer />
    </div>
  );
}
