import React,{useState} from 'react'

const Section1 = ({custClass}) => {
    const [activeFaq, setActiveFaq] = useState(1)

    const faqData = [
        {
            id:1,
            title:'What is Stylin, and how can I benefit from it',
            desc:"Stylin is a revolutionary platform that bridges the gap between beauty salon professionals and customers leveraging technology and aiming for high convenience. If you are a salon professional, It’s a platform that highly elevates your salon’s digital presence and if you are a customer, it’s a one-stop personalised beauty curated platform for all your beauty needs. "
        },
        {
            id:2,
            title:' How can I access the beta version of the Stylin app?',
            desc:"Simply provide your details, and we'll send you exclusive access to our beta app, giving you a sneak peek into the future of beauty experiences."
        },
        {
            id:3,
            title:'Can I make salon bookings through Stylin?',
            desc:"Currently, Stylin is an informative platform. We're working on the app with exciting features, including bookings. Stay tuned for updates! Download the beta version and provide valuable feedback. "
        },
        {
            id:4,
            title:' Is there a cost for listing my salon on Stylin?',
            desc:"No, listing your salon on Stylin is currently free. We believe in empowering salons of all sizes with digital visibility."
        },
        {
            id:5,
            title:'What kind of support does Stylin provide to salon partners?',
            desc:"Stylin offers support throughout the onboarding process and beyond. We're here to answer questions, provide guidance, and ensure your salon thrives on our platform."
        },
        {
            id:6,
            title:'Is my information secure when I sign up for the beta version?',
            desc:" Absolutely! We take privacy seriously. Your information is securely stored and will only be used for communication-related to the Stylin app. "
        },
        
    ]
  return (
    <div>
        <div className={`${custClass}`}>

        <h1 className="w-full text-center font-lexend font-semibold text-[#020202] text-lexend lg:text-6xl lg:leading-[1.5]">Frequently Asked <br /> Questions</h1>
        
        <p className="text-center font-mutka lg:text-xl text-[#020202] lg:pt-5 lg:pb-28">
        Lorem ipsum dolor sit amet consectetur. Scelerisque ultricies dignissim sit <br /> donec nisl semper tristique a quis est ut est nec ac.
        </p>
        </div>

        {faqData.map((item,key)=>(


        <div className="bg-[#F7F6F6] rounded-lg lg:px-6 lg:py-4 lg:mx-72 lg:mb-3 cursor-pointer" onClick={()=>{
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


        <div className={`${custClass} flex flex-col justify-center m-auto  items-center w-full lg:pt-14`}>
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