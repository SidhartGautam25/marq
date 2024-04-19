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
      para: "The electric and hybrid vehicles sector is experiencing significant growth and innovation. With increasing concerns about climate change and the need for sustainable transportation solutions, the demand for electric and hybrid vehicles has skyrocketed. Major automakers are investing heavily in developing and improving electric vehicle (EV) technology, resulting in longer driving ranges, faster charging times, and enhanced performance. Additionally, governments around the world are implementing supportive policies and incentives to promote the adoption of EVs. Explore more about the latest trends, market projections, and technological advancements in electric and hybrid vehicles.",
    },
    {
      id: 2,
      link: "/vehicles-components",
      img: "vehicles.jpg",
      heading: "Vehicles and Components",
      para: "The vehicles and components sector encompasses the manufacturing and supply of various automotive vehicles and their essential components. This sector is witnessing advancements in design, materials, and manufacturing processes to enhance safety, efficiency, and performance. Additionally, there is a growing focus on developing autonomous and self-driving vehicles, which rely on sophisticated sensors, software, and artificial intelligence. The sector also includes advancements in fuel efficiency, lightweight materials, and the integration of advanced features such as advanced driver-assistance systems (ADAS). Explore more about the latest vehicle models, component technologies, and market trends shaping the automotive industry.",
    },
    {
      id: 3,
      link: "/sensors-electronics-and-electrical-equipment",
      img: "sencer.jpg",
      heading: "Sensors, Electronics, and Electrical Equipment",
      para: "Sensors, electronics, and electrical equipment play a crucial role in the automotive industry by enabling advanced functionalities and improving vehicle performance. This sector encompasses a wide range of technologies, including sensors for measuring various parameters, electronic control units (ECUs) for managing vehicle systems, and electrical equipment for power distribution and management. Recent developments include the integration of sensors for autonomous driving, advanced driver-assistance systems, and connectivity features. Explore more about the latest sensor technologies, electronic systems, and electrical equipment innovations driving the automotive industry forward.",
    },
    {
      id: 4,
      link: "/shared-mobility",
      img: "Shared-Mobility.jpg",
      heading: "Shared Mobility",
      para: "Shared mobility refers to the trend of using shared transportation services rather than individual car ownership. This sector includes various forms of shared mobility, such as ride-hailing services, car-sharing platforms, and vehicle subscription models. The rise of shared mobility is driven by factors such as urbanization, changing consumer preferences, and the need for cost-effective and sustainable transportation options. Technology plays a pivotal role in enabling shared mobility services, with platforms and apps connecting users with available vehicles. Explore more about the growth of shared mobility, emerging business models, and the impact on traditional transportation paradigms.",
    },
    {
      id: 5,
      link: "/connectivity-technology",
      img: "tech.jpg",
      heading: "Connectivity Technology",
      para: "Connectivity technology is revolutionizing the automotive industry by enabling vehicles to communicate with each other and with external infrastructure. This sector encompasses advancements in vehicle-to-vehicle (V2V) and vehicle-to-infrastructure (V2I) communication, as well as in-car connectivity features. Connected cars can enhance safety, provide real-time traffic information, enable remote diagnostics, and offer a wide range of infotainment options. The emergence of 5G technology further accelerates the possibilities of seamless connectivity and advanced vehicle services. Explore more about the latest developments in connectivity technology, future applications, and the transformative impact on the automotive industry. ",
    },
    {
      id: 6,
      link: "/tire",
      img: "tyre.jpg",
      heading: "Tire",
      para: "The tire industry, plays a crucial role in ensuring the smooth functioning of transportation and mobility. The tire industry focuses on the production, distribution, and utilization of tires for various vehicles, including cars, trucks, motorcycles, and airplanes. As technology continues to evolve, the tire industry has witnessed significant advancements to meet the demands of modern transportation needs. Lets delve into the latest trends, technologies, and solutions shaping the future of the tire industry.",
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
            Ready to talk? Contact us today!
          </div>
          <Link href="/contact">
            <button className="p-5 w-[10rem] bg-gray-700 text-white">
              Email Us
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
