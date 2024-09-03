import React from "react";

function SecondaryButton(content) {
  return (
    <button className="px-6 py-3 bg-transparent border border-white text-white font-medium text-lg  hover:bg-white hover:text-black transition">
      {content.content.content}
    </button>
  );
}

export default SecondaryButton;
