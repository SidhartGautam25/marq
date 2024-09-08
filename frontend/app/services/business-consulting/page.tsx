import { Buss, Conserv, Footer, NavBar, Slider } from "../../comp";
import img7 from "@/public/slider7.jpg";
import img8 from "@/public/slider8.jpg";
const images = [img7,img8];
export default function Home() {
  return (
    <div className="">
      <div className=" bg-gray-900">
        <NavBar />
      </div>
        <Slider images={images}/>
      <div className="lg:mx-36 xl:mx-36 md:mx-20 mt-10">
        <Conserv />
        <Buss />
      </div>
      <Footer />
    </div>
  );
}
