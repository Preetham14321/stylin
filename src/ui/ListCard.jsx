import React from 'react'
import ListBrandHero from '../assets/basic/listBrand.png'
const ListCard = ({listData}) => {
  return (
    <div className="grid grid-cols-2 gap-20  justify-center    ">
        {
listData.map((item,key)=>(

       
    <div className='relative bg-white rounded-lg drop-shadow-lg w-80 ' id={key}>
    {/* <div className=" border-[2px] rounded-xl  border-solid  animate-danceborder-blinking"> */}
    <div className="">

    <img src={ListBrandHero} alt="" className='w-80' />
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

export default ListCard