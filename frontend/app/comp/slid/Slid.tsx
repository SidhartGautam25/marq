"use client";

import React from "react";
import styles from "./slid.module.css";
import ind1 from "@/public/ind1.jpg";
import ind2 from "@/public/ind2.jpg";
import ind3 from "@/public/ind3.jpg";
import ind4 from "@/public/ind4.jpg";
import ind5 from "@/public/ind5.jpg";
import ind6 from "@/public/ind6.jpg";
import Image from "next/image";
import cli1 from "@/public/images/clients/client1.jpg";
import cli2 from "@/public/images/clients/client2.jpg";
import cli3 from "@/public/images/clients/client3.jpg";
import cli4 from "@/public/images/clients/client4.jpg";
import cli5 from "@/public/images/clients/client5.jpg";
import cli6 from "@/public/images/clients/client6.jpg";
import cli7 from "@/public/images/clients/client7.jpg";
import cli8 from "@/public/images/clients/client8.jpg";
import cli9 from "@/public/images/clients/client9.jpg";
import cli10 from "@/public/images/clients/client10.jpg";

export default function Home() {
  return (
    <div className="pt-10 pb-16 flex flex-col ">
      <div className="flex justify-center ">
        <div className=" lg:w-fit lg:px-6 px-4 pb-4 text-center text-xl lg:text-2xl font-semibold mt-5 border-r-4 border-b-2 border-gray-300 rounded-xl mx-2">
          <h3>Data Driven Solutions for Automotive Organizations</h3>
        </div>
      </div>

      <div className={styles.slider}>
        <div className={styles.slidertrack}>
          <div className={styles.slidercom}>
            <Image className={styles.logoimg} src={cli1} alt="" />
          </div>
          <div className={styles.slidercom}>
            <Image className={styles.logoimg} src={cli2} alt="" />
          </div>
          <div className={styles.slidercom}>
            <Image className={styles.logoimg} src={cli3} alt="" />
          </div>
          <div className={styles.slidercom}>
            <Image className={styles.logoimg} src={cli4} alt="" />
          </div>
          <div className={styles.slidercom}>
            <Image className={styles.logoimg} src={cli5} alt="" />
          </div>
          <div className={styles.slidercom}>
            <Image className={styles.logoimg} src={cli6} alt="" />
          </div>

          <div className={styles.slidercom}>
            <Image className={styles.logoimg} src={cli7} alt="" />
          </div>
          <div className={styles.slidercom}>
            <Image className={styles.logoimg} src={cli8} alt="" />
          </div>
          <div className={styles.slidercom}>
            <Image className={styles.logoimg} src={cli9} alt="" />
          </div>
          <div className={styles.slidercom}>
            <Image className={styles.logoimg} src={cli10} alt="" />
          </div>
          <div className={styles.slidercom}>
            <Image className={styles.logoimg} src={cli1} alt="" />
          </div>
          <div className={styles.slidercom}>
            <Image className={styles.logoimg} src={cli2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
