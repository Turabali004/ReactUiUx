import React, { useEffect, useState } from 'react'
import { Hero, Header,ServiceDesc, Testimonials } from '../components/index'
import { useDataGlobal } from '../context'

import webdevimg from "../assets/pictures/Rectangle 84.png";

function ServicesDetail() {
    const {updateWebDevPage} = useDataGlobal()
    useEffect(() => updateWebDevPage(), [])
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };

    const cardData = [
      {
        title: "Discovery",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      },
      {
        title: "Planning",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      },
      {
        title: "Execution",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      },
      {
        title: "Evaluation",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      },
    ];

    const faqs = [
      {
        question: "What is your return policy?",
        answer:
          "Our return policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately, we can't offer you a refund or exchange. To be eligible for a return, your item must be unused and in the same condition that you received it.",
      },
      {
        question: "How do I track my order?",
        answer:
          "You can track your order using the tracking link provided in your order confirmation email. If you have an account with us, you can also view the tracking information by logging into your account.",
      },
      {
        question: "Do you offer international shipping?",
        answer:
          "Yes, we offer international shipping to most countries. Shipping fees and delivery times vary depending on your location and will be calculated at checkout.",
      },
      // Add more FAQs as needed
    ];
  return (
    <div>
      <Header/>
      <Hero/>

      <ServiceDesc/>

       {/* Section with service details and image */}
       <div className="flex flex-row items-start p-6 my-20">
        <div className="flex-1">
          <div className="mb-4">
            <h2 className="text-xl font-bold">Front-End Development</h2>
            <hr className="my-2" />
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-bold">Back-End Development</h2>
            <hr className="my-2" />
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-bold">
              Content Management System (CMS) Integration
            </h2>
            <hr className="my-2" />
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-bold">Word-Press Development</h2>
            <hr className="my-2" />
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-bold">Shopify Development</h2>
            <hr className="my-2" />
          </div>
        </div>
        <div className="flex-1">
          <img
            src={webdevimg}
            alt="Service"
            className="w-full h-80 object-contain"
          />
        </div>
      </div>

      <Testimonials/>


      {/* faq's */}
      <section className="py-12 bg-gray-100">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold">Frequently Asked Questions</h2>
        <div className="flex justify-center mt-2">
          <div className="w-10 h-1 bg-purple-600 rounded-full"></div>
        </div>
      </div>
      <div className="max-w-2xl mx-auto p-4 overflow-hidden">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4 border-b border-gray-300 overflow-hidden">
            <button
              className="w-full text-left py-4 text-lg font-medium flex justify-between items-center overflow-hidden"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className={`text-2xl ${activeIndex === index ? "rotate-180" : ""}`}>
                &#9662;
              </span>
            </button>
            {activeIndex === index && (
              <div className="p-4 text-gray-700 transition-all duration-300 overflow-hidden">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>


    <div className='h-96 w-full'></div>
    </div>
  )
}

export default ServicesDetail
