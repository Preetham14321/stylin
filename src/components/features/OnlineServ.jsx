import React from 'react'
import Navheader from '../Navheader'
import FeatureCard from '../../ui/FeatureCard'
import Footer from '../Footer'

const OnlineServ = () => {

    const onlineServData1  = [
        {
            id:1,
            title:'Online Service Booking',
            des:[
                {
                    id:1,
                    des:"Discover beauty effortlessly with STYLIN's Online Service Booking – where each tap invites transformation. Enjoy a  flawless experience exploring a universe of personalized beauty services tailored just for you. Immerse yourself in a palette of options, from trendsetting makeovers to expert consultations, all easily accessible in the palm of your hand."
                },
              
            ]
        },
        {
            id:2,
            sec2Pair:[
                {
                    id:1,
                    title:'Booking is made easy and user-friendly for all of our STYLIN customers.',
                    des:'',
                   bullPoint:[
                    'Real-time Instant booking ',
                    'Convenience in Time Slots & Dates',
                    'Transparent Pricing',
                    'Effortless Payment Options',
                    'Instant Booking Confirmations  ',
                    'Cancellations & Refunds ',
                    'Accessible Customer Support '
                   ]
                },
                
            ]
            
        },
        {
            id:3,
            conDes:[
                {
                    id:1,
                    title:'Elevate Your Glamour',
                    des:'From classic styles to avant-garde transformations, discover and book services that reflect your unique style.'
                },
                {
                    id:2,
                    title:'Seamless Convenience',
                    des:'Navigate a world where booking beauty is as easy as expressing it. Our user-friendly platform ensures a smooth and interactive experience, empowering you to schedule your glow at your convenience.'
                },
                {
                    id:3,
                    title:'Personalized Perfection',
                    des:"STYLIN's innovative AI understands your beauty desires, recommending services tailored to your preferences. Your journey with us is a celebration of your individuality. "
                }
            ]
        }
    ]
  return (
<main className="">
    <Navheader custClass='bg-white text-[#020202]'/>
    <div className="px-28 py-24 ">
        <FeatureCard sec1Data={onlineServData1}/>
    </div>
    <Footer/>
</main>
  )
}

export default OnlineServ