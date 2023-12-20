import React from 'react'
import Navheader from '../components/Navheader'
import Section1 from '../components/blogs/Section1'
import Section2 from '../components/blogs/Section2'
import Footer from '../components/Footer'

const Blogs = () => {
  return (
<main className="">
  <Navheader custClass='bg-white text-black'/>
  <div className="lg:px-20 lg:py-20">
    <Section1/>
      
    <Section2/>
  </div>
  <Footer/>
</main>
  )
}

export default Blogs