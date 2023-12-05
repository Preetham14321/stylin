import React from 'react'
import { Link } from 'react-router-dom'
import Navheader from '../components/Navheader'
import Footer from '../components/Footer'
import Section1 from '../components/homeLanding/Section1'
import Section2 from '../components/homeLanding/Section2'

const HomeLanding = () => {

   

  return (
  <div className="bg-hero h-screen">
    <Navheader/>


<div className=" ">
    <Section1/>
    
</div>
<div className=" ">
    <Section2/>
    
</div>


<div className="bg-white h-[350px]">
    
</div>
    <div className="">
        <Footer/>
    </div>
  </div>
  )
}

export default HomeLanding