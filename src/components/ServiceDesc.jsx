import React, {useState} from 'react'

function ServiceDesc() {
    const [showMore, setShowMore] = useState(false);
  const toggleText = () => {
    setShowMore(!showMore);
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
    {/* Inner container with styling for the card */}
    <div className="w-11/12 max-w-2xl bg-white p-6 shadow-lg rounded-lg">
      {/* Title of the service description */}
      <h1 className="text-left text-2xl font-bold mb-4">
        Service Description
      </h1>
      {/* Main text content */}
      <p className="text-left mb-4 overflow-hidden">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
        {/* Conditionally render additional text based on showMore state */}
        {showMore && (
          <span>
            {" "}
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </span>
        )}
      </p>
      {/* Button to toggle the showMore state */}
      <div className="text-left">
        <button
          onClick={toggleText}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          {/* Change button text based on showMore state */}
          {showMore ? "Read Less" : "Read More"}
        </button>
      </div>
    </div>
  </div>
  )
}

export default ServiceDesc
