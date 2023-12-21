import React from 'react'
import Navheader from '../Navheader'
import FeatureCard from '../../ui/FeatureCard'
import Footer from '../Footer'

const StylinAca = () => {

    const stylinSer = [
        {
            id:1,
            title:'Stylin Academy',
            des:[
                {
                    id:1,
                    des:"Welcome to STYLIN Academy – Where Beauty Becomes a Canvas and Learning an Endless Journey. STYLIN Academy is not just an educational platform; it's a gateway to explore, learn, and succeed in the dynamic world of beauty. Join us in shaping the beauty industry's future, one course at a time."
                },
              
            ]
        },
        {
            id:2,
            sec2Pair:[
                {
                    id:1,
            title:"Stylin Description",
            des:"STYLIN Academy is a transformative space designed to elevate skills, empower professionals, and foster a community passionate about beauty.",
           bullPoint:[
            'Comprehensive & Advanced Courses By Top-Notch Experts',
            'Trusted Certification & Recognition',
            'Refined Skills & Up-To-Date With The Latest Trends',
            'Advanced Management Strategies & Innovative Industry Insights',
            'Continuous Learning For All Beauty Industry Aspirers'
             
           ]
        },
                 
    ]
        },
        {
            id:3,
            conDes:[
                {
                    id:1,
                    title:"Beauty Enthusiasts' Paradise",
                    des:"Dive into a curriculum designed for beauty enthusiasts & professionals, offering a spectrum of courses and training materials to elevate your skills and passion."
                },
                {
                    id:2,
                    title:"Jobs & Internships Hub",
                    des:"Connect with opportunities in the Salon and beauty industry through our Jobs & Interns section, bridging the gap between aspiring professionals and thriving salons."
                },
                {
                    id:3,
                    title:"Tutorials & Guides for Stylin Partners",
                    des:"STYLIN Salon Partners and Beauty Professionals can access an array of service tutorials and guides, ensuring they stay at the forefront of the latest techniques and trends."
                }
             
            ]
        }
    ]
  return (
    <div>
        <Navheader custClass='bg-white text-[#020202]'/>

        <div className="px-28 py-24 ">
        <FeatureCard sec1Data={stylinSer}/>
    </div>
    <Footer/>
    </div>
  )
}

export default StylinAca