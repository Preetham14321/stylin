import React from 'react'
import Navheader from '../Navheader'
import FeatureCard from '../../ui/FeatureCard'
import Footer from '../Footer'

const AiandArServ = () => {
    const aiandServ = [
        {
            id:1,
            title:'AI Sees you, AR Shows you! ',
            des:[
                {
                    id:1,
                    des:"Realizing Your Beauty Aspirations: STYLIN isn't just an app; it's a journey of self-discovery leveraging technology. With AI Personalised Analyzer and the spectacular Virtual Try-On tool, explore, experiment, and evolve – because your beauty aspirations deserve to come to life."
                },
              
            ]
        },
        {
            id:2,
            sec2Pair:[
                {
                    id:1,
            title:"Unleash Your Unique Beauty with STYLIN's AI Analyzer",
            des:"This is not just a tool; it's your personal beauty curator. Let our innovative AI decode your style, understand your desires, and recommend services that resonate with your individuality. Stylin's AI Analyser can be extremely innovative and is designed to cure your personalised skin or hair concerns.",
           bullPoint:[
            'Periodic & Regularised Skin and Hair Reports ',
            'Personalised Product Recommendations & Care Suggestions',
            'Daily Skin Care Tracking & Updates ',
             
           ]
        },
                {
                    id:2,
            title:"AR Virtual Try-On, Virtually Real",
            des:"Immerse yourself in a world where your dream look is just a tap away. With STYLIN's Virtual Try-On, experimenting with endless styles is not just a try; it's an adventure into self-expression. Stylin's Virtual Try-On to find your best suitable look effortlessly for 100% customer  ",
           bullPoint:[
            'Browse through infinite hairstyles & makeup',
            'One Stop Try-on tool for All types of Skin tones',
            'Personalised & Unmatchable Customer Experience',
             
           ]
        },
    ]
        },
        {
            id:3,
            conDes:[
                {
                    id:1,
                    title:'Beyond Trends, Your Signature Style',
                    des:"Our AI doesn't just follow trends; it understands the essence of your style. Our AR shows you the best possible look that suits you and enhances your confidence.Experience beauty that goes beyond the ordinary, celebrating your unique signature in every recommendation and trial."
                },
             
            ]
        }
    ]
  return (
    <div>
        <Navheader custClass='bg-white text-[#020202]'/>
        <div className="px-28 py-24 ">
        <FeatureCard sec1Data={aiandServ}/>
    </div>
    <Footer/>
    </div>
  )
}

export default AiandArServ