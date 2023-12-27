import React,{useState,useEffect} from 'react'
import { ContactusForm } from '../contactus/Section1'
import { GoDotFill } from "react-icons/go";
const Section1 = ({activeTab}) => {
    const [activeTabs, setActiveTabs] = activeTab
    const [subSecCont, setSubSecCont] = useState([])


    const salonformData = [
        {
            id:1,
            label:'Full Name ',
            name:'name'


        },
        {
            id:2,
            label : 'Whatsapp Number  ',
            name:'contactno'
        },
        {
            id:3,
            label:'Salon Name ',
            name:'salonname'
        }, 
        {
            id:4,
            label:'Salon Type ',
            isDrop:true,
            name:'salonname',
            options:[' Male', 'Female', 'Unisex']

        }, 
    
        {
            id:5,
            label:'Email  ',
            name:'email',
            isReq:false
        },
        {
            id:6,
            label:'Location Link/Address',
            name:'location'
        },
       
        {
            id:7,
            label:'Years in Operation',
            name:'yearsinope'
        },
        {
            id:8,
            label:'Social Media/Website Link  ',
            name:'socialmedia',
            isReq:false

        },
        
     
      
    ]
    const brandformData = [
        {
            id:1,
            label:'Full Name ',
            name:'name',


        },
        {
            id:2,
            label : 'Whatsapp Number    ',
            name:'contactno',
            
        },
        {
            id:3,
            label:'Brand Name ',
            name:'brandname'
        }, 
        {
            id:4,
            label:'Brand Type ',
            isDrop:true,
            name:'brandtype',

        }, 
    
        {
            id:5,
            label:'Email  ',
            name:'email',
        },
        {
            id:6,
            label:'Place',
            name:'place'
        },
       
        {
            id:7,
            label:'Years in Operation',
            name:'yearsinope'
        },
        {
            id:8,
            label:'Social Media/Website Link  ',
            name:'socialmedia',

        },
        
     
      
    ]

    const salonTitle = 'Schedule Your Exclusive Salon Experience'
    const brandTitle ='Transform your brand’s journey with us'



    useEffect(()=>{
        const salonSubDat = [
            " A personalized, live walkthrough and demo tailored to your salon's unique identity",
            "Witness firsthand how STYLIN seamlessly integrates AI and AR to revolutionize the beauty experience.",
            "Uncover bespoke solutions crafted to enhance your salon's performance.",
            "Engage in an interactive session, addressing your specific needs and challenges"
        ]
        const brandSubDat = [
            "Witness our demo walkthrough with AR Virtual try on & Short Video Marketing",
            "Explore tailored solutions designed to elevate your brand's performance in the digital realm",
            "Engage in an interactive session to discuss how influencers can collaborate with beauty brands and contribute to each other’s growth.",
            "Explore how STYLIN can amplify your brand presence and create immersive experiences for your audience."
        ]
        setSubSecCont(activeTabs===1?salonSubDat:brandSubDat)
    },[activeTabs ])


  return (
    <div className='flex gap-10 w-full px-20'>
<div className="">
    <h1 className="w-[110%] lg:text-5xl font-lexend font-semibold lg:leading-[1.5]">
    {activeTabs==1?salonTitle:brandTitle}
    </h1>
    <h5 className="text-xl py-3">
    {activeTabs==1?'Let’s connect for:':'We’ll Connect for:'} 
    </h5>
    {
        subSecCont.map((item,key)=>(

    <p className="flex items-center py-2 gap-3 ">
        <GoDotFill />
        <span className="lg:text-xl">
        
       {item}
        </span>
    </p>
        ))
    }

</div>
<div className="w-full">

<ContactusForm custClass='w-[85%]' formData={activeTabs==1?salonformData:brandformData} dropValue={activeTabs==1?[' Male', 'Female', 'Unisex']:['Salon', 'Inventory',' Beauty Products', 'Salon Products', 'Others']}/>

</div>
    </div>
  )
}

export default Section1