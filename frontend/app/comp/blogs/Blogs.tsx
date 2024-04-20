import Image from "next/image";
// import blog1 from "@/public/blog1.png";
import blog2 from "@/public/blog2.png";
import blog3 from "@/public/blog3.png";
import blog4 from "@/public/blog4.png";

export default function Blogs() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row">
        {/* 1st card */}
        <div className="overflow-hidden w-full md:w-1/2">

        <div className=" w-full h-full flex flex-col-reverse group bg-[url('/blog1.png')] bg-cover hover:scale-105 duration-1000">
          {/* <Image
            src={blog1}
            alt="blog1"
            className=" group-hover:scale-110 duration-1000  object-cover w-full h-full absolute flex justify-center mix-blend-overlay "
          ></Image> */}
          <div className=" bg-gradient-to-t from-white h-fit group-hover:translate-y-2 duration-1000 p-10 group-hover:text-blue-600 flex  flex-col ">
            <span className="group-hover:text-blue-600 ">April 12,2024</span>
            <h1 className="text-3xl font-medium group-hover:text-blue-600 ">
              McKinsey accelerates growth for Bottom Line, a nonprofit boosting
              graduation rates
            </h1>
          </div>
        </div>
          </div>
        {/* 2nd card and 3rd card */}
        <div className="w-1/2 lg:flex lg:flex-col">
          {/* 2nd card */}
          <div className="relative group h-[60%] lg:flex">
            <div className=" overflow-hidden w-1/2">
              <Image
                src={blog2}
                className="duration-1000 group-hover:scale-110 h-full w-full"
                alt="blog2"
              ></Image>
            </div>
            <div className="p-10 group-hover:translate-y-2 duration-1000 group-hover:text-blue-600 w-1/2 flex justify-center flex-col">
              <span className="group-hover:text-blue-600 font-semibold">April 4,2024</span>
              <h1 className="group-hover:text-blue-600 text-xl">
                Marqstats and Google Cloud help companies tap into $4 trillion
                of business value with generative AI
              </h1>
            </div>
          </div>

          {/* 3rd card */}
          <div className="group h-[40%] w-full bg-[#1b1f29] text-white lg:flex lg:flex-col justify-center  ">
            <div className="lg:w-1/2 p-10 duration-1000 group-hover:translate-y-2 group-hover:text-blue-600">
              <span className=" font-semibold group-hover:text-blue-600 ">April 2,2024</span>
              <h1 className="text-xl group-hover:text-blue-600 ">
                Marqstats is ecosystem of strategic alliances brings the power
                of generative AI to clients
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[400px] flex flex-row">
        {/* 4th card */}
        <div className="lg:flex w-1/2 group overflow-hidden">
          <div className=" justify-center  duration-1000 p-10 group-hover:translate-y-2 group-hover:text-blue-600 flex flex-col w-1/2">
            <span className=" font-semibold group-hover:text-blue-600 ">March 26,2024</span>
            <h1 className="text-xl group-hover:text-blue-600 ">
              Marqstats convenes leaders to prepare for AI effect on New York
              region and beyond
            </h1>
          </div>
          <div className=" overflow-hidden w-1/2">
            <Image
              src={blog3}
              className="group-hover:scale-110 h-full duration-1000"
              alt="blog3"
            ></Image>
          </div>
        </div>

        {/* 5th card */}
        <div className="group w-1/2 lg:flex overflow-hidden ">
          <div className="flex flex-col w-1/2 justify-end">
          <div className="p-10 group-hover:translate-y-2 duration-1000 flex flex-col">
            <span className="font-semibold group-hover:text-blue-600 ">March 15,2024</span>
            <h1 className="text-xl group-hover:text-blue-600 ">
              Marqstats and Celonis bring the power of process mining to
              business transformations
            </h1>
          </div>
          <div className=" flex bg-blue-600 hover:bg-blue-700 p-5 w-full">
            <button className="px-5 text-white font-semibold">Read more on our Blog   <span>-{">"} </span></button>
          </div>
          </div>

          <div className="w-1/2 overflow-hidden">
            <Image
              src={blog4}
              className="group-hover:scale-110 duration-1000"
              alt="blog4"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}

// {/* 1st card */}

// {/* 2nd card */}

// {/* 3rd card */}

// {/* 4th card */}

// {/* 5th card */}
