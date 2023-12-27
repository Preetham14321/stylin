import React from 'react'
import Navheader from '../components/Navheader'
import ListCard from '../ui/ListCard'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import img1 from '../assets/basic/brand/img1.1.png'
import img2 from '../assets/basic/brand/img2.2.png'
import img3 from '../assets/basic/brand/img3.3.png'
import img4 from '../assets/basic/brand/img4.4.png'
const Collab = () => {
    const listData =[
        {
            id:1,
            img:img1,
            title:'Digital Showcase',
            des:" Stylin is not just a platform; it's a digital showcase for your beauty products. Leverage our vibrant community to showcase your brand in the spotlight it deserves."
        },
        {
            id:2,
            img:img2,
            title : 'Salon Partnerships',
            des:" Connect directly with salon owners. Stylin provides a unique opportunity for your brand to form partnerships with salons, making your products readily available to beauty professionals and enthusiasts alike."
        },
        {
            id:3,
            img:img3,
            title : 'Marketplace Excellence',
            des:" Stylin is more than a marketplace; it's a beauty ecosystem. Join hands with us to expand your market reach using beauty content, attract a diverse audience using influencers, and create a beauty buzz around your brand."
        },
        {
            id:4,
            img:img4,
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
        <div className="flex flex-col items-center space-y-4 py-20 ">
        <h4 className="font-mukta  lg:text-2xl text-[#606063] font-semibold text-center">
        Ready to amplify your brand's digital presence? Collaborate with Stylin and let your beauty products <br /> shine in the digital beauty revolution!


        </h4>
        <Link to='/business'>

        <button className="  gradButton text-white lg:px-5 lg:py-1.5 font-semibold rounded-md ">

        Collab with Us
</button>
        </Link>
      </div>
        </div>
        <Footer/>
    </main>
  )
}

export default Collab