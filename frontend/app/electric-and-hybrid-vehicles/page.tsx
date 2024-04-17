import ele from "@/public/assets/elec-vehicles.jpg";
import Report from "../comp/report/Report"
import Industry from "../comp/industry/Industry";
import { NavBar } from "../comp";


export default function Page() {
  let str="The electric and hybrid vehicles sector is experiencing significant growth and innovation. Explore more about the latest trends, market projections, and technological advancements in electric and hybrid vehicles.";
  let head="Electric and Hybrid Vehicles";
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
