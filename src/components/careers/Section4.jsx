import React from 'react'
import CareerCard from '../../ui/CareerCard'
import { FaBusinessTime ,FaSearch } from "react-icons/fa";
import { CiGlobe,CiBank  } from "react-icons/ci";
import { TbBulb } from "react-icons/tb"
import { IoMdSettings } from "react-icons/io";
const Section4 = () => {

    const jobData =[
        {
            id:1,
            logo:FaBusinessTime,
            title:"Business Analytics",
            open:"3 Open"
        },
        {
            id:2,
            logo:CiGlobe,
            title:"Web & App Development",
            open:"3 Open"
        },
        {
            id:3,
            logo:CiGlobe,
            title:"UI/UX Design ",
            open:"5 Open"
        },
        {
            id:4,
            logo:TbBulb,
            title:"Product Management ",
            open:"4 open"
        },
        {
            id:5,
            logo:IoMdSettings,
            title:"AI, ML & DL Tech Development",
            open:"5 Open"
        },
        {
            id:6,
            logo:CiBank ,
            title:"Finances & Accounts ",
            open:"3 Open"
        },
        {
            id:7,
            logo:FaSearch ,
            title:"Research, Marketing & Sales",
            open:"5 Open"
        }
    ]
  return (
    <div className='bg-[rgb(242,242,247)] w-full py-20'>
<h2 className="text-4xl font-semibold text-center">
Our Teams 
</h2>
<div className="px-24">
    <CareerCard jobData={jobData}/>
</div>
    </div>
  )
}

export default Section4
