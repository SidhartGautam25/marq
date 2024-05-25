
import Card from "../report-card/Card";
import Buttons from "../buttons-report/Buttons";
import Link from "next/link";
import Footer from "../footer/Footer";
import { Fragment } from "react";
//this is report page
export default function Page() {
  interface obj{
     link:string;
     heading:string
  }
  const data:obj[]=[
     { 
      link:"/electric-and-hybrid-vehicles",
      heading:"Electric And Hybrid Vehicles"
     },
     { 
      link:"/vehicles-components",
      heading:"Vehicles Components"
     },
     { 
      link:"/shared-mobility",
      heading:"Shared Mobility"
     },
     { 
      link:"/tire",
      heading:"Tire"
     },
     { 
      link:"/connectivity-technology",
      heading:"Connectivity Technology"
     },
     { 
      link:"/sensors-electronics-and-electrical-equipment",
      heading:"Sensors Electronics And Electrical Equipment"
     },

  ]
  return (
    <>
      <div className="main bg-gray-100 p-3 md:p-0">
        <div className="main2 mt-8 md:flex sm:flex md:mt-10 flex-row-reverse">
          <div className="right flex-[10] flex flex-col gap-3 bg-blue-100 p-3 md:mr-8">
            <Card />
            <Card />
          </div>
          <div className="left flex-[4]">
            <div className="p-5 pt-0">
              <div className="titel flex justify-center text-2xl font-semibold">
                <span className="md:mt-0 mt-6">Industries We Serve</span>
              </div>
              <div className="buttans flex flex-col items-center">
                {
                    data.map((item,index)=>{
                      return(
                        <Fragment key={index}>
                           <Buttons link={item.link} heading={item.heading}/>
                        </Fragment>
                      )
                    })
                }
                
              </div>
            </div>
            <div className="p-5 md:p-14">
              <div className="bg-black text-white p-4 md:p-8 flex flex-col gap-10">
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
                <Link className="flex justify-center bg-white text-black p-2 md:p-3 rounded-[10px]  mt-8" href="/contact">
                <button className="flex gap-5 ">
                  Contact Us
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
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
}