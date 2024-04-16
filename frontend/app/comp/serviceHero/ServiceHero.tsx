import React from 'react';  
export default function ServiceHero() {
  return (
    <>
    <div className='h-64 bg-gray-900 flex items-center'>
        <h1 className="text-7xl text-white  font-bold ml-28">Services</h1>
    </div>
    <section className="py-28 px-4">
      <div className="max-w-6xl mx-28 flex flex-col md:flex-row md:justify-between gap-24">
        <div className="md:w-1/2 space-y-4">
          <p className="text-5xl font-semibold">
            We are committed to deliver lasting value - thats our defining characteristic.
          </p>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 space-y-4">
          <hr className="border-blue-500 w-16 mb-4" />
          <p className="text-lg">
            To provide a customized and creative solution to each case, we analyze requirements in a detailed way and employ sophisticated tools to address complex challenges. We then provide support to our clients with robust, actionable solutions that are grounded in real-world data, research, and global environment.
          </p>
        </div>
      </div>
    </section>
    </>
  );
}
