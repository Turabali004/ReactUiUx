import React from "react";

function TeamMember({ imgSrc, name, position, socialLinks }) {
  return (
    <div className="w-72 bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={imgSrc} alt={name} className="w-full h-60 object-cover" />
      <div className="bg-black p-4">
        <h3 className="text-white text-lg font-semibold">{name}</h3>
        <p className="text-gray-400 text-sm">{position}</p>
        <div className="flex justify-center space-x-4 mt-4">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="text-purple-500">
              <i className={`fab fa-${link.icon} text-2xl`}></i>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeamMember;
