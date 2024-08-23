"use client";
import Image from "next/image";
import { Footer, NavBar } from "../comp";
import Comp1 from "../comp/industry-comp1/Comp1";
import Comp2 from "../comp/industry-comp2/Comp2";
import img1 from "@/public/assets/indus-comp3.jpeg";
import Link from "next/link";
import { Fragment } from "react";
import { motion } from "framer-motion";

export default function Page() {
  interface obj {
    id: number;
    img: string;
    heading: string;
    para: string;
    link: string;
  }
  const data: obj[] = [
    {
      id: 1,
      link: "/electric-and-hybrid-vehicles",
      img: "elec-vehicles.jpg",
      heading: "Electric and Hybrid Vehicles",
      para: "The electric and hybrid vehicles sector is experiencing remarkable growth and innovation, driven by climate concerns and the need for sustainable transportation. Major automakers are investing heavily in EV technology, resulting in longer driving ranges, faster charging times, and enhanced performance. Governments worldwide are promoting EV adoption through supportive policies and incentives. Our industry-leading research and analysis provide insights into the latest trends, market projections, and technological advancements, helping businesses navigate this dynamic sector, identify opportunities, and make data-driven decisions to stay ahead of the competition.",
    },
    {
      id: 2,
      link: "/vehicles-components",
      img: "vehicles.jpg",
      heading: "Vehicles and Components",
      para: "The vehicles and components sector encompasses the production and supply of various automotive vehicles and essential parts. Advancements in design, materials, and manufacturing processes are enhancing safety, efficiency, and performance. There's a strong focus on developing autonomous and self-driving vehicles, alongside innovations in fuel efficiency and advanced driver-assistance systems (ADAS). We offer comprehensive analysis on the latest vehicle models, component technologies, and market trends, helping businesses optimize their strategies, improve product offerings, and gain a competitive edge in the automotive industry.",
    },
    {
      id: 3,
      link: "/sensors-electronics-and-electrical-equipment",
      img: "sencer.jpg",
      heading: "Sensors, Electronics, and Electrical Equipment",
      para: "Sensors, electronics, and electrical equipment are crucial in enabling advanced functionalities and improving vehicle performance. This sector includes technologies like sensors for various parameters, electronic control units (ECUs) for managing vehicle systems, and electrical equipment for power distribution. Our in-depth research covers the latest sensor technologies, electronic systems, and electrical innovations, providing actionable insights to help businesses enhance vehicle performance, integrate new technologies, and stay at the forefront of the industry.",
    },
    {
      id: 4,
      link: "/shared-mobility",
      img: "Shared-Mobility.jpg",
      heading: "Shared Mobility",
      para: "Shared mobility refers to the trend of using shared transportation services rather than individual car ownership. This sector includes ride-hailing services, car-sharing platforms, and vehicle subscription models. It is driven by urbanization, changing consumer preferences, and the need for cost-effective, sustainable transportation options. We analyze the growth of shared mobility, emerging business models, and their impact on traditional transportation paradigms, helping businesses adapt to market changes, innovate their service offerings, and capitalize on new opportunities.",
    },
    {
      id: 5,
      link: "/connectivity-technology",
      img: "tech.jpg",
      heading: "Connectivity Technology",
      para: "Connectivity technology is revolutionizing the automotive industry by enabling vehicles to communicate with each other and external infrastructure. This includes advancements in vehicle-to-vehicle (V2V) and vehicle-to-infrastructure (V2I) communication, as well as in-car connectivity features. The emergence of 5G technology further accelerates these possibilities. Our research explores the latest developments in connectivity technology and future applications, providing insights to help businesses leverage these advancements, enhance vehicle safety, and offer advanced services to their customers.",
    },
    {
      id: 6,
      link: "/tire",
      img: "tyre.jpg",
      heading: "Tire",
      para: "The tire industry is vital for ensuring the smooth functioning of transportation and mobility. This sector focuses on the production, distribution, and utilization of tires for various vehicles, including cars, trucks, motorcycles, and airplanes. Technological advancements are driving significant innovations to meet modern transportation demands. We delve into the latest trends, technologies, and solutions shaping the tire industry, helping businesses improve product performance, innovate their offerings, and meet the evolving needs of the transportation sector.",
    },
  ];
  const itemVariants = {
    hidden: { opacity: 0, y: 150 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <>
      <div className="bg-gray-800">
        <NavBar />
      </div>
      <Comp1 />

      {data.map((items, indx) => {
        return (
          <Fragment key={indx}>
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: indx * 0.1 }}
            >
              <Comp2
                id={items.id}
                img={items.img}
                para={items.para}
                heading={items.heading}
                link={items.link}
              />
            </motion.div>
          </Fragment>
        );
      })}

      <div className="w-full flex flex-col items-center relative">
        <Image
          src={img1}
          className="w-[100vw] h-[20rem] object-cover opacity-15 mt-2"
          alt=""
        />
        <div className="flex md:flex-row flex-col gap-10 md:justify-between md:items-center w-[70%] absolute md:top-28 top-20">
          <div className="md:text-5xl text-3xl font-semibold text-gray-600 md:w-[35rem]">
          Have Questions? Reach Out to Us!
          </div>
          <Link href="/contact">
            <button className="p-5 w-[10rem] bg-gray-700 text-white">
            Send a Message
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
