import { Footer, Marketass, NavBar, Slider } from "../../comp";
import img3 from "@/public/slider3.jpg";
import img4 from "@/public/slider4.jpg";
const images = [img3,img4];
export default function Home() {
  return (
    <div className="">
      <div className=" bg-gray-900">
        <NavBar />
      </div>
      <Slider images={images}/>
      <div className="lg:mx-36 xl:mx-36 mx-10 md:mx-20 mt-5">
        <Marketass />
      </div>
      <Footer />
    </div>
  );
}
