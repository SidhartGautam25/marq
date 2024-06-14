"use client";
import React from "react";
import InsightCard from "../insightCard/InsightCard";

import { useState } from "react";

interface RadioOption {
  id: string; // Unique identifier for each radio button
  label: string; // Text displayed next to the radio button
}

interface ListItem {
  name: string;
  children: string[]; // Optional children for nested lists
}

const listData: ListItem[] = [
  {
    name: "ev_tech",
    children: [
      "Electric Vehicle",
      "Battery Technology and Manufacturing",
      "Charging Infrastructure",
      "EV Powertrains",
      "EV Components",
      "EV Services",
    ],
  },
  {
    name: "automotive_solutions",
    children: [
      "Passenger Vehicle",
      "Commercial Vehicle",
      "Two-Wheeler",
      "Three-Wheeler",
      "ICE Powertrains",
      "Components",
      "Tire",
      "Services",
    ],
  },
  {
    name: "shared_mobility",
    children: [
      "Car-Based Services",
      "Micro-Mobility Services",
      "Microtransit and Shuttle Services",
      "Autonomous Mobility Services",
      "Subscription and Membership Models",
      "Integrated Mobility Platforms (MaaS)",
    ],
  },
  {
    name: "electrical_electronics",
    children: [
      "ADAS",
      "Sensors",
      "ECU",
      "Electrical and Electronic Components",
    ],
  },
  {
    name: "connectivity_tech",
    children: [
      "In-Vehicle Infotainment",
      "Vehicle-to-Everything (V2X) Communications",
      "Telematics and Remote Services",
      "Connected Safety Features",
      "Vehicle Connectivity Services",
    ],
  },
  {
    name: "industrial_automotive",
    children: [
      "Agricultural Vehicles ",
      "Construction Vehicles",
      "Mining Vehicles ",
      "Warehouse Vehicles ",
      "Forestry Vehicles ",
      "Utility Vehicles ",
      "Cargo Transport Vehicles ",
      "Emergency Service Vehicles ",
      "Railway Service Vehicles ",
      "Port and Terminal Vehicles ",
    ],
  },
  {
    name: "emerging_tech",
    children: [
      "Autonomous Vehicles (AVs)",
      "Alternative Fuels and Powertrains",
      "Automotive Digital Services",
      "Artificial Intelligence (AI) and Machine Learning",
      "Lightweight and Advanced Materials",
      "Smart City Integration",
      "Sustainable Technologies",
    ],
  },
];

const radioOptions: RadioOption[] = [
  { id: "ev_tech", label: "Electric Vehicle Technology" },
  { id: "automotive_solutions", label: "Automotive Solutions" },
  { id: "shared_mobility", label: "Shared Mobility" },
  { id: "electrical_electronics", label: "Electrical and Electronics" },
  { id: "connectivity_tech", label: "Connectivity Technology" },
  { id: "industrial_automotive", label: "Industrial Automotive Application" },
  { id: "emerging_tech", label: "Emerging Technology" },
];
const insights = [
  {
    imageSrc: "/ind1.jpg",
    title: "Enterprise IT Transformation for National Science Foundation",
    // description: "Aligning corporate and climate interests",
    category: "CASE STUDY",
  },
  {
    imageSrc: "/ind1.jpg",
    title: "Reinventing the Recreation.gov Customer Experience",
    // description: "Aligning corporate and climate interests",
    category: "CASE STUDY",
  },
  {
    imageSrc: "/ind1.jpg",
    title: "Using AI to Protect Veterans from Fraud",
    // description: "Aligning corporate and climate interests",
    category: "CASE STUDY",
  },
  {
    imageSrc: "/ind1.jpg",
    title: "Using AI to Protect Veterans from Fraud",
    // description: "Aligning corporate and climate interests",
    category: "CASE STUDY",
  },
  {
    imageSrc: "/ind1.jpg",
    title: "Using AI to Protect Veterans from Fraud",
    // description: "Aligning corporate and climate interests",
    category: "CASE STUDY",
  },
  {
    imageSrc: "/ind1.jpg",
    title: "Using AI to Protect Veterans from Fraud",
    // description: "Aligning corporate and climate interests",
    category: "CASE STUDY",
  },
];

export default function Insight() {
  const [selectedOption, setSelectedOption] = useState<string>("null");
  const [subIndustries, setSubIndustries] = useState<string[]>();
  const [subIndustryOption, setSubIndustryOption] = useState<string>("null");

  const handleChangeSubIndustry = (item: string) => {
    setSubIndustryOption(item);
  };

  const handleChangeIndustry = (option: string) => {
    setSelectedOption(option);
    const selected = listData.find((item) => item.name === option);
    setSubIndustries(selected ? selected.children : []);
  };
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="w-2/5 mx-20 border-2 border-gray-600 p-3">
          <h2 className="text-xl font-bold text-center mb-8">
            LATEST INSIGHTS FROM MARQSTATS
          </h2>
          <div className="flex justify-center space-x-4 mb-8">
            {/* <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
              <option>Industries</option>
              
            </select>
            <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
              <option>Capabilities</option>
              
            </select> */}
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              id="industry"
              value={selectedOption}
              onChange={(e) => handleChangeIndustry(e.target.value)}
            >
              <option value="null">Select Industry</option>
              {radioOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              id="sub-industry"
              value={subIndustryOption}
              onChange={(e) => handleChangeSubIndustry(e.target.value)}
              disabled={!subIndustries || subIndustries.length === 0}
            >
              <option value="null">Select Sub-Industry</option>
              {subIndustries?.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex flex-wrap justify-center">
          {insights.map((insight, index) => (
            <div key={index} className="p-4">
              <InsightCard
                imageSrc={insight.imageSrc}
                title={insight.title}
                // description={insight.description}
                category={insight.category}
              />
            </div>
          ))}
          
        </div>
        <div
            className={`flex justify-center gap-5 items-center mt-5`}
          >
            <button className=" bg-black text-white p-2 w-[5rem]">PREVIES</button>
            <span className="">1 To 50</span>
            <button className="bg-black text-white p-2 w-[5rem]">NEXT</button>
          </div>
      </div>
    </div>
  );
}
