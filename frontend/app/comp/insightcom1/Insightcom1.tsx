import ele from "@/public/assets/tech.jpg";
import Image from "next/image";
import print from "@/public/printer-svgrepo-com.svg";
import share from "@/public/share-svgrepo-com.svg";

export default function Insightcom1() {
  return (
    <div className="">
      <div className="relative flex justify-center items-center">
        <Image
          src={ele}
          alt="top photo"
          className="w-full pt-0 h-[25rem] blur-[2px]"
          width={200}
          height={100}
        />
        <div className="absolute mt-auto p-8 md:w-[60%] flex flex-col md:items-center text-white gap-10 ">
          <h1 className="text-2xl font-bold md:text-4xl sm:text-3xl md:text-center">
            Is mastering procurement the key to navigating airlines' modern
            challenges?
          </h1>
        </div>
      </div>
      <div className="ml-20 my-5">
        <h1 className="text-blue-400">
          Transportation and travel /{" "}
          <span className="text-black">Article</span>
        </h1>
        <div className="my-5 flex gap-5">
          <Image src={share} alt="print" width={30} height={30} />
          <Image src={print} alt="print" width={30} height={30} />
        </div>
        <div className="my-5">3.10.2000</div>
      </div>
    </div>
  );
}
