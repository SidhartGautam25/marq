"use client";

import React from 'react';
import styles from './slid.module.css';
import ind1 from '@/public/ind1.jpg';
import ind2 from '@/public/ind2.jpg';
import ind3 from '@/public/ind3.jpg';
import ind4 from '@/public/ind4.jpg';
import ind5 from '@/public/ind5.jpg';
import ind6 from '@/public/ind6.jpg';
import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.slidermain}>
      <div className={styles.ourclients}>
        <h3>Data Driven Solutions for Automotive Organizations</h3>
      </div>
      <div className={styles.slider}>
        <div className={styles.slidertrack}>
          <div className={styles.slidercom}>
            <Image className={styles.logoimg} src={ind1} alt=''/>
          </div>
          <div className={styles.slidercom}>
            <Image className={styles.logoimg} src={ind2} alt=''/>
          </div>
          <div className={styles.slidercom}>
            <Image className={styles.logoimg} src={ind3} alt=''/>
          </div>
          <div className={styles.slidercom}>
            <Image className={styles.logoimg} src={ind4} alt=''/>
          </div>
          <div className={styles.slidercom}>
            <Image className={styles.logoimg} src={ind5} alt=''/>
          </div>
          <div className={styles.slidercom}>
            <Image className={styles.logoimg} src={ind6} alt=''/>
          </div>

          <div className={styles.slidercom}>
            <Image className={styles.logoimg} src={ind1} alt=''/>
          </div>
          <div className={styles.slidercom}>
            <Image className={styles.logoimg} src={ind2} alt=''/>
          </div>
          <div className={styles.slidercom}>
            <Image className={styles.logoimg} src={ind3} alt=''/>
          </div>
          <div className={styles.slidercom}>
            <Image className={styles.logoimg} src={ind4} alt=''/>
          </div>
          <div className={styles.slidercom}>
            <Image className={styles.logoimg} src={ind5} alt=''/>
          </div>
          <div className={styles.slidercom}>
            <Image className={styles.logoimg} src={ind6} alt=''/>
          </div>
        </div>
      </div>
    </div>
  );
}
