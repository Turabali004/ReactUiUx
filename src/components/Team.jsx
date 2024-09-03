import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import memberpic from "../assets/pictures/Rectangle 55.png"

// Sample data for team members
const teamMembers = [
    {
      name: "John Doe",
      position: "CEO",
      photo: {
        src: memberpic, // Placeholder image for the team member
      },
      facebook: "#", // Placeholder link for Facebook profile
      instagram: "#", // Placeholder link for Instagram profile
      linkedin: "#", // Placeholder link for LinkedIn profile
    },
    {
      name: "Jane Smith",
      position: "CTO",
      photo: {
        src: memberpic,
      },
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
    {
      name: "Mike Johnson",
      position: "CFO",
      photo: {
        src: memberpic,
      },
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  ];

function Team() {
  return (
    <div className="container mx-auto p-5 max-w-6xl my-44">
      {/* Section title */}
      <h2 className="text-4xl font-bold mb-10 text-center">Our Team</h2>
      <div className="flex flex-wrap justify-center">
        {/* Mapping through the teamMembers array to display each member */}
        {teamMembers.map((member, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 p-4">
            <div className="bg-black shadow-lg p-6 text-center">
              {/* Team member's photo */}
              <img
                src={member.photo.src}
                alt={member.name}
                className="w-full h-full mx-auto mb-4"
              />
              {/* Team member's name */}
              <h3 className="text-xl font-semibold mb-2 text-white">
                {member.name}
              </h3>
              {/* Team member's position */}
              <p className="text-white mb-4">{member.position}</p>
              {/* Social media icons */}
              {/* <div className="flex justify-center space-x-4">
                <a href={member.facebook} className="text-blue-600">
                  <FaFacebook size={24} />
                </a>
                <a href={member.instagram} className="text-pink-600">
                  <FaInstagram size={24} />
                </a>
                <a href={member.linkedin} className="text-blue-700">
                  <FaLinkedin size={24} />
                </a>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
