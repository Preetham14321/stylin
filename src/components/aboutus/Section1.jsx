import React from 'react'

import AboutHero from '../../assets/basic/aboutHero.png'
const Section1 = () => {
  return (
    <div className='flex items-start gap-36 '>
<div className="">

    <h1 className="text-[#020202] lg:text-6xl font-lexend font-semibold">
    About Stylin
    </h1>
    <p className="lg:pt-5 font-mutka lg:leading-[1.9] lg:text-lg text-[#64686E]">
    We are putting forward an integrated space for booking beauty <br /> appointments, salon management software, Advanced AI Analysis with <br /> Personalised Recommendations, Virtual Try-Ons using AR, Shopping <br /> Essential branded beauty products, Expert Training Courses and jobs and  <br /> many more. Join us on this journey where every tap brings you closer to a <br /> new dimension of discovering yourself.
            </p>
</div>
<img src={AboutHero} alt=""  className='w-[45%] lg:pr-10 l ' />
    </div>
  )
}

export default Section1