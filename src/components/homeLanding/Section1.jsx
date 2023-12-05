import React from 'react'
import HeroBgV from '../../assets/video/BrushSparkle.mp4'


const Section1 = () => {
  return (
     <main     className=" relative "    style={{ backgroundClip: `url(${HeroBgV})` }}>

<video autoPlay muted loop playsInline className='h-fit' >
        <source src={HeroBgV} type="video/mp4" />
        {/* Add additional source elements for other video formats if needed */}
        Your browser does not support the video tag.
      </video>
       
<div className="absolute top-0 flex justify-between w-full lg:px-32 lg:pt-32">

        <div className="">
            <h1 className="text-white font-lexend lg:text-[7rem] lg:leading-[1] font-bold">
            STYLE <br /> STARTS <br />  WITH <br />  YOU!
            </h1>
        </div>
    <div className="">
        <p className="text-2xl text-white leading-[1.6]">
        We aim to empower beauty <br /> enthusiasts and salon professionals <br /> through a collaborative network, <br /> utilizing technology to enhance <br /> accessibility and convenience in the <br /> beauty and wellness industry.
        </p>
</div>
    </div>
     </main>

  )
}

export default Section1