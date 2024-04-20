import Image from "next/image";
import img1 from "@/public/assets/report-img1.png";
export default function Card(){
  
    return(
      <>
        <div className="card md:flex md:ml-7 bg-white shadow-xl shadow-gray-200 rounded-[5px]">
            <div className="left  md:flex-[6] overflow-hidden md:rounded-tr-[4rem] md:rounded-br-[4rem]">
               <Image src={img1} alt="" className="w-full object-cover  h-[17rem] inline-block  ease-in-out duration-500 hover:scale-105 hover:opacity-75"/>
            </div>
            <div className="right flex-[6] flex flex-col justify-center p-6 md:p-10">
                <span className="text-xl font-medium mb-10">Global Unmanned Aerial Vehicles UAV Market</span>
                <p className="line-clamp-5 leading-7 text-gray-600">Global Unmanned Aerial Vehicles UAV Market Global Forecast to 2027: UAV Market Analysis based on Point of Sale, Systems, Platform Civil & Commercial, Defense & Government, Function, End Use, Application, Type Fixed Wing, Rotary Wing, Hybrid, Mode of Operation, Mtow,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam culpa veniam voluptatibus, est tenetur aspernatur mollitia autem et? Magni autem exercitationem repellat quam provident odit similique consequuntur, officiis minus nostrum ratione, nam voluptate! Illo non id itaque autem dolore, quasi, perferendis exercitationem iste rerum tenetur quam facilis sapiente ducimus beatae!</p>
            </div>
        </div>
      </>
    );

}