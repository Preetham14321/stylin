import React from 'react'
import Sec7hero from '../../assets/svg/sec7hero.svg'

const Section7 = () => {
  return (
    <main
    className=" h-[530px]  lg:mx-28  lg:px-12   lg:bg-none     bg-no-repeat bg-cover  "
    style={{ backgroundImage: `url(${Sec7hero})` }}
  >
      <div className="lg:pt-40">
        <h1 className="lg:text-[42px] lg:leading-[54px] text-white font-bold font-lexend">
        Stylin Studio
        </h1>
        <p className="text-white lg:text-lg lg:leading-[28px] font-mukta lg:py-4">
        Create a visual feast of creative beauty content with <br /> short videos, live shows, and workshops. Beauty, <br /> Makeup and Style creators can collaborate with brands, <br /> and salons can showcase their expertise enhancing the <br /> customer’s short video experience.
        </p>
        <button className="bg-white lg:px-8 lg:py-2 text-[#F43F5E] font-lexend rounded-[4px] lg:mt-5">
          Learn More
        </button>
      </div>
    </main>
  )
}

export default Section7