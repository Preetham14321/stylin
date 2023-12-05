import React from 'react'
import heroSmallIc from '../assets/svg/heroSmIc.svg'
import { FaInstagram,FaLinkedinIn  } from "react-icons/fa";

const Footer = () => {

    const mediaData = [
       
       {
        title:"Media"
       },
        {
            id:1,
            name:'Blogs',
            link:'/blogs'
        },
        {
            id:2,
            name:'Achievements ',
            link:'/achievements '
        },
        {
            id:3,
            name:'Featured',
            link:'/featured'
        },
    ]

    const helpCenData = [
        {
            title:'Help Centre'
        },
        {
            id:1,
            name:'Help & Support',
            link:'/support'
        },
        {
            id:2,
            name:'Write to us',
            link:'/writeus'
        },
        {
            id:3,
            name:'FAQs',
            link:''
        }
    ]

    const joinStyData = [
        {
            title:"Join Stylin"
        },
        {
            id:1,
            name:'List your Brand',
            link:'/llst'
        },
        {
            id:2,
            name:'Collab with Us',
            link:'/collab'
        },
        {
            id:3,
            name:'Careers',
            link:'/careers'

        }
    ]
    const downloadData = [
        {
            title:'Download App'
        },
        {
            id:1,
            name:'Download Beta ver.',
            link:'/down',

        },

        {
            id:2,
            name:'Terms & Conditions',
            link:'/terms',

        },
        {
            id:3,
            name:'Privacy Policy',
            link:'/privacy'
        }
    ]
  return (

    <footer className=' bg-[#202020] w-full lg:h-80 lg:px-24 lg:pt-12 flex justify-between '>
   <div className="text-white space-y-3">

     <img src={heroSmallIc} alt="logo" className='w-16 ' />
     <h1 className="font-michroma lg:text-2xl tracking-wider  text-white" >STYLIN</h1>
     <p className="">stylinlogin@gmail.com</p>
     <p className="">+91 86880 55328</p>
     <div className="lg:flex items-center lg:gap-2">
     <FaInstagram />
     <FaLinkedinIn  />
     </div>
     <p className="text-sm lg:pt-1">©2023 STYLIN All rights reserved.</p>
   </div>

 <div className="text-white  flex gap-20 lg:pr-7 ">
   <div className="space-y-5">

    {mediaData.map((item,key)=>(
        <ul>
            <li className="lg:text-2xl font-semibold">{item.title}</li>
            <li className="lg:text-lg">{item.name}</li>
        </ul>
    ))}
   </div>
   <div className="space-y-5">

    {helpCenData.map((item,key)=>(
        <ul>
            <li className="lg:text-2xl font-semibold">{item.title}</li>
            <li className="lg:text-lg">{item.name}</li>
        </ul>
    ))}
    </div>
   <div className="space-y-5">

    {joinStyData.map((item,key)=>(
        <ul>
            <li className="lg:text-2xl font-semibold">{item.title}</li>
            <li className="lg:text-lg">{item.name}</li>
        </ul>
    ))}
    </div>
   <div className="space-y-5">

    {downloadData.map((item,key)=>(
        <ul>
            <li className="lg:text-2xl font-semibold">{item.title}</li>
            <li className="lg:text-lg">{item.name}</li>
        </ul>
    ))}
 </div>
 </div>

    </footer>
  )
}

export default Footer