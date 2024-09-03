import React from 'react';
import { PrimaryButton } from "../components/index"

const FeatureBanner = ({ visible }) => {

  return (
    <div className='flex justify-center items-center lg:py-20 my-20'>
      <div className="relative w-[90%] m-auto bg-gray-200 p-6 lg:px-10 lg:pb-20 text-xl">
        <h2 className="font-extrabold text-lg mb-7">THAT LOT</h2>
        <p className="w-[95%] text-sm overflow-hidden pl- lg:text-2xl text- leading-relaxed font-light">
          Give your company a faster, more agile way to work with freelancers and contractors. Find contract and pay your external workforce in one click, with 100% compliance.
        </p>
        {/* Container for positioning the button */}
        <div className="absolute bottom-6 right-6">
          <PrimaryButton visibility={visible} content={{ content: "Book A DEMO" }} className='my-4' />
        </div>
      </div>
    </div>
  );
};

export default FeatureBanner;
