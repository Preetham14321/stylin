import React from 'react'
import { Link } from 'react-router-dom'
import Sec5hero from "../../assets/svg/sec5hero.svg";

const Section5 = () => {
  return (
    <div   className=" h-[460px]  lg:mx-28 lg:px-12   lg:bg-none bg-no-repeat bg-center bg-cover  lg:flex justify-between   bg-no-repeat bg-cover relative   flex items-center justify-center  "
    style={{ backgroundImage: `url(${Sec5hero})` }}>
 

<div className="">
    <h1 className="lg:text-3xl lg:leading-[42px] xl:text-[42px] xl:leading-[54px] text-white font-bold font-lexend">AI sees you, AR <br /> shows you</h1>
    <p className="text-white xl:text-lg xl:leading-[28px] font-mukta lg:py-4">AI decodes your unique style, curating personalized <br /> recommendations and AR Virtual makeovers at your <br /> fingertips — tap into your dream look in real-time, <br /> explore endless styles and discover yourself.</p>
  <Link to='/feature/aiandarservice'>
    <button className="bg-white lg:px-5 xl:px-8 lg:py-2 text-[#EF5DA8] font-lexend rounded-[4px] lg:mt-5">
        Learn More
    </button>
  </Link>
</div>

    </div>
  )
}

export default Section5