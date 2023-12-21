import React from 'react'
import Navheader from '../Navheader'
import FeatureCard from '../../ui/FeatureCard'
import Footer from '../Footer'

const SalonMang = () => {

    const salonServ = [
        {
            id:1,
            title:"Stylin Salon Suite - Elevate Your Salon Management Experience for Free",
            des:[
                {
                    id:1,
                    des: "Welcome to Stylin Salon Suite, your gateway to streamlined salon management. Embrace the future with our free software, equipped with essential tools to seamlessly transition your salon business into the online realm. Unleash efficiency, amplify creativity, and transform your salon experience."
                },
              
            ]
            
           
        },
        {
            id:2,
            sec2Pair:[
                {
                    id:1,
            hidSec:true,

                    title:' ',
                    des:'',
                   bullPoint:[
                    ''
                   ]
                },
                
            ]
            
        },
        {
            id:3,
            conDes:[
                {
                    id:1,
                    title:'Appointment Scheduling',
                    des:"Stylin's intuitive appointment scheduling tool empowers salon owners to manage bookings seamlessly. From client preferences to stylist availability, it's a breeze to organize appointments, ensuring a smooth and satisfying customer experience."
                },
                {
                    id:2,
                    title:'Inventory Tracking & Management',
                    des:"We take the hassle out of inventory management. Keep a real-time check on product availability, streamline restocking, and maximize profits. With our tool, salon owners can maintain a well-stocked and organized inventory effortlessly."
                },
                {
                    id:3,
                    title:'Reports & Data Analytics',
                    des: "We provide salon owners with powerful data analytics tools. Dive into comprehensive reports on customer trends, popular services, and financial insights. Make informed decisions to optimize operations and enhance the overall performance of your salon."
                },
                {
                    id:4,
                    title:"Virtual Try-Ons ",
                    des:"Stylin's AR Virtual Try-On feature redefines the salon experience. Users can virtually try on a spectrum of hairstyles and services at your salon, ensuring they make confident and personalized choices before stepping into the salon. This increases customer satisfaction and enthusiasm to visit the salon again. "
                },
                {
                    id:5,
                    title:"Smart Marketing",
                    des:"Our marketing arsenal goes beyond the ordinary. Leverage automated email and text marketing for targeted outreach. Keep clients engaged with notification reminders, and elevate salons to stardom by exclusive featuring of trending services. Short video Marketing exclusively for Stylin Partners through short videos, live workshops, events & contests. "
                },
                {
                    id:6,
                    title:"Secure Customer Payment Processing",
                    des:"Trustworthy Transactions, Every Time. Stylin ensures the security of customer transactions with robust and secure payment processing methods. From bookings to product purchases, salon owners can rely on us to provide a seamless and secure financial experience for their clients."
                }
            ]
        }

    ]
  return (
    <div>
        <Navheader custClass='bg-white text-[#020202]' />

        <div className="px-28 py-24 ">
        <FeatureCard sec1Data={salonServ}/>
    </div>
    <Footer/>
    </div>
  )
}

export default SalonMang