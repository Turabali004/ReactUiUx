import React, { useEffect } from "react";
import { Hero, SocialBar, Testimonials } from "../components";
import { useDataGlobal } from "../context";
import Team from "../components/Team";
import Reason from "../components/Reason";

function About() {
  const { updateAboutPage } = useDataGlobal();

  useEffect(() => {
    updateAboutPage();
  }, []);

  return (
    <div>
      <Hero
        titleStyle="text-6xl font-extrabold"
        contentStyle="text-lg text-gray-300"
      />
      <SocialBar />

      {/* Welcome Section */}
      <div className="w-[90%] m-auto my-28">
        <div className="flex flex-col">
        <h2 className="overflow-hidden text-5xl font-extralight text-center"> Welcom</h2>
        <hr className="w-60  text-purple-600 h-1 rounded-full text-center items-center bg-[#6a54f4] my-3"/>
        </div>
        <p className="overflow-hidden lg:text-xl leading-relaxed px-2 py-20 font-bold">
          background or why we start a company ...Lorem ipsum dolor sit amet
          consectetur. Pulvinar scelerisque purus suscipit cursus vestibulum
          nibh proin neque. Sed neque cursus congue ultrices enim donec in. Diam
          pretium odio tortor amet amet molestie enim aliquam massa vitae.Lorem
          ipsum dolor sit amet consectetur. Pulvinar scelerisque purus suscipit
          cursus vestibulum nibh proin neque. Sed neque cursus congue ultrices
          enim donec in. Diam pretium odio tortor amet amet molestie enim
          aliquam massa vitae
        </p>
      </div>



      <Team/>


      <div className="container mx-auto px-4 ">
        {/* Section with image on the left and text on the right */}
        <div className="flex flex-col md:flex-row items-center mb-8 my-20">
          <img
            src="https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWlzc29uJTIwdGV4dHxlbnwwfHwwfHx8MA%3D%3D"
            alt="Placeholder"
            className="w-full md:w-1/2 h-auto flex-1"
          />
          <div className="md:ml-8 mt-4 md:mt-0 flex-1">
            <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur. At leo ornare sagittis
              volutpat feugiat volutpat nisl bibendum. Ac faucibus enim justo
              tellus bibendum venenatis vel. Elementum pellentesque dictum
              viverra tempor. Odio pellentesque viverra fringilla eleifend
              laoreet commodo odio elementum et. Massa a quis facilisi morbi at
              sit consequat. Feugiat gravida justo massa et hac. Varius sed orci
              tortor et nibh. Pretium leo donec tortor nibh non pretium
              fringilla arcu. Nunc quis velit lacus sit.
            </p>
          </div>
        </div>

        {/* Section with image on the right and text on the left */}
        <div className="flex flex-col md:flex-row items-center mb-8">
          <div className="md:mr-8 mt-4 md:mt-0 order-2 md:order-1 flex-1">
            <h2 className="text-2xl font-bold mb-2">Our Goals</h2>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur. At leo ornare sagittis
              volutpat feugiat volutpat nisl bibendum. Ac faucibus enim justo
              tellus bibendum venenatis vel. Elementum pellentesque dictum
              viverra tempor. Odio pellentesque viverra fringilla eleifend
              laoreet commodo odio elementum et. Massa a quis facilisi morbi at
              sit consequat. Feugiat gravida justo massa et hac. Varius sed orci
              tortor et nibh. Pretium leo donec tortor nibh non pretium
              fringilla arcu. Nunc quis velit lacus sit.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1551485913-b408bde7842c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGFydCUyMGFuZCUyMGJvYXJkfGVufDB8fDB8fHww"
            alt="Placeholder"
            className="w-full md:w-1/2 h-auto order-1 md:order-2 flex-1"
          />
        </div>
      </div>

      <Reason/>

      <Testimonials/>
    </div>

    
  );
}

export default About;
