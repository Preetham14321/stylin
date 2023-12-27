import React from 'react'
import ListBrandHero from '../assets/basic/listBrand.png'

const AchievementCard = ({achievData=[]}) => {
  return (
    <div className="grid grid-cols-3 gap-20   justify-center    ">
    {
achievData.map((item,key)=>(

   
<div className='relative hover:drop-shadow-2xl bg-white rounded-lg drop-shadow-lg w-80 ' id={key}>
{/* <div className=" border-[2px] rounded-xl  border-solid  animate-danceborder-blinking"> */}
<div className="">

<img src={item.img} alt="" className='w-80 h-60' />
<div className="p-3 space-y-2">
  <h3 className="tont-lexend text-lg font-semibold text-[#020202]">
    {item.title}
  </h3>
  <p className="text-base font-mukta">
    {item.des}
  </p>
</div>
</div>
</div>
))

 }
 </div>
  )
}

export default AchievementCard