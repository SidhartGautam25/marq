import { NavBar, Footer } from "../comp";
export default function Contact() {
  const tick = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-blue-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );

  return (
    <div>
      <div className="bg-[#1B1F29]">
        <NavBar />
      </div>
      <div className="flex flex-col">
        {/* 1st Part */}
        <div className="py-4 bg-[#1B1F29] text-white lg:pt-20">
          <h1 className="px-8 text-3xl font-bold p-2 md:text-7xl md:px-32">
            Contact Us
          </h1>

          <div className="px-8 lg:flex p-2 lg:px-32 lg:pt-10 ">
            <div className="lg:w-1/2 lg:pr-12">
              <div className="lg:pr-28 tracking-wide font-extralight">
                Thank you for your interest in Marqstat Intelligence. Please
                send an email or give a call to help us connect you to the right
                expert.
              </div>
              <div className="lg:my-10">
                <div className=" border-b border-gray-500 flex flex-col lg:flex-row py-6 ">
                  <div className="flex w-12 h-12 rounded-full bg-blue-500 ">
                    {/* className="mx-auto self-center w-8 h-8  " */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      id="location"
                      className="mx-auto self-center w-8 h-8 "
                    >
                      <path d="M20.46,9.63A8.5,8.5,0,0,0,7.3,3.36,8.56,8.56,0,0,0,3.54,9.63,8.46,8.46,0,0,0,6,16.46l5.3,5.31a1,1,0,0,0,1.42,0L18,16.46A8.46,8.46,0,0,0,20.46,9.63ZM16.6,15.05,12,19.65l-4.6-4.6A6.49,6.49,0,0,1,5.53,9.83,6.57,6.57,0,0,1,8.42,5a6.47,6.47,0,0,1,7.16,0,6.57,6.57,0,0,1,2.89,4.81A6.49,6.49,0,0,1,16.6,15.05ZM12,6a4.5,4.5,0,1,0,4.5,4.5A4.51,4.51,0,0,0,12,6Zm0,7a2.5,2.5,0,1,1,2.5-2.5A2.5,2.5,0,0,1,12,13Z"></path>
                    </svg>
                  </div>
                  <div className="lg:px-6 text-xl">
                    <p className="text-base">OFFICE</p>
                    <p className="font-semibold">
                      B-55, Sector 2, Noida 201301, India
                    </p>
                  </div>
                </div>

                <div className="border-b border-gray-500 flex flex-col lg:flex-row py-6">
                  <div className="flex w-12 h-12 rounded-full bg-blue-500 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      id="phone"
                      className="mx-auto self-center w-8 h-8 "
                    >
                      <path d="M27.308,20.649l-2.2-2.2a3.521,3.521,0,0,0-4.938-.021,2.152,2.152,0,0,1-2.729.267A15.026,15.026,0,0,1,13.3,14.562a2.181,2.181,0,0,1,.284-2.739A3.521,3.521,0,0,0,13.553,6.9l-2.2-2.2a3.514,3.514,0,0,0-4.961,0l-.633.634c-3.3,3.3-3.053,10.238,3.813,17.1,4.14,4.141,8.307,5.875,11.686,5.875a7.5,7.5,0,0,0,5.418-2.061l.634-.634A3.513,3.513,0,0,0,27.308,20.649ZM25.894,24.2l-.634.634c-2.6,2.6-8.339,2.125-14.276-3.813S4.571,9.34,7.171,6.74L7.8,6.107a1.511,1.511,0,0,1,2.133,0l2.2,2.2a1.511,1.511,0,0,1,.021,2.11,4.181,4.181,0,0,0-.531,5.239,17.01,17.01,0,0,0,4.713,4.706,4.179,4.179,0,0,0,5.231-.517,1.512,1.512,0,0,1,2.118.013l2.2,2.2A1.51,1.51,0,0,1,25.894,24.2Z"></path>
                    </svg>
                  </div>
                  <div className="lg:px-6 text-xl">
                    <p className="text-base">PHONE</p>
                    <p className="font-semibold">+91 - 93418 00264</p>
                  </div>
                </div>

                <div className=" border-b border-gray-500 flex flex-col lg:flex-row py-6">
                  <div className="flex justify-center items-center w-12 h-12 rounded-full bg-blue-500 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      id="Mail"
                      className="mx-auto self-center w-8 h-6 "
                    >
                      <g fill="#000000">
                        <path
                          fill="none"
                          d="M290 360.2c-9.1 9.6-21.7 15.1-34.9 15.1h-.6c-13.5-.2-26-6-35-16L42 187.7v265c0 11.6 6 18.3 9.5 18.3h411c3.5 0 9.5-6.6 9.5-18.3V193.6L290 360.2z"
                        ></path>
                        <path
                          fill="none"
                          d="m248.4 331.7.6.7c2.1 2.5 4.8 2.9 6.1 2.9 1.4 0 4-.3 6.2-2.7l.6-.7.7-.6L446 163.6l-189.2.3-183.7-1.2 175.3 169z"
                        ></path>
                        <path
                          fill="#000000"
                          d="m462.2 123.5-205.3.5-205.3-1h-.1C23.9 123 2 148.9 2 181.3v271.4C2 485.1 23.9 511 51.5 511h411c27.6 0 49.5-25.9 49.5-58.3V181.3c0-32.4-21.7-57.8-49.8-57.8zm-16.1 40L262.7 331.2l-.7.6-.6.7c-2.2 2.4-4.8 2.7-6.2 2.7-1.4 0-4-.4-6.1-2.9l-.6-.7L73.2 162.7l183.7 1.2 189.2-.4zM462.5 471h-411c-3.5 0-9.5-6.6-9.5-18.3v-265l177.6 171.6c9 10 21.7 15.8 35.2 16h.6c13.3 0 25.7-5.5 34.8-15.1l182-166.6v259.1c-.2 11.7-6.2 18.3-9.7 18.3z"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <div className="lg:px-6 text-xl">
                    <p className=" text-base">EMAIL</p>
                    <p className="font-semibold">
                      info@marqstatintelligence.com
                    </p>
                  </div>
                </div>

                <div className="pt-6">
                  <p className="font-bold">KEEP IN TOUCH</p>
                  <div className="flex py-4">
                    {/* className="w-10 h-10 mx-4" */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="101.996"
                      height="102"
                      viewBox="0 0 101.996 102"
                      id="instagram"
                      className="w-10 h-10 mx-4"
                    >
                      <defs>
                        <radialGradient
                          id="a"
                          cx="13.551"
                          cy="102.482"
                          r="133.147"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset=".09" stop-color="#fa8f21"></stop>
                          <stop offset=".78" stop-color="#d82d7e"></stop>
                        </radialGradient>
                        <radialGradient
                          id="b"
                          cx="61.859"
                          cy="107.051"
                          r="104.938"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop
                            offset=".64"
                            stop-color="#8c3aaa"
                            stop-opacity="0"
                          ></stop>
                          <stop offset="1" stop-color="#8c3aaa"></stop>
                        </radialGradient>
                      </defs>
                      <path
                        fill="url(#a)"
                        d="M34,51A17,17,0,1,1,51,68,17,17,0,0,1,34,51m-9.191,0A26.188,26.188,0,1,0,51,24.812,26.187,26.187,0,0,0,24.812,51M72.1,23.774a6.12,6.12,0,1,0,6.122-6.118h0a6.123,6.123,0,0,0-6.12,6.118M30.4,92.513a28.187,28.187,0,0,1-9.471-1.754,15.85,15.85,0,0,1-5.866-3.815,15.735,15.735,0,0,1-3.815-5.862A28.161,28.161,0,0,1,9.49,71.611c-.247-5.376-.3-6.991-.3-20.61s.053-15.23.3-20.61a28.374,28.374,0,0,1,1.754-9.471,15.85,15.85,0,0,1,3.815-5.866,15.718,15.718,0,0,1,5.866-3.815A28.161,28.161,0,0,1,30.4,9.484c5.376-.247,6.991-.3,20.6-.3s15.23.053,20.61.3a28.373,28.373,0,0,1,9.471,1.754,15.8,15.8,0,0,1,5.866,3.815,15.8,15.8,0,0,1,3.815,5.866,28.162,28.162,0,0,1,1.754,9.471c.247,5.38.3,6.991.3,20.61s-.049,15.23-.3,20.61a28.294,28.294,0,0,1-1.754,9.471,16.886,16.886,0,0,1-9.681,9.677,28.161,28.161,0,0,1-9.471,1.754c-5.376.247-6.991.3-20.61.3s-15.23-.049-20.6-.3M29.974.309A37.4,37.4,0,0,0,17.595,2.678,25.015,25.015,0,0,0,8.56,8.56a24.918,24.918,0,0,0-5.883,9.034A37.407,37.407,0,0,0,.309,29.974C.058,35.412,0,37.15,0,51S.058,66.588.309,72.026A37.405,37.405,0,0,0,2.678,84.405,24.931,24.931,0,0,0,8.56,93.44a25.076,25.076,0,0,0,9.034,5.883,37.43,37.43,0,0,0,12.379,2.369c5.441.247,7.176.309,21.026.309s15.588-.058,21.026-.309a37.405,37.405,0,0,0,12.379-2.369A26.075,26.075,0,0,0,99.322,84.405a37.3,37.3,0,0,0,2.369-12.379c.247-5.442.3-7.176.3-21.026s-.058-15.588-.3-21.026a37.394,37.394,0,0,0-2.369-12.379A25.08,25.08,0,0,0,93.44,8.56a24.955,24.955,0,0,0-9.03-5.883A37.347,37.347,0,0,0,72.03.309C66.593.062,64.854,0,51,0s-15.59.058-21.03.309"
                        data-name="Path 14"
                      ></path>
                      <path
                        fill="url(#b)"
                        d="M34,51A17,17,0,1,1,51,68,17,17,0,0,1,34,51m-9.191,0A26.188,26.188,0,1,0,51,24.812,26.187,26.187,0,0,0,24.812,51M72.1,23.774a6.12,6.12,0,1,0,6.122-6.118h0a6.123,6.123,0,0,0-6.12,6.118M30.4,92.513a28.187,28.187,0,0,1-9.471-1.754,15.85,15.85,0,0,1-5.866-3.815,15.735,15.735,0,0,1-3.815-5.862A28.161,28.161,0,0,1,9.49,71.611c-.247-5.376-.3-6.991-.3-20.61s.053-15.23.3-20.61a28.374,28.374,0,0,1,1.754-9.471,15.85,15.85,0,0,1,3.815-5.866,15.718,15.718,0,0,1,5.866-3.815A28.161,28.161,0,0,1,30.4,9.484c5.376-.247,6.991-.3,20.6-.3s15.23.053,20.61.3a28.373,28.373,0,0,1,9.471,1.754,15.8,15.8,0,0,1,5.866,3.815,15.8,15.8,0,0,1,3.815,5.866,28.162,28.162,0,0,1,1.754,9.471c.247,5.38.3,6.991.3,20.61s-.049,15.23-.3,20.61a28.294,28.294,0,0,1-1.754,9.471,16.886,16.886,0,0,1-9.681,9.677,28.161,28.161,0,0,1-9.471,1.754c-5.376.247-6.991.3-20.61.3s-15.23-.049-20.6-.3M29.974.309A37.4,37.4,0,0,0,17.595,2.678,25.015,25.015,0,0,0,8.56,8.56a24.918,24.918,0,0,0-5.883,9.034A37.407,37.407,0,0,0,.309,29.974C.058,35.412,0,37.15,0,51S.058,66.588.309,72.026A37.405,37.405,0,0,0,2.678,84.405,24.931,24.931,0,0,0,8.56,93.44a25.076,25.076,0,0,0,9.034,5.883,37.43,37.43,0,0,0,12.379,2.369c5.441.247,7.176.309,21.026.309s15.588-.058,21.026-.309a37.405,37.405,0,0,0,12.379-2.369A26.075,26.075,0,0,0,99.322,84.405a37.3,37.3,0,0,0,2.369-12.379c.247-5.442.3-7.176.3-21.026s-.058-15.588-.3-21.026a37.394,37.394,0,0,0-2.369-12.379A25.08,25.08,0,0,0,93.44,8.56a24.955,24.955,0,0,0-9.03-5.883A37.347,37.347,0,0,0,72.03.309C66.593.062,64.854,0,51,0s-15.59.058-21.03.309"
                        data-name="Path 15"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 28.87 28.87"
                      id="linkedin"
                      className="w-10 h-10 mx-4"
                    >
                      <g data-name="Layer 2">
                        <g data-name="Layer 1">
                          <rect
                            width="28.87"
                            height="28.87"
                            fill="#0b86ca"
                            rx="6.48"
                            ry="6.48"
                          ></rect>
                          <path
                            fill="#fff"
                            d="M8 12h3v9.68H8zm1.53-4.81a1.74 1.74 0 11-1.74 1.75 1.74 1.74 0 011.74-1.75M12.92 12h2.89v1.32a3.16 3.16 0 012.85-1.56c3 0 3.61 2 3.61 4.61v5.31h-3V17c0-1.12 0-2.57-1.56-2.57s-1.8 1.22-1.8 2.48v4.79h-3z"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 p-2 ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.457608545338!2d77.31265507520108!3d28.58604568619074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce458b2abc42d%3A0x7fd8533b7b389eb9!2sb%2C%2055%2C%20B%20Block%2C%20Sector%202%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1713322465774!5m2!1sen!2sin"
                className=" h-[400px] w-full lg:h-full md:h-[600px]"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        {/* 2nd Part */}
        <div className=" lg:flex lg:mx-32 lg:py-24">
          <div className="px-8 pt-6 flex flex-col justify-center lg:w-1/2">
            <h1 className="py-2 text-blue-700 font-semibold lg:py-6">
              READY TO WORK WITH US?
            </h1>
            <p className="py-2 lg:py-6 font-semibold text-3xl md:pr-6">
              If You're Ready to Step into a Bigger Picture of Success, Let's
              Talk.
            </p>
            <p className="py-2 md:pr-20 text-lg font-light  lg:py-6">
              Our dynamic team includes analysts, data scientists, and
              specialists with expertise spanning numerous industries including
              leading positions in energy, healthcare, and transportation.
            </p>
            <ul className="py-2 lg:py-6 font-semibold text-gray-700 lg:text-lg ">
              <li className="py-1 flex">
                <span className="mr-2">{tick}</span>24x7 Support
              </li>
              <li className="py-1 flex">
                <span className="mr-2">{tick}</span>Commitment to Doing Right
              </li>
              <li className="py-1 flex">
                <span className="mr-2">{tick}</span>Collaboration with Clients
              </li>
              <li className="py-1 flex">
                <span className="mr-2">{tick}</span>Achieve Results that Matter
              </li>
            </ul>
          </div>
          <form className="bg-white md:shadow-md rounded px-8 pt-6 pb-8 mb-4 lg:p-10">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="firstName"
              >
                Name <span className=" text-red-600">*</span>
              </label>
              <div className="flex gap-4">
                <input
                  className="border bg-gray-50  w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="firstName"
                  type="text"
                  placeholder="First Name"
                  required
                />
                <input
                  className=" border bg-gray-50 w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="lastName"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email <span className=" text-red-600">*</span>
              </label>
              <input
                className=" border bg-gray-50 w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="contactNumber"
              >
                Contact Number <span className=" text-red-600">*</span>
              </label>
              <input
                className=" border bg-gray-50 w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="contactNumber"
                type="tel"
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Comment or Message
              </label>
              <textarea
                className=" border bg-gray-50 w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                rows={4}
              />
            </div>
            <button
              className="bg-blue-500 text-white hover:font-semibold hover:bg-blue-700  py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
