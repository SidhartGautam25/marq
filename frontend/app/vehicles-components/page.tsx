import ele from "@/public/assets/vehicles.jpg";
import Report from "../comp/report/Report"
import Industry from "../comp/industry/Industry";
import { NavBar } from "../comp";
export default function Page() {
  let str="Discover the latest trends in vehicle models, component technologies, and market dynamics that shape the automotive industry. Our consulting services offer insights into advancements such as autonomous features, fuel efficiency, and cutting-edge driver-assistance systems (ADAS)"
  let head="Vehicles and Components";
  return (
    <>
      <div className="bg-gray-900">
     <NavBar/>
      <div className="main bg-gray-100">
        <Industry imgs={ele.src} para={str} heading={head}/>
        <Report/>
      </div>
    </div>
    </>
  );
}
