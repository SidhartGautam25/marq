import ele from "@/public/assets/tech.jpg";
import Report from "../comp/report/Report";
import Industry from "../comp/industry/Industry";
import { NavBar } from "../comp";
export default function Page() {
  let str =
    "Revolutionizing automotive, connectivity tech facilitates inter-vehicle and external infrastructure communication. This sector spans V2V, V2I, and in-car features, enhancing safety, real-time info, remote diagnostics, and infotainment. With 5G's rise, explore advanced applications and the industry's transformative future through connectivity's lens.";
  let head = "Connectivity Technology";
  return (
    <>
      <div className="bg-gray-900">
        <NavBar />
        <div className="main bg-gray-100">
          <Industry imgs={ele.src} para={str} heading={head} />
          {/* <Report/> */}
        </div>
      </div>
    </>
  );
}
