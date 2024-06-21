"use client";
import React, { useEffect } from "react";
import InsightCard from "../insightCard/InsightCard";
import { useRouter } from "next/navigation";

import { useState } from "react";
import axios from "axios";

interface RadioOption {
  id: string; // Unique identifier for each radio button
  label: string; // Text displayed next to the radio button
}

interface ListItem {
  name: string;
  children: string[]; // Optional children for nested lists
}
interface Ins {
  title: string;
  type: string;
  linkt: string;
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
  const [page, setPage] = useState(1);
  const [len, setLen] = useState(1);
  const [end, setEnd] = useState(1);
  const [blogs, setBlogs] = useState<Ins[]>([]);
  const dev_url = "http://localhost:8800";
  const prod_url = "https://admin-backend-1-ekoa.onrender.com";
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // function clickfun() {
  // const [ind, setInd] = useState("none");
  // const [subind, setSubind] = useState("none");

  //   function click(tit:string) {
  //     router.push(`/insight/${tit}`);
  //  }

  const handleChangeSubIndustry = async (item: string) => {
    setSubIndustryOption(item);
    setPage(1);
    let url = `${dev_url}/api/getall/blogs?industry=${selectedOption}&page=${1}&subind=${item}`;
    try {
      const daata = await axios.get(url);
      setLoading(false);

      console.log("daata on leftb hero is ", daata.data);
      if (daata) {
        console.log("daaaaaattatatata is ", daata);
        setBlogs([...daata.data.blogs]);

        setLen(daata.data.len);
        setEnd(Math.floor(daata.data.len / 5 + 1));
      }
    } catch (err) {}
  };

  const handleChangeIndustry = async (option: string) => {
    setSelectedOption(option);
    const selected = listData.find((item) => item.name === option);
    setSubIndustries(selected ? selected.children : []);
    let url = `${dev_url}/api/getall/blogs?industry=${option}&page=${1}`;
    setPage(1);
    try {
      const daata = await axios.get(url);
      setLoading(false);

      console.log("daata on leftb hero is ", daata.data);
      if (daata) {
        console.log("daaaaaattatatata is ", daata);
        setBlogs([...daata.data.blogs]);

        setLen(daata.data.len);
        setEnd(Math.floor(daata.data.len / 5 + 1));
      }
    } catch (err) {}
  };

  function prev() {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  function next() {
    if (page < end) {
      setPage(page + 1);
    }
  }

  useEffect(() => {
    // Code inside this function will run after every render
    // You can perform side effects, such as data fetching, subscriptions, or DOM manipulations here

    // For example, you can fetch data from an API
    const fetchReport = async () => {
      console.log("fetch report called");
      let url;
      if (selectedOption == "null") {
        url = `${dev_url}/api/getall/blogs?page=${page}`;
      } else if (selectedOption != "null" && subIndustryOption == "null") {
        url = `${dev_url}/api/getall/blogs?industry=${selectedOption}&page=${page}`;
      } else {
        url = `${dev_url}/api/getall/blogs?industry=${selectedOption}&page=${page}&subind=${subIndustryOption}`;
      }
      try {
        const daata = await axios.get(url);
        setLoading(false);

        console.log("daata on leftb hero is ", daata.data);
        if (daata) {
          console.log("daaaaaattatatata is ", daata);
          setBlogs([...daata.data.blogs]);

          setLen(daata.data.len);
          setEnd(Math.floor(daata.data.len / 5 + 1));
        }
      } catch (err) {}
    };
    fetchReport();

    // You can also return a cleanup function from useEffect
    // This cleanup function will be executed before the component is unmounted or re-rendered
    return () => {
      // Code inside this cleanup function will run before the component is unmounted or re-rendered
      // You can perform cleanup tasks here, such as unsubscribing from subscriptions or clearing timers
    };
  }, [page]);

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
          {blogs.map((insight, index) => (
            <div
              key={index}
              className="p-4"
              onClick={() => {
                router.push(`/insight/${insight.title}`);
              }}
            >
              <InsightCard
                imageSrc={insight.linkt}
                title={insight.title}
                // description={insight.description}
                category={insight.type}
              />
            </div>
          ))}
        </div>
        <div className={`flex justify-center gap-5 items-center mt-5`}>
          <button className=" bg-black text-white p-2 w-[5rem]" onClick={prev}>
            PREV
          </button>
          <span className="">
            {page} To {end}
          </span>
          <button className="bg-black text-white p-2 w-[5rem]" onClick={next}>
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
}
