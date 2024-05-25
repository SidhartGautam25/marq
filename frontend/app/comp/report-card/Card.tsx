import Image from "next/image";
import img1 from "@/public/assets/report-img1.png";
export default function Card(){
  
    return(
      <>
        <div className="card md:flex bg-gray-100 rounded-[5px] md:rounded-br-[4rem] border-2 border-black">
            <div className="left relative md:flex-[6] overflow-hidden bg-[url('/assets/vehicles.jpg')] bg-cover md:flex md:items-center p-3">
               {/* <Image src={img1} alt="" className="md:w-full object-contain md:object-cover  h-[15rem] md:h-[18rem]  inline-block"/> */}
               <div className=" p-8 bg-white opacity-80">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia nisi perspiciatis, tenetur quis necessitatibus enim ex? Cum animi sunt doloremque?
               <div className="h-[1px] w-full bg-black mt-2"></div>
               </div>
               <span className=" p-3 bg-blue-500 absolute bottom-0 right-0">Aplil 2024</span>

            </div>
            
            <div className="right flex-[6] flex flex-col p-6 md:ml-5 md:p-5 md:gap-14">
                <div className=" text-gray-600">
                  <ul className="list-disc">
                    <li className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, laboriosam!</li>
                    <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, laboriosam!</li>
                  </ul>
                </div>
                <div className=" text-gray-900 flex flex-col justify-center bg-white items-center">
                  <div className="">Study Period: 2019-2029</div>
                  <div className="">Base Year: 2023</div>
                  <div className="">Forecost Period: 2024-2030</div>
                </div>
            </div>
        </div>
      </>
    );

}