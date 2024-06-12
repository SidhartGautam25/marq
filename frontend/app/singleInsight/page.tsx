import Image from "next/image";
import { Footer, NavBar } from "../comp";
import Slide1 from "@/public/ind2.jpg";

export default function Home() {
  return (
    <div className="">
      <div className=" bg-gray-900">
        <NavBar />
      </div>
      <div className="h-52 md:h-96 flex items-center justify-center relative">
        <div className="absolute inset-0">
          <Image src={Slide1} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="flex w-2/3">
          <h1 className="text-xl md:text-4xl text-center  text-white  font-bold z-50">
            Is mastering procurement the key to navigating airlines’ modern
            challenges?
          </h1>
        </div>
      </div>

      {/* <div className="lg:mx-36 xl:mx-36 mx-4 md:mx-20"></div> */}
      <Footer />
    </div>
  );
}
