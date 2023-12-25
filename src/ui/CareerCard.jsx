import React from 'react'
const CareerCard = ({jobData}) => {
  return (
    <div className="grid  grid-cols-4 gap-20 lg:pt-20">
        {
            jobData.map((item,key)=>(

          
    <div id={key} className='w-72 rounded-lg bg-white hover:drop-shadow-2xl drop-shadow-lg py-7 px-3 space-y-2'>
        <item.logo className='text-5xl'/>
        <h1 className="text-xl font-mukta font-semibold">
       {item.title}
        </h1>
        <p className="text-[#474949] font-medium">{item.open}</p>
    </div>

        ))
        }
    </div>
  )
}

export default CareerCard