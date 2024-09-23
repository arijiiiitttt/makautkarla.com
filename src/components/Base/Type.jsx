"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";


import React from 'react'

const Type = () => {
    const words = [
        {
          text: "MAKAUTKARLA.COM",
          className:"text-4xl font-bold bowl text-orange-300"
        },
      ];
  return (
    <>
    <div className=''>
     <TypewriterEffectSmooth words={words} />
   </div>
    </>
  )
}
export default Type
