import Image from "next/image";
interface GreetingProps {
    imgs: string;
    para: string;
    heading: string;
}

export default function Industry(props:GreetingProps) {
  return (
    <>
      
        <div className="relative flex justify-center items-center">
          <Image
            src={props.imgs}
            alt="top photo"
            className="w-full pt-0 h-[25rem] blur-[2px]"
            width={200}
            height={100}
          />
          <div className="absolute mt-auto p-8 md:w-[60%] flex flex-col md:items-center text-white gap-10 ">
            <h1 className="text-2xl font-bold md:text-4xl sm:text-3xl md:text-center">{props.heading}</h1>
            <p className="md:text-center font-bold md:font-normal">{props.para}</p>
          </div>
        </div>
        <div className="flex justify-center mt-5">
          <span className="self-center text-2xl font-medium">
            Latest Published Report
          </span>
        </div>
    </>
  );
}
