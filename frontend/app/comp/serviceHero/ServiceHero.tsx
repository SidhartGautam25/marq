import React from "react";
export default function ServiceHero() {
  return (
    <>
      <div className="h-44 md:h-64 bg-gray-900 flex items-center">
        <h1 className="text-4xl md:text-7xl text-white  font-bold ml-10 md:ml-28">
          Services
        </h1>
      </div>
      <section className="py-10 md:py-28 px-4">
        <div className="max-w-6xl md:mx-28 mx-10 flex flex-col md:flex-row md:justify-between gap-10 md:gap-24">
          <div className="md:w-1/2 space-y-4">
            <p className="text-3xl md:text-5xl font-semibold">
            Our commitment to delivering lasting value is our defining characteristic.
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 space-y-4">
            <hr className="border-blue-500 w-16 mb-4" />
            <p className="text-lg">
            We provide customized and innovative solutions through detailed requirement analyses and the use of sophisticated tools to tackle complex challenges. Our clients receive robust, actionable solutions grounded in real-world data, comprehensive research, and a global perspective.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
