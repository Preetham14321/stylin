import React from 'react'

const Section3 = () => {


    const valData = [
        {
            id:1,
            title:'Convenience',
            desc:'We believe beauty should be effortlessly accessible. Our platform marries convenience with affordability, ensuring that every user can indulge in a personalized beauty experience without breaking the bank.'
        },
        {
        id:2,
        title:'Innovation',
        desc:'Innovation is at the heart of STYLIN. From cutting-edge AI recommendations to AR virtual makeovers, we continuously push boundaries to provide our users with the latest, most innovative tools for self-expression.'
        },
        {
            id:3,
            title:'Community',
            desc:'Our platform thrives on the strength of its community. We are more than a platform; we are a diverse, inclusive space where beauty enthusiasts, influencers, and professionals come together to celebrate individuality and shared passion.'
        },
        {
            id:4,
            title:'Sustainability',
            desc:'Sustainability is woven into the fabric of STYLIN. We are committed to promoting eco-friendly beauty choices, supporting brands with ethical practices, and contributing to a beauty industry that cares for both individuals and the planet.'
        }
        
    ]
  return (
    <div className='lg:flex  '>
        <h1 className="text-[#020202] font-semibold lg:text-5xl font-lexend">Values</h1>

        <div className=" grid lg:grid-cols-2 lg:gap-10 lg:gap-y-24 lg:pl-44">
            {valData.map((item,key)=>(
                <div className="">
                    <h3 className="text-[#020202] font-semibold lg:text-xl font-lexend" key={key}>
                        {item.title}
                    </h3>
                    <p className="text-[#020202] font-mutka lg:pt-3">
                        {item.desc}
                    </p>
                </div>
            ))}

        </div>
    </div>
  )
}

export default Section3