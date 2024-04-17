import Image from "next/image";
import car from "@/public/assets/report.jpg";
import Report from "../comp/report/Report"
export default function Page() {
  return (
    <>
      <div className="main bg-gray-100">
        <div className="">
          <Image
            src={car}
            alt="top photo"
            className="w-full h-[15rem] object-cover"
          />
        </div>
        <div className="flex justify-center mt-5">
          <span className="self-center text-2xl font-medium">
            Latest Published Report
          </span>
        </div>
        <Report/>
      </div>
    </>
  );
}
