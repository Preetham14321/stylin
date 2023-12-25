import React from 'react'
import Navheader from '../components/Navheader'
import Section1 from '../components/aboutus/Section1'
import Section2 from '../components/aboutus/Section2'
import Section3 from '../components/aboutus/Section3'
import Footer from '../components/Footer'

const About = () => {
  return (
    <main className="">
        <Navheader custClass='bg-white text-[#020202]'/>
        <div className="lg:px-20 lg:pb-32 lg:pt-32 ">
        
            <Section1/>
        </div>
        <div className="lg:p ">
        
            <Section2/>
        </div>
        <div className="lg:pt-10  lg:px-44">
        
            <Section3/>
        </div>
        <div className="lg:pt-28">
            <Footer/>
        </div>
    </main>
  )
}

export default About