import React from 'react'
import Carrer1 from '../../assets/basic/careers/img1.png'

const Section1 = () => {
  return (
    <div className='flex  gap-16'>
        <div className="space-y-7 w-">
            <h1 className="font-lexend text-6xl leading-[1.2] font-bold">
            The minute you walk <br /> through this door,<br />  you are in our hands.  
            </h1>
            <p className="text-2xl font-mukta   text-[#575759]">
            Embark on a journey where innovation meets individuality.<br />  Welcome to the STYLIN Careers Page, a space where passion fuels progress,  and every career is an opportunity to redefine beauty experiences.
            </p>
        </div>
        <img src={Carrer1} alt="" className='w-[40%] rounded-lg' />
    </div>
  )
}

export default Section1