import React from 'react'
import { Link } from 'react-router-dom'
import Navheader from '../components/Navheader'
import Footer from '../components/Footer'
import Section1 from '../components/homeLanding/Section1'
import Section2 from '../components/homeLanding/Section2'
import Section3 from '../components/homeLanding/Section3'
import Section4 from '../components/homeLanding/Section4'
import Section5 from '../components/homeLanding/Section5'
import Section6 from '../components/homeLanding/Section6'
import Section7 from '../components/homeLanding/Section7'
import Section8 from '../components/homeLanding/Section8'
import Section9 from '../components/homeLanding/Section9'

const HomeLanding = () => {

   

  return (
  <div className="bg-[#0 20202]  h-screen overflow-x-hidden ">
   <div className="z-50">

    <Navheader/>
   </div>

{/* ------------- Home Main Page --------------- */}
<div className="">
    <Section1/>
    
</div>

{/* ------------ Brand Carousel --------------- */}
<div className="pt-5  lg:pt-20">
    <Section2/>
    
</div>
<div className=" ">

{/* ----------- Online Services ----------------- */}
<div className="bg-[#020202] lg:pt-20">
  <Section3/>
</div>

{/* ----------- Salon Management ----------------- */}
<div className="bg-[#020202] lg:pt-20">
  <Section4/>
</div>
{/* ----------- AI Sees You ----------------- */}
<div className="bg-[#020202] lg:pt-24">
  <Section5/>
</div>
{/* ----------- Stylin Academy ----------------- */}
<div className="bg-[#020202] lg:pt-24 ">
  <Section6/>
</div>
{/* ----------- Stylin Studio ----------------- */}

<div className="bg-[#020202] lg:pt-8 ">
  <Section7/>
</div>
{/* ----------- Stylin Store ----------------- */}

<div className="bg-[#020202] lg:pt-24 ">
  <Section8/>
</div>
{/* ----------- Count Animation ----------------- */}

<div className=" bg-[#020202] lg:pt-24">
  <Section9/>
</div>


 
    <div className="">
        <Footer/>
    </div>
</div>
  </div>
  )
}

export default HomeLanding