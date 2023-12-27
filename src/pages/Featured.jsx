import React from 'react'
import Navheader from '../components/Navheader'
import AchievementCard from '../ui/AchievementCard'
import Footer from '../components/Footer'
import { ContactusForm } from '../components/contactus/Section1'
import img1 from '../assets/basic/featured/img1.jpg'
import img2 from '../assets/basic/featured/img2.jpg'
import img3 from '../assets/basic/featured/img3.jpg'

const Featured = () => {

    const achievData =[
        {
            id:1,
            img:img1,
            title:'Top Performer of INIZIO: E CELL NITA 2022   ',
            des:"Secured Second Prize in the Pitching Competition INIZIO, conducted by E Cell, NIT Agartala in 2022. "
        },
        {
            id:2,
            img:img2,
            title : 'Under Top 21 in NEC 2023 by LEAD College ',
            des:"Secured top 21 among 200+ teams in an intensive 3-day pitching and prototyping competition by LEAD College of Management."
        },
        {
            id:2,
            img:img3,
            title : 'One of the Top 10 Finalists of Arambh by SBUP',
            des:"Secured top position among 1400+ participants in Arambh 2023, a pitching competition conducted by Sri Balaji University"
        },
    ]
 const formData =  [
    {
        id:1,
        label:'Your Name ',
        name:'name'


    },
    {
        id:2,
        label:'Contact email',
        name:'email'
    }, 
    {
        id:3,
        label : 'Mobile Number',
        name:'mobile'
    },
    {
        id:4,
        label:'State',
        name:'state'
    },
]

  return (
<main className="">
    <Navheader custClass='bg-white text-hero'/>
    <h2 className="text-center font-lexend font-semibold text-3xl pt-20">
        “These speak about STYLIN!”  

        </h2>

    <div className="m-auto w-  flex justify-center py-20">
      
        <AchievementCard achievData={achievData}/>
    </div>
    <div className="lg:py-20">
        <h2 className="text-center font-lexend font-semibold text-3xl pb-10">
        "Drop Us a Message"

        </h2>
    <ContactusForm formData={formData}/>
    </div>
    <Footer/>
</main>

    )
}

export default Featured