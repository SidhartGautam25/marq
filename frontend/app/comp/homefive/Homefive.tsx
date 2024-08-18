export default function Homefive() {
  return (
    <>
      <div className="homefive flex justify-center lg:p-20 bg-gray-50">
        <div className="main w-[90%]">
          <div className="">
            <span className="text-blue-500 font-bold">TESTIMONIALS</span>
            <h1 className="text-3xl font-bold mt-10">
            What Our Clients Say
            </h1>
          </div>
          <div className="mt-10 flex justify-center m-0 bg-white ">
            <div className="cards p-30 flex  flex-wrap text-gray-500 ">
              <div className="card lg:w-1/2 lg:h-1/2 p-8 ease-in duration-300 hover:shadow-2xl">
                <p className="mb-5">
                Marqstats' data-first approach has been instrumental in revealing the true picture of our market landscape.
                </p>
                <span className="font-bold">
                  DIRECTOR, RESEARCH AND INSIGHTS
                </span>
              </div>
              <div className="card lg:w-1/2 lg:h-1/2 p-8 ease-in duration-300 hover:shadow-2xl">
                <p className="mb-5">
                Marqstats demonstrated exceptional support and thoroughness in understanding our requirements. The final solution exceeded our initial expectations.
                </p>
                <span className="font-bold">
                  EXECUTIVE VICE PRESIDENT, STRATEGY
                </span>
              </div>
              <div className="card lg:w-1/2 lg:h-1/2 p-8 ease-in duration-300 hover:shadow-2xl">
                <p className="mb-5">
                Finding a strategic, cost-effective, and personable data provider is challenging. Marqstats excelled in every aspect, delivering valuable data and actionable insights.
                </p>
                <span className="font-bold">FOUNDER AND CEO</span>
              </div>
              <div className="card lg:w-1/2 lg:h-1/2 p-8 ease-in duration-300 hover:shadow-2xl">
                <p className="mb-5">
                Outstanding customer service. The team consistently responds promptly and efficiently.
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
