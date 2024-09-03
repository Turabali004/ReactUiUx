import React from "react";

// Sample data for the reasons
const reasons = [
  {
    title: "Customer-Centric Approach",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tortor sapien commodo nisi volutpat. Lobortis sed. Lorem ipsum dolor sit amet consectetur. Tortor sapien commodo nisi volutpat. Lobortis sed.",
  },
  {
    title: "Innovation",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tortor sapien commodo nisi volutpat. Lobortis sed. Lorem ipsum dolor sit amet consectetur. Tortor sapien commodo nisi volutpat. Lobortis sed.",
  },
  {
    title: "Reliability",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tortor sapien commodo nisi volutpat. Lobortis sed. Lorem ipsum dolor sit amet consectetur. Tortor sapien commodo nisi volutpat. Lobortis sed.",
  },
];

function Reason() {
  return (
    <section className="py-12 bg-black text-white my-40">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold">Why You Chose Us</h2>
        <div className="flex justify-center mt-2">
          <div className="w-10 h-1 bg-purple-600 rounded-full"></div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-8 px-4">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="bg-white text-black p-6 shadow-md w-full sm:w-80 md:w-96"
          >
            <h3 className="text-xl font-semibold mb-4">{reason.title}</h3>
            <p className="text-gray-600">{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reason;
