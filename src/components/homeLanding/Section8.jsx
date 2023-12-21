import React from 'react'
import Sec8hero from '../../assets/svg/sec8hero.svg'
import { Link } from 'react-router-dom'

const Section8 = () => {
  return (
    <main
    className=" h-[460px]  lg:mx-28 lg:pt-24 lg:px-12   lg:bg-none     bg-no-repeat bg-cover  "
    style={{ backgroundImage: `url(${Sec8hero})` }}
  >
    <div className=" float-right lg:pr-16   ">
    <h1 className="lg:text-[42px] lg:leading-[54px] text-white font-bold font-lexend">Stylin Beauty Store</h1>
    <p className="text-white lg:text-lg lg:leading-[28px] font-mukta lg:py-4">Your Style, Your Cart, Your Beauty Haven. Discover <br /> curated product collections, trendsetting essentials <br /> from top beauty brands and indulge in a seamless <br /> shopping experience with the joy of enhancing your <br /> unique style.</p>
   <Link to="/feature/beautySto">

    <button className="bg-white lg:px-8 lg:py-2 text-[#06C902] font-lexend rounded-[4px] lg:mt-5">
        Learn More
    </button>
   </Link>
</div>
    </main>
  )
}

export default Section8