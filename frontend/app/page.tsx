import { HomeOne, NavBar } from "./comp";
import img1 from "../public/images/img1.jpg";
import Image from "next/image";
export default function Home() {
  return (
    <div className="flex flex-col h-dvh w-dvw">
      <div className="flex flex-col h-dvh w-dvw">
        <Image
          src={img1}
          alt=""
          className="opacity-100 brightness-[0.3] z-0 absolute w-full h-full"
        />
        <NavBar />
        <HomeOne />
      </div>
    </div>
  );
}
