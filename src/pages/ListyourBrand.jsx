import React from 'react'
import Navheader from '../components/Navheader'
import ListCard from '../ui/ListCard'
import Footer from '../components/Footer'

const ListyourBrand = () => {
    const listData =[
        {
            id:1,
            img:'',
            title:'Digital Excellence',
            des:"Elevate your salon's digital presence effortlessly. Stylin brings your brand to the fingertips of beauty enthusiasts in your area."
        },
        {
            id:2,
            img:'',
            title : 'Virtual Showcase',
            des:"With Stylin, your salon isn't just a listing; it's a virtual showcase. Feature your services, talented stylists, and the unique atmosphere that sets your salon apart."
        },
        {
            id:2,
            img:'',
            title : 'Engage with Enthusiasts',
            des:"Connect directly with potential clients. Stylin opens a two-way street, allowing beauty enthusiasts to discover your salon and providing you with the platform to engage and captivate."
        },
        {
            id:2,
            img:'',
            title : 'Boost Your Business',
            des:" List your salon and attain a boost for your business. Increase visibility, attract new clients, and watch your salon thrive in the digital beauty landscape."
        },

    ]
  return (
    <main className="">
        <Navheader/>
        <div className="relative h-full pt-20 pb-20">

        {/* <div className="absolute top-72 h-full w-full -rotate-12  ">

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#273036" fill-opacity="1" d="M0,224L80,197.3C160,171,320,117,480,106.7C640,96,800,128,960,122.7C1120,117,1280,75,1360,53.3L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
        </div> */}

        <div className="lg:py-10">
            <h1 className="lg:text-[2rem] text-center font-lexend font-semibold text-[#020202]">
            List Your Brand with Stylin - Be the Spotlight of Beauty
            </h1>
            <p className="text-center lg:text-lg text-[#565757] font-mukta lg:py-3 ">
            Welcome to Stylin, where your salon becomes a star! Join our vibrant community <br />  of beauty enthusiasts by listing your brand today. Here's why Stylin is the perfect stage for your salon: 
            </p>
        </div>

        
        <div className="m-auto w-  flex justify-center">
            <ListCard listData={listData}/>
        </div>
      
        </div>
        <Footer/>
    </main>
  )
}

export default ListyourBrand