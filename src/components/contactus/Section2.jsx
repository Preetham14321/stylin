import React from 'react'
import ContactCard from '../../ui/ContactCard'
import {FaPhoneAlt, FaQuoteLeft,FaQuoteRight } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Section2 = () => {
    const cardData = [
   
        {
            id:1,
            logo:MdOutlineEmail,
            title:'Chat with us',
            des:'Engage with Elite Experts',
            add:'stylinlogin@gmail.com '
        },
        {
            id:2,
            logo:FaPhoneAlt,
            title:'Call us',
            des:'Speak to our friendly team',
            add:'+91 86880 55328'
        }
        
       
    ]
  return (
    <div className='pb-52'>
        <div className="text-centerf flex justify-center gap-2">
        <FaQuoteLeft className='text-center '/>
        <h2 className="text-2xl font-semibold text-[#494646] font-lexend text-center ">
        Reach us for personalized support via phone, email, or chat!
        </h2>
        <FaQuoteRight/>
        </div>
        <div className="lg:pt-10">

        <ContactCard cardData={cardData}/>
        </div>
    </div>
  )
}

export default Section2