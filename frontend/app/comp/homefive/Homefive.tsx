export default function Homefive() {
  return (
    <>
      <div className="homefive flex justify-center lg:p-20 bg-gray-50">
        <div className="main w-[90%]">
          <div className="">
            <span className="text-blue-500 font-bold">TESTIMONIALS</span>
            <h1 className="text-3xl font-bold mt-10">
              What Clients Are Saying
            </h1>
          </div>
          <div className="mt-10 flex justify-center m-0 bg-white ">
            <div className="cards p-30 flex  flex-wrap text-gray-500 ">
              <div className="card lg:w-1/2 lg:h-1/2 p-8 ease-in duration-300 hover:shadow-2xl">
                <p className="mb-5">
                  The data first approach of Marqstats really helps in analyzing
                  the true picture.
                </p>
                <span className="font-bold">
                  DIRECTOR, RESEARCH AND INSIGHTS
                </span>
              </div>
              <div className="card lg:w-1/2 lg:h-1/2 p-8 ease-in duration-300 hover:shadow-2xl">
                <p className="mb-5">
                  They were very supportive and thorough in understanding our
                  company&lsquo;s requirements. The solution I finally purchased
                  was quite different from what I first intended.
                </p>
                <span className="font-bold">
                  EXECUTIVE VICE PRESIDENT, STRATEGY
                </span>
              </div>
              <div className="card lg:w-1/2 lg:h-1/2 p-8 ease-in duration-300 hover:shadow-2xl">
                <p className="mb-5">
                  It&lsquo;s difficult to find a data provider that is
                  strategic, cost effective, and friendly. Marqstats delivered
                  on every aspect of the project and we are happy with the data
                  and actionable insights
                </p>
                <span className="font-bold">FOUNDER AND CEO</span>
              </div>
              <div className="card lg:w-1/2 lg:h-1/2 p-8 ease-in duration-300 hover:shadow-2xl">
                <p className="mb-5">
                  Excellent customer service. The team responds in a very timely
                  manner
                </p>
                <span className="font-bold">EXECUTIVE DIRECTOR</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
