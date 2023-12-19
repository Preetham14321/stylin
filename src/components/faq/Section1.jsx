import React,{useState} from 'react'

const Section1 = () => {
    const [activeFaq, setActiveFaq] = useState(1)

    const faqData = [
        {
            id:1,
            title:'Lorem ipsum dolor sit amet consectetur adipisicing elit. ?',
            desc:' Nam, ratione vel. Error saepe cumque sapiente dolorum alias provident aliquam quis voluptate, omnis blanditiis eum sequi maxime accusantium commodi deserunt eveniet?.'
        },
        {
            id:2,
            title:'Lorem ipsum dolor sit amet consectetur adipisicing elit. ?',
            desc:' Nam, ratione vel. Error saepe cumque sapiente dolorum alias provident aliquam quis voluptate, omnis blanditiis eum sequi maxime accusantium commodi deserunt eveniet?.'
        },
        {
            id:3,
            title:'Lorem ipsum dolor sit amet consectetur adipisicing elit. ?',
            desc:' Nam, ratione vel. Error saepe cumque sapiente dolorum alias provident aliquam quis voluptate, omnis blanditiis eum sequi maxime accusantium commodi deserunt eveniet?.'
        },
        {
            id:4,
            title:'Lorem ipsum dolor sit amet consectetur adipisicing elit. ?',
            desc:' Nam, ratione vel. Error saepe cumque sapiente dolorum alias provident aliquam quis voluptate, omnis blanditiis eum sequi maxime accusantium commodi deserunt eveniet?.'
        },
        {
            id:5,
            title:'Lorem ipsum dolor sit amet consectetur adipisicing elit. ?',
            desc:' Nam, ratione vel. Error saepe cumque sapiente dolorum alias provident aliquam quis voluptate, omnis blanditiis eum sequi maxime accusantium commodi deserunt eveniet?.'
        },
        {
            id:6,
            title:'Lorem ipsum dolor sit amet consectetur adipisicing elit. ?',
            desc:' Nam, ratione vel. Error saepe cumque sapiente dolorum alias provident aliquam quis voluptate, omnis blanditiis eum sequi maxime accusantium commodi deserunt eveniet?.'
        },
        {
            id:7,
            title:'Lorem ipsum dolor sit amet consectetur adipisicing elit. ?',
            desc:' Nam, ratione vel. Error saepe cumque sapiente dolorum alias provident aliquam quis voluptate, omnis blanditiis eum sequi maxime accusantium commodi deserunt eveniet?.'
        },
        {
            id:8,
            title:'Lorem ipsum dolor sit amet consectetur adipisicing elit. ?',
            desc:' Nam, ratione vel. Error saepe cumque sapiente dolorum alias provident aliquam quis voluptate, omnis blanditiis eum sequi maxime accusantium commodi deserunt eveniet?.'
        },
    ]
  return (
    <div>
        <h1 className="w-full text-center font-lexend font-semibold text-[#020202] text-lexend lg:text-6xl lg:leading-[1.5]">Frequently Asked <br /> Questions</h1>
        
        <p className="text-center font-mutka lg:text-xl text-[#020202] lg:pt-5 lg:pb-28">
        Lorem ipsum dolor sit amet consectetur. Scelerisque ultricies dignissim sit <br /> donec nisl semper tristique a quis est ut est nec ac.
        </p>

        {faqData.map((item,key)=>(


        <div className="bg-[#F7F6F6] lg:px-6 lg:py-4 lg:mx-72 lg:mb-3 cursor-pointer" onClick={()=>{
            setActiveFaq(key+1)
        }}>

        <h1 className="lg:text-lg font-bold text-mutka">
            {item.title}
            </h1>

            <p className={`${activeFaq===key+1?'':'hidden'} text-[rgba(60,60,67,0.85)] lg:pt-3`}>
           {item.desc}
            </p>
        </div>
        ))}


        <div className="flex flex-col justify-center m-auto  items-center w-full lg:pt-14">
            <div className="">

            <h2 className="text-[#020202] font-lexend font-semibold lg:text-3xl  ">   Have any other questions?   </h2>
            <p className="text-[#4D4C4C] font-mukta      lg:text-lg pt-2 pb-4 ">Don’t hesitate to send us an email with your enquiry or <br /> statement at:</p>
      <div className="rounded-full bg-[#F4F3F3]  w-96 flex items-center ">

      <input type="text"  className='bg-[#F4F3F3] rounded-full p-4 focus:outline-none  '/>
    <div className="flex flex-1"></div>
     <p className="float-right mr-4 ">
        Copy
     </p>
      </div>
            </div>
        </div>

    </div>
  )
}

export default Section1