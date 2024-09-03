import React from 'react'
import img from "../assets/pictures/img1.png"

function PromoSection() {
  return (
    <div className='w-[100%] flex justify-center items-center lg:py-12 my-20'>
      <section className="lg:w-10/12 w-full p-8 lg:p-16">
      <div className="">
        <img
          src={`${img}`}
          alt="Digital Connection"
          className="w-full h-auto"
        />
      </div>
      <div className=" w-full mt-8 lg:mt-0 lg:pl-2 lg:pr-5 font-bold text-center lg:text-left ">
        <p className="text-xl lg:text-2xl font-dubai overflow-hidden">
          Give your company a faster, more agile way to work with freelancers and contractors. Find, contract, and pay your external workforce in one click, with 100% compliance.
        </p>
      </div>
    </section>
    </div>
  )
}

export default PromoSection
