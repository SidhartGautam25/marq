import Image from "next/image";
import cardimg from "@/public/assets/card-img-report.jpg";
export default function Card(){
  
    return(
      <>
        <div className="card flex ml-7 bg-white shadow-xl shadow-gray-200 rounded-[5px]">
            <div className="left  flex-[6]">
               <Image src={cardimg} alt="" className="object-cover rounded-tr-[4rem] rounded-br-[4rem] h-[17rem]"/>
            </div>
            <div className="right flex-[6] flex flex-col justify-center  p-10">
                <span className="text-xl font-medium mb-10">Global Unmanned Aerial Vehicles UAV Market</span>
                <p className="overflow-hidden line-clamp-4 leading-7 text-gray-600">Global Unmanned Aerial Vehicles UAV Market Global Forecast to 2027: UAV Market Analysis based on Point of Sale, Systems, Platform Civil & Commercial, Defense & Government, Function, End Use, Application, Type Fixed Wing, Rotary Wing, Hybrid, Mode of Operation, Mtow,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam culpa veniam voluptatibus, est tenetur aspernatur mollitia autem et? Magni autem exercitationem repellat quam provident odit similique consequuntur, officiis minus nostrum ratione, nam voluptate! Illo non id itaque autem dolore, quasi, perferendis exercitationem iste rerum tenetur quam facilis sapiente ducimus beatae!</p>
            </div>
        </div>
      </>
    );

}