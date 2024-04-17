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
          <img
            src={props.imgs}
            alt="top photo"
            className="w-[100vw] pt-0 h-[25rem] object-cover"
          />
          <div className="absolute mt-auto p-8 md:w-[60%] flex flex-col md:items-center text-white gap-10 ">
            <h1 className="text-2xl font-bold md:text-4xl sm:text-3xl">{props.heading}</h1>
            <p className="md:text-center ">{props.para}</p>
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
