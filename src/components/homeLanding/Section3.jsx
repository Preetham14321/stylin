import React from 'react'
import Sec3Hero from '../../assets/svg/sec3hero.svg'
import { Link } from 'react-router-dom'

const Section3 = () => {
  return (
  <main className=" h-[460px]     lg:px-12     bg-center  bg-no-repeat bg-cover  "
 
  style={{ backgroundImage: `url(${Sec3Hero})` }} >
      <div className="flex flex-col justify-center h-full">

    <h1 className="font-bold lg:text-3xl xl:text-4xl 2xl:text-5xl text-white font-lexend xl:leading-[1.2]"> Online Service <br /> Booking</h1>

    <p className="font-mukta lg:text-lg xl:text-[20px] lg:leading-[28px] lg:py-3 text-white">
    Seamless Beauty at Your Fingertips: Style your schedule <br /> effortlessly with Stylin’s online booking magic. Beauty  <br /> appointments with reviews and price Comparisons are  <br /> on your way with just a tap.
    </p>
    <Link to='/feature/onlineservice'>
    <button className="bg-white lg:px-8 lg:py-2 text-[#84CC16] font-lexend rounded-[4px] lg:mt-5">
        Learn More
    </button>
    </Link>
    </div>
  </main>
  )
}

export default Section3