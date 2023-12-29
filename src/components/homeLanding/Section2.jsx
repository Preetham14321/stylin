import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Brand1 from '../../assets/brands/1.svg'
import Brand2 from '../../assets/brands/2.svg'
import Brand3 from '../../assets/brands/3.svg'
import Brand4 from '../../assets/brands/4.svg'
import Brand5 from '../../assets/brands/5.svg'
import Brand6 from '../../assets/brands/6.svg'
import Brand7 from '../../assets/brands/7.svg'
import Brand8 from '../../assets/brands/8.svg'
import Brand9 from '../../assets/brands/9.svg'

const Section2 = () => {
    const settings = {
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 1,
        speed:1000,
        autoplay: true,
        autoplaySpeed: 1200, // Set the duration for automatic scrolling in milliseconds
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 8,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 2,
            },
          },
        ],
      };
    
      const brands = [Brand1,Brand2,Brand3,Brand4,Brand5,Brand6,Brand7,Brand8,Brand9]
    
      return (
        <div  className='overflow-hidden lg:py-10 lg:h-52 bg-white z-  '>
      <Slider {...settings}>
          {brands.map((brand, index) => (
            <div key={index} className="">
              {/* Render your brand component here */}
              <img src={brand} alt='' className='w-24 lg:w-32  h-full' />
            </div>
          ))}
        </Slider>
        </div>
  )
}

export default Section2