import React from 'react'
import Navheader from '../components/Navheader'
import ListCard from '../ui/ListCard'
import Footer from '../components/Footer'

const Collab = () => {
    const listData =[
        {
            id:1,
            img:'',
            title:'Digital Showcase',
            des:" Stylin is not just a platform; it's a digital showcase for your beauty products. Leverage our vibrant community to showcase your brand in the spotlight it deserves."
        },
        {
            id:2,
            img:'',
            title : 'Salon Partnerships',
            des:" Connect directly with salon owners. Stylin provides a unique opportunity for your brand to form partnerships with salons, making your products readily available to beauty professionals and enthusiasts alike."
        },
        {
            id:3,
            img:'',
            title : 'Marketplace Excellence',
            des:" Stylin is more than a marketplace; it's a beauty ecosystem. Join hands with us to expand your market reach using beauty content, attract a diverse audience using influencers, and create a beauty buzz around your brand."
        },
        {
            id:4,
            img:'',
            title : 'Virtual Experience',
            des:"With Stylin, your brand is not just a product; it's an experience. Our platform allows users to virtually try on your products, providing a unique and engaging way to interact with your brand."
        },

    ]
  return (
    <main className="">
        <Navheader/>
        <div className="relative h-full pt-20 pb-20">

        {/* <div className="absolute top-72 h-full w-full -rotate-12  ">

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#273036" fill-opacity="1" d="M0,224L80,197.3C160,171,320,117,480,106.7C640,96,800,128,960,122.7C1120,117,1280,75,1360,53.3L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
        </div> */}

        <div className="lg:py-10 ">
            <h1 className="lg:text-[2rem] text-center font-lexend font-semibold text-[#020202]">
            Collaborate with Us - Your Beauty Brand's Digital Oasis
            </h1>
            <p className="text-center lg:text-lg text-[#565757] font-mukta lg:py-3 ">
            Hello Beauty Brands! Dive into the future of beauty commerce <br /> by collaborating with Stylin. Here's why it's the perfect partnership for your brand:
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

export default Collab