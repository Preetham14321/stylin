import React from 'react'

const Section3 = () => {

  const secData = [
    {
      id:1,
      title:'Life at Stylin',
      des:"At STYLIN, life is more than a job; it's an exploration of creativity and collaboration. Joining us means immersing yourself in a culture where your ideas matter, diversity is celebrated, and every day brings new opportunities to learn, grow, and contribute to shaping the beauty industry of tomorrow. "
    },
    {
      id:2,
      title:'Our Values & Expectations',
      des:"STYLIN stands on pillars of integrity, inclusivity, and authenticity. We are committed to fostering a beauty community built on trust, respect, and shared passion for redefining personal style. We expect every team member to adhere to these values and share the same commitment towards reshaping the digital era of salons and beauty. "
    },
  ]
  return (
    <>
    {
      secData.map((item,key)=>(

    
    <div className='text-center pt-40' id={key}>
        <h1 className="font-lexend text-4xl leading-[1.2] font-bold">
        {item.title}
    </h1>
    <p className="text-xl leading-[1.5] font-mukta w-[55%]  text-center m-auto pt-5  text-[#575759">
        
    {item.des}


    </p>
    </div>
      )) 
    }
    </>

  )
}

export default Section3