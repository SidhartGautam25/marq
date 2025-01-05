import {
  Automative,
  Footer,
  Ict,
  Industryser,
  NavBar,
  Slider,
} from "../../comp";
// import img1 from "@/public/slider1.jpg";
// import img2 from "@/public/slider2.jpg";
import img3 from "@/public/service1.svg";
import img1 from "@/public/images/slide1.jpg";
import img2 from "@/public/images/Slide2.jpg";
import temp from "@/public/images/check2.png";
const images = [img1, img2];
export default function Home() {
  return (
    <div className="">
      <div className=" bg-gray-900">
        <NavBar />
      </div>
      <Slider images={images} />
      <div className="lg:mx-36 xl:mx-36 mx-3 md:mx-20 md:mt-10">
        <Industryser />
        <div className="flex items-center justify-center my-8">
          <div className="flex-grow border-t border-gray-800"></div>
          <span className="flex-shrink mx-4 text-lg font-semibold">
            Explore our Expertise
          </span>
          <div className="flex-grow border-t border-gray-800"></div>
        </div>
        <Automative />
        <div className="md:mb-16 mb-8 bg-black h-[1px]"></div>
        <Ict />
      </div>
      <Footer />
    </div>
  );
}
