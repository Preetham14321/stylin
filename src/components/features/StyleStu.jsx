import React from 'react'
import Navheader from '../Navheader'
import FeatureCard from '../../ui/FeatureCard'
import Footer from '../Footer'
import img1 from '../../assets/features/styStd/img1.png'
import img2 from '../../assets/features/styStd/img2.png'
import img3 from '../../assets/features/styStd/img3.png'
import img4 from '../../assets/features/styStd/img4.png'
import img5 from '../../assets/features/styStd/img5.png'

const StyleStu = () => {
    const styleStuSer =[
        {
            id:1,
            title:'Stylin Studio ',
            img:img1,
            des:[
                {
                    id:1,
                    des:"Welcome to Stylin Studio – where beauty takes centre stage in vibrant short videos, live shows, and creative workshops. Explore a visual feast curated by beauty, makeup, and style creators. Join Stylin Studio: Where Beauty Meets Creativity. Start Your Visual Journey Today!"
                },
              
            ]
        },
        {
            id:2,
            sec2Pair:[
                {
                    id:1,
                    img:img2,
            title:"Beauty Unleashed Together",
            des:"Discover, engage, and be inspired as creators and salons unfold a visual spectacle designed to enhance your beauty experience.",
           bullPoint:[
        'Visual Feast of Creativity',
        'Enhance Customer Experience',
        'Salons Showcase Expertise',
        'Short Video Shopping Experience',
        'Integrated Virtual Try-On for Selected Products'
             
           ]
        },
                 
    ]
        },
        {
            id:3,
            conDes:[
                {
                    id:1,
                    img:img3,
                    title:"Short Videos that Speak Volumes",
                    des:"Create and explore short videos that are not just clips but narratives of beauty. Each video is a piece of art, a snippet of inspiration, and a celebration of individual style."
                },
                {
                    id:2,
                    img:img4,
                    title:"Live Shows & Workshops",
                    des:"Immerse yourself in live shows and workshops, where beauty experts unveil their secrets, influencers share their tips, and creators showcase their skills. It's a front-row seat to the latest in beauty trends."
                },
                {
                    id:3,
                    img:img5,
                    title:"Collaborate with Brands",
                    des:" Beauty, makeup, and style creators can seamlessly collaborate with brands, turning their passion into partnerships. Stylin Studio is a stage where your creativity meets recognition. Stylin Beauty Store "
                }
             
            ]
        }
    ]
  return (
    <div>
               <Navheader custClass='bg-white text-[#020202]'/>

<div className="px-28 py-24 ">
<FeatureCard sec1Data={styleStuSer}/>
</div>
<Footer/>
    </div>
  )
}

export default StyleStu