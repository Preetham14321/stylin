import React from 'react'
import heroSmallIc from '../assets/svg/heroSmIc.svg'
import { FaInstagram,FaLinkedinIn ,FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';

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
            name:'Featured ',
            link:'/featured '
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
            link:'/featured'
        },
         
    ]

    const joinStyData = [
        {
            title:"Join Stylin"
        },
        {
            id:1,
            name:'List your Brand',
            link:'/listyourbrand'
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

    <footer className=' bg-[#202020] w-full lg:h-96 px-6 lg:px-24 pt-5 lg:pt-12 lg:flex justify-between '>
   <div className="text-white pb-5 lg:pb-0   lg:block space-y-3">
     <img src={heroSmallIc} alt="logo" className='w-16 ' />
<div className="flex lg:block items-center justify-between ">
<div className="space-y-3">

     <h1 className="font-michroma lg:text-2xl tracking-wider  text-white" >STYLIN</h1>
     <p className="lg:pb-2">stylinlogin@gmail.com</p>
</div>

<div className="space-y-3">

     <p className="">+91 86880 55328</p>
     <div className=" flex items-center gap-2">
     <a href="https://www.instagram.com/stylinofficial_/" target="_blank" rel="noopener noreferrer">

     <FaInstagram />
     </a>
     <a href="https://www.linkedin.com/company/stylin-official" target="_blank" rel="noopener noreferrer">

     <FaLinkedinIn  />
     </a>

     <a href="http://www.youtube.com/@stylin_media" target="_blank" rel="noopener noreferrer">

     <FaYoutube/>
     </a>

     </div>
</div>

</div>

     <p className=" hidden lg:block text-sm lg:pt-1">©2023 STYLIN All rights reserved.</p>
     <p className="text-white">

     Image by <a href="https://www.freepik.com/free-photo/new-year-banner-with-fireworks_33746905.htm#query=new%20years%20day&position=0&from_view=keyword&track=ais&uuid=333d02d6-e642-4feb-ba96-149576eb9397">Freepik</a>
     </p>

   </div>

 <div className="text-white grid grid-cols-2 lg:flex gap-y-10 gap-x-12 lg:gap-20 lg:pr-7 ">
   <div className="space-y-2 lg:space-y-5">

    {mediaData.map((item,key)=>(
        <ul>
            <li className="text-[17px] lg:text-2xl font-semibold">{item.title}</li>
            <Link to={item.link}>
            <li className="text-[15px] w-max lg:text-lg">{item.name}</li>
            </Link>
      
        </ul>
    ))}
   </div>
   <div className="space-y-2 lg:space-y-5">

    {helpCenData.map((item,key)=>(
        <ul>
            <li className="text-[17px] lg:text-2xl font-semibold">{item.title}</li>
            <Link to={item.link}>
            <li className="text-[15px] w-max lg:text-lg">{item.name}</li>
            </Link>
        </ul>
    ))}
    </div>
   <div className="space-y-2 lg:space-y-5">

    {joinStyData.map((item,key)=>(
        <ul>
            <li className=" text-[17px] lg:text-2xl font-semibold">{item.title}</li>
            <Link to={item.link}>

            <li className="text-[15px] w-max lg:text-lg">{item.name}</li>
            </Link>

        </ul>
    ))}
    </div>
   <div className="space-y-2 lg:space-y-5 ">

    {downloadData.map((item,key)=>(
        <ul>
            <li className="text-[17px] lg:text-2xl font-semibold">{item.title}</li>
            <Link to={item.link}>
           
            <li className="text-[15px] w-max lg:text-lg">{item.name}</li>
            </Link>
      
        </ul>
    ))}

 </div>
 </div>
 <p className=" lg:hidden w-full text-white text-center text-sm pb-3 pt-10">©2023 STYLIN All rights reserved.</p>
 


    </footer>
  )
}

export default Footer