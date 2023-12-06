import React from 'react'
import { Link } from 'react-router-dom'

const Navheader = () => {

    const menuData = [
        {
            id:1,
            name:'Home',
            link:'/home'
        } , 
        {
            id:2,
            name:'About',
            link:'/about'
        },
        {
            id:3,
            name:'Team',
            link:'/team',
            
        },
        {

            id:4,
            name:'Contact us',
            link:'/contactus'
        }
    ]

  return (
<header className="w-full bg-hero lg:px-28 lg:py-7 flex items-center justify-between"  >

<h1 className="font-michroma lg:text-4xl tracking-wider  text-white" >STYLIN</h1>

<div className="lg:flex lg:items-center lg:gap-7">
{menuData.map((item,key)=>(
        <ul className='text-white lg:text-lg'>
        <Link to={item.link}>
            <li className='' key={item.id}>{item.name}</li>
        </Link>
        </ul>
))}
</div>

<button className="gradButton text-white lg:px-5 lg:py-1.5 font-semibold rounded-md ">
Book Free Demo
</button>

</header>
  )
}



export default Navheader