import ele from "@/public/assets/tyre.jpg";
import Report from "../comp/report/Report";
import Industry from "../comp/industry/Industry";
import { NavBar } from "../comp";
export default function Page() {
  let str =
    "As a vital component of transportation, the tire industry ensures seamless mobility. It centers on tire production, distribution, and usage for diverse vehicles. Evolving with technology, the sector meets contemporary transport demands. Explore the tire industry's forward-looking trajectory through its latest trends, technologies, and transformative solutions.";
  let head = "Tire";
  return (
    <>
      <div className="bg-gray-900">
        <NavBar />
        <div className="main bg-gray-100">
          <Industry imgs={ele.src} para={str} heading={head} />
          <Report ind={head}/>
        </div>
      </div>
    </>
  );
}
