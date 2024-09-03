import React from 'react';
import { FaCogs, FaProjectDiagram, FaDollarSign, FaSmile } from 'react-icons/fa'; // Importing icons from FontAwesome
import img1 from '../assets/pictures/Rectangle 12.png';
import img2 from '../assets/pictures/Rectangle 13.png';
import img3 from '../assets/pictures/Rectangle 14.png';
import img4 from '../assets/pictures/Rectangle 15.png';

const ServicesComponent = () => {
  return (
    <div className="bg-black text-white pt-20 pb-12">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4">
        {/* Image Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <img src={img1} alt="Image 1" className="w-full h-48 sm:h-72 object-cover" />
          <img src={img2} alt="Image 2" className="w-full h-48 sm:h-72 object-cover" />
          <img src={img3} alt="Image 3" className="w-full h-48 sm:h-72 object-cover" />
          <img src={img4} alt="Image 4" className="w-full h-48 sm:h-72 object-cover" />
        </div>

        {/* Text Section */}
        <div className="max-w-3xl mx-auto lg:text-left mb-12 px-3">
          <p className="mb-6 text-xl lg:text-4xl  font-bold tracking-wide">
            We specialize in delivering cutting-edge IT services tailored to meet the unique needs of businesses across industries. Our expert team is dedicated to providing comprehensive solutions that drive efficiency, enhance security, and foster innovation.
          </p>
          <a href="#" className="underline text-white text-lg">
            Pay your external workforce in one click.
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto flex flex-wrap justify-around items-center py-6 text-lg sm:text-2xl lg:text-4xl font-bold">
        {/* Service Stats */}
        <div className="text-center mb-6 md:mb-0 w-1/2 md:w-auto">
          <div className="mb-2">
            <FaCogs className="w-10 h-10 mx-auto" /> {/* Services Icon */}
          </div>
          <p>12 Services</p>
        </div>
        <div className="text-center mb-6 md:mb-0 w-1/2 md:w-auto">
          <div className="mb-2">
            <FaProjectDiagram className="w-10 h-10 mx-auto" /> {/* Projects Icon */}
          </div>
          <p>200+ Projects</p>
        </div>
        <div className="text-center mb-6 md:mb-0 w-1/2 md:w-auto">
          <div className="mb-2">
            <FaDollarSign className="w-10 h-10 mx-auto" /> {/* Revenue Icon */}
          </div>
          <p>$200k+ Revenue</p>
        </div>
        <div className="text-center w-1/2 md:w-auto">
          <div className="mb-2">
            <FaSmile className="w-10 h-10 mx-auto" /> {/* Happy Clients Icon */}
          </div>
          <p>300+ Happy Clients</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;
