import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { IoIosMenu,IoMdClose  } from "react-icons/io";
const Navheader = ({custClass='bg-hero text-white'}) => {
const [navOpen, setNavOpen] = useState(false)
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

const toggleMobileMenu = () => {
  setIsMobileMenuOpen(!isMobileMenuOpen);
};

    const menuData = [
        {
            id:1,
            name:'Home',
            link:'/'
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
        },
        {

            id:5,
            name:'Blogs',
            link:'/blogs'
        }
    ]

  return (
    <header className={`w-full ${custClass} fixed lg:relative overflow-x-hidden shadow-lg px-7 py-2 z-50 lg:px-28 lg:py-7 flex items-center justify-between`}>

      <Link to='/'>
        <h1 className="font-michroma z-52 lg:text-4xl tracking-wider">STYLIN</h1>
      </Link>

      {/* Nav For desktop */}
      <div className="hidden lg:flex lg:items-center lg:gap-7">
        {menuData.map((item, key) => (
          <ul className='lg:text-lg' key={item.id}>
            <Link to={item.link}>
              <li>{item.name}</li>
            </Link>
          </ul>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden  flex justify-end items-end w-full">
        <button
          className="text-white px-3 py-2 font-semibold rounded-md"
          onClick={toggleMobileMenu}
        >
            {isMobileMenuOpen? < IoMdClose className="text-2xl" />: <IoIosMenu className="text-2xl" /> }
        </button>
      </div>
      <div className="z-20 ">

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={`lg:hidden fixed inset-0 top-10 bg-hero ${isMobileMenuOpen?"mobile-menuOp":"mobile-menuCl"}  bg-opacity-90 z-10`}>
        
          <div className="flex flex-col items-end gap-5 p-10  ">
            {menuData.map((item, key) => (
              <Link
                to={item.link}
                key={item.id}
                className="text-white text-2xl"
                onClick={toggleMobileMenu}
              >
                {item.name}
              </Link>
            ))}
            <button className=" lg:hidden  gradButton text-white px-5 py-1.5 text-xl font-semibold rounded-md ">
Book Free Demo
</button>
          </div>
        </div>
      )}
</div>
<button className=" hidden lg:flex gradButton text-white lg:px-5 lg:py-1.5 font-semibold rounded-md ">
Book Free Demo
</button>
    </header>
  )
}



export default Navheader