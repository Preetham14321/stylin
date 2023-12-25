import React from 'react'
import Navheader from '../Navheader'
import FeatureCard from '../../ui/FeatureCard'
import Footer from '../Footer'

const BeautySto = () => {
    const beautStoSer = [
        {
            id:1,
            title:'Stylin E-Com Beauty Store: Your Gateway to Glamour',
            des:[
                {
                    id:1,
                    des:"Stylin E-Com Beauty Store is not just a shop; it's a trendsetter's haven. Discover the latest in beauty trends and define your style with products that speak your language. Step into Stylin's Beauty Emporium – Start Your Shopping Spree Today!"
                },
              
            ]
        },
        {
            id:2,
            sec2Pair:[
                {
                    id:1,
            title:"Glamour in Cart",
            des:"Embark on a glamorous journey with Stylin Beauty Store Where Every Product is a Chapter in Your Glamorous Tale.",
           bullPoint:[
        'Discover Trends, Define Style',
        'Virtual Try-On for Perfect Matches',
        'Seamless Shopping Experience',
        'User-Friendly Navigation',
        'Secure Payment Transactions',
        'Timely Deliveries '
             
           ]
        },
                 
    ]
        },
        {
            id:3,
            conDes:[
                {
                    id:1,
                    title:"Curated Beauty Essentials",
                    des:"Immerse yourself in a carefully curated selection of top-brand beauty essentials. Each product is a testament to quality, trendiness, and the artistry of self-expression."
                },
                {
                    id:2,
                    title:"Influencers' Picks & Salon Must-Haves",
                    des:" Explore products handpicked by influencers and recommended by salons. It's not just shopping; it's a journey guided by the experts in the beauty realm."
                },
                {
                    id:3,
                    title:"Exclusive Deals and Offers",
                    des:"Indulge in exclusive deals and offers, making your beauty shopping not just satisfying but also a delightful journey of discoveries and savings."
                }
             
            ]
        }
    ]
  return (
    <div>
        
        <Navheader custClass='bg-white text-[#020202]'/>

<div className="px-28 py-24 ">
<FeatureCard sec1Data={beautStoSer}/>
</div>
<Footer/>
    </div>
  )
}

export default BeautySto