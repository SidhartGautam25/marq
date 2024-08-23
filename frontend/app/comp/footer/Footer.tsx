"use client";

import Image from "next/image";
import Link from "next/link";
import img2 from "@/public/youtube_1384060.png";
import img3 from "@/public/instagram_2111463.png";
import img4 from "@/public/linkedin_145807.png";
import marqstat from "@/public/images/Marqstats.svg";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-600 body-font ">
      <div className="container px-10 lg:px-20 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col justify-center ">
        {/* Follow Us Section */}
        <div className="w-64 m flex-shrink-0 md:mx-0 mx-auto text-center md:text-left ">
          <Link href="/">
            <div className="flex title-font font-medium items-center md:justify-start justify-center text-black text-3xl">
              <Image
                src={marqstat}
                alt="Marqstats logo"
                width={130}
                height={70}
              />
              {/* <span>Marqstats</span> */}
            </div>
          </Link>
          <div className="mt-4 md:ml-3 lg:max-w-sm">
            <h2 className="text-lg font-semibold">Follow Us</h2>
            {/* Social Icons */}
            {/* Include the actual paths to the social icons in the src attributes */}
            <div className="flex mt-4 mb-6 gap-4 justify-center md:justify-normal">
              <Link href="https://linkedin.com">
                <div className="text-gray-600 hover:text-gray-800">
                  <Image src={img4} alt="LinkedIn" width={24} height={24} />
                </div>
              </Link>
              <Link href="https://youtube.com">
                <div className="text-gray-600 hover:text-gray-800">
                  <Image src={img2} alt="youtube" width={24} height={24} />
                </div>
              </Link>
              <Link href="https://instagram.com">
                <div className="text-gray-600 hover:text-gray-800">
                  <Image src={img3} alt="instagram" width={24} height={24} />
                </div>
              </Link>
              {/* Repeat for other social icons */}
            </div>
            {/* Newsletter Form */}
            <div className="mt-4">
              <h2 className="text-lg font-semibold">
                Subscribe to our Newsletter
              </h2>
              <form className="mt-2">
                <input
                  className="w-full p-2 text-sm bg-gray-100 rounded"
                  placeholder="Your email address"
                  type="email"
                  required
                />
                <button
                  className="w-full mt-4 py-2 bg-black text-white rounded"
                  type="submit"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* Offerings, Coverage, and Quick Links Sections */}
        <div className="flex-grow flex flex-wrap -mb-10 md:pl-20 md:mt-0 mt-10 md:text-left text-center justify-around">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 ">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-2xl mb-5">
              Our Offerings
            </h2>
            <nav className="list-none mb-10 flex gap-5 font-medium flex-col">
              {/* Repeat for other offerings */}
              <li>
                <Link href="/services/industry-expertise">
                  <div className="text-gray-600 hover:text-gray-800">
                    Industry Expertise
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/services/market-assessment">
                  <div className="text-gray-600 hover:text-gray-800">
                    Market Assessment
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/services/data-resource">
                  <div className="text-gray-600 hover:text-gray-800">
                    Data Resources
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/services/business-consulting">
                  <div className="text-gray-600 hover:text-gray-800">
                    Business Consulting
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <div className="text-gray-600 hover:text-gray-800">
                    Reports
                  </div>
                </Link>
              </li>
              {/* <li>
                <Link href="/">
                  <div className="text-gray-600 hover:text-gray-800">
                    Subscription
                  </div>
                </Link>
              </li> */}
              {/* ... */}
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 ">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-2xl mb-5">
              Our Coverage
            </h2>
            <nav className="list-none mb-10 flex gap-5 font-medium flex-col">
              {/* Repeat for other coverage items */}
              <li>
                <Link href="/electric-and-hybrid-vehicles">
                  <div className="text-gray-600 hover:text-gray-800">
                    Electric and Hybrid Vehicles
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/sensors-electronics-and-electrical-equipment">
                  <div className="text-gray-600 hover:text-gray-800">
                    Electrical & Electronics Equip.
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/shared-mobility">
                  <div className="text-gray-600 hover:text-gray-800">
                    Shared Mobility
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/vehicles-components">
                  <div className="text-gray-600 hover:text-gray-800">
                    Vehicles and Components
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/connectivity-technology">
                  <div className="text-gray-600 hover:text-gray-800">
                    Connectivity Technology
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/tire">
                  <div className="text-gray-600 hover:text-gray-800">Tire</div>
                </Link>
              </li>
              {/* ... */}
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 ">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-2xl mb-5 ">
              Quick Links
            </h2>
            <nav className="list-none mb-10 flex gap-5 font-medium flex-col">
              {/* Repeat for other quick links */}
              <li>
                <Link href="/customer-faqs">
                  <div className="text-gray-600 hover:text-gray-800">FAQs</div>
                </Link>
              </li>
              <li>
                <Link href="/how-to-order">
                  <div className="text-gray-600 hover:text-gray-800">
                    How to Order
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy-2">
                  <div className="text-gray-600 hover:text-gray-800">
                    Privacy Policy
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions">
                  <div className="text-gray-600 hover:text-gray-800">
                    Terms & Conditions
                  </div>
                </Link>
              </li>
              {/* <li>
                <Link href="/">
                  <div className="text-gray-600 hover:text-gray-800">
                    Research Methodology
                  </div>
                </Link>
              </li> */}
              <li>
                <Link href="/career">
                  <div className="text-gray-600 hover:text-gray-800">
                    Career
                  </div>
                </Link>
              </li>
              {/* ... */}
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row justify-center">
          <p className="text-black font-bold text-sm text-center sm:text-left">
            © 2024 Marqstat Intelligence Private Limited
          </p>
        </div>
      </div>
    </footer>
  );
}
