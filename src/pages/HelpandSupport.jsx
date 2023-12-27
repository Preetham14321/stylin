import React from 'react'
import Navheader from '../components/Navheader'
import Section1 from '../components/contactus/Section1'
import Section2 from '../components/contactus/Section2'
import Footer from '../components/Footer'
const HelpandSupport = () => {
  return (
    <main className="">
    <Navheader custClass='bg-white text-[#020202]'/>
    <div className="">
        <Section1/>
    </div>
    <div className="lg:pt-20">

    <Section2/>
    </div>
    <Footer/>
</main>
  )
}

export default HelpandSupport