import React, { useRef } from 'react';

function Testimonial() {
  const testimonials = [
    {
      name: "John Smith",
      role: "Customer, Agent",
      review: "Give your company a faster, more agile way to work with freelancers and contractors. Find contract and pay your external workforce in one click, with 100% compliance.",
      avatar: "https://via.placeholder.com/40",
      color: "bg-red-500",
    },
    {
      name: "Jane Doe",
      role: "Customer, Agent",
      review: "This service has revolutionized our workflow, allowing us to efficiently manage our remote teams. Highly recommended!",
      avatar: "https://via.placeholder.com/40",
      color: "bg-green-500",
    },
    {
      name: "Alice Johnson",
      role: "Customer, Agent",
      review: "The platform is incredibly user-friendly, and the support team is always there when you need them.",
      avatar: "https://via.placeholder.com/40",
      color: "bg-blue-500",
    },
    {
      name: "Bob Williams",
      role: "Customer, Agent",
      review: "An excellent tool for managing our remote teams, with fantastic support!",
      avatar: "https://via.placeholder.com/40",
      color: "bg-yellow-500",
    },
  ];

  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-5xl p-6 overflow-hidden">
        <div className="flex items-center justify-between mb-4 ">
          <button 
            onClick={scrollLeft} 
            className=" text-2xl z-10 bg-white px-2 overflow-hidden">
            {'<'}
          </button>
          <h2 className="text-center text-2xl font-bold mx-4 overflow-hidden">Don't just take our word for it..</h2>
          <button 
            onClick={scrollRight} 
            className="text-2xl z-10 bg-white px-2 overflow-hidden">
            {'>'}
          </button>
        </div>
        <div className="relative overflow-hidden">
          <div 
            ref={scrollContainerRef} 
            className="flex overflow-x-auto scroll-smooth space-x-6 py-4 overflow-hidden no-scrollbar">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-80 h-80 border shadow-lg flex-shrink-0 overflow-hidden border-none">
                <div className="flex space-x-2 overflow-hidden">
                  <div className={`${testimonial.color} p-2 overflow-hidden text-white text-sm`}>
                    <svg className="h-8 w-8 fill-current" viewBox="0 0 20 20">
                      <polygon points="10 1.5 13.09 7.27 19.02 7.91 14.54 12.13 15.82 18.02 10 15.27 4.18 18.02 5.46 12.13 0.98 7.91 6.91 7.27 10 1.5"></polygon>
                    </svg>
                  </div>
                  <h3 className="font-bold pr-24">REVIEW</h3>
                </div>
                <hr />
                <div className="mt-2 p-4 flex flex-col items-start">
                  <div className="flex space-x-2 overflow-hidden py-4">
                    <img
                      src={testimonial.avatar}
                      alt="Avatar"
                      className="rounded-full w-8 h-8"
                    />
                    <div className='px-2'>
                      <p className="text-sm font-semibold overflow-hidden">{testimonial.name}</p>
                      <p className="text-xs text-gray-400 overflow-hidden">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="mt-2 text-md text-gray-500 overflow-hidden">
                    {testimonial.review}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
