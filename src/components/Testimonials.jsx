import React, { useState } from "react";

const testimonials = [
  {
    company: "Company Name",
    logo: "", // Replace with the actual path to the logo
    feedback:
      "Lorem ipsum dolor sit amet consectetur. Felis lacus at habitasse ut quis semper. Sit lectus nibh arcu risus scelerisque neque. At at eget id laoreet sed diam orci. Orci turpis magna mauris elit aliquam id arcu viverra. Orci vulputate tellus tincidunt nullam etiam. Ut morbi id elementum quam.",
  },
  {
    company: "Another Company",
    logo: "", // Replace with the actual path to another logo
    feedback:
      "Another testimonial text goes here. It can be a longer or shorter text depending on the feedback from the client. Adjust accordingly for best fit.",
  },
  {
    company: "Another Company",
    logo: "", // Replace with the actual path to another logo
    feedback:
      "Another testimonial text goes here. It can be a longer or shorter text depending on the feedback from the client. Adjust accordingly for best fit.",
  },
  // Add more testimonials as needed
];





function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-12 bg-white text-black my-24">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold">Testimonial's</h2>
        <div className="flex justify-center mt-2">
          <div className="w-10 h-1 bg-purple-600 rounded-full"></div>
        </div>
      </div>
      <div className="relative flex items-center justify-center max-w-2xl mx-auto p-8">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="absolute left-0 z-10 p-2 bg-transparent text-2xl"
        >
          &#10094;
        </button>
        {/* Testimonial Card */}
        <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 mx-4 transition-all duration-300">
          <img
            src={testimonials[currentIndex].logo}
            alt={`${testimonials[currentIndex].company} logo`}
            className="w-12 h-12 mb-4"
          />
          <h3 className="text-lg font-semibold text-purple-600">
            {testimonials[currentIndex].company}
          </h3>
          <p className="text-center text-gray-600 mt-2">
            {testimonials[currentIndex].feedback}
          </p>
        </div>
        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-0 z-10 p-2 bg-transparent text-2xl"
        >
          &#10095;
        </button>
      </div>
      {/* Indicator Dots */}
      <div className="flex justify-center mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 mx-1 rounded-full ${
              currentIndex === index ? "bg-black" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
