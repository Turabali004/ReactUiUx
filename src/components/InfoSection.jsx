import React from 'react';

const InfoSection = ({ image, title, description, listItems, linkText, linkUrl, reverse }) => {
  return (
    <div className={`md:w-[90%] mx-auto flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center lg:py-8 my-20`}>
      {/* Image Section */}
      <div className="md:w-1/2">
        <img src={image} alt={title} className="w-full h-auto" />
      </div>

      {/* Text Section */}
      <div className="md:w-1/2 px-4 overflow-hidden">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        {/* Updated Description Styling */}
        <p className="mb-4 text-lg md:text-xl text-gray-700 leading-relaxed font-light">
          {description}
        </p>
        {listItems && (
          <ul className="mb-4 list-disc list-inside">
            {listItems.map((item, index) => (
              <li key={index} className="text-lg text-gray-800 overflow-hidden font-bold ">{item}</li>
            ))}
          </ul>
        )}
        <a href={linkUrl} className="text-black hover:text-blue-800 underline">
          {linkText}
        </a>
      </div>
    </div>
  );
};

export default InfoSection;
