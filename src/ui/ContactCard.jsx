import React from 'react'
const ContactCard = ({cardData}) => {
  return (
    <div className='flex justify-center items-center gap-52 w-full'>
      {cardData.map((item,key)=> ( 
      <div className="w-60   bg-white drop-shadow-xl space-y-2 p-5">

      <item.logo className='text-4xl  m-auto text-center'/>
        <h2 className="text-center font-lexend font-semibold lg:text-lg">
     {item.title}
        </h2>
        <p className="text-center font-medium text-[#615e5e]">
      {item.des}

        </p>
        <p className="text-center font-semibold font-lexend ">
            {item.add}
        </p>
        </div>
    
        ))}
    </div>
  )
}

export default ContactCard