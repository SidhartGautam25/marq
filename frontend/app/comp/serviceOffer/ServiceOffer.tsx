import React from "react";
import Image from "next/image";
import backgroundImage from "@/public/workback.jpg";
import Link from "next/link";

const services = [
  {
    id: "01.",
    title: "Industry Expertise",
    page:"/services/industry-expertise",
    butt:"Reports",
    description:
      "Our deep expertise spans a wide range of industries, ensuring we bring class-leading knowledge and insights to each sector we serve. We provide tailored solutions that drive growth and innovation, leveraging extensive industry experience to address unique challenges and opportunities.",
    
  },
  {
    id: "02.",
    title: "Market Assessment",
    page:"/services/market-assessment",
    description:
      "We offer comprehensive market assessments backed by extensive experience and rigorous analysis. Our evaluations cover market trends, competitive landscapes, and growth opportunities, providing actionable recommendations for strategic decision-making.",
  },
  {
    id: "03.",
    title: "Data Library",
    page:"/services/data-library",
    description:
      "Our data services provide essential information at global, country, and city levels, empowering businesses with the insights needed to make strategic decisions. We offer a robust, meticulously curated data repository that includes market data, consumer insights, competitive intelligence, and industry benchmarks.",
  },
  {
    id: "04.",
    title: "Business Consulting",
    page:"/services/business-consulting",
    description:
      "We partner with organizations to drive innovation and achieve tangible results. Our consulting services encompass strategy development, process optimization, and digital transformation, helping businesses implement effective strategies and stay competitive.",
  },
  // ... more services
];
export default function ServiceHero() {
  return (
    <div className="relative text-white text-center pt-12 px-4">
      <div className="absolute inset-0">
        <Image src={backgroundImage} alt="" className="h-full w-full" />
      </div>
      <div className="absolute inset-0 bg-black opacity-75"></div>
      <h2 className="text-3xl md:text-5xl font-bold m-16 z-10 relative">
        What We Offer
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-left z-10 relative mx-2 md:mx-32">
        {services.map((service) => (
          <Link href={service.page} key={service.id}>
          <div  className="p-7 border border-gray-700 cursor-pointer min-h-[30rem]">
            <span className="text-lg font-bold">{service.id}</span>
            <h3 className="md:text-3xl text-2xl my-7 font-bold">
              {service.title}
            </h3>
            <p className="my-5 text-gray-400">{service.description}</p>
            {/* <Link href={service.page}> */}
            {/* <button className="bg-blue-600 hover:bg-blue-800 py-2 my-8 px-4 rounded inline-flex items-center">
              <span>Get Started Now</span>
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button> */}
            {/* </Link> */}
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
