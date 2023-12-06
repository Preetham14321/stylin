import React from 'react'
import img1 from '../../assets/team/sathvika.svg'
import img2 from '../../assets/team/saiPriya.svg'
import img3 from '../../assets/team/hemanth.svg'
import img4 from '../../assets/team/pavan.svg'
import img5 from '../../assets/team/abhiram.svg'
import img6 from '../../assets/team/sharat.svg'
import img7 from '../../assets/team/nikhil.svg'
const Section1 = () => {

const teamData = [
    {
        id:1,
        img:img1,
        name: 'Sathvika',
        role:'Business Analyst'
    },
    {
        id:2,
        img:img2,
        name: 'Sai Priya',
        role:'Product Manager/Beautician'
    },
    {
        id:3,
        img:img3,
        name: 'Hemanth',
        role:'Marketing Lead'
    },
    {
        id:4,
        img:img4,
        name: 'Pavan',
        role:'App Developer'
    },
    {
        id:5,
        img:img5,
        name: 'Abhiram',
        role:'AI Developer'
    },
    {
        id:6,
        img:img6,
        name: 'Sharat Chandra',
        role:'AI Engineer'
    },
    {
        id:7,
        img:img7,
        name: 'Nikhil',
        role:'Finance & Business'
    },
]

  return (
   <div className="">
    <h1 className="text-[#020202] font-lexend  text-center lg:py-12 lg:text-4xl">
    Meet Our Team
    </h1>
    <div className="grid grid-cols-3 gap-y-20 justify-center items-center m-auto">
        {

            teamData.map((item,index)=>(

          <div className={`col-span-${index+1&&item.id===7 ? '3' : '1'}  flex flex-col items-center m-auto`}>
        <img   key={index} src={item.img} alt="" className={`  m-auto  w-64`} />
        <h2 className="text-[#020202] lg:pt-5 lg:pb-1 font-lexend font-semibold text-center lg:text-xl">
          {item.name}
        </h2>
        <p className="font-mutka lg:text-lg text-[#020202] text-center">{item.role}</p>
        </div>
      
        ))
    }
        </div>
   </div>
  )
}

export default Section1