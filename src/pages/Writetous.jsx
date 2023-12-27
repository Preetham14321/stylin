import React from 'react'
import { ContactusForm } from '../components/contactus/Section1'
import Navheader from '../components/Navheader'
import Footer from '../components/Footer'

const Writetous = () => {
  const formData =  [
    {
        id:1,
        label:'Your Name ',
        name:'name'


    },
    {
        id:2,
        label:'Contact email',
        name:'email'
    }, 
    {
        id:3,
        label : 'Company name',
        name:'companyname'
    },
    {
        id:4,
        label:'Country',
        name:'country'
    },
  
]
  return (
    <div>
        <Navheader custClass='bg-white text-[#020202]'/>
        <div className="lg:py-10">

        <ContactusForm  formData={formData}/>
        </div>
        <Footer/>
    </div>
  )
}

export default Writetous