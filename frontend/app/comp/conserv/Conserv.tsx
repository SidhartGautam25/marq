import React from "react";

export default function Conserv() {
  return (
    <div className="pd-8 px-4">
      <div className="container flex flex-col md:flex-row leading-10 font-medium items-center mx-auto">
        <h2 className="md:text-5xl text-4xl font-bold my-4 mr-12">
          Consulting Services
        </h2>
        <p className="p-2 md:p-8">
          We focus on our clients issues and help them adapt to todays market
          dynamics and grow effectively and sustainably. The services are
          structured in such a way to address end-to-end business needs by
          working together as a partnership of equals.
        </p>
      </div>
      <div className="flex justify-between items-center mt-4">
        <div className="flex-grow border-t border-gray-800"></div>
        <span className="mx-4 text-sm uppercase">How It Works</span>
        <div className="flex-grow border-t border-gray-800"></div>
      </div>
    </div>
  );
}
