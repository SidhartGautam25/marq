"use client";

export default function HomeOne() {
  return (
    <div className="flex h-[86vh] w-full bg-img1 z-50 ">
      <div className="lg:w-[45vw] "></div>
      <div className="w-dvw lg:w-[55vw]   flex flex-col justify-center ">
        <div className="text-[2rem] lg:text-[3rem] font-bold mb-2 lg:mb-3 font-serif text-white pl-5 lg:pl-0">
          Helping You Think
        </div>
        <div className="text-[2rem] lg:text-[3rem] font-bold mb-2 lg:mb-3 font-serif  text-white pl-5 lg:pl-0">
          Strategically & Execute
        </div>
        <div className="text-[2rem] lg:text-[3rem] font-bold mb-2 lg:mb-3 font-serif  text-white pl-5 lg:pl-0">
          Brilliantly.
        </div>
        <div>
          <div className="mt-2 mb-1 font-semibold text-lg  text-white pl-5 lg:pl-0">
            Marqstats is focused on delivering exceptional client service and
            expertise to
          </div>
          <div className="mt-1 mb-1 font-semibold text-lg  text-white pl-5 lg:pl-0">
            accelerate progress.
          </div>
        </div>
        <div>
          <div className="mt-2 mb-1 font-semibold text-lg  text-white pl-5 lg:pl-0">
            What’s the result? Transformed experiences, decisive actions and
            long-term value for
          </div>
          <div className="mt-1 font-semibold text-lg  text-white pl-5 lg:pl-0">
            all stakeholders.
          </div>
        </div>
        <div className="flex ml-5 lg:ml-0 mt-7 p-2  rounded-md border-2 border-white bg-white hover:text-white hover:bg-black  text-base w-fit pl-5 lg:pl-0 ">
          LETS WORK TOGETHER
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 15"
            fill="currentColor"
            className="w-5 h-5 ml-3"
          >
            <path
              fill-rule="evenodd"
              d="M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
