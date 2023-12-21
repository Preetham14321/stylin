import React from 'react'
import { Link } from 'react-router-dom'

const Section5 = () => {
  return (
    <div className='bg-[#EF5DA8]  h-[460px] lg:pt-16 lg:px-12 lg:mx-28'>
 

<div className="">
    <h1 className="lg:text-[42px] lg:leading-[54px] text-white font-bold font-lexend">AI sees you, AR <br /> shows you</h1>
    <p className="text-white lg:text-lg lg:leading-[28px] font-mukta lg:py-4">AI decodes your unique style, curating personalized <br /> recommendations and AR Virtual makeovers at your <br /> fingertips — tap into your dream look in real-time, <br /> explore endless styles and discover yourself.</p>
  <Link to='/feature/aiandarservice'>
    <button className="bg-white lg:px-8 lg:py-2 text-[#EF5DA8] font-lexend rounded-[4px] lg:mt-5">
        Learn More
    </button>
  </Link>
</div>

    </div>
  )
}

export default Section5