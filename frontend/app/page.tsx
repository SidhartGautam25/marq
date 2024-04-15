import { HomeOne, NavBar, Footer, Slid, Vision, Homefive } from "./comp";
import img1 from "../public/images/img1.jpg";
import Image from "next/image";
import Homefour from "./comp/homefour/Homefour";
import Homesix from "./comp/homesix/Homesix";
export default function Home() {
  return (
    <div className="flex flex-col w-dvw">
      <div className="h-dvh w-dvw ">
        <div className="relative w-dvw">
          <div className="absolute top-0 left-0 z-0">
            <Image
              src={img1}
              alt=""
              className="object-fill h-dvh w-dvw brightness-[0.5]"
            />
          </div>
        </div>

        <div className="absolute z-10">
          <NavBar />
          <HomeOne />
        </div>
      </div>
      <div className="">
        <Homesix />
        <Vision />
        <Slid />
        <Homefour />
        <Homefive />
        <Footer />
      </div>
    </div>
  );
}
