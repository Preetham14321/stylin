import React from 'react'
import Navheader from '../components/Navheader'
import Section1 from '../components/careers/Section1'
import Section2 from '../components/careers/Section2'
import Section3 from '../components/careers/Section3'
import Section4 from '../components/careers/Section4'
import Footer from '../components/Footer'

const Careers = () => {
  return (
<main className="">
    <Navheader custClass='bg-white text-hero'/>
    <div className="p-28  ">

    <div className="pb-40">
        <Section1/>
    </div>
    
     <Section2/>
     <div className="py-40">
        <Section3/>
     </div>
    </div>
    <div className="pb-20">

     <Section4/>
    </div>

     <Footer/>

</main>
  )
}

export default Careers