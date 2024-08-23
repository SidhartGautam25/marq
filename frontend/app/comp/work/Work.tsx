"use client";
import React from "react";

export default function Work() {
  const reasons = [
    {
      number: "01.",
      title: "Visionary Strategy",
      description:
        "Implementing sustainable strategies to enhance client performance and foster innovative strength effectively.",
    },
    {
      number: "02.",
      title: "Holistic Support",
      description:
        "Collaborating with your team to deliver customized services that drive and augment your business growth.",
    },
    {
      number: "03.",
      title: "Capability-Focused",
      description:
        "Leveraging distinctive capabilities to help businesses focus on strengths and gain a competitive edge.",
    },
    {
      number: "04.",
      title: "Client-Centric",
      description:
        "Adopting a customer-centric approach to unlock value through in-depth, data-driven analysis.",
    },
    {
      number: "05.",
      title: "Extensive Data Solutions",
      description:
        "Providing custom solutions based on an extensive portfolio of information, expert analysis, and industry knowledge.",
    },
    {
      number: "06.",
      title: "Results-Driven",
      description:
        "Utilizing industry experience to help clients seize global growth opportunities with unwavering dedication.",
    },
    {
      number: "07.",
      title: "Ambitious Quality",
      description:
        " Offering best-in-class solutions guided by a well-defined quality assurance system and ambitious goals.",
    },
    {
      number: "08.",
      title: "Actionable Insights",
      description:
        "Delivering insights from industry experts to empower informed decision-making and strategic actions.",
    },
    // Add more reasons...
  ];

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold">Why Choose Marqstats?</h2>
          <div className="mt-2">
            <hr className="inline-block w-16 border-2 border-blue-600" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 ">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="text-left hover:border-t-2 hover:border-blue-600"
            >
              <h3 className="text-blue-600 font-bold">{reason.number}</h3>
              <h4 className="text-2xl font-semibold my-2">{reason.title}</h4>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
