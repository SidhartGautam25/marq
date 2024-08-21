"use client";
// import Image from 'next/image';
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import finallogo from "@/public/images/logofinal.svg";
import marqstat from "@/public/images/Marqstats.svg";
// import img1 from '../../../public/icon-dropdown.svg';
export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpens, setIsDropdownOpens] = useState(false);
  const [isDropOpen, setIsDropOpen] = useState(false);

  return (
    <nav className="z-[10] border-gray-500 border-t-[0.1px] border-b-[0.1px] min-h-[14vh] p-4 lg:p-6 lg:flex w-full">
      <div className="flex items-center justify-between lg:ml-20 ">
        <Link href="/">
          <div className="">
            <Image src={marqstat} alt="" className=" h-16 w-36" />
          </div>
        </Link>
        <button
          className="text-white inline-flex items-center justify-center p-2 rounded-md lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Hamburger icon: */}
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path d="M6 18L18 6M6 6l12 12" /> // 'X' icon
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" /> // Hamburger icon
            )}
          </svg>
        </button>
      </div>

      <div
        className={`lg:flex lg:items-center pl-20 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="pt-2 pb-4 lg:p-0 lg:flex lg:space-x-4">
          <Link href="/">
            <span className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-700 lg:mt-0">
              Home
            </span>
          </Link>
          <div className="relative">
            <Link href="/industry-page">
              <span
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
                className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-700 lg:mt-0"
              >
                Industries
              </span>
            </Link>
            {/* <Image src={img1} alt="" className='w-4 h-4'/> */}
            {isDropdownOpen && (
              <ul
                className="absolute left-0 top-6 mt-2 py-2 w-48 bg-gray-400 rounded shadow-xl z-20"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <li className="block px-4 py-2 text-sm hover:bg-gray-600 hover:text-white">
                  <Link href="/electric-and-hybrid-vehicles">
                    <span>Electric and Hybrid Vehicles</span>
                  </Link>
                </li>
                <li className="block px-4 py-2 text-sm hover:bg-gray-600 hover:text-white">
                  <Link href="/vehicles-components">
                    <span>Vehicles and Components</span>
                  </Link>
                </li>
                <li className="block px-4 py-2 text-sm hover:bg-gray-600 hover:text-white">
                  <Link href="/shared-mobility">
                    <span>Shared Mobility</span>
                  </Link>
                </li>
                <li className="block px-4 py-2 text-sm hover:bg-gray-600 hover:text-white">
                  <Link href="/tire">
                    <span>Tire</span>
                  </Link>
                </li>
                <li className="block px-4 py-2 text-sm hover:bg-gray-600 hover:text-white">
                  <Link href="/connectivity-technology">
                    <span>Connectivity Technology</span>
                  </Link>
                </li>
                <li className="block px-4 py-2 text-sm hover:bg-gray-600 hover:text-white">
                  <Link href="/sensors-electronics-and-electrical-equipment">
                    <span>Sensors, Electronics, and Electrical Equipment</span>
                  </Link>
                </li>
              </ul>
            )}
          </div>
          <div className="relative">
            <Link href="/services">
              <span
                onMouseEnter={() => setIsDropdownOpens(true)}
                onMouseLeave={() => setIsDropdownOpens(false)}
                className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-700 lg:mt-0"
              >
                Services
              </span>
            </Link>
            {isDropdownOpens && (
              <ul
                className="absolute left-0 top-6 mt-2 py-2 w-48 bg-gray-400 rounded shadow-xl z-20"
                onMouseEnter={() => setIsDropdownOpens(true)}
                onMouseLeave={() => setIsDropdownOpens(false)}
              >
                <li className="block px-4 py-2 text-sm hover:bg-gray-600 hover:text-white">
                  <Link href="/services/industry-expertise">
                    <span>Industry Expertise</span>
                  </Link>
                </li>
                <li className="block px-4 py-2 text-sm hover:bg-gray-600 hover:text-white">
                  <Link href="/services/market-assessment">
                    <span>Market Assessment</span>
                  </Link>
                </li>
                <li className="block px-4 py-2 text-sm hover:bg-gray-600 hover:text-white">
                  <Link href="/services/data-resource">
                    <span>Data Resource</span>
                  </Link>
                </li>
                <li className="block px-4 py-2 text-sm hover:bg-gray-600 hover:text-white">
                  <Link href="/services/business-consulting">
                    <span>Business Consulting</span>
                  </Link>
                </li>
              </ul>
            )}
          </div>
          <Link href="/insight">
            <span className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-700 lg:mt-0">
              Insights
            </span>
          </Link>

          <Link href="/report-store">
            <span className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-700 lg:mt-0">
              Reports
            </span>
          </Link>
          {/* <Image src={img1} alt="" className='w-4 h-4'/> */}

          <Link href="/contact">
            <span className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-700 lg:mt-0">
              Contact Us
            </span>
          </Link>
          <Link href="/about">
            <span className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-700 lg:mt-0">
              About Us
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
