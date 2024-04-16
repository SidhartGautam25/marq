import Image from "next/image";
import car from "@/public/assets/city-car.jpg";
import Card from "../comp/card/Card";
import Buttons from "../comp/buttons-report/Buttons";
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
        <div className="main2 flex mt-10">
          <div className="left flex-[10] flex flex-col gap-3">
            <Card />
            <Card />
          </div>
          <div className="right flex-[4]">
            <div className="p-5 pt-0">
              <div className="titel flex justify-center text-2xl font-semibold">
                <span>Industries We Serve</span>
              </div>
              <div className="buttans flex flex-col items-center">
                <Buttons />
                <Buttons />
                <Buttons />
              </div>
            </div>
            <div className="p-16 pt-8">
              <div className="bg-black text-white p-8 flex flex-col gap-10">
                <div className="flex flex-col gap-5">
                  <span>CUSTOMIZED REPORT SOLUTION</span>
                  <p>
                    Obtain a personalized market intelligence solution designed
                    specifically for your business
                  </p>
                  <ul className="list-disc flex flex-col gap-3">
                    <li>
                      Choose customized report sections that align with your
                      requirements
                    </li>
                    <li>
                      Receive a report tailored to your specific needs and
                      preferences
                    </li>
                  </ul>
                </div>
                <button className="flex justify-center bg-white text-black p-3 rounded-[10px] gap-5 mt-8">
                  Contect Us
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 5h18a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2V7a2 2 0 012-2zm0 2v10h18V7m-18 0l9 5.5L21 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
