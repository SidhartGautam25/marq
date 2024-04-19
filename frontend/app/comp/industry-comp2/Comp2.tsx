import Image from "next/image";
import Link from "next/link";

interface mp{
    id:number;para:string;img:string; heading:string;link:string;
}
export default function Comp2({id, para,img,heading,link}:mp) {
    let x:string;
    x=id%2==0?"flex-row-reverse":"flex-row";

  return (
    <>
      <div className={`md:flex ${x} mt-10 md:mt-0 md:p-0 p-2`}>
        <div className=" md:flex-[1]">
          <Image src={`/assets/${img}`} alt="" className="h-[85vh] object-cover" width={1000} height={600}/>
        </div>
        <div className="md:flex-[1] flex justify-center items-center w-full">
          <div className="flex flex-col md:gap-10 gap-6 md:w-[70%] w-[90%]">
            <div className="">
              <div className="text-blue-500 mt-5">0{id}</div>
              <div className="md:text-4xl text-3xl  font-medium mt-2">{heading}</div>
            </div>
            <div className="text-gray-600">
              {para}
            </div>
            <Link href={link}>
            <button className="p-4 w-[9rem] bg-blue-500 text-white rounded-[6rem] ease-in duration-200 hover:bg-blue-700">
              Read More
            </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
