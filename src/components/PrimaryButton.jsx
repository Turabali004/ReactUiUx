import React from 'react'

function PrimaryButton({content, visibility}) {
  // console.log(visibility);
  // console.log(content.content);
  const buttonText = content?.content || "Book a DEMO";
  
  return (
      <button className={`px-11 py-3 bg-purple-700 hover:.Primary-bgColor text-white font-medium text-lg  transition
      ${visibility ? 
        'block' : 'hidden'
      } `}>
              {buttonText}
      </button>
  )
}

export default PrimaryButton
