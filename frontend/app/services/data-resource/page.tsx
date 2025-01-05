import { DataResources, Footer, NavBar, Slider } from "../../comp";
import img5 from "@/public/slider5.jpg";
import img6 from "@/public/slider6.jpg";
import img1 from "@/public/images/Slide5.jpg";
import img2 from "@/public/images/Slide6.jpg";
import temp from "@/public/images/check2.png";
const images = [img1, img2];
export default function Home() {
  return (
    <div className="">
      <div className=" bg-gray-900">
        <NavBar />
      </div>
      <Slider images={images} />
      <div className="lg:mx-36 xl:mx-36 mx-5 md:mx-20 md:mt-10 mt-5">
        <DataResources />
      </div>
      <Footer />
    </div>
  );
}
