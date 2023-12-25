import React from 'react'
import FAQ from '../../pages/FAQ';
import FaqSec1 from '../faq/Section1.jsx'

const Section1 = () => {
  return (
    <div className=''>
        <div className="bg-hero h-full text-white lg:pb-40 rounded-b-[150px]">

        <h2 className="lg:text-5xl font-lexend font-bold text-center lg:pt-40">
        Let's Beautify Your Connection
        </h2>
        <p className="text-center font-mukta lg:text-2xl lg:pt-5">
        At Stylin, every interaction is a brushstroke on the canvas of beauty. 
        </p>
        </div>

        

        <div className="-mt-24">
       <FaqSec1 custClass = 'hidden'/>
        </div>
    </div>
  )
}

export default Section1;


export const  ContactusForm = ()=>{
 
    const contactLabel = [
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
        <form action="" className='bg-white w-[50%] m-auto text-[#020202] lg:p-10 rounded-lg drop-shadow-lg '>
          
          <div className="grid grid-cols-2 gap-5">
            {contactLabel.map((item,key)=>(
                <div className="flex flex-col space-y-2">

             
            <label htmlFor={item.name} className='font-lexend '>{item.label} <span className="text-[#de594a]">*</span> </label>
            
            <input type="text" id={item.name} name={item.name} className='border rounded-md drop-shadow-md py-1 lg:w-60 border-[#625f5f6e] focus:outline-none' />
            </div>
            ))}
          </div>

            <div className="lg:pt-5 space-y-2">

            <label htmlFor="message " className='font-lexend  ' >Your Message <span className="text-[#de594a]">*</span> </label>
            <textarea name="message" id="message" cols="30" rows="10" className='border rounded-md drop-shadow-md py-1 lg:w-full border-[#625f5f6e] focus:outline-none ' ></textarea>
            </div>
                    <p className="text-sm font-mukta text-[#02020296] lg:py-3">
                    Have a question, or suggestion, or just want to share your Stylin experience?
Our virtual doors are wide open. Drop us a line, and let's craft a more beautiful world together. Your feedback is the polish that makes Stylin shine!

                    </p>
                    <button type='submit' className='border py-1 px-4 rounded-md bg-[#6e6767] text-white font-semibold font-lexend text-sm'>Send Message</button>
        </form>
    )

}