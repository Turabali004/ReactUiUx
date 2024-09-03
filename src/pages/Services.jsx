import React, { useEffect } from 'react'
import { Hero, PrimaryButton, SocialBar } from '../components'
import { Link } from 'react-router-dom'
import { useDataGlobal } from '../context'
import image2 from "../assets/pictures/UIUX.png"
import image1 from "../assets/pictures/Rectangle 3.png"
import image3 from "../assets/pictures/Group 44.png"
import { FaCogs, FaBolt, FaDollarSign, FaUserCog } from "react-icons/fa";



function Services() {
  const {updateServicePage} = useDataGlobal()
  useEffect(() => updateServicePage(), [])


  const offerings = [
    { id: 1, src: image1, text: "Business Planing" },
    { id: 2, src: image2, text: "Web Development" },
    { id: 3, src: image3, text: "UI/UX Design" },
    { id: 4, src: image1, text: "Business Planing" },
    { id: 5, src: image2, text: "Web Development" },
    { id: 6, src: image3, text: "UI/UX Design" },
    { id: 7, src: image1, text: "Business Planing" },
    { id: 8, src: image2, text: "Web Development" },
    { id: 9, src: image3, text: "UI/UX Design" },
  ];
  return (
    <div>
      <Hero/>
      <SocialBar/>


      <Link>
        <div className="flex flex-col items-center p-4 mt-24">
          <h1 className="text-4xl font-bold mb-14">Our Offerings</h1>

          {/* Grid layout for displaying service offerings */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-6xl">
            {offerings.map((offering) => (
              <div
                key={offering.id}
                className="relative overflow-hidden  shadow-lg my-20"
              >
                <img
                  src={offering.src}
                  alt={`Image ${offering.id}`} // Alt text for accessibility
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center p-12 text-xl rounded-t-lg">
                  {offering.text}
                </div>
              </div>
            ))}
          </div>

          {/* Button to see more work */}
          <div className="mt-6">
            <button className="px-6 py-3 font-semibold bg-[#6a54f4] text-white hover:bg-blue-700 mt-10 mb-10">
              SEE OUR WORK
            </button>
          </div>
        </div>
      </Link>

      <PrimaryButton  />

      <div className="bg-black text-white py-12 lg:py-24 my-28">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Information section */}
          <div className="py-8 lg:py-12">
            <div className="bg-white container mx-auto px-4 lg:px-8 relative">
              <div className="flex flex-col p-8 bg-white text-black rounded-lg lg:rounded-xl">
                <h2 className="relative inline-block font-bold text-xl lg:text-2xl mb-6">
                  THAT LOT
                </h2>
                <p className="text-sm mb-8 lg:text-xl leading-relaxed font-light px-2">
                  Give your company a faster, more agile way to work with
                  freelancers and contractors. Find contract and pay your
                  external workforce in one click, with 100% compliance.
                </p>
              </div>
              <div className="absolute bottom-4 right-4 pr-32">
                <button className="bg-black text-white font-bold py-2 px-4">
                  BOOK A DEMO
                </button>
              </div>
            </div>
          </div>

          {/* Statistics section with icons */}
          <div className="flex flex-col lg:flex-row lg:gap-14 justify-center items-center space-y-6 lg:space-y-0 lg:space-x-12 mt-12 lg:mt-24">
            <div className="flex flex-col items-center text-3xl lg:text-4xl">
              <FaCogs className="mb-2" />
              <span className="text-center font-semibold">12 services</span>
            </div>
            <div className="flex flex-col items-center text-3xl lg:text-4xl">
              <FaBolt className="mb-2" />
              <span className="text-center font-semibold">200+ projects</span>
            </div>
            <div className="flex flex-col items-center text-3xl lg:text-4xl">
              <FaDollarSign className="mb-2" />
              <span className="text-center font-semibold">$200k+ Revenue</span>
            </div>
            <div className="flex flex-col items-center text-3xl lg:text-4xl">
              <FaUserCog className="mb-2" />
              <span className="text-center font-semibold">300+ Happy Clients</span>
            </div>
          </div>
        </div>
      </div>



    </div>
  )
}

export default Services
