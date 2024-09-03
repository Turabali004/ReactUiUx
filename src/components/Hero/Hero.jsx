import React from "react";
import PrimaryButton from "../PrimaryButton";
import SecondaryButton from "../SecondaryButton";
import { useDataGlobal } from "../../context";

function Hero({ titleStyle, contentStyle }) {
  const { title, content, homeImg, aboutImg, serviceImg, webDevImg } = useDataGlobal();

  // Dynamically determine which image to use
  let backgroundImage = homeImg; // Default to homeImg
  if (aboutImg) backgroundImage = aboutImg;
  if (serviceImg) backgroundImage = serviceImg;
  if (webDevImg) backgroundImage = webDevImg;

  return (
    <div className="relative h-screen flex items-center justify-start bg-black text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-[90%] max-w-3xl px-4 sm:px-6 md:px-8 lg:px-12 text-center">
        <div className="flex flex-col gap-6 md:gap-8 lg:gap-12">
          <h1 className={`${titleStyle} text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 overflow-hidden`}>
            {title}
          </h1>
          <p className={`${contentStyle} text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-light`}>
            {content}
          </p>

          {/* Call to Action Buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <PrimaryButton visibility={true} />
            <SecondaryButton content={{ content: "REQUEST A QUOTE" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
