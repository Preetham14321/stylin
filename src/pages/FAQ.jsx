import React from 'react'
import Navheader from '../components/Navheader'
import Section1 from '../components/faq/Section1'
import Footer from '../components/Footer'

const FAQ = () => {
  return (
    <main className="">
        <Navheader custClass='bg-white text-[#020202]'/>
        <div className="lg:pt-28">
            <Section1/>
        </div>
        <div className="lg:pt-20">
            <Footer/>
        </div>
        </main>
  )
}

export default FAQ