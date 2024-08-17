import { Automative, Footer, Ict, Industryser, NavBar, Slider } from "../../comp";
import img1 from "@/public/slider1.jpg";
import img2 from "@/public/slider2.jpg";
const images = [img1, img2];
export default function Home() {
  return (
    <div className="">
      <div className=" bg-gray-900">
        <NavBar />
      </div>
      <Slider images={images}/>
      <div className="lg:mx-36 xl:mx-36 mx-10 md:mx-20 mt-10">
        <Industryser />
        <div className="flex items-center justify-center my-8">
          <div className="flex-grow border-t border-gray-800"></div>
          <span className="flex-shrink mx-4 text-lg font-semibold">
            Explore our Expertise
          </span>
          <div className="flex-grow border-t border-gray-800"></div>
        </div>
        <Automative />
        <div className="mb-16 bg-black h-[1px]"></div>
        <Ict />
      </div>
      <Footer />
    </div>
  );
}
