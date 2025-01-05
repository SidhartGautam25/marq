import { Buss, Conserv, Footer, NavBar, Slider } from "../../comp";
import img7 from "@/public/slider7.jpg";
import img8 from "@/public/slider8.jpg";

import img1 from "@/public/images/Slide7.jpg";
import img2 from "@/public/images/Slide8.jpg";
import temp from "@/public/images/check2.png";

const images = [img1, img2];
export default function Home() {
  return (
    <div className="">
      <div className=" bg-gray-900">
        <NavBar />
      </div>
      <Slider images={images} />
      <div className="lg:mx-36 xl:mx-36 md:mx-20 mt-10">
        <Conserv />
        <Buss />
      </div>
      <Footer />
    </div>
  );
}
