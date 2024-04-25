"use client";
import React, { useState } from "react";
export default function HowToOrder() {
  const [openSection, setOpenSection] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    if (openSection === index) {
      setOpenSection(null);
    } else {
      setOpenSection(index);
    }
  };
  return (
    <>
      <div className="p-14 bg-gray-100">
        <section className="mb-10 lg:mx-36 xl:mx-36 mx-4 md:mx-20">
          <p className="mb-4">
            We offer various secure payment modes to ensure the safety and
            confidentiality of your financial information. These options
            include:
          </p>
          <ul className="list-inside space-y-2 my-6">
            <ul className=" list-disc list-inside ml-5 space-y-2">
              <li>Credit Card/Debit Card</li>
            </ul>
            <ul className=" list-disc list-inside ml-5 space-y-2">
              <li>PayPal </li>
            </ul>
            <ul className=" list-disc list-inside ml-5 space-y-2">
              <li>Razorpay</li>
            </ul>
            <ul className=" list-disc list-inside ml-5 space-y-2">
              <li>Wire Transfer</li>
            </ul>
          </ul>
          <p className="mb-4">
            To prioritize your security, we process transactions through trusted
            payment gateway partners such as PayPal and ICICI. While our
            partners maintain robust data security systems, we are committed to
            providing prompt assistance should any issues arise during the
            payment process.
          </p>
        </section>
      </div>
      <div className="bg-white p-6 px-8 mb-10 lg:mx-36 xl:mx-36 mx-4 md:mx-20">
        <div className="border p-3">
          <button
            className="flex justify-between items-center w-full text-left"
            onClick={() => toggleSection(1)}
          >
            <span className="text-blue-900 font-bold">Order by delivery</span>
            <span>{openSection === 1 ? "-" : "+"}</span>
          </button>
          <div
            // style={{
            //   maxHeight: openSection === 1 ? "500px" : "0", // adjust this value based on your content
            //   overflow: "hidden",
            //   transition: "all 0.3s ease-in",
            //   paddingTop: openSection === 1 ? "0.2rem" : "0",
            //   paddingBottom: openSection === 1 ? "0.2rem" : "0",
            //   marginTop: openSection === 1 ? "0.2rem" : "0",
            //   marginBottom: openSection === 1 ? "0.2rem" : "0",
            // }}
            className={`overflow-hidden transition-[max-height] duration-1000 ease-in ${
              openSection === 1 ? 'max-h-96' : 'max-h-0'
            }`}
          >
            {openSection === 1 && (
              <div className="mt- py-2 border-t">
                <p>
                  If you are placing an order on behalf of a company, please
                  ensure that you have the necessary authorization. You can
                  place your order using the following methods:.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Repeat for each accordion item */}
        <div className="border p-3">
          <button
            className="flex justify-between items-center w-full text-left"
            onClick={() => toggleSection(2)}
          >
            <span className="text-blue-900 font-bold">
              Ordering by Telephone
            </span>
            <span>{openSection === 2 ? "-" : "+"}</span>
          </button>
          <div
            className={`overflow-hidden transition-[max-height] duration-1000 ease-in ${
              openSection === 2 ? 'max-h-96' : 'max-h-0'
            }`}
          >
            {openSection === 2 && (
              <div className="mt-2 py-4 border-t">
                <p>
                  Contact our customer service representative at +91-93418-00264
                  to place your order.
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="border p-3">
          <button
            className="flex justify-between items-center w-full text-left"
            onClick={() => toggleSection(3)}
          >
            <span className="text-blue-900 font-bold">Ordering by Email</span>
            <span>{openSection === 3 ? "-" : "+"}</span>
          </button>
          <div
            className={`overflow-hidden transition-[max-height] duration-1000 ease-in ${
              openSection === 3 ? 'max-h-96' : 'max-h-0'
            }`}
          >
            {openSection === 3 && (
              <div className="mt-2 pt-2 border-t">
                <p>
                  Send your requirements and inquiries to sales@marq-stats.com,
                  including all necessary details such as billing and delivery
                  address, along with your preferred payment method. Our team
                  will respond within one business day.
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="border p-3">
          <button
            className="flex justify-between items-center w-full text-left"
            onClick={() => toggleSection(4)}
          >
            <span className="text-blue-900 font-bold">Digital Delivery</span>
            <span>{openSection === 4 ? "-" : "+"}</span>
          </button>
          <div
            className={`overflow-hidden transition-[max-height] duration-1000 ease-in ${
              openSection === 4 ? 'max-h-96' : 'max-h-0'
            }`}
          >
            {openSection === 4 && (
              <div className="mt-2 py-4 border-t">
                <p>
                  Published reports will be delivered to your email address as a
                  PDF file within 24 to 48 working hours upon receipt of
                  payment.
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="border p-3">
          <button
            className="flex justify-between items-center w-full text-left"
            onClick={() => toggleSection(5)}
          >
            <span className="text-blue-900 font-bold">Customization</span>
            <span>{openSection === 5 ? "-" : "+"}</span>
          </button>
          <div
            className={`overflow-hidden transition-[max-height] duration-1000 ease-in ${
              openSection === 5 ? 'max-h-96' : 'max-h-0'
            }`}
          >
            {openSection === 5 && (
              <div className="mt-2 py-4 border-t">
                <p>
                  Marqstat Intelligence Pvt. Ltd. offers a level of
                  customization in market reports to align with your specific
                  requirements. However, the feasibility and time required for
                  customization will be assessed by our analysts based on
                  complexity, time constraints, and unique aspects of the
                  requested customization.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Repeat for Digital Delivery and Customization */}
      </div>
    </>
  );
}
