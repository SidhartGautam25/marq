import Image from "next/image";

interface mp{
    id:number;para:string;img:string; heading:string;
}
export default function Comp2({id, para,img,heading}:mp) {
    let x:string;
    x=id%2==0?"flex-row-reverse":"flex-row";

  return (
    <>
      <div className={`flex ${x}`}>
        <div className=" flex-[1] border border-blue">
          <Image src={`/assets/${img}`} alt="" className="h-[85vh] object-cover" width={1000} height={600}/>
        </div>
        <div className="flex-[1] flex justify-center items-center w-full">
          <div className="flex flex-col gap-10 w-[70%]">
            <div className="">
              <div className="text-blue-500">0{id}</div>
              <div className="text-4xl  font-medium mt-2">{heading}</div>
            </div>
            <div className="text-gray-600">
              {para}
            </div>
            <button className="p-4 w-[9rem] bg-blue-500 text-white rounded-[6rem] ease-in duration-200 hover:bg-blue-700">
              Read More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
