import React from 'react'
import Sec6hero from '../../assets/svg/sec6hero.svg'
import { Link } from 'react-router-dom'
const Section6 = () => {
  return (
    <main
    className=" h-[460px]  lg:mx-28 lg:pt-24 lg:px-12   lg:bg-none     bg-no-repeat bg-cover  "
    style={{ backgroundImage: `url(${Sec6hero})` }}
  >
    <div className=" float-right lg:pr-16   ">
    <h1 className="lg:text-[42px] lg:leading-[54px] text-white font-bold font-lexend">Stylin Academy</h1>
    <p className="text-white lg:text-lg lg:leading-[28px] font-mukta lg:py-4">Crafting Beauty, Shaping Careers: Unlock Your Potential <br /> with Top-Notch Expert Training. STYLIN Academy offers <br /> more than courses; it's a journey of growth, skill <br /> elevation, and becoming a trendsetter in the beauty <br /> industry.</p>
    <Link to="/feature/stylinacad">

    <button className="bg-white lg:px-8 lg:py-2 text-[#E7C652] font-lexend rounded-[4px] lg:mt-5">
        Learn More
    </button>
    </Link>
</div>
    </main>
  )
}

export default Section6