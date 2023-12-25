import React from 'react'
import { ContactusForm } from '../components/contactus/Section1'
import Navheader from '../components/Navheader'
import Footer from '../components/Footer'

const Writetous = () => {
  return (
    <div>
        <Navheader custClass='bg-white text-[#020202]'/>
        <div className="lg:py-10">

        <ContactusForm/>
        </div>
        <Footer/>
    </div>
  )
}

export default Writetous