import { DataResources, Footer, NavBar, Slider } from "../../comp";
import img5 from "@/public/slider5.jpg";
import img6 from "@/public/slider6.jpg";
const images = [img5,img6];
export default function Home() {
  return (
    <div className="">
      <div className=" bg-gray-900">
        <NavBar />
      </div>
      <Slider images={images}/>
      <div className="lg:mx-36 xl:mx-36 mx-10 md:mx-20 mt-10">
        <DataResources />
      </div>
      <Footer />
    </div>
  );
}
