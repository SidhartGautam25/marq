import { Footer, Marketass, NavBar, Slider } from "../../comp";
import img3 from "@/public/slider3.jpg";
import img4 from "@/public/slider4.jpg";

import img1 from "@/public/images/Slide3.jpg";
import img2 from "@/public/images/Slide4.jpg";
import temp from "@/public/images/check2.png";
const images = [img1, img2];
export default function Home() {
  return (
    <div className="">
      <div className=" bg-gray-900">
        <NavBar />
      </div>
      <Slider images={images} />
      <div className="lg:mx-36 xl:mx-36 mx-5 md:mx-20 mt-5">
        <Marketass />
      </div>
      <Footer />
    </div>
  );
}
